export default function FloatingGlow() {
  return (
    <>
      <div
        className="
        fixed
        top-40
        left-20

        h-72
        w-72

        rounded-full

        bg-cyan-500/5

        blur-3xl
      "
      />

      <div
        className="
        fixed
        bottom-40
        right-20

        h-96
        w-96

        rounded-full

        bg-indigo-500/5

        blur-3xl
      "
      />
    </>
  );
}