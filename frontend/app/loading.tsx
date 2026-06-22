export default function Loading() {
  return (
    <div
      className="
      flex
      min-h-screen
      items-center
      justify-center
    "
    >
      <div className="text-center">

        <div
          className="
          mx-auto
          mb-4
          h-12
          w-12
          animate-spin
          rounded-full
          border-4
          border-cyan-400
          border-t-transparent
        "
        />

        <p>
          Loading Atmos AI...
        </p>

      </div>
    </div>
  );
}