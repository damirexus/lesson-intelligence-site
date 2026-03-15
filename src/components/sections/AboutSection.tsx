import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { pageContent } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-4xl animate-fade-up">
          <h2
            id="about-heading"
            className="font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
          >
            {pageContent.about.title}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-purple sm:text-base">
            {pageContent.about.subtitle}
          </p>
        </div>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <aside className="order-1 interactive-tab rounded-2xl border border-brand-border bg-white p-4 shadow-soft sm:p-5 lg:order-2 lg:w-full">
            <Image
              src="/images/damir-odobasic.png"
              alt="Portrait of Damir Odobasic"
              width={560}
              height={700}
              className="h-auto w-full rounded-xl object-cover"
            />
          </aside>
          <div className="order-2 lg:order-1">
            <div className="interactive-tab rounded-2xl border border-brand-border bg-white px-6 py-6 text-[1rem] leading-8 text-brand-text shadow-soft sm:px-7 sm:py-7">
              <ul className="space-y-3">
                {pageContent.about.points.map((point) => (
                  <li key={point} className="grid grid-cols-[0.5rem_1fr] items-start gap-x-3">
                    <span className="mt-[0.85rem] h-2 w-2 rounded-full bg-brand-purple" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:contact@lessonintelligence.com"
              className="mt-4 flex w-fit items-center justify-center rounded-lg bg-brand-purple px-5 py-3.5 text-[0.98rem] font-semibold text-white transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple mx-auto lg:mx-0"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
