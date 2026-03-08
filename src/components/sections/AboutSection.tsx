import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="about-heading" title={pageContent.about.title} />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <div className="interactive-tab rounded-2xl border border-brand-border bg-white px-6 py-6 text-[1rem] leading-8 text-brand-text shadow-soft sm:px-7 sm:py-7">
            {pageContent.about.body}
          </div>
          <aside className="interactive-tab rounded-2xl border border-brand-border bg-white p-4 shadow-soft sm:p-5 lg:w-full">
            <Image
              src="/images/damir-odobasic.png"
              alt="Portrait of Damir Odobasic"
              width={560}
              height={700}
              className="h-auto w-full rounded-xl object-cover"
            />
          </aside>
        </div>
      </Container>
    </section>
  );
}
