import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-4
      z-50
      
      glass-card
      rounded-2xl
    "
    >
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between

        px-6
        py-4
      "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
        "
        >
          Atmos AI
        </Link>

        <nav className="flex gap-6">

          <Link href="/">
            Analyze
          </Link>

          <Link href="/history">
            History
          </Link>

        </nav>
      </div>
    </header>
  );
}