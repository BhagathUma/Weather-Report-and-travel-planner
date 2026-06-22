class GeneratedResponseFormatter:

    @staticmethod
    def format(
        analysis_id: str,
        location: str,
        forecast: dict,
        ai_insights: dict,
    ):

        return {
            "success": True,

            "analysis_id":
                analysis_id,

            "cache_hit": False,

            "location":
                location,

            "forecast":
                forecast,

            "ai_insights":
                ai_insights
        }