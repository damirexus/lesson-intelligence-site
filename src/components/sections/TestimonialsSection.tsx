import { Container } from "@/components/layout/Container";
import { pageContent } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Teacher testimonials" className="bg-brand-bg pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8">
      <Container>
        <ul className="grid gap-6 lg:grid-cols-2 lg:gap-8">
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
