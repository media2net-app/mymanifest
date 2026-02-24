"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clearDemoSession, isDemoAuthenticated } from "@/lib/auth";
import {
  type DashboardProject,
  getStoredProjects,
  setStoredProjects,
  createId,
} from "@/lib/dashboard-projects";
import { Footer } from "@/components/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<DashboardProject[]>([]);
  const [mounted, setMounted] = useState(false);
  const [authOk, setAuthOk] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    tagline: "",
    description: "",
    goal: "",
    category: "Tech & Gadgets",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isDemoAuthenticated()) {
      router.replace("/login");
      return;
    }
    setAuthOk(true);
    setProjects(getStoredProjects());
  }, [mounted, router]);

  const saveToStorage = (next: DashboardProject[]) => {
    setProjects(next);
    setStoredProjects(next);
  };

  const handleLogout = () => {
    clearDemoSession();
    router.replace("/login");
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm({
      title: "",
      tagline: "",
      description: "",
      goal: "",
      category: "Tech & Gadgets",
    });
    setShowForm(true);
  };

  const openEditForm = (p: DashboardProject) => {
    setEditingId(p.id);
    setForm({
      title: p.title,
      tagline: p.tagline,
      description: p.description,
      goal: String(p.goal),
      category: p.category,
    });
    setShowForm(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const goalNum = parseInt(form.goal, 10) || 0;
    if (!form.title.trim()) return;

    if (editingId) {
      const next = projects.map((p) =>
        p.id === editingId
          ? {
              ...p,
              title: form.title.trim(),
              tagline: form.tagline.trim(),
              description: form.description.trim(),
              goal: goalNum,
              category: form.category,
            }
          : p
      );
      saveToStorage(next);
    } else {
      const newProject: DashboardProject = {
        id: createId(),
        title: form.title.trim(),
        tagline: form.tagline.trim(),
        description: form.description.trim(),
        goal: goalNum,
        category: form.category,
        createdAt: new Date().toISOString(),
      };
      saveToStorage([...projects, newProject]);
    }
    setShowForm(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    saveToStorage(projects.filter((p) => p.id !== id));
  };

  if (!mounted || !authOk) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/70">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
            MyManifest
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Discover
            </Link>
            <span className="text-foreground/60 text-sm">Dashboard</span>
            <button
              type="button"
              onClick={handleLogout}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Log out
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-2xl font-bold text-foreground">My projects</h1>
          <button
            type="button"
            onClick={openAddForm}
            className="rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 transition-colors shadow-lg shadow-primary/20"
          >
            + Add project
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-20 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {editingId ? "Edit project" : "Add project"}
                </h2>
                <form onSubmit={handleSaveProject} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Tagline</label>
                    <input
                      type="text"
                      value={form.tagline}
                      onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Short one-liner"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                      placeholder="Describe your project"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Goal (€)</label>
                    <input
                      type="number"
                      min="0"
                      value={form.goal}
                      onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="10000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Tech & Gadgets</option>
                      <option>Lifestyle</option>
                      <option>Community</option>
                      <option>Games</option>
                      <option>Environment</option>
                      <option>Education</option>
                      <option>Art</option>
                      <option>Design</option>
                      <option>Film & Video</option>
                      <option>Music</option>
                    </select>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold py-3 transition-colors"
                    >
                      {editingId ? "Save changes" : "Add project"}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setShowForm(false); setEditingId(null); }}
                      className="rounded-xl border border-border bg-card text-foreground font-medium py-3 px-6 hover:bg-primary-light/30 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card/50 p-12 text-center">
            <p className="text-foreground/70 mb-4">You haven&apos;t added any projects yet.</p>
            <button
              type="button"
              onClick={openAddForm}
              className="rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 transition-colors"
            >
              Add your first project
            </button>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <li
                key={p.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-semibold text-foreground text-lg line-clamp-2">{p.title}</h3>
                  <span className="text-xs font-medium text-foreground/60 shrink-0">{p.category}</span>
                </div>
                {p.tagline && (
                  <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{p.tagline}</p>
                )}
                <p className="text-sm text-foreground/60 mb-4">
                  Goal: €{p.goal.toLocaleString("en")}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => openEditForm(p)}
                    className="rounded-lg border border-border bg-background text-foreground text-sm font-medium px-4 py-2 hover:bg-primary-light/30 hover:border-primary/50 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(p.id)}
                    className="rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm font-medium px-4 py-2 hover:bg-red-100 transition-colors dark:border-red-800 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
}
