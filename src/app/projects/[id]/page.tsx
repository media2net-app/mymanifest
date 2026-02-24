import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStartupById } from "@/lib/startups";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const startup = getStartupById(id);

  if (!startup) notFound();

  const progress = Math.min(100, (startup.raised / startup.goal) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors"
          >
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
              className="rounded-full bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2.5 transition-colors"
            >
              Back this project
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary text-sm font-medium mb-6 transition-colors"
        >
          ← Back to overview
        </Link>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-foreground/5 mb-8">
          <Image
            src={startup.image}
            alt={startup.title}
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {startup.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 leading-tight">
              {startup.title}
            </h1>
            <p className="text-xl text-foreground/80 mt-2">{startup.tagline}</p>
            <p className="text-foreground/70 mt-6 leading-relaxed">
              {startup.description}
            </p>
            {startup.location && (
              <p className="mt-4 text-sm text-foreground/60">
                📍 {startup.location}
              </p>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-foreground">
                    €{startup.raised.toLocaleString("en")}
                  </p>
                  <p className="text-sm text-foreground/70">
                    raised of €{startup.goal.toLocaleString("en")} goal
                  </p>
                </div>
                <div className="h-3 rounded-full bg-primary-light overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-foreground/70">
                  <span>{startup.backers} backers</span>
                  <span>{startup.daysLeft} days left</span>
                </div>
                <Link
                  href="/login"
                  className="block w-full rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 text-center transition-colors shadow-lg shadow-primary/25"
                >
                  Back this project
                </Link>
                <p className="text-xs text-foreground/60 text-center">
                  By {startup.creator}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/60 py-6 mt-12 text-center text-sm text-foreground/60">
        MyManifest — Crowdfunding for what matters.
      </footer>
    </div>
  );
}
