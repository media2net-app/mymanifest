import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground tracking-tight">
            MyManifest
          </span>
          <nav className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2.5 transition-colors shadow-lg shadow-primary/20"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground max-w-3xl leading-tight">
          Bring ideas to life.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl">
          Back projects you believe in. Launch your own. MyManifest is crowdfunding for creators, causes, and community.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/login"
            className="rounded-full bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 text-lg transition-colors shadow-xl shadow-primary/25"
          >
            Start exploring
          </Link>
          <Link
            href="/login"
            className="rounded-full border-2 border-primary text-primary hover:bg-primary-light font-semibold px-8 py-4 text-lg transition-colors"
          >
            Log in
          </Link>
        </div>
      </main>

      <footer className="border-t border-border/60 py-6 text-center text-sm text-foreground/60">
        MyManifest — Crowdfunding for what matters.
      </footer>
    </div>
  );
}
