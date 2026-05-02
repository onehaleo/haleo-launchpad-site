import { useCallback, useEffect, useState } from "react";
import { Github, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import OutreachTracker from "@/components/admin/OutreachTracker";
import {
  authenticateWithGithubOauth,
  GithubOauthError,
  getCmsOauthBaseUrl,
  getOauthSiteId,
} from "@/lib/netlifyGithubAuth";

const TOKEN_KEY = "haleo_admin_gh_token";
const LOGIN_KEY = "haleo_admin_gh_login";

async function fetchGitHubLogin(token: string): Promise<string> {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) throw new Error("Could not load GitHub profile");
  const data = (await res.json()) as { login?: string };
  if (!data.login) throw new Error("Missing GitHub login");
  return data.login;
}

function getAllowedLogins(): Set<string> | null {
  const raw = import.meta.env.VITE_ADMIN_ALLOWED_GITHUB_USERS?.trim();
  if (!raw) return null;
  return new Set(
    raw
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
  );
}

const Admin = () => {
  const [token, setToken] = useState<string | null>(() =>
    sessionStorage.getItem(TOKEN_KEY)
  );
  const [login, setLogin] = useState<string | null>(() =>
    sessionStorage.getItem(LOGIN_KEY)
  );
  const [authError, setAuthError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    fetchGitHubLogin(token)
      .then((l) => {
        if (cancelled) return;
        setLogin(l);
        sessionStorage.setItem(LOGIN_KEY, l);
        const allow = getAllowedLogins();
        if (allow && !allow.has(l.toLowerCase())) {
          setAuthError("Your GitHub account is not authorized for this workspace.");
          sessionStorage.removeItem(TOKEN_KEY);
          sessionStorage.removeItem(LOGIN_KEY);
          setToken(null);
          setLogin(null);
        }
      })
      .catch(() => {
        if (cancelled) return;
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(LOGIN_KEY);
        setToken(null);
        setLogin(null);
      });
    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleSignIn = useCallback(async () => {
    setAuthError(null);
    setBusy(true);
    try {
      const { token: t } = await authenticateWithGithubOauth();
      sessionStorage.setItem(TOKEN_KEY, t);
      setToken(t);
    } catch (e) {
      setAuthError(e instanceof GithubOauthError ? e.message : "Sign-in failed.");
    } finally {
      setBusy(false);
    }
  }, []);

  const handleSignOut = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(LOGIN_KEY);
    setToken(null);
    setLogin(null);
  }, []);

  return (
    <PageTransition animate={false}>
      <SEOHead
        title="Internal · Haleo"
        description="Private Haleo workspace — not indexed."
        keywords="haleo, internal"
        robots="noindex, nofollow"
      />
      <div className="min-h-screen bg-haleo-cloud">
        <Navigation />
        <main className="mx-auto max-w-[1600px] px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mb-6 rounded-2xl border border-purple-100/80 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col gap-4 border-b border-haleo-cloud pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-haleo-violet">
                  Internal
                </p>
                <h1 className="text-2xl font-bold text-haleo-ink sm:text-3xl">
                  Haleo workspace
                </h1>
                <p className="mt-1 max-w-2xl text-sm text-haleo-gray">
                  Outreach and pipeline tracking. Sign in with the same GitHub account you use for
                  the Decap CMS (
                  <span className="font-mono text-xs">{getCmsOauthBaseUrl()}</span>,{" "}
                  <span className="font-mono text-xs">site_id={getOauthSiteId()}</span>). Add{" "}
                  <code className="rounded bg-haleo-cloud px-1">https://admin.onehaleo.com</code>{" "}
                  to the OAuth proxy <code className="rounded bg-haleo-cloud px-1">ORIGIN</code>{" "}
                  list if you use that host.
                </p>
              </div>
              {token ? (
                <div className="flex flex-wrap items-center gap-3">
                  {login && (
                    <span className="text-sm text-haleo-gray">
                      Signed in as <strong className="text-haleo-ink">{login}</strong>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="inline-flex items-center gap-2 rounded-full border border-input bg-white px-4 py-2 text-sm font-medium text-haleo-ink hover:bg-haleo-cloud"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={busy}
                  onClick={handleSignIn}
                  className="gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
                >
                  <Github className="h-4 w-4" />
                  {busy ? "Opening GitHub…" : "Sign in with GitHub"}
                </button>
              )}
            </div>

            {authError && (
              <div
                className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                role="alert"
              >
                {authError}
              </div>
            )}

            {!token ? (
              <p className="text-sm text-haleo-gray">
                This area is not linked from the public marketing site. Bookmark{" "}
                <span className="font-mono text-xs">/admin</span> on your own device.
              </p>
            ) : (
              <OutreachTracker />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Admin;
