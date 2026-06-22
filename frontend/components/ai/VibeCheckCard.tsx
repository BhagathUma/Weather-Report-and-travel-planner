import GlassCard from "@/components/ui/glass-card";
import AIConfidenceBadge from "./AIConfidenceBadge";
interface Props {
  summary: string;
  overallWeather: string;
}

export default function VibeCheckCard({
  summary,
  overallWeather,
}: Props) {
  return (
    <GlassCard className="p-8">

      <div className="mb-4 inline-flex rounded-full glass-card px-4 py-2 text-sm text-cyan-300">
        The Vibe Check
      </div>
      

      <h2 className="mb-4 text-3xl font-bold">
        {overallWeather}
      </h2>

      <p className="leading-relaxed text-slate-300">
        {summary}
      </p>

    </GlassCard>
  );
}