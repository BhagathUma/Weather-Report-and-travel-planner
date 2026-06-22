class AIQualityValidator:

    @staticmethod
    def validate(response):

        score = 100

        if (
            len(
                response.get(
                    "summary",
                    ""
                )
            ) < 20
        ):
            score -= 20

        if (
            len(
                response.get(
                    "purpose_specific_advice",
                    []
                )
            ) < 2
        ):
            score -= 20

        if (
            len(
                response.get(
                    "clothing_recommendations",
                    []
                )
            ) < 2
        ):
            score -= 20

        response[
            "confidence_score"
        ] = score

        return response