def get_fallback_response():
    return {
        "summary":
        "Weather analysis is currently unavailable.",

        "overall_weather":
        "Forecast available",

        "purpose_specific_advice": [
            "Review the forecast cards below."
        ],

        "clothing_recommendations": [
            "Check daily temperatures."
        ],

        "warnings": [],

        "best_days": [],

        "worst_days": [],

        "generated_by": "fallback",

        "confidence_score": 0
    }