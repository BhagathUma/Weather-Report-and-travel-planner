from bson import ObjectId


class CacheResponseFormatter:

    @staticmethod
    def format(document):

        return {
            "success": True,

            "analysis_id":
                str(document["_id"]),

            "cache_hit": True,

            "location":
                document["location"],

            "forecast":
                document["forecast"],

            "ai_insights":
                document["ai_insights"]
        }