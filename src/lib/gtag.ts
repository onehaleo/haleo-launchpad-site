/** GA4 measurement ID (same as index.html gtag snippet). */
export const GA_MEASUREMENT_ID = "G-THN3BJ4H91";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Virtual page view for client-side navigations (initial load is handled by gtag config in index.html). */
export function trackSpaPageView(pathWithQueryHash: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: pathWithQueryHash,
    page_title: document.title,
  });
}
