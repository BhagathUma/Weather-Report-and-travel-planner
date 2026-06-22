from pydantic import BaseModel
from typing import Optional


class LocationResponse(BaseModel):
    id: int
    name: str
    country: str
    region: Optional[str] = None
    latitude: float
    longitude: float