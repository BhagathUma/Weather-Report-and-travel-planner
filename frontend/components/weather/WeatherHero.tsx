"use client";

import {
  motion
} from "framer-motion";

interface Props {
  location: string;
  summary: string;
}

export default function WeatherHero({
  location,
  summary,
}: Props) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
      mb-8
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-xl
    "
    >
      <p
        className="
        mb-3
        text-cyan-400
        uppercase
        tracking-widest
      "
      >
        Atmos AI
      </p>

      <h1
        className="
        mb-4
        text-5xl
        font-bold
      "
      >
        Weather Intelligence
        for {location}
      </h1>

      <p
        className="
        max-w-2xl
        text-slate-300
      "
      >
        {summary}
      </p>

    </motion.div>
  );
}