from datetime import datetime, timedelta

from app.config.settings import settings


class CacheValidator:

    @staticmethod
    def is_valid(
        created_at: datetime
    ):

        expiry_time = (
            created_at +
            timedelta(
                hours=settings.CACHE_EXPIRY_HOURS
            )
        )

        return (
            datetime.utcnow()
            < expiry_time
        )