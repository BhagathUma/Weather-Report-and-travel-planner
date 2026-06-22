from google import genai
from google.genai import types

from app.config.settings import settings


class GeminiService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def generate(self, prompt: str):

        try:

            response = (
                self.client.models.generate_content(
                    model="gemini-2.5-flash-lite",
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        temperature=0.4,
                        response_mime_type="application/json",
                    ),
                )
            )

            return response.text

        except Exception as e:

            print(
                f"Gemini Error: {str(e)}"
            )

            return None