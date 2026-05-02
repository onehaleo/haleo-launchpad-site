/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST URL for workflow review form (e.g. Formspree `https://formspree.io/f/xxxxxxxx`). */
  readonly VITE_WORKFLOW_FORM_ENDPOINT?: string;
}
