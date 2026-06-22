import GlassCard from "@/components/ui/glass-card";

interface Props {
  bestDays: string[];
  worstDays: string[];
}

export default function BestWorstDays({
  bestDays,
  worstDays,
}: Props) {
  return (
    <GlassCard className="p-6">

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <h2 className="mb-4 text-xl font-semibold text-green-400">
            Best Days
          </h2>

          <div className="space-y-3">

            {bestDays.map(
              (day, index) => (
                <div
                  key={index}
                  className="
                    rounded-xl
                    glass-card
                    p-3
                  "
                >
                  {day}
                </div>
              )
            )}

          </div>

        </div>

        <div>

          <h2 className="mb-4 text-xl font-semibold text-red-400">
            Worst Days
          </h2>

          <div className="space-y-3">

            {worstDays.map(
              (day, index) => (
                <div
                  key={index}
                  className="
                    rounded-xl
                    glass-card
                    p-3
                  "
                >
                  {day}
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </GlassCard>
  );
}