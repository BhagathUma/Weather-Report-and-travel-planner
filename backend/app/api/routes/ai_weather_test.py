from fastapi import APIRouter

from app.services.ai.weather_ai_service import (
    WeatherAIService
)

router = APIRouter()


@router.get("/weather-test")
async def weather_test():

    sample_weather = {
        "daily": {
            "temperature_2m_max":
                [33, 35, 37],

            "precipitation_sum":
                [0, 0, 10],

            "wind_speed_10m_max":
                [10, 12, 20]
        }
    }

    ai = WeatherAIService()

    response = (
        ai.analyze_weather(
            location="Chennai",
            purpose="travel",
            weather_data=sample_weather
        )
    )

    return response