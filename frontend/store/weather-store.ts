import { create } from "zustand";

import { AnalyzeWeatherResponse }
from "@/types/weather-response";

interface WeatherState {

  weatherData:
    AnalyzeWeatherResponse | null;

  setWeatherData: (
    data:
      AnalyzeWeatherResponse
  ) => void;

  clearWeatherData: () => void;
}

export const useWeatherStore =
  create<WeatherState>((set) => ({
    weatherData: null,

    setWeatherData: (data) =>
      set({
        weatherData: data
      }),

    clearWeatherData: () =>
      set({
        weatherData: null
      })
  }));