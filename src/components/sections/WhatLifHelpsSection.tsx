import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function WhatLifHelpsSection() {
  return (
    <section id="what-lif-helps" aria-labelledby="what-lif-helps-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="what-lif-helps-heading" title={pageContent.whatLifHelps.title} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pageContent.whatLifHelps.cards.map((card) => (
            <li key={card.title} className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg border border-brand-border bg-brand-bg">
                <Image src={card.icon} alt="" width={48} height={48} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[1.12rem] font-semibold text-brand-navy sm:text-[1.2rem]">{card.title}</h3>
              <p className="mt-3 text-[1rem] leading-8 text-brand-text">{card.body}</p>
              <p className="mt-3 text-[0.96rem] leading-7 text-brand-muted">{card.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
