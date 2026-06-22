import GlassCard from "@/components/ui/glass-card";

interface Props {
  averageTemp: number;
  rainyDays: number;
}

export default function WeatherSummary({
  averageTemp,
  rainyDays,
}: Props) {
  return (
    <GlassCard className="p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Weather Snapshot
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-slate-400">
            Avg Temp
          </p>

          <h3 className="text-3xl font-bold">
            {averageTemp}°
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Rainy Days
          </p>

          <h3 className="text-3xl font-bold">
            {rainyDays}
          </h3>
        </div>

      </div>

    </GlassCard>
  );
}