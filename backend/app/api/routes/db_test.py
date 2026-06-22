from fastapi import APIRouter

from app.repositories.weather_repository import (
    WeatherRepository
)

router = APIRouter()


@router.get("/insert")
async def insert_test():

    analysis_id = (
        await WeatherRepository
        .create_analysis({
            "location":
            "Chennai",

            "purpose":
            "travel",

            "test":
            True
        })
    )

    return {
        "inserted_id":
        analysis_id
    }