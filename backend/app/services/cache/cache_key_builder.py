import hashlib


class CacheKeyBuilder:

    @staticmethod
    def build(
        location: str,
        start_date: str,
        end_date: str,
        purpose: str,
    ):

        raw_key = (
            f"{location.lower()}_"
            f"{start_date}_"
            f"{end_date}_"
            f"{purpose.lower()}"
        )

        return hashlib.md5(
            raw_key.encode()
        ).hexdigest()