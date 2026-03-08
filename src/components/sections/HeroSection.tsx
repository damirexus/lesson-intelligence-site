"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { pageContent } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { submitEmailToKit } from "@/lib/kit";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const highlightedPhrase = "AI-infused";
  const [headlineStart, headlineEnd] = pageContent.hero.title.split(highlightedPhrase);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      await submitEmailToKit(email.trim());
      setEmail("");
      setIsModalOpen(true);
    } catch {
      setError("We could not send the guide right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" aria-labelledby="hero-title" className="border-b border-brand-border py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="animate-fade-up lg:max-w-3xl">
            <h1
              id="hero-title"
              className="max-w-4xl font-display text-[2.2rem] uppercase leading-[1.04] text-brand-navy sm:text-[3rem] lg:max-w-3xl lg:text-[3.55rem]"
            >
              {headlineStart}
              <span className="decoration-brand-purple underline decoration-[3px] underline-offset-[6px]">
                {highlightedPhrase}
              </span>
              {headlineEnd}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.04rem] leading-8 text-brand-muted sm:mt-7 sm:text-[1.12rem]">{pageContent.hero.subtitle}</p>
            <div className="mt-8 max-w-2xl sm:mt-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center" aria-label="Hero signup form">
                <label htmlFor="hero-email" className="sr-only">
                  School email
                </label>
                <input
                  id="hero-email"
                  name="email_address"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@mail.com"
                  aria-invalid={error ? "true" : "false"}
                  className="w-full rounded-lg border border-brand-border bg-white px-4 py-3.5 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                />
                <div className="sm:min-w-[16rem]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-brand-purple/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                  >
                    {isSubmitting ? "Sending..." : pageContent.hero.primaryCta}
                  </button>
                </div>
              </form>
              {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
            </div>
          </div>
          <aside className="animate-fade-up rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft sm:p-7">
            <Image
              src="/images/lif-teachers-guide.png"
              alt="Cover of the LIF Teacher's Guide"
              width={700}
              height={480}
              className="h-auto w-full rounded-xl border border-brand-border"
            />
          </aside>
        </div>
      </Container>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
