/**
 * Public env (all keys must be prefixed with VITE_ in .env).
 * Use only for non-secret configuration.
 */
const env = {
  /** API base URL for backend (e.g. https://api.example.com). Leave empty to use same-origin /api (proxy). */
  get apiBaseUrl(): string {
    return (import.meta.env.VITE_API_URL as string) ?? "";
  },
  get isProduction(): boolean {
    return import.meta.env.PROD;
  },
};

/**
 * Full URL for an API path. Uses VITE_API_URL when set; otherwise same-origin /api.
 */
export function getApiUrl(path: string): string {
  const base = env.apiBaseUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}

export default env;
