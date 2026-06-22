"use client";

import { useState } from "react";

import DateRangePicker from "@/components/weather/DateRangePicker";
import LocationAutocomplete from "@/components/location/LocationAutocomplete";
import PurposeSelector from "@/components/purpose/PurposeSelector";

import GlowButton from "@/components/ui/glow-button";
import LoadingBar from "@/components/ui/loading-bar";
import ErrorMessage from "@/components/ui/error-message";
import { analyzeWeather }
from "@/services/weather.service";
import { Purpose } from "@/types/purpose";
import {
  LocationOption,
  WeatherFormData,
} from "@/types/weather-form";


import { useRouter }
from "next/navigation";

import {
  useWeatherStore
}
from "@/store/weather-store";


import {
  validateWeatherForm,
  ValidationErrors,
} from "@/lib/validators/weatherForm";

import { useLoadingSequence } from "@/components/hooks/useLoadingSequence";

export default function WeatherForm() {

  const router = useRouter();

const setWeatherData =
  useWeatherStore(
    (state) =>
      state.setWeatherData
  );
  const [serverError,
  setServerError] =
  useState("");
  const [startDate, setStartDate] =
    useState<Date>();

  const [endDate, setEndDate] =
    useState<Date>();

  const [location, setLocation] =
    useState<LocationOption>();

  const [purpose, setPurpose] =
    useState<Purpose>();

  const [errors, setErrors] =
    useState<ValidationErrors>({});

  const [loading, setLoading] =
    useState(false);

  const { progress, message } =
    useLoadingSequence(loading);

  const handleSubmit = async () => {
    const form: WeatherFormData = {
      startDate,
      endDate,
      location,
      purpose,
    };

    const validationErrors =
      validateWeatherForm(form);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Placeholder for API
    try {

  const response =
    await analyzeWeather({
      location:
        location?.name,

      latitude:
        location?.latitude,

      longitude:
        location?.longitude,

      startDate:
        startDate
          ?.toISOString()
          .split("T")[0],

      endDate:
        endDate
          ?.toISOString()
          .split("T")[0],

      purpose
    });

  setWeatherData(response);

  router.push("/results");

} catch (error: any) {

  setErrors({
    location:
      error.message
  });

  setServerError(
  error.message
);

} finally {

  setLoading(false);

}
    
  };

  return (
    <div className="space-y-10">
        <div className="mb-8 text-center">

  <h2 className="mb-2 text-2xl font-bold">
    Plan Smarter
  </h2>

  <p className="text-slate-400">
    Select a location, date range,
    and activity to receive
    AI-powered weather guidance.
  </p>

</div>

      <div>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        <ErrorMessage
          message={
            errors.startDate ||
            errors.endDate
          }
        />
      </div>

      <div>
        <LocationAutocomplete
          selected={location}
          onSelect={setLocation}
        />

        <ErrorMessage
          message={errors.location}
        />
      </div>

      <PurposeSelector
        value={purpose}
        onChange={setPurpose}
      />

      {loading ? (
        <LoadingBar
          progress={progress}
          message={message}
        />
      ) : (
        <GlowButton
          onClick={handleSubmit}
        >
          Analyze Weather
        </GlowButton>
        
      )}

      <ErrorMessage
  message={serverError}
/>

    </div>
  );
}