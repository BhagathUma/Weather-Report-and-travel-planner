interface Props {
  item: any;

  onDelete: (
    id: string
  ) => void;
}

export default function HistoryCard({
  item,
  onDelete,
}: Props) {

  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      backdrop-blur-xl
    "
    >
      <div className="mb-3 flex items-center justify-between">

        <h3 className="text-xl font-semibold">
          {item.location}
        </h3>

        <span
          className="
          rounded-full
          bg-cyan-500/10
          px-3
          py-1
          text-xs
          text-cyan-400
        "
        >
          {item.purpose}
        </span>

      </div>

      <p className="text-sm text-slate-400">
        {item.start_date}
        {" → "}
        {item.end_date}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {new Date(
          item.created_at
        ).toLocaleString()}
      </p>

      <div className="mt-4 flex gap-3">

        <a
          href={`/history/${item._id}`}
          className="
          rounded-xl
          bg-cyan-500/10
          px-4
          py-2
          text-sm
        "
        >
          View
        </a>

        <button
          onClick={() =>
            onDelete(item._id)
          }
          className="
          rounded-xl
          bg-red-500/10
          px-4
          py-2
          text-sm
          text-red-400
        "
        >
          Delete
        </button>

      </div>

    </div>
  );
}