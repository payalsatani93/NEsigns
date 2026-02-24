"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        allowNestedScroll: true,
        prevent: (node) =>
          Boolean(
            node.closest(
              '[role="dialog"], [aria-modal="true"], [data-overlay-container], [data-lenis-prevent]',
            ),
          ),
      }}
    >
      {children}
    </ReactLenis>
  );
} 
