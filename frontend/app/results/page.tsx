"use client";

import { useMemo } from "react";

import { useWeatherStore }
from "@/store/weather-store";

import ForecastCard
from "@/components/weather/ForecastCard";

import ForecastOverview
from "@/components/weather/ForecastOverview";

import WeatherSummary
from "@/components/weather/WeatherSummary";

import TemperatureChart
from "@/components/weather/TemperatureChart";

import WeatherMetrics
from "@/components/weather/WeatherMetrics";

import VibeCheckCard
from "@/components/ai/VibeCheckCard";
import { motion }
from "framer-motion";
import AdviceCard
from "@/components/ai/AdviceCard";

import ClothingBoard
from "@/components/ai/ClothingBoard";

import WarningCard
from "@/components/ai/WarningCard";

import BestWorstDays
from "@/components/ai/BestWorstDays";
import CacheBadge
from "@/components/ai/CacheBadge";

import WeatherHero
from "@/components/weather/WeatherHero";

export default function ResultsPage() {

  const weatherData =
    useWeatherStore(
      (state) =>
        state.weatherData
    );

  if (!weatherData) {
    return (
      <div className="p-10">
        No Weather Data
      </div>
    );
  }

  const aiData =
    weatherData.ai_insights;

  const daily =
    weatherData.forecast.daily;
  const ai =
  weatherData.ai_insights;


  if (
  !weatherData?.ai_insights
) {
  return (
    <div className="p-10">
      AI Insights Unavailable
    </div>
  );
}

  const chartData =
    daily.time.map(
      (
        date: string,
        index: number
      ) => ({
        date:
          new Date(date)
            .toLocaleDateString(
              "en-US",
              {
                weekday: "short",
              }
            ),

        max:
          daily
            .temperature_2m_max[
              index
            ],
      })
    );

  const averageTemp =
    Math.round(
      daily
        .temperature_2m_max
        .reduce(
          (
            a: number,
            b: number
          ) => a + b,
          0
        ) /
      daily.time.length
    );

  const rainyDays =
    daily.precipitation_sum.filter(
      (rain: number) =>
        rain > 0
    ).length;

  const totalRain =
    daily.precipitation_sum.reduce(
      (
        a: number,
        b: number
      ) => a + b,
      0
    );

  const maxWind =
    Math.max(
      ...daily.wind_speed_10m_max
    );

  return (
    <main className="min-h-screen p-6 md:p-10">

      <h1
        className="
        mb-8
        text-4xl
        font-bold
      "
      >
        Weather Intelligence
      </h1>
      <WeatherHero
  location={
    weatherData.location
  }
  summary={
    weatherData.ai_insights.summary
  }
/>
      <div className="mb-8 space-y-6">


  {/* <VibeCheckCard
    summary={ai.summary}
    overallWeather={
      ai.overall_weather
    }
  /> */}
  <CacheBadge
  cacheHit={
    weatherData.cache_hit
  }
/>

  <div
    className="
    grid
    gap-6
    md:grid-cols-2
  "
  > 
    <motion.div
 initial={{
   opacity: 0,
   y: 20
 }}
 animate={{
   opacity: 1,
   y: 0
 }}
 transition={{
   duration: 0.5
 }}
>
    <AdviceCard
      advice={
        ai.purpose_specific_advice
      }
    />
    </motion.div>


      <motion.div
 initial={{
   opacity: 0,
   y: 20
 }}
 animate={{
   opacity: 1,
   y: 0
 }}
 transition={{
   duration: 0.5
 }}
>
    <ClothingBoard
      items={
        ai.clothing_recommendations
      }
    />
    </motion.div>
  </div>

  <div
    className="
    grid
    gap-6
    md:grid-cols-2
  "
  >  

    <motion.div
 initial={{
   opacity: 0,
   y: 20
 }}
 animate={{
   opacity: 1,
   y: 0
 }}
 transition={{
   duration: 0.5
 }}
></motion.div>
    <WarningCard
      warnings={
        ai.warnings
      }
    />
    <motion.div
 initial={{
   opacity: 0,
   y: 20
 }}
 animate={{
   opacity: 1,
   y: 0
 }}
 transition={{
   duration: 0.5
 }}
>
    <BestWorstDays
      bestDays={
        ai.best_days
      }
      worstDays={
        ai.worst_days
      }
    />
    </motion.div>
  </div>

</div>
      <div
        className="
        grid
        gap-6
      "
      >

        <div
          className="
          grid
          gap-6
          md:grid-cols-3
        "
        >

          <ForecastOverview
            location={
              weatherData.location
            }
          />

          <div className="md:col-span-2">
            <WeatherSummary
              averageTemp={
                averageTemp
              }
              rainyDays={
                rainyDays
              }
            />
          </div>

        </div>

        <div
          className="
          grid
          gap-4
          md:grid-cols-5
        "
        >
          {daily.time.map(
            (
              date: string,
              index: number
            ) => (
              <ForecastCard
                key={date}
                date={date}
                maxTemp={
                  daily
                    .temperature_2m_max[
                    index
                  ]
                }
                minTemp={
                  daily
                    .temperature_2m_min[
                    index
                  ]
                }
                rain={
                  daily
                    .precipitation_sum[
                    index
                  ]
                }
                wind={
                  daily
                    .wind_speed_10m_max[
                    index
                  ]
                }
              />
            )
          )}
        </div>

        <div
          className="
          grid
          gap-6
          md:grid-cols-2
        "
        >
          <TemperatureChart
            data={chartData}
          />

          <WeatherMetrics
            totalRain={totalRain}
            maxWind={maxWind}
          />
        </div>

      </div>

    </main>
  );
}