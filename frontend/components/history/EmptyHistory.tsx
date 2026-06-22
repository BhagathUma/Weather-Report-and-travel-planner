export default function EmptyHistory() {

  return (
    <div
      className="
      rounded-2xl
      border
      border-dashed
      border-white/10
      p-10
      text-center
    "
    >
      <h2 className="mb-3 text-xl font-semibold">
        No Analyses Found
      </h2>

      <p className="text-slate-400">
        Run your first Atmos AI
        weather analysis.
      </p>
    </div>
  );
}