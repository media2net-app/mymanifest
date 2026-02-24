"use client";

import { useEffect, useRef } from "react";
import type { Startup } from "@/lib/startups";
import { ProjectCard } from "./ProjectCard";

type CategorySliderProps = {
  categoryName: string;
  projects: Startup[];
};

const AUTOPLAY_MS = 5000;

export function CategorySlider({ categoryName, projects }: CategorySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projects.length <= 4) return;
    const el = scrollRef.current;
    if (!el) return;

    let scrollPosition = 0;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const interval = setInterval(() => {
      scrollPosition += el.clientWidth;
      if (scrollPosition >= maxScroll) scrollPosition = 0;
      el.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [projects.length]);

  if (projects.length === 0) return null;

  const isSlider = projects.length > 4;

  return (
    <div className="mb-14">
      <h3 className="mb-4 text-xl font-semibold text-foreground">{categoryName}</h3>
      {isSlider ? (
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth md:gap-6"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((startup) => (
            <div
              key={startup.id}
              className="min-w-[260px] flex-shrink-0 sm:min-w-[280px] lg:min-w-[300px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard startup={startup} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((startup) => (
            <ProjectCard key={startup.id} startup={startup} />
          ))}
        </div>
      )}
    </div>
  );
}
