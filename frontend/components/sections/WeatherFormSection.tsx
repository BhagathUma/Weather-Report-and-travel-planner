import GlassCard from "@/components/ui/glass-card";
import WeatherForm from "@/components/forms/WeatherForm";

export default function WeatherFormSection() {
  return (
    <section className="mx-auto max-w-6xl">

      <GlassCard className="p-8 md:p-10">

        <WeatherForm />

      </GlassCard>

    </section>
  );
}