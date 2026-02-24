import Image from "next/image";
import Link from "next/link";
import type { Startup } from "@/lib/startups";

type ProjectCardProps = {
  startup: Startup;
  size?: "default" | "large";
};

export function ProjectCard({ startup, size = "default" }: ProjectCardProps) {
  const progress = Math.min(100, (startup.raised / startup.goal) * 100);

  if (size === "large") {
    return (
      <Link
        href={`/projects/${startup.id}`}
        className="group block rounded-2xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-200"
      >
        <div className="relative aspect-[21/9] overflow-hidden bg-foreground/5">
          <Image
            src={startup.image}
            alt={startup.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 1400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium">
              Featured
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold line-clamp-2 group-hover:text-primary-light transition-colors">
              {startup.title}
            </h3>
            <p className="mt-1 text-white/90 text-lg line-clamp-1">{startup.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/90">
              <span className="font-semibold">€{startup.raised.toLocaleString("en")}</span>
              <span>of €{startup.goal.toLocaleString("en")} goal</span>
              <span>{startup.backers} backers</span>
              <span>{startup.daysLeft} days left</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
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
        <p className="text-sm text-foreground/70 mt-1 line-clamp-2">{startup.tagline}</p>
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
}
