import { AnalyzeWeatherResponse }
from "@/types/weather-response";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export async function analyzeWeather(
  payload: any
): Promise<AnalyzeWeatherResponse> {

  const response = await fetch(
    `${API_URL}/api/weather/analyze`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        payload
      ),
    }
  );

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Request failed"
    );
  }

  return data;
}