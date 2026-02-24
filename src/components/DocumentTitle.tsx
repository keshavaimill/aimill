import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SITE_NAME = "Ai Mill";
const TITLES: Record<string, string> = {
  "/": "The Complete AI Agent Platform",
  "/platform": "Platform",
  "/solutions": "Solutions",
  "/consulting": "Consulting",
  "/industries": "Industries",
  "/about": "About",
  "/contact": "Contact",
};

function getTitle(pathname: string): string {
  if (TITLES[pathname]) return TITLES[pathname];
  if (pathname.startsWith("/solutions/")) return "Solution";
  if (pathname.startsWith("/industries/")) return "Industry";
  return SITE_NAME;
}

export function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = getTitle(pathname);
    document.title = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  }, [pathname]);
  return null;
}
