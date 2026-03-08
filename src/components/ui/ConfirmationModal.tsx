"use client";

import { useEffect, useRef } from "react";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0b132b]/55 px-4 py-8 animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      aria-describedby="guide-modal-body"
    >
      <div className="relative w-full max-w-xl rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-8">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg text-brand-muted transition hover:bg-brand-bg hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          aria-label="Close confirmation modal"
        >
          ×
        </button>

        <h3 id="guide-modal-title" className="font-display text-3xl uppercase tracking-[0.03em] text-brand-navy sm:text-[2.15rem]">
          Check your inbox
        </h3>
        <p id="guide-modal-body" className="mt-4 text-[1rem] leading-8 text-brand-text">
          Your LIF Teacher Guide has been sent to your email. If you don&apos;t see it in a minute, check your spam or promotions
          folder.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
          >
            Open Gmail
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-lg border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-purple hover:text-brand-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
