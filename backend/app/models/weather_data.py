from pydantic import BaseModel
from typing import List


class DailyForecast(BaseModel):
    time: List[str]

    temperature_2m_max: List[float]
    temperature_2m_min: List[float]

    precipitation_sum: List[float]
    rain_sum: List[float]

    wind_speed_10m_max: List[float]


class HourlyForecast(BaseModel):
    time: List[str]

    temperature_2m: List[float]

    relative_humidity_2m: List[int]

    precipitation: List[float]

    wind_speed_10m: List[float]