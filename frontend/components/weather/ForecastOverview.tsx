import GlassCard from "@/components/ui/glass-card";

interface Props {
  location: string;
}

export default function ForecastOverview({
  location,
}: Props) {
  return (
    <GlassCard className="h-full p-6">

      <div className="space-y-4">

        <p className="text-sm text-slate-400">
          Forecast Location
        </p>

        <h2 className="text-3xl font-bold">
          {location}
        </h2>

        <p className="text-slate-400">
          Weather forecast successfully
          generated using Open-Meteo.
        </p>

      </div>

    </GlassCard>
  );
}