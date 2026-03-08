"use client";

import { FormEvent, useState } from "react";
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
            <p className="hidden font-display text-xl uppercase tracking-[0.08em] text-brand-navy lg:block">
              Lesson Intelligence Framework
            </p>
            <div className="hidden md:block">
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
                  placeholder="your@mail.com"
                  aria-invalid={error ? "true" : "false"}
                  className="w-52 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-lg bg-brand-purple px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-purple/20 transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {isSubmitting ? "Sending..." : "Download Guide"}
                </button>
              </form>
              {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
            </div>
          </div>
        </Container>
      </header>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
