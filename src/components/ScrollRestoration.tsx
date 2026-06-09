import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, number>();

/**
 * Forward navigation (PUSH/REPLACE) to a new path scrolls to top.
 * Browser back/forward (POP) restores the previous scroll position for that history entry.
 */
export default function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(location.pathname);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;

    if (navigationType === "POP") {
      const saved = scrollPositions.get(location.key);
      if (saved !== undefined) {
        window.scrollTo(0, saved);
        return;
      }
    }

    if (
      (navigationType === "PUSH" || navigationType === "REPLACE") &&
      pathnameChanged &&
      !location.hash
    ) {
      window.scrollTo(0, 0);
    }

    return () => {
      scrollPositions.set(location.key, window.scrollY);
    };
  }, [
    location.key,
    location.pathname,
    location.search,
    location.hash,
    navigationType,
  ]);

  return null;
}
