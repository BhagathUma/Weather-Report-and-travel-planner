import GlassCard from "@/components/ui/glass-card";

interface Props {
  warnings: string[];
}

export default function WarningCard({
  warnings,
}: Props) {

  if (warnings.length === 0) {
    return (
      <GlassCard className="p-6">

        <h2 className="mb-4 text-xl font-semibold">
          Warnings
        </h2>

        <p className="text-green-400">
          No major weather concerns.
        </p>

      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Warnings
      </h2>

      <div className="space-y-3">

        {warnings.map(
          (warning, index) => (
            <div
              key={index}
              className="
                rounded-xl
                glass-card
                p-3
              "
            >
              {warning}
            </div>
          )
        )}

      </div>

    </GlassCard>
  );
}