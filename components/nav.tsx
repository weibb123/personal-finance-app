import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Finance Insights
        </Link>
      </div>
    </header>
  );
}
