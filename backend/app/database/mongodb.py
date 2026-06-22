from motor.motor_asyncio import (
    AsyncIOMotorClient
)

from app.config.settings import (
    settings
)


class MongoDB:

    client = None

    database = None

    @classmethod
    async def connect(cls):

        cls.client = (
            AsyncIOMotorClient(
                settings.MONGODB_URI
            )
        )

        cls.database = (
            cls.client[
                settings.DATABASE_NAME
            ]
        )

        await cls.database[
            "weather_requests"
        ].create_index(
            "cache_key"
        )

        await cls.database[
            "weather_requests"
        ].create_index(
            "created_at"
        )

        await cls.database[
            "weather_requests"
        ].create_index(
            [
                ("created_at", -1)
            ]
        )

        await cls.database[
            "weather_requests"
        ].create_index(
            [
                ("location", 1)
            ]
        )

        await cls.database[
            "weather_requests"
        ].create_index(
            [
                ("purpose", 1)
            ]
        )

        print(
            "MongoDB Connected"
        )

    @classmethod
    async def disconnect(cls):

        if cls.client:
            cls.client.close()

            print(
                "MongoDB Disconnected"
            )