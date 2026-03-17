"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Container } from "@/components/layout/Container";
import { pageContent } from "@/lib/content";

export function FiveLayerStructureSection() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isZoomOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isZoomOpen]);

  return (
    <section id="five-layer-structure" aria-labelledby="five-layer-structure-heading" className="bg-brand-bg py-16 sm:py-20 lg:py-24">
      <Container>
        <h2
          id="five-layer-structure-heading"
          className="text-center font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
        >
          The Five Layers of LIF
        </h2>
        <div className="mt-8 w-full interactive-tab rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft sm:p-7 lg:mx-auto lg:max-w-[34rem]">
          <div className="lg:hidden">
            <Image
              src="/assets/lif_layers.png"
              alt="The Five Layers of LIF"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl border border-brand-border"
              priority
            />
          </div>
          <button
            type="button"
            onClick={() => setIsZoomOpen(true)}
            className="hidden w-full cursor-zoom-in lg:block"
            aria-label="Open zoomed preview of The Five Layers of LIF image"
          >
            <Image
              src="/assets/lif_layers.png"
              alt="The Five Layers of LIF"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl border border-brand-border"
              priority
            />
          </button>
        </div>

        <ul className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pageContent.testimonials.quotes.map((quote) => (
            <li key={quote.author} className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <blockquote className="text-[1.04rem] leading-8 text-brand-text">{quote.text}</blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-brand-purple">{quote.author}</p>
            </li>
          ))}
        </ul>

        {isMounted && isZoomOpen
          ? createPortal(
              <div
                className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-navy/80 px-4 py-6"
                role="dialog"
                aria-modal="true"
                aria-label="Zoomed image preview"
                onClick={() => setIsZoomOpen(false)}
              >
                <div
                  className="relative w-full max-w-5xl rounded-2xl border border-brand-border bg-white p-3 shadow-soft sm:p-4"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setIsZoomOpen(false)}
                    className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-xl text-brand-muted transition hover:bg-brand-bg hover:text-brand-navy"
                    aria-label="Close zoomed preview"
                  >
                    ×
                  </button>
                  <Image
                    src="/assets/lif_layers.png"
                    alt="Zoomed The Five Layers of LIF"
                    width={2000}
                    height={1400}
                    className="h-auto w-full rounded-xl border border-brand-border"
                  />
                </div>
              </div>,
              document.body
            )
          : null}
      </Container>
    </section>
  );
}
