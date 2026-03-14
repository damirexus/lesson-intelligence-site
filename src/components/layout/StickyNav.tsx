"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { submitEmailToKit } from "@/lib/kit";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";

const navLinks = [
  { href: "#what-is-lif", label: "Definiton" },
  { href: "#practice", label: "Example" },
  { href: "#about", label: "About Damir" },
  { href: "#faq", label: "FAQ" }
] as const;

export function StickyNav() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNavCta, setShowNavCta] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCtaVisibility = () => {
      const navTriggerOffset = 80;
      const videoSection = document.getElementById("video-overview");
      if (!videoSection) return;

      // Links and CTA appear once the video section reaches the nav area.
      const hasReachedVideoSection = videoSection.getBoundingClientRect().top <= navTriggerOffset;
      setShowNavCta(hasReachedVideoSection);
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
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label="Toggle navigation links"
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-white text-brand-navy transition md:hidden"
            >
              <span className="sr-only">Open navigation menu</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
            <div
              aria-hidden={!showNavCta}
              className={`hidden items-center gap-6 transition-all duration-300 ease-out md:flex md:flex-1 ${
                showNavCta ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <nav aria-label="Section links" className="hidden flex-1 justify-center xl:flex">
                <ul className="flex items-center gap-4">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 xl:ml-auto" aria-label="Navigation signup form">
                <label htmlFor="nav-email" className="sr-only">
                  School email
                </label>
                <input
                  id="nav-email"
                  name="email_address"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@mail.com"
                  aria-invalid={error ? "true" : "false"}
                  className="w-52 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-lg bg-brand-purple px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-purple/20 transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {isSubmitting ? "Sending..." : "Get the LIF Guide"}
                </button>
              </form>
              {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
            </div>
          </div>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
              isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ gridTemplateRows: isMobileMenuOpen ? "1fr" : "0fr" }}
          >
            <nav aria-label="Mobile section links" className="overflow-hidden border-t border-brand-border pb-4 pt-3">
              <ul className="space-y-1">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-semibold uppercase tracking-[0.06em] text-brand-muted transition hover:bg-brand-bg hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
