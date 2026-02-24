"use client";

import Link from "next/link";
import { headerCategories } from "@/lib/header-categories";

type HeaderProps = {
  variant?: "home" | "dashboard" | "login";
};

export function Header({ variant = "home" }: HeaderProps) {
  const isDarkHeader = variant === "home";
  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm ${
        isDarkHeader ? "border-white/10 bg-primary-dark" : "border-border/60 bg-card"
      }`}
    >
      <div className="relative mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight sm:text-xl ${
            isDarkHeader ? "text-white" : "text-foreground"
          }`}
        >
          MyManifest
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5">
          {variant === "home" && (
            <>
              <Link
                href="/#discover"
                className={`text-sm font-medium md:hidden ${isDarkHeader ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary"}`}
              >
                Discover
              </Link>
              <div className="group relative hidden md:block">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium ${isDarkHeader ? "text-white/90 hover:bg-white/10 hover:text-white" : "text-foreground/80 hover:bg-primary-light/30 hover:text-primary"}`}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Discover
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Full-width mega menu: fixed below TopBar + header (home has TopBar), spans viewport */}
                <div className="invisible fixed left-0 right-0 top-[6rem] z-50 w-full opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="border-t border-slate-200 bg-white">
                    <div className="mx-auto flex max-w-[1400px] flex-row flex-nowrap justify-between gap-0 px-8 py-8 lg:px-12">
                      {headerCategories.map((main) => (
                        <div
                          key={main.name}
                          className="flex min-w-0 flex-1 flex-col border-r border-slate-100 pl-4 pr-4 first:pl-0 last:border-r-0 last:pr-0 lg:pl-6 lg:pr-6 first:lg:pl-0"
                        >
                          <div className="mb-4 pb-3 border-b border-slate-100">
                            <span className="block text-sm font-bold uppercase tracking-wider text-slate-900">
                              {main.name}
                            </span>
                            {main.description && (
                              <span className="mt-0.5 block text-xs font-normal normal-case tracking-normal text-slate-500">
                                {main.description}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            {main.sub.map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/#category-${sub.slug}`}
                                className="group/link block rounded-md py-2 pl-1 pr-2 transition-colors hover:bg-slate-50"
                              >
                                <span className="block text-sm font-semibold text-slate-800 group-hover/link:text-primary">
                                  {sub.name}
                                </span>
                                {sub.description && (
                                  <span className="block text-xs text-slate-500 group-hover/link:text-slate-700">
                                    {sub.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {variant === "home" && (
            <>
              <Link
                href="/dashboard"
                className={`hidden rounded-lg px-4 py-2 text-sm font-medium sm:block ${
                  isDarkHeader
                    ? "border border-white/40 bg-transparent text-white hover:bg-white/10"
                    : "border border-border text-foreground hover:bg-primary-light/30"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/login"
                className={`text-sm font-medium ${isDarkHeader ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary"}`}
              >
                Log in
              </Link>
              <Link
                href="/login"
                className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-sm ${
                  isDarkHeader
                    ? "bg-white text-primary-dark hover:bg-white/95"
                    : "bg-primary text-white hover:bg-primary-hover"
                }`}
              >
                Get started
              </Link>
            </>
          )}

          {variant === "dashboard" && (
            <>
              <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary">
                Discover
              </Link>
              <span className="text-sm text-foreground/50">Dashboard</span>
              <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-primary">
                Log out
              </Link>
            </>
          )}

          {variant === "login" && (
            <Link href="/" className={`text-sm font-medium ${isDarkHeader ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary"}`}>
              Back
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
