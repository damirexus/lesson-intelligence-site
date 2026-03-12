import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function ProblemSection() {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="problem-heading" title={pageContent.problem.title} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pageContent.problem.cards.map((card) => (
            <li
              key={card.title}
              className="interactive-tab flex min-h-44 flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-purple">{card.title}</p>
              <p className="mt-4 text-[1.02rem] leading-8 text-brand-text">{card.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
