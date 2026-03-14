import { Container } from "@/components/layout/Container";

export function FooterSection() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10">
            <div className="space-y-2">
              <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-brand-navy">Lesson Intelligence Framework</h3>
              <p className="max-w-sm text-sm leading-7 text-brand-muted">
                A practical framework for thinking-driven lesson design.
              </p>
            </div>
            <div className="space-y-2 md:justify-self-end md:text-right">
              <h3 className="text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-brand-navy">Contact</h3>
              <div className="space-y-1.5">
                <a
                  href="mailto:contact@lessonintelligence.com"
                  className="block text-sm text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  contact@lessonintelligence.com
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-border pt-5">
            <p className="text-sm text-brand-muted md:text-center">© 2026 Lesson Intelligence Framework</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
