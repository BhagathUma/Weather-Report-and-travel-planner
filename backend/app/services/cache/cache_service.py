from app.repositories.weather_repository import (
    WeatherRepository
)

from app.services.cache.cache_validator import (
    CacheValidator
)


class CacheService:

    @staticmethod
    async def get_cached_result(
        cache_key: str
    ):

        document = (
            await WeatherRepository
            .get_by_cache_key(
                cache_key
            )
        )

        if not document:
            return None

        created_at = (
            document.get(
                "created_at"
            )
        )

        if not created_at:
            return None

        if not CacheValidator.is_valid(
            created_at
        ):
            return None

        return document