"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

import GlassCard from "@/components/ui/glass-card";

interface Props {
  data: any[];
}

export default function TemperatureChart({
  data,
}: Props) {
  return (
    <GlassCard className="p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Temperature Trend
      </h2>

      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>

            <XAxis dataKey="date" />

            <Tooltip />

            <Line
              dataKey="max"
              stroke="#38BDF8"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </GlassCard>
  );
}