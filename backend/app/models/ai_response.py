from pydantic import BaseModel
from typing import List


class AIResponse(BaseModel):

    summary: str

    overall_weather: str

    purpose_specific_advice: List[str]

    clothing_recommendations: List[str]

    warnings: List[str]

    best_days: List[str]

    worst_days: List[str]

    generated_by: str = "gemini"

    confidence_score: int = 100