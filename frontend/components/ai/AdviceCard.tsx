import GlassCard from "@/components/ui/glass-card";

interface Props {
  advice: string[];
}

export default function AdviceCard({
  advice,
}: Props) {
  return (
    <GlassCard className="p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Recommendations
      </h2>

      <div className="space-y-3">

        {advice.map((item, index) => (
          <div
            key={index}
            className="
              rounded-xl
              glass-card
              p-3
            "
          >
            {item}
          </div>
        ))}

      </div>

    </GlassCard>
  );
}