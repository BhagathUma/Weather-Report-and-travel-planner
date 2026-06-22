from app.services.cache import analysis_document_builder
from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.models.weather_request import (
    WeatherRequest
)

from app.validators.weather_validator import (
    validate_weather_request
)
from app.services.ai.weather_ai_service import (
    WeatherAIService
)

from app.services.weather.open_meteo_weather import (
    OpenMeteoWeatherService
)

from app.services.weather.weather_normalizer import (
    WeatherNormalizer
)

from app.services.cache.cache_key_builder import (
    CacheKeyBuilder
)

from app.services.cache.cache_service import (
    CacheService
)

from app.services.cache.analysis_document_builder import (
    AnalysisDocumentBuilder
)

from app.services.cache.cache_response_formatter import (
    CacheResponseFormatter
)

from app.services.cache.generated_response_formatter import (
    GeneratedResponseFormatter
)

from app.repositories.weather_repository import (
    WeatherRepository
)

router = APIRouter()


@router.post("/analyze")
async def analyze_weather(
    request: WeatherRequest
):

    valid, error = (
        validate_weather_request(
            request
        )
    )

    if not valid:
        return JSONResponse(
            status_code=400,
            content={
                "success": False,
                "message": error
            }
        )
    cache_key = (
    CacheKeyBuilder.build(
        location=request.location,

        start_date=request.startDate,

        end_date=request.endDate,

        purpose=request.purpose,
    )
)

    cached_document = (
        await CacheService
        .get_cached_result(
            cache_key
        )
    )

    if cached_document:

        return (
            CacheResponseFormatter
            .format(
                cached_document
            )
        )
    
    weather_data = (
        OpenMeteoWeatherService
        .get_forecast(
            latitude=request.latitude,
            longitude=request.longitude,
            start_date=request.startDate,
            end_date=request.endDate
        )
    )

    if not weather_data:
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message":
                "Failed to fetch weather"
            }
        )

    normalized = (
    WeatherNormalizer
    .normalize(weather_data)
    )

    ai_service = (
        WeatherAIService()
    )

    ai_insights = (
        ai_service.analyze_weather(
            location=request.location,
            purpose=request.purpose,
            weather_data=normalized
        )
    )

    document = (
    AnalysisDocumentBuilder
    .build(
        cache_key=cache_key,

        location=request.location,

        start_date=request.startDate,

        end_date=request.endDate,

        purpose=request.purpose,

        forecast=normalized,

        ai_insights=ai_insights,
    )
)

    analysis_id = (
        await WeatherRepository
        .create_analysis(
            document
        )
    )

    return (
        GeneratedResponseFormatter
        .format(
            analysis_id=
                analysis_id,

            location=
                request.location,

            forecast=
                normalized,

            ai_insights=
                ai_insights,
        )
    )