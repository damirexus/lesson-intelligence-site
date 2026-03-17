"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function LifInActionSection() {
  return (
    <section id="lif-in-action" aria-labelledby="lif-in-action-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <h2
          id="lif-in-action-heading"
          className="text-center font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
        >
          LIF in action
        </h2>
        <div className="mt-8 w-full interactive-tab rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft sm:p-7">
          <div className="space-y-4 lg:hidden">
            <Image
              src="/assets/beforelif.png"
              alt="Before LIF lesson design"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl border border-brand-border"
            />
            <Image
              src="/assets/afterlif.png"
              alt="After LIF lesson design"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl border border-brand-border"
            />
          </div>

          <div className="hidden lg:block">
            <Image
              src="/assets/before_after.png"
              alt="Before and after lesson design using LIF"
              width={1400}
              height={900}
              className="h-auto w-full rounded-xl border border-brand-border"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
