"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { KitSignupEmbed } from "@/components/sections/KitSignupEmbed";
import { pageContent } from "@/lib/content";

export function GuideContentsSection() {
  return (
    <section id="guide-contents" aria-labelledby="guide-contents-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="guide-contents-heading" title={pageContent.guideContents.title} />
        <p className="mt-6 max-w-4xl text-[1rem] leading-8 text-brand-muted sm:text-[1.08rem]">{pageContent.guideContents.sentence}</p>

        <div className="mt-10 md:hidden">
          <p className="mb-3 text-xs tracking-[0.04em] text-brand-muted/80">Swipe right to preview</p>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {pageContent.guideContents.images.map((item) => (
              <div key={item.src} className="w-full shrink-0 snap-start">
                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-soft">
                  <Image src={item.src} alt={item.alt} width={1200} height={900} className="h-auto w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-10 hidden grid-cols-3 gap-6 md:grid">
          {pageContent.guideContents.images.map((item) => (
            <li key={item.src}>
              <div className="interactive-tab overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-soft">
                <Image src={item.src} alt={item.alt} width={1200} height={900} className="h-auto w-full" />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:hidden">
          <KitSignupEmbed />
        </div>
      </Container>
    </section>
  );
}
