import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function PracticeSection() {
  return (
    <section id="practice" aria-labelledby="practice-heading" className="border-y border-brand-border bg-brand-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader id="practice-heading" title={pageContent.practice.title} description={pageContent.practice.intro} />
        <div className="mt-12">
          <div className="space-y-6">
            {pageContent.practice.useCases.map((useCase) => (
              <article key={useCase.title} className="interactive-tab rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:p-7">
                <h4 className="text-[1.08rem] font-semibold text-brand-navy">{useCase.title}</h4>
                <p className="mt-3 text-[1rem] leading-8 text-brand-text">{useCase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
