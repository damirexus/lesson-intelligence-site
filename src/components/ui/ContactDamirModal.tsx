"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ContactDamirModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactDamirModal({ isOpen, onClose }: ContactDamirModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!subject.trim() || !message.trim()) {
      setError("Please add a subject and message.");
      return;
    }

    const mailto = `mailto:contact@lessonintelligence.com?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(
      message.trim()
    )}`;
    window.location.href = mailto;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center bg-[#0b132b]/55 px-0 py-0 animate-fade-up sm:items-center sm:px-4 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-brand-border bg-white p-6 shadow-soft sm:max-h-[90vh] sm:max-w-xl sm:rounded-2xl sm:p-8">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg text-brand-muted transition hover:bg-brand-bg hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          aria-label="Close contact modal"
        >
          ×
        </button>
        <h3 id="contact-modal-title" className="font-display text-3xl uppercase tracking-[0.03em] text-brand-navy sm:text-[2.15rem]">
          Send Damir a message
        </h3>
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-brand-navy">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="subject"
              className="mt-2 w-full rounded-lg border border-brand-border px-4 py-3 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-brand-navy">
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="message"
              rows={6}
              className="mt-2 w-full rounded-lg border border-brand-border px-4 py-3 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-lg border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-purple hover:text-brand-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
