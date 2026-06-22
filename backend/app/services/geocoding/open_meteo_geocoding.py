import requests

from app.config.settings import settings


class OpenMeteoGeocodingService:

    @staticmethod
    def search_locations(query: str):
        try:
            response = requests.get(
                f"{settings.OPEN_METEO_GEOCODING_URL}/v1/search",
                params={
                    "name": query,
                    "count": 10,
                    "language": "en",
                    "format": "json"
                },
                timeout=10
            )

            response.raise_for_status()

            data = response.json()

            results = data.get("results", [])

            normalized = []

            for item in results:
                normalized.append({
                    "id": item.get("id"),
                    "name": item.get("name"),
                    "country": item.get("country"),
                    "region": item.get("admin1"),
                    "latitude": item.get("latitude"),
                    "longitude": item.get("longitude")
                })

            return normalized

        except Exception as e:
            print("Geocoding Error:", e)
            return []