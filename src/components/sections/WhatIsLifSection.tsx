import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function WhatIsLifSection() {
  return (
    <section id="what-is-lif" aria-labelledby="what-is-lif-heading" className="border-y border-brand-border bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="what-is-lif-heading" title={pageContent.whatIsLif.title} description={pageContent.whatIsLif.description} />
        <blockquote className="interactive-tab mt-12 rounded-2xl border-2 border-brand-purple/30 bg-brand-bg p-8 text-[1.02rem] leading-8 text-brand-muted shadow-soft sm:p-12 sm:text-[1.08rem]">
          {pageContent.whatIsLif.claim}
        </blockquote>
      </Container>
    </section>
  );
}
