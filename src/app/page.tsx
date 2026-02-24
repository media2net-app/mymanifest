import Image from "next/image";
import Link from "next/link";
import { startups } from "@/lib/startups";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
            MyManifest
          </Link>
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

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Bring ideas to life.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
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
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Discover projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup) => {
              const progress = Math.min(
                100,
                (startup.raised / startup.goal) * 100
              );
              return (
                <Link
                  key={startup.id}
                  href={`/projects/${startup.id}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-200"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                    <Image
                      src={startup.image}
                      alt={startup.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                      {startup.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {startup.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1 line-clamp-2">
                      {startup.tagline}
                    </p>
                    <div className="mt-4">
                      <div className="h-2 rounded-full bg-primary-light overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-foreground/70">
                        <span className="font-medium text-foreground">
                          €{startup.raised.toLocaleString("en")}
                        </span>
                        <span>
                          {progress >= 100 ? "Funded!" : `${startup.daysLeft} days left`}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-6 mt-12 text-center text-sm text-foreground/60">
        MyManifest — Crowdfunding for what matters.
      </footer>
    </div>
  );
}
