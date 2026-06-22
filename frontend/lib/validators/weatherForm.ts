import { WeatherFormData } from "@/types/weather-form";

export interface ValidationErrors {
  location?: string;
  startDate?: string;
  endDate?: string;
}

export function validateWeatherForm(
  form: WeatherFormData
): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!form.location) {
    errors.location = "Please select a location";
  }

  if (!form.startDate) {
    errors.startDate = "Please select a start date";
  }

  if (!form.endDate) {
    errors.endDate = "Please select an end date";
  }

  if (form.startDate && form.endDate) {
    const diff =
      Math.ceil(
        (form.endDate.getTime() -
          form.startDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

    if (diff > 7) {
      errors.endDate =
        "Date range cannot exceed 7 days";
    }

    if (diff < 0) {
      errors.endDate =
        "End date must be after start date";
    }
  }

  return errors;
}