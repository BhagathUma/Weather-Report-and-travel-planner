import json

from app.prompts.purpose_rules import (
    PURPOSE_RULES
)

from app.prompts.prompt_templates import (
    SYSTEM_PROMPT
)


class WeatherPromptBuilder:

    @staticmethod
    def build(
        location: str,
        purpose: str,
        weather_data: dict
    ):

        purpose_rule = (
            PURPOSE_RULES.get(
                purpose,
                PURPOSE_RULES["general_weather"]
            )
        )

        return f"""
{SYSTEM_PROMPT}

Location:
{location}

Purpose:
{purpose}

Purpose Instructions:
{purpose_rule}

Weather Forecast:
{json.dumps(weather_data)}

Instructions:

1. Summarize forecast in 1-2 sentences.
2. Provide activity-specific recommendations.
3. Recommend clothing.
4. Highlight risks.
5. Identify best days.
6. Identify worst days.

Return ONLY valid JSON.
"""