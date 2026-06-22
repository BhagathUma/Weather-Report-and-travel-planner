import { Purpose } from "./purpose";

export interface LocationOption {
  id: number;
  name: string;
  country: string;
  region?: string;

  latitude: number;
  longitude: number;
}

export interface WeatherFormData {
  startDate?: Date;
  endDate?: Date;
  location?: LocationOption;
  purpose?: Purpose;
}