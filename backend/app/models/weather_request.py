from pydantic import BaseModel


class Coordinates(BaseModel):
    latitude: float
    longitude: float


class WeatherRequest(BaseModel):
    location: str

    latitude: float
    longitude: float

    startDate: str
    endDate: str

    purpose: str