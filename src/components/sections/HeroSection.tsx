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
  const highlightedPhrase = "Thinking Less.";
  const hasHighlight = pageContent.hero.title.includes(highlightedPhrase);
  const [headlineStart, headlineEnd] = hasHighlight
    ? pageContent.hero.title.split(highlightedPhrase)
    : [pageContent.hero.title, ""];

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
    <section id="hero" aria-labelledby="hero-title" className="border-b border-brand-border bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-x-16 lg:gap-y-1">
          <div className="order-1 animate-fade-up lg:col-start-1 lg:row-start-1 lg:max-w-3xl">
            <h1
              id="hero-title"
              className="mt-3 max-w-4xl font-display text-[2.4rem] uppercase leading-[1.08] text-brand-navy sm:text-[2.75rem] lg:max-w-3xl lg:text-[3.2rem]"
            >
              {headlineStart}
              {hasHighlight ? (
                <span className="decoration-[#f4c542] underline decoration-[4px] underline-offset-[6px]">
                  {highlightedPhrase}
                </span>
              ) : null}
              {headlineEnd}
            </h1>
          </div>
          <aside className="hidden w-full max-w-[20rem] animate-fade-up rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft sm:max-w-none sm:p-7 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:block">
            <Image
              src="/images/lif-teachers-guide.png"
              alt="Cover of the LIF Teacher's Guide"
              width={700}
              height={480}
              className="h-auto w-full rounded-xl border border-brand-border"
            />
          </aside>
          <div className="order-2 animate-fade-up lg:col-start-1 lg:row-start-2 lg:max-w-3xl">
            <p className="-mt-1 max-w-2xl whitespace-pre-line text-[1.02rem] leading-8 text-brand-text sm:-mt-1 sm:text-[1.1rem]">
              {pageContent.hero.subtitle}
            </p>
          </div>
          <div className="order-3 animate-fade-up mt-1 max-w-2xl sm:mt-2 lg:col-start-1 lg:row-start-3 lg:mt-0">
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
                placeholder="email"
                aria-invalid={error ? "true" : "false"}
                className="w-full rounded-lg border border-brand-border bg-white px-4 py-3.5 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              />
              <div className="sm:min-w-[16rem]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-lg shadow-brand-purple/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {isSubmitting ? "Sending..." : pageContent.hero.primaryCta}
                </button>
              </div>
            </form>
            {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
            <p className="mt-5 rounded-xl border border-brand-border bg-brand-bg p-4 text-[1rem] leading-7 text-brand-text sm:mt-6">
              {pageContent.hero.testimonial.text}{" "}
              <span className="font-semibold uppercase tracking-[0.06em] text-brand-purple">
                {pageContent.hero.testimonial.author}
              </span>
            </p>
          </div>
        </div>
      </Container>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
