import {
  Sun,
  CloudRain,
  Wind,
  Snowflake,
  Flame,
} from "lucide-react";

interface Props {
  maxTemp: number;
  precipitation: number;
  windSpeed: number;
}

export default function WeatherIcon({
  maxTemp,
  precipitation,
  windSpeed,
}: Props) {
  if (precipitation > 5) {
    return (
      <CloudRain
        size={40}
        className="
        text-blue-400
        drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]
      "
      />
    );
  }

  if (windSpeed > 25) {
    return (
      <Wind
        size={40}
        className="
        text-cyan-400
        drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]
      "
      />
    );
  }

  if (maxTemp > 35) {
    return (
      <Flame
        size={40}
        className="
        text-orange-400
        drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]
      "
      />
    );
  }

  if (maxTemp < 15) {
    return (
      <Snowflake
        size={40}
        className="
        text-purple-400
        drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]
      "
      />
    );
  }

  return (
    <Sun
      size={40}
      className="
      text-yellow-400
      drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]
    "
    />
  );
}