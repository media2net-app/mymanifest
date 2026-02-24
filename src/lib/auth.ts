export const DEMO_EMAIL = "demo@mymanifest.com";
export const DEMO_PASSWORD = "Demo#Secure2025!";

const AUTH_KEY = "mymanifest_demo_auth";

export function setDemoSession(): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(AUTH_KEY, "1");
  }
}

export function clearDemoSession(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(AUTH_KEY);
  }
}

export function isDemoAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

export function validateDemoCredentials(email: string, password: string): boolean {
  return email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
}
