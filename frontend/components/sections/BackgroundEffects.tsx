export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="fixed right-0 top-40 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="fixed bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[140px]" />
    </>
  );
}