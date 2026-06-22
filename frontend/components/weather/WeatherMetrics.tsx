import GlassCard from "@/components/ui/glass-card";

interface Props {
  totalRain: number;
  maxWind: number;
}

export default function WeatherMetrics({
  totalRain,
  maxWind,
}: Props) {
  return (
    <GlassCard className="p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Weather Metrics
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-slate-400">
            Total Rainfall
          </p>

          <p className="text-2xl font-bold">
            {totalRain} mm
          </p>
        </div>

        <div>
          <p className="text-slate-400">
            Max Wind Speed
          </p>

          <p className="text-2xl font-bold">
            {maxWind} km/h
          </p>
        </div>

      </div>

    </GlassCard>
  );
}