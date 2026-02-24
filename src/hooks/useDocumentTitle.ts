import { useEffect } from "react";

const SITE_NAME = "Ai Mill";

/**
 * Set document title for the current page. Resets to default on unmount.
 */
export function useDocumentTitle(title: string | undefined): void {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
