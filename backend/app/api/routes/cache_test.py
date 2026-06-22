from datetime import datetime

from fastapi import APIRouter

from app.services.cache.cache_service import (
    CacheService
)

from app.services.cache.cache_key_builder import (
    CacheKeyBuilder
)

from app.repositories.weather_repository import (
    WeatherRepository
)

router = APIRouter()


@router.get("/cache-insert")
async def cache_insert():

    cache_key = (
        CacheKeyBuilder.build(
            location="Chennai",
            start_date="2026-06-20",
            end_date="2026-06-25",
            purpose="travel"
        )
    )

    await (
        WeatherRepository
        .save_analysis(
            {
                "cache_key":
                cache_key,

                "location":
                "Chennai",

                "created_at":
                datetime.utcnow(),

                "test": True
            }
        )
    )

    return {
        "cache_key":
        cache_key
    }


@router.get("/cache-check")
async def cache_check():

    cache_key = (
        CacheKeyBuilder.build(
            location="Chennai",
            start_date="2026-06-20",
            end_date="2026-06-25",
            purpose="travel"
        )
    )

    result = (
        await CacheService
        .get_cached_result(
            cache_key
        )
    )

    return {
        "cache_found":
        bool(result)
    }