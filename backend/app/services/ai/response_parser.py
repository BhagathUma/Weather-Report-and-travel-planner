import json

from app.models.ai_response import (
    AIResponse
)

from app.services.ai.fallback_response import (
    get_fallback_response
)


class ResponseParser:

    @staticmethod
    def parse_response(
        text: str
    ):

        try:

            parsed = json.loads(text)

            validated = (
                AIResponse(
                    **parsed
                )
            )

            return (
                validated
                .model_dump()
            )

        except Exception:

            return (
                get_fallback_response()
            )