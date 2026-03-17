"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { KitSignupEmbed } from "@/components/sections/KitSignupEmbed";
import { pageContent } from "@/lib/content";

export function GuideContentsSection() {
  return (
    <section id="guide-contents" aria-labelledby="guide-contents-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex justify-center text-center">
          <SectionHeader id="guide-contents-heading" title={pageContent.guideContents.title} />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pageContent.guideContents.cards.map((card) => (
            <article key={card.title} className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <h3 className="text-[1.08rem] font-semibold text-brand-navy sm:text-[1.14rem]">{card.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-7 text-brand-muted">{card.hook}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.98rem] leading-7 text-brand-text">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-4 text-[0.96rem] font-medium leading-7 text-brand-navy">{"-> "}{card.outcome}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <KitSignupEmbed />
        </div>
      </Container>
    </section>
  );
}
