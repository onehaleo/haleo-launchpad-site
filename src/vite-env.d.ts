/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST URL for workflow review form (e.g. Formspree `https://formspree.io/f/xxxxxxxx`). */
  readonly VITE_WORKFLOW_FORM_ENDPOINT?: string;
  /** Decap CMS OAuth proxy base (no trailing slash). Defaults to production Haleo proxy. */
  readonly VITE_CMS_OAUTH_BASE_URL?: string;
  /** Override `site_id` query param for OAuth (defaults to current host, or `onehaleo.com` on localhost). */
  readonly VITE_ADMIN_SITE_ID?: string;
  /** Optional comma-separated GitHub usernames allowed to use `/internal` (lowercase). */
  readonly VITE_ADMIN_ALLOWED_GITHUB_USERS?: string;
}
