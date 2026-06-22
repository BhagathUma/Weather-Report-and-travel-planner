"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-center
      gap-4
    "
    >
      <h1 className="text-2xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="
          rounded-xl
          bg-cyan-500
          px-4
          py-2
        "
      >
        Try Again
      </button>
    </div>
  );
}