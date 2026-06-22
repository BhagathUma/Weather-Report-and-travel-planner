import GlassCard from "@/components/ui/glass-card";

interface Props {
  date: string;
  maxTemp: number;
  minTemp: number;
  rain: number;
  wind: number;
}

export default function ForecastCard({
  date,
  maxTemp,
  minTemp,
  rain,
  wind,
}: Props) {
  return (
    <GlassCard className="p-5">

      <div className="space-y-3">

        <h3 className="font-semibold">
          {new Date(date).toLocaleDateString(
            "en-US",
            {
              weekday: "short",
              month: "short",
              day: "numeric",
            }
          )}
        </h3>

        <div className="text-3xl font-bold">
          {maxTemp}°
        </div>

        <div className="text-sm text-slate-400">
          Low {minTemp}°
        </div>

        <div className="space-y-1 text-sm">

          <p>🌧 {rain} mm</p>

          <p>💨 {wind} km/h</p>

        </div>

      </div>

    </GlassCard>
  );
}