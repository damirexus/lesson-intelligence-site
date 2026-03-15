"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(pageContent.faq.items.length > 0 ? 0 : null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          id="faq-heading"
          title={pageContent.faq.title}
          description="Clear answers to practical questions teachers ask before using LIF."
        />
        <div className="mt-12 max-w-4xl space-y-4">
          {pageContent.faq.items.map((item, index) => (
            <article key={item.question} className="interactive-tab rounded-2xl border border-brand-border bg-white shadow-soft">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-[1.02rem] font-semibold text-brand-navy sm:text-[1.08rem]">{item.question}</h3>
                <span className="text-xl leading-none text-brand-purple">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                style={{
                  gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-brand-border px-6 pb-5 pt-4 sm:px-7">
                    <p className="text-[0.98rem] leading-8 text-brand-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
