from app.prompts.weather_prompt import (
    WeatherPromptBuilder
)
from app.services.ai.quality_validator import (
    AIQualityValidator
)
from app.services.ai.gemini_service import (
    GeminiService
)

from app.services.ai.response_parser import (
    ResponseParser
)

from app.services.ai.fallback_response import (
    get_fallback_response
)


class WeatherAIService:

    def __init__(self):
        self.gemini = GeminiService()

    def analyze_weather(
        self,
        location: str,
        purpose: str,
        weather_data: dict
    ):

        try:

            prompt = (
                WeatherPromptBuilder.build(
                    location=location,
                    purpose=purpose,
                    weather_data=weather_data
                )
            )

            response = (
                self.gemini.generate(
                    prompt
                )
            )

            if not response:
                return (
                    get_fallback_response()
                )

            parsed = (
                ResponseParser
                .parse_response(
                    response
                )
            )

            validated = (
                AIQualityValidator
                .validate(parsed)
            )

            return validated

        except Exception as e:

            print(
                f"AI Service Error: {str(e)}"
            )

            return (
                get_fallback_response()
            )