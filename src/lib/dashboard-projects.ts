export type DashboardProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  goal: number;
  category: string;
  createdAt: string;
};

const STORAGE_KEY = "mymanifest_dashboard_projects";

export function getStoredProjects(): DashboardProject[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as DashboardProject[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function setStoredProjects(projects: DashboardProject[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function createId(): string {
  return `proj_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
