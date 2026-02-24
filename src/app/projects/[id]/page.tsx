import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStartupById } from "@/lib/startups";
import { Footer } from "@/components/Footer";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const startup = getStartupById(id);

  if (!startup) notFound();

  const progress = Math.min(100, (startup.raised / startup.goal) * 100);
  const storyText = startup.longDescription ?? startup.description;

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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {startup.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 leading-tight">
                {startup.title}
              </h1>
              <p className="text-xl text-foreground/80 mt-2">{startup.tagline}</p>
              {startup.location && (
                <p className="mt-3 text-sm text-foreground/60">📍 {startup.location}</p>
              )}
            </div>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Story</h2>
              <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {storyText}
              </div>
            </section>

            {startup.creatorBio && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">About the creator</h2>
                <p className="text-foreground/80 leading-relaxed">{startup.creatorBio}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{startup.creator}</p>
              </section>
            )}

            {startup.risksAndChallenges && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Risks and challenges</h2>
                <p className="text-foreground/80 leading-relaxed">{startup.risksAndChallenges}</p>
              </section>
            )}

            {startup.faq && startup.faq.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">FAQ</h2>
                <ul className="space-y-6">
                  {startup.faq.map((item, i) => (
                    <li key={i} className="border-b border-border/60 pb-4 last:border-0">
                      <h3 className="font-medium text-foreground">{item.question}</h3>
                      <p className="mt-2 text-foreground/80 text-sm leading-relaxed">{item.answer}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
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
                  <p className="text-xs text-foreground/60 text-center">By {startup.creator}</p>
                </div>
              </div>

              {startup.rewards && startup.rewards.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                  <h3 className="font-semibold text-foreground mb-4">Rewards</h3>
                  <ul className="space-y-4">
                    {startup.rewards.map((reward, i) => (
                      <li key={i} className="border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                        <p className="font-semibold text-foreground text-lg">€{reward.amount}+</p>
                        <p className="font-medium text-foreground mt-1">{reward.title}</p>
                        <p className="text-sm text-foreground/70 mt-1">{reward.description}</p>
                        {reward.backers != null && (
                          <p className="text-xs text-foreground/60 mt-2">{reward.backers} backers</p>
                        )}
                        <Link
                          href="/login"
                          className="mt-3 block w-full rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 text-center text-sm transition-colors"
                        >
                          Select this reward
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
