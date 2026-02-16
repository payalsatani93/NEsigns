import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
    
    // If using Lenis, also reset its scroll position
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}