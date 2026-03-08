"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  initiallyVisible?: boolean;
};

export function ScrollReveal({ children, className = "", initiallyVisible = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (initiallyVisible) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    setIsReady(true);

    // Safety fallback: never keep content hidden if observer misses.
    const safetyTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 1400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            window.clearTimeout(safetyTimer);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, [initiallyVisible]);

  const classes = [
    "reveal-on-scroll",
    isReady ? "is-ready" : "",
    isVisible ? "is-visible" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
