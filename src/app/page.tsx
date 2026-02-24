import Link from "next/link";
import {
  startups,
  getFeaturedStartups,
  getStartupsByCategory,
  categoryOrder,
} from "@/lib/startups";
import { categories } from "@/lib/categories";
import { CategorySlider } from "@/components/CategorySlider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { ProjectCard } from "@/components/ProjectCard";

const categoriesWithProjects = categoryOrder.filter((cat) =>
  startups.some((s) => s.category === cat)
);

export default function HomePage() {
  const featured = getFeaturedStartups();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Header variant="home" />

      <main className="flex-1 w-full">
        {/* Hero - full-width background image + overlay */}
        <section className="relative min-h-[32rem] overflow-hidden bg-slate-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/planet-earth-night-view-illuminated-orbit-dark-background-5k-6000x2500-8934.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-darker/35 via-primary-dark/25 to-primary/30" />
          <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24 md:py-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Bring ideas to life.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
                Back projects you believe in. Launch your own. MyManifest is crowdfunding for creators, causes, and community.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary-dark shadow-lg hover:bg-white/95"
                >
                  Start exploring
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/login"
                  className="inline-flex rounded-lg border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10"
                >
                  Log in
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-1.5">Trusted by thousands of backers</span>
                <span className="flex items-center gap-1.5">All-or-nothing funding</span>
                <span className="flex items-center gap-1.5">Support creators worldwide</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
        {/* Section headings: bold title + subtitle, centered */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">How it works</h2>
            <p className="mx-auto mt-2 max-w-2xl text-foreground/70">
              Whether you want to back a project or launch your own, MyManifest makes it simple and transparent.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold text-lg">1</span>
                <h3 className="font-semibold text-foreground">Discover</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Browse projects by category. Read stories, check goals, and see who’s behind each idea.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold text-lg">2</span>
                <h3 className="font-semibold text-foreground">Back</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Choose a reward tier and back with a pledge. You only pay if the project reaches its goal.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold text-lg">3</span>
                <h3 className="font-semibold text-foreground">Create</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Have an idea? Set your goal, add rewards, and share your campaign with your community.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary font-bold text-lg">4</span>
                <h3 className="font-semibold text-foreground">Deliver</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/70">
                Creators ship rewards and keep backers updated. We’re here to help every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-xl border border-border bg-card p-8 shadow-sm sm:mb-20 lg:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why MyManifest?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-foreground/70">
              A single place to fund what matters — from tech and design to community and the environment.
            </p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground text-lg">For backers</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed">
                Support projects you believe in with clear goals and reward tiers. Only charged when the project is funded. Get updates and rewards directly from creators. Discover everything from gadgets and games to documentaries and local initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">For creators</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed">
                Launch your idea with a dedicated dashboard, flexible funding goals, and tools to share your story. Set rewards, share risks and challenges, and build a community. MyManifest helps you reach backers who care.
              </p>
            </div>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured project</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl">
              Hand-picked campaigns we think you’ll love. Back them before the clock runs out.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {featured.map((startup) => (
                <ProjectCard key={startup.id} startup={startup} size="large" />
              ))}
            </div>
          </section>
        )}

        <section id="discover" className="mb-14 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Discover by category</h2>
            <p className="mx-auto mt-2 max-w-2xl text-foreground/70">
              Explore projects in the categories you care about. New campaigns are added every week.
            </p>
          </div>

          <div className="mt-12">
          {categoriesWithProjects.map((categoryName) => {
            const projects = getStartupsByCategory(categoryName);
            const slug = categories.find((c) => c.name === categoryName)?.slug ?? categoryName.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
            return (
              <div
                key={categoryName}
                id={`category-${slug}`}
                className="scroll-mt-24"
              >
                <CategorySlider categoryName={categoryName} projects={projects} />
              </div>
            );
          })}
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
