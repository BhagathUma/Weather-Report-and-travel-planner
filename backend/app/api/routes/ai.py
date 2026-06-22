from fastapi import APIRouter

from app.services.ai.gemini_service import (
    GeminiService
)

from app.services.ai.response_parser import (
    ResponseParser
)

router = APIRouter()

gemini = GeminiService()


@router.get("/test")
async def test_ai():

    prompt = """
Return JSON.

{
  "summary":"Hot and dry",
  "overall_weather":"Mostly sunny",
  "purpose_specific_advice":["Travel early"],
  "clothing_recommendations":["Cap"],
  "warnings":["Heat"],
  "best_days":["Monday"],
  "worst_days":["Wednesday"]
}
"""

    response = gemini.generate(
        prompt
    )

    if not response:
        return {
            "success": False
        }

    parsed = (
        ResponseParser
        .parse_response(
            response
        )
    )

    return {
        "success": True,
        "response": parsed
    }