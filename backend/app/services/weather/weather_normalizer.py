class WeatherNormalizer:

    @staticmethod
    def normalize(weather_data):

        daily = weather_data.get(
            "daily",
            {}
        )

        hourly = weather_data.get(
            "hourly",
            {}
        )

        return {
            "daily": {
                "time":
                daily.get("time", []),

                "temperature_2m_max":
                daily.get(
                    "temperature_2m_max",
                    []
                ),

                "temperature_2m_min":
                daily.get(
                    "temperature_2m_min",
                    []
                ),

                "precipitation_sum":
                daily.get(
                    "precipitation_sum",
                    []
                ),

                "rain_sum":
                daily.get(
                    "rain_sum",
                    []
                ),

                "wind_speed_10m_max":
                daily.get(
                    "wind_speed_10m_max",
                    []
                ),
            },

            "hourly": {
                "time":
                hourly.get(
                    "time",
                    []
                ),

                "temperature_2m":
                hourly.get(
                    "temperature_2m",
                    []
                ),

                "relative_humidity_2m":
                hourly.get(
                    "relative_humidity_2m",
                    []
                ),

                "precipitation":
                hourly.get(
                    "precipitation",
                    []
                ),

                "wind_speed_10m":
                hourly.get(
                    "wind_speed_10m",
                    []
                ),
            }
        }