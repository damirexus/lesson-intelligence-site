"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function PracticeSection() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section id="practice" aria-labelledby="practice-heading" className="border-y border-brand-border bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          id="practice-heading"
          title={pageContent.practice.title}
          description="A concrete classroom example of how LIF supports thinking-driven lesson design."
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-10">
          <div className="space-y-6">
            <article className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-purple">Classroom Setup</h3>
              <p className="mt-4 text-[1rem] leading-8 text-brand-text">{pageContent.practice.setup}</p>
            </article>
            <article className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-purple">Result</h3>
              <p className="mt-4 text-[1rem] leading-8 text-brand-text">{pageContent.practice.outcome}</p>
            </article>
          </div>
          <article className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-purple">LIF Moves</h3>
            <ol className="mt-5 space-y-4">
              {pageContent.practice.moves.map((move, index) => (
                <li key={move.layer} className="rounded-xl border border-brand-border bg-brand-bg">
                  <button
                    type="button"
                    onClick={() => setOpenStep(openStep === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                    aria-expanded={openStep === index}
                  >
                    <h4 className="text-[1.02rem] font-semibold text-brand-navy">
                      Step {index + 1}: {move.layer}
                    </h4>
                    <span className="text-xl leading-none text-brand-purple">{openStep === index ? "−" : "+"}</span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{
                      gridTemplateRows: openStep === index ? "1fr" : "0fr",
                      opacity: openStep === index ? 1 : 0
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-brand-border px-4 pb-4 pt-3">
                      <p className="text-[0.98rem] leading-7 text-brand-text">{move.action}</p>
                      <p className="mt-2 text-[0.96rem] leading-7 text-brand-muted">{move.student}</p>
                    </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </Container>
    </section>
  );
}
