"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login — no real auth
    console.log("Login attempted:", { email, password });
    alert("This is a dummy login. No credentials are validated.");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: branding / illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#059669] via-[#047857] to-[#065f46] opacity-95" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            MyManifest
          </Link>
          <div>
            <h2 className="text-3xl font-semibold leading-tight max-w-sm">
              Back what matters. Launch what&apos;s next.
            </h2>
            <p className="mt-4 text-white/85 max-w-sm text-lg">
              A place for creators, causes, and community. Crowdfunding meets possibility.
            </p>
          </div>
          <p className="text-sm text-white/70">
            Join thousands bringing ideas to life.
          </p>
        </div>
        {/* Decorative grid */}
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

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
