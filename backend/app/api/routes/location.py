from fastapi import APIRouter
from fastapi import Query

from app.services.geocoding.open_meteo_geocoding import (
    OpenMeteoGeocodingService
)

router = APIRouter()


@router.get("/search")
async def search_location(
    q: str = Query(...)
):
    if len(q.strip()) < 2:
        return []

    locations = (
        OpenMeteoGeocodingService
        .search_locations(q)
    )

    return locations