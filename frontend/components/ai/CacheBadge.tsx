interface Props {
  cacheHit: boolean;
}

export default function CacheBadge({
  cacheHit,
}: Props) {

  return (
    <div
      className={`
      rounded-full
      px-4
      py-2
      text-sm

      ${
        cacheHit
          ? "bg-emerald-500/10 text-emerald-400"
          : "bg-cyan-500/10 text-cyan-400"
      }
    `}
    >
      {cacheHit
        ? "⚡ Cached Result"
        : "✨ Fresh Analysis"}
    </div>
  );
}