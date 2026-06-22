from pydantic import BaseModel


class CacheMetadata(BaseModel):
    cache_hit: bool
    cache_key: str