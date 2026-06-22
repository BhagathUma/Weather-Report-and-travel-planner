from app.database.mongodb import (
    MongoDB
)


class Collections:

    @staticmethod
    def weather_requests():
        return (
            MongoDB.database[
                "weather_requests"
            ]
        )