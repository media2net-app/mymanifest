"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  DEMO_EMAIL,
  DEMO_PASSWORD,
  setDemoSession,
  validateDemoCredentials,
} from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (validateDemoCredentials(email, password)) {
      setDemoSession();
      router.push("/dashboard");
      return;
    }
    setError("Invalid email or password. Use the demo login for quick access.");
  };

  const handleDemoLogin = () => {
    setPassword(DEMO_PASSWORD);
    setError("");
    setDemoSession();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: branding / illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#14532d] opacity-95" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            MyManifest
          </Link>
          <div>
            <h2 className="text-3xl font-semibold leading-tight max-w-sm">
              Launch an Idea. Fund the Future.
            </h2>
            <p className="mt-4 text-white/90 max-w-sm text-sm leading-relaxed">
              Short summary of the product, app, or service. Highlight unique features, value proposition, and why it&apos;s worth funding. Include call-to-action for backers.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs" aria-hidden>✓</span>
                  <span className="text-white/90">Goal 1 — Describe key milestone or outcome</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs" aria-hidden>✓</span>
                  <span className="text-white/90">Goal 2 — Outline a major benefit or feature</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs" aria-hidden>✓</span>
                  <span className="text-white/90">Goal 3 — List another aim or purpose</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Learn more & support — www.mymanifest.eu
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }} />
        </div>
      </div>

      {/* Right: login form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 bg-background">
        <div className="w-full max-w-md mx-auto">
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-2xl font-bold text-foreground tracking-tight">
              MyManifest
            </Link>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Welcome back
          </h1>
          <p className="mt-2 text-foreground/70">
            Sign in to your account to continue.
          </p>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="mt-6 w-full rounded-xl border-2 border-primary bg-primary/10 text-primary font-semibold py-3.5 px-4 hover:bg-primary/20 transition-colors"
          >
            Demo login (instant access)
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-foreground/50">or sign in with email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg px-4 py-2">
                {error}
              </p>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                autoComplete="current-password"
              />
              <p className="mt-1.5 text-xs text-foreground/50">
                Demo: {DEMO_EMAIL} / Demo#Secure2025!
              </p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-foreground/70">Remember me</span>
              </label>
              <Link href="#" className="text-primary hover:text-primary-hover font-medium">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 px-4 transition-colors shadow-lg shadow-primary/25 hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-foreground/70 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-primary font-semibold hover:text-primary-hover">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
