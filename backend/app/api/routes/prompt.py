from fastapi import APIRouter

from app.prompts.weather_prompt import (
    WeatherPromptBuilder
)

router = APIRouter()


@router.get("/test")
async def test_prompt():

    sample_weather = {
        "daily": {
            "temperature_2m_max":
                [33, 34, 35],

            "precipitation_sum":
                [0, 2, 10],

            "wind_speed_10m_max":
                [12, 18, 24]
        }
    }

    prompt = (
        WeatherPromptBuilder.build(
            location="Chennai",
            purpose="travel",
            weather_data=sample_weather
        )
    )

    return {
        "prompt": prompt
    }