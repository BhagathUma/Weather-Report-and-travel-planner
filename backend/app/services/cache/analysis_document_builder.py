from datetime import datetime


class AnalysisDocumentBuilder:

    @staticmethod
    def build(
        cache_key: str,
        location: str,
        start_date: str,
        end_date: str,
        purpose: str,
        forecast: dict,
        ai_insights: dict,
    ):

        return {
            "cache_key": cache_key,

            "location": location,

            "start_date": start_date,

            "end_date": end_date,

            "purpose": purpose,

            "forecast": forecast,

            "ai_insights": ai_insights,

            "created_at":
                datetime.utcnow()
        }