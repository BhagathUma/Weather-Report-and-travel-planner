from pydantic_settings import BaseSettings

@property
def has_gemini(self):
    return bool(
        self.GEMINI_API_KEY
    )

DATABASE_NAME: str = "atmos_ai"

class Settings(BaseSettings):

    GEMINI_API_KEY: str = ""

    MONGODB_URI: str = ""

    DATABASE_NAME: str = "atmos_ai"

    OPEN_METEO_BASE_URL: str = (
        "https://api.open-meteo.com"
    )

    OPEN_METEO_GEOCODING_URL: str = (
        "https://geocoding-api.open-meteo.com"
    )

    CACHE_EXPIRY_HOURS: int = 12

    ENVIRONMENT: str = "development"

    class Config:
        env_file = ".env"


settings = Settings()