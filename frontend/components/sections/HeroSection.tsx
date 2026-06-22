"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/animated-heading";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            AI-Powered Weather Concierge
          </div>

          <AnimatedHeading
            title="Weather Intelligence, Reimagined"
            subtitle="Transform weather forecasts into actionable recommendations tailored to your plans, style, and lifestyle."
            
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">

  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
    AI Recommendations
  </span>

  <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
    Weather Intelligence
  </span>

  <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
    Lifestyle Insights
  </span>

</div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-400"
          >
            Weather forecasts are data.
            Atmos AI turns them into decisions.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}