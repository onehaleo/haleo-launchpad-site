/**
 * GitHub OAuth using the same Decap/Netlify CMS handshake as decap-cms-lib-auth
 * against your deployed proxy (e.g. cms-oauth-github on Vercel).
 *
 * Ensure Vercel `ORIGIN` includes every host that opens this flow (e.g. `https://onehaleo.com`).
 */

const DEFAULT_OAUTH_BASE = "https://cms-oauth-github.vercel.app";

export function getCmsOauthBaseUrl(): string {
  return (import.meta.env.VITE_CMS_OAUTH_BASE_URL || DEFAULT_OAUTH_BASE).replace(/\/$/, "");
}

/** `site_id` query param sent to `/api/auth` (must align with allowed origins on the proxy). */
export function getOauthSiteId(): string {
  const fromEnv = import.meta.env.VITE_ADMIN_SITE_ID?.trim();
  if (fromEnv) return fromEnv;
  const host = window.location.hostname;
  if (host === "localhost") return "onehaleo.com";
  return window.location.host;
}

export class GithubOauthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GithubOauthError";
  }
}

export type GithubOauthResult = { token: string };

/**
 * Opens the OAuth popup to `baseUrl/api/auth?...` and resolves with a GitHub access token (repo scope by default).
 */
export function authenticateWithGithubOauth(options?: {
  scope?: string;
}): Promise<GithubOauthResult> {
  const base_url = getCmsOauthBaseUrl();
  const auth_endpoint = "api/auth";
  const provider = "github";
  const scope = options?.scope ?? "repo,user";
  const siteId = getOauthSiteId();

  return new Promise((resolve, reject) => {
    let settled = false;
    let authWindow: Window | null = null;
    let pollTimer: ReturnType<typeof setInterval> | null = null;

    const cleanup = () => {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
      window.removeEventListener("message", onHandshake);
      window.removeEventListener("message", onAuthorized);
    };

    const resolveOnce = (val: GithubOauthResult) => {
      if (settled) return;
      settled = true;
      cleanup();
      authWindow?.close();
      resolve(val);
    };

    const rejectOnce = (err: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      authWindow?.close();
      reject(err);
    };

    const onAuthorized: EventListener = (ev) => {
      const e = ev as MessageEvent;
      if (e.origin !== base_url) return;

      if (typeof e.data === "string" && e.data.startsWith(`authorization:${provider}:success:`)) {
        const m = e.data.match(new RegExp(`^authorization:${provider}:success:(.+)$`));
        if (!m) return;
        try {
          const parsed = JSON.parse(m[1]) as { token?: string };
          if (parsed.token) resolveOnce({ token: parsed.token });
          else rejectOnce(new GithubOauthError("No token in OAuth response"));
        } catch (err) {
          rejectOnce(err instanceof Error ? err : new GithubOauthError(String(err)));
        }
      }

      if (typeof e.data === "string" && e.data.startsWith(`authorization:${provider}:error:`)) {
        const m = e.data.match(new RegExp(`^authorization:${provider}:error:(.+)$`));
        try {
          const body = m ? JSON.parse(m[1]) : {};
          rejectOnce(
            new GithubOauthError(typeof body === "string" ? body : JSON.stringify(body))
          );
        } catch {
          rejectOnce(new GithubOauthError("OAuth authorization failed"));
        }
      }
    };

    const onHandshake: EventListener = (ev) => {
      const e = ev as MessageEvent;
      if (e.data === `authorizing:${provider}` && e.origin === base_url) {
        window.removeEventListener("message", onHandshake);
        window.addEventListener("message", onAuthorized);
        authWindow?.postMessage(e.data, e.origin);
      }
    };

    window.addEventListener("message", onHandshake);

    let url = `${base_url}/${auth_endpoint}?provider=${provider}&site_id=${encodeURIComponent(siteId)}`;
    url += `&scope=${encodeURIComponent(scope)}`;

    const left = window.screen.width / 2 - 480;
    const top = window.screen.height / 2 - 300;
    authWindow = window.open(
      url,
      "Netlify Authorization",
      `width=960,height=600,top=${top},left=${left}`
    );

    if (!authWindow) {
      rejectOnce(new GithubOauthError("Popup blocked — allow popups for this site."));
      return;
    }
    authWindow.focus();

    pollTimer = setInterval(() => {
      if (authWindow?.closed) {
        rejectOnce(new GithubOauthError("Sign-in window closed before completing."));
      }
    }, 400);
  });
}
