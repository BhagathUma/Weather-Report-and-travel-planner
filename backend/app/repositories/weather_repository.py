from datetime import datetime
from bson import ObjectId
from app.database.collections import (
    Collections
)
from app.database.collections import (
    Collections
)
from bson import ObjectId


class WeatherRepository:

    @staticmethod
    async def create_analysis(
        data: dict
    ):

        data["created_at"] = (
            datetime.utcnow()
        )

        result = (
            await Collections
            .weather_requests()
            .insert_one(data)
        )

        return str(
            result.inserted_id
        )

    @staticmethod
    async def get_analysis(
        analysis_id: str
    ):

        return (
            await Collections
            .weather_requests()
            .find_one({
                "_id": ObjectId(
                    analysis_id
                )
            })
        )
    

    @staticmethod
    async def get_by_cache_key(
        cache_key: str
    ):

        return (
            await Collections
            .weather_requests()
            .find_one(
                {
                    "cache_key":
                    cache_key
                },
                sort=[
                    (
                        "created_at",
                        -1
                    )
                ]
            )
        )
    

    

    @staticmethod
    async def create_analysis(
        document: dict
    ):

        result = (
            await Collections
            .weather_requests()
            .insert_one(
                document
            )
        )

        return str(
            result.inserted_id
        )
    


    @staticmethod
    async def get_analysis_by_id(
        analysis_id: str
    ):

        return await (
            Collections
            .weather_requests()
            .find_one(
                {
                    "_id":
                    ObjectId(
                        analysis_id
                    )
                }
            )
        )
    

    @staticmethod
    async def delete_analysis(
        analysis_id: str
    ):

        result = await (
            Collections
            .weather_requests()
            .delete_one(
                {
                    "_id":
                    ObjectId(
                        analysis_id
                    )
                }
            )
        )

        return (
            result.deleted_count
            > 0
        )
    

    @staticmethod
    async def get_history(
        page: int = 1,
        limit: int = 10
    ):

        skip = (
            page - 1
        ) * limit

        cursor = (
            Collections
            .weather_requests()
            .find({})
            .sort(
                "created_at",
                -1
            )
            .skip(skip)
            .limit(limit)
        )

        documents = []

        async for item in cursor:
            documents.append(item)

        return documents
    

    @staticmethod
    async def count_documents():

        return await (
            Collections
            .weather_requests()
            .count_documents({})
        )