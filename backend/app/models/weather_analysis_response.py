from pydantic import BaseModel
from typing import Any

from app.models.ai_response import AIResponse


class WeatherAnalysisResponse(BaseModel):
    success: bool
    location: str
    forecast: Any
    ai_insights: AIResponse