import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="testimonials-heading" title={pageContent.testimonials.title} />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {pageContent.testimonials.quotes.map((quote) => (
            <li key={quote.author} className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
              <blockquote className="text-[1.04rem] leading-8 text-brand-text">{quote.text}</blockquote>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-brand-purple">{quote.author}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
