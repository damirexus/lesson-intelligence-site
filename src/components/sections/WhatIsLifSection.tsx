import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function WhatIsLifSection() {
  return (
    <section id="what-is-lif" aria-labelledby="what-is-lif-heading" className="border-y border-brand-border bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="what-is-lif-heading" title={pageContent.whatIsLif.title} description={pageContent.whatIsLif.description} />
        <blockquote className="interactive-tab mt-12 rounded-2xl border border-brand-border bg-white p-8 text-[1.18rem] font-semibold leading-9 text-brand-navy shadow-soft sm:p-12 sm:text-[1.34rem] sm:leading-10">
          {pageContent.whatIsLif.claim}
        </blockquote>
      </Container>
    </section>
  );
}
