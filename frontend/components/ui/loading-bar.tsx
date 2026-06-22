"use client";

import { motion } from "framer-motion";

interface Props {
  progress: number;
  message: string;
}

export default function LoadingBar({
  progress,
  message,
}: Props) {
  return (
    <div className="space-y-4">

      <p className="text-center text-sm text-cyan-300">
        {message}
      </p>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-sky-500
            to-violet-500
          "
        />

      </div>

    </div>
  );
}