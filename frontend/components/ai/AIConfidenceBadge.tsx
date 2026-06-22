interface Props {
  score: number;
}

export default function AIConfidenceBadge({
  score,
}: Props) {

  const color =
    score > 80
      ? "text-green-400"
      : score > 50
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div
      className={`
      rounded-full
      border
      border-white/10
      px-4
      py-2
      text-sm
      ${color}
    `}
    >
      AI Confidence: {score}%
    </div>
  );
}