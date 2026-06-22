"use client";

import { motion } from "framer-motion";
import { purposes } from "@/lib/constants/purposes";
import { Purpose } from "@/types/purpose";

interface Props {
  value?: Purpose;
  onChange: (purpose: Purpose) => void;
}

export default function PurposeSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="
grid
grid-cols-2
gap-4
md:grid-cols-5
">

      {purposes.map((purpose) => {
        const Icon = purpose.icon;

        const active = value === purpose.id;

        return (
          <motion.button
            whileHover={{ y: -4 }}
            key={purpose.id}
            onClick={() =>
              onChange(purpose.id as Purpose)
            }
            className={`
              rounded-2xl
              border
              p-5
              transition-all
              ${
                active
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }
            `}
          >
            <Icon
              className="mx-auto mb-3"
              size={24}
            />

            <p className="text-sm">
              {purpose.title}
            </p>
          </motion.button>
        );
      })}

    </div>
  );
}