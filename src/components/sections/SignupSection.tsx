import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { KitSignupEmbed } from "./KitSignupEmbed";

export function SignupSection() {
  return (
    <section id="guide" aria-labelledby="guide-heading" className="border-y border-brand-border py-20 sm:py-24 lg:py-28">
      <Container>
        <h2 id="guide-heading" className="sr-only">
          Get the Free LIF Teacher&apos;s Guide
        </h2>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="interactive-tab overflow-hidden rounded-2xl border border-brand-border bg-brand-bg p-5">
            <Image
              src="/images/lif-teachers-guide.png"
              alt="LIF Teacher's Guide cover image"
              width={750}
              height={520}
              className="h-auto w-full rounded-lg border border-brand-border"
            />
          </div>
          <div className="self-start lg:sticky lg:top-24">
            <KitSignupEmbed />
          </div>
        </div>
      </Container>
    </section>
  );
}
