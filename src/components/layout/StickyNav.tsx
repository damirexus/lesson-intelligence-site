"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { submitEmailToKit } from "@/lib/kit";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";

export function StickyNav() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNavCta, setShowNavCta] = useState(false);

  useEffect(() => {
    const updateCtaVisibility = () => {
      const navTriggerOffset = 80;
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      // Links and CTA appear after scrolling past the hero section.
      const hasPassedHero = heroSection.getBoundingClientRect().bottom <= navTriggerOffset;
      setShowNavCta(hasPassedHero);
    };

    updateCtaVisibility();
    window.addEventListener("scroll", updateCtaVisibility, { passive: true });
    window.addEventListener("resize", updateCtaVisibility);

    return () => {
      window.removeEventListener("scroll", updateCtaVisibility);
      window.removeEventListener("resize", updateCtaVisibility);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Enter email");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email");
      return;
    }

    try {
      setIsSubmitting(true);
      await submitEmailToKit(email.trim());
      setEmail("");
      setIsModalOpen(true);
    } catch {
      setError("Try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
            <Link href="#hero" className="inline-flex items-center gap-2" aria-label="LIF Home">
              <Image
                src="/images/lif-logo.png"
                alt="Lesson Intelligence Framework logo"
                width={30}
                height={30}
                className="rounded-[4px] mix-blend-multiply"
              />
              <span className="text-sm font-semibold tracking-wide text-brand-navy">LIF</span>
            </Link>
            <div
              aria-hidden={!showNavCta}
              className={`hidden items-center transition-all duration-300 ease-out md:flex ${
                showNavCta ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <form onSubmit={handleSubmit} className="flex items-center gap-2" aria-label="Navigation signup form">
                <label htmlFor="nav-email" className="sr-only">
                  School email
                </label>
                <input
                  id="nav-email"
                  name="email_address"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="email"
                  aria-invalid={error ? "true" : "false"}
                  className="w-52 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-purple/20 transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {isSubmitting ? "Sending..." : "Download Guide"}
                </button>
              </form>
            </div>
          </div>
          {showNavCta && error ? <p className="mt-1 hidden text-xs text-red-600 md:block">{error}</p> : null}
        </Container>
      </header>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
