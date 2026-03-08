"use client";

import { FormEvent, useState } from "react";
import { pageContent } from "@/lib/content";
import { submitEmailToKit } from "@/lib/kit";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";

export function KitSignupEmbed() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <div className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Teacher guide signup form">
          <label htmlFor="teacher-email" className="block text-[0.98rem] font-medium text-brand-navy">
            Get the Free LIF Teacher&apos;s Guide
          </label>
          <input
            id="teacher-email"
            name="email_address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@mail.com"
            aria-invalid={error ? "true" : "false"}
            className="w-full rounded-lg border border-brand-border px-4 py-3.5 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-5 py-3.5 text-[0.98rem] font-semibold text-white shadow-lg shadow-brand-purple/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          >
            {isSubmitting ? "Sending..." : pageContent.guide.cta}
          </button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      </div>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
