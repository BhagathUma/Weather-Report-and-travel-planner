export default function AuroraBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Aurora Top Left */}
      <div
        className="
          fixed
          inset-0
          -z-40
          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_35%)]
        "
      />

      {/* Aurora Bottom Right */}
      <div
        className="
          fixed
          inset-0
          -z-40
          bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_35%)]
        "
      />

      {/* Dot Matrix Layer */}
      <div
        className="
          fixed
          inset-0
          -z-30
          opacity-40
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Center Glow */}
      <div
        className="
          fixed
          left-1/2
          top-1/2
          -z-20
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/5
          blur-3xl
        "
      />
    </>
  );
}