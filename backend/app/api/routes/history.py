from fastapi import APIRouter
from fastapi import Query

from app.repositories.weather_repository import (
    WeatherRepository
)

from app.utils.mongo_serializer import (
    serialize_document
)

router = APIRouter()

@router.get("/history")
async def get_history(
    page: int = Query(
        1,
        ge=1
    ),
    limit: int = Query(
        10,
        ge=1,
        le=50
    )
):

    history = (
        await WeatherRepository
        .get_history(
            page=page,
            limit=limit
        )
    )

    total = (
        await WeatherRepository
        .count_documents()
    )

    return {
        "success": True,

        "page": page,

        "limit": limit,

        "total": total,

        "results": [
            serialize_document(
                item
            )
            for item in history
        ]
    }


@router.get("/{analysis_id}")
async def get_analysis(
    analysis_id: str
):

    document = (
        await WeatherRepository
        .get_analysis_by_id(
            analysis_id
        )
    )

    if not document:

        return {
            "success": False,
            "message":
            "Analysis not found"
        }

    return {
        "success": True,
        "analysis":
        serialize_document(
            document
        )
    }



@router.delete(
    "/{analysis_id}"
)
async def delete_analysis(
    analysis_id: str
):

    deleted = (
        await WeatherRepository
        .delete_analysis(
            analysis_id
        )
    )

    if not deleted:

        return {
            "success": False,
            "message":
            "Analysis not found"
        }

    return {
        "success": True,
        "message":
        "Analysis deleted"
    }