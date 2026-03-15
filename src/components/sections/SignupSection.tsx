import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { KitSignupEmbed } from "./KitSignupEmbed";

export function SignupSection() {
  return (
    <section id="guide" aria-labelledby="guide-heading" className="border-y border-brand-border bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <h2
          id="guide-heading"
          className="font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
        >
          DOWNLOAD THE LIF GUIDE
        </h2>
        <div className="mt-12 max-w-xl">
          <div className="interactive-tab overflow-hidden rounded-2xl border border-brand-border bg-brand-bg p-5">
            <Image
              src="/images/lif-teachers-guide.png"
              alt="LIF Teacher's Guide cover image"
              width={750}
              height={520}
              className="h-auto w-full rounded-lg border border-brand-border"
            />
          </div>
          <div className="mt-6 md:hidden">
            <KitSignupEmbed />
          </div>
        </div>
      </Container>
    </section>
  );
}
