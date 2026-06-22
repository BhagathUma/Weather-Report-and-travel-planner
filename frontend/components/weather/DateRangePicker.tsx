"use client";

import { Calendar } from "@/components/ui/calendar";

interface Props {
  startDate?: Date;
  endDate?: Date;
  setStartDate: (date: Date | undefined) => void;
  setEndDate: (date: Date | undefined) => void;
}

export default function DateRangePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <p className="mb-3 text-sm text-slate-400">
          Start Date
        </p>

        <Calendar
          mode="single"
          selected={startDate}
          onSelect={setStartDate}
          className="rounded-xl border border-white/10"
        />
      </div>

      <div>
        <p className="mb-3 text-sm text-slate-400">
          End Date
        </p>

        <Calendar
          mode="single"
          selected={endDate}
          onSelect={setEndDate}
          disabled={(date) => {
            if (!startDate) return true;

            const maxDate = new Date(startDate);
            maxDate.setDate(maxDate.getDate() + 7);

            return date < startDate || date > maxDate;
          }}
          className="rounded-xl border border-white/10"
        />
      </div>

    </div>
  );
}