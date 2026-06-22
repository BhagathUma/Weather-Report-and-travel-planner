export default function HistorySkeleton() {

  return (
    <div
      className="
      animate-pulse
      rounded-2xl
      border
      border-white/10
      p-6
    "
    >
      <div className="mb-4 h-6 w-40 rounded bg-slate-700" />

      <div className="mb-2 h-4 w-60 rounded bg-slate-800" />

      <div className="h-4 w-32 rounded bg-slate-800" />
    </div>
  );
}