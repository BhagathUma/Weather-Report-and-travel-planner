import requests

from app.config.settings import settings


class OpenMeteoWeatherService:

    @staticmethod
    def get_forecast(
        latitude: float,
        longitude: float,
        start_date: str,
        end_date: str,
    ):
        try:

            response = requests.get(
                f"{settings.OPEN_METEO_BASE_URL}/v1/forecast",
                params={
                    "latitude": latitude,
                    "longitude": longitude,

                    "start_date": start_date,
                    "end_date": end_date,

                    "timezone": "auto",

                    "daily": [
                        "temperature_2m_max",
                        "temperature_2m_min",
                        "precipitation_sum",
                        "rain_sum",
                        "wind_speed_10m_max"
                    ],

                    "hourly": [
                        "temperature_2m",
                        "relative_humidity_2m",
                        "precipitation",
                        "wind_speed_10m"
                    ]
                },
                timeout=20
            )

            response.raise_for_status()

            return response.json()

        except Exception as e:
            print("Weather Error:", e)
            return None