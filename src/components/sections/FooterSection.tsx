import { Container } from "@/components/layout/Container";

export function FooterSection() {
  return (
    <footer className="border-t border-brand-border bg-white/95 py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[repeat(3,minmax(0,1fr))] md:gap-10">
          <div className="space-y-3 md:px-4">
            <h3 className="text-[1.02rem] font-semibold text-brand-navy">Lesson Intelligence Framework</h3>
            <p className="text-sm leading-7 text-brand-muted">
              Helping teachers design lessons where student thinking is required, visible, and guided.
            </p>
          </div>
          <div className="md:flex md:items-center md:justify-center md:px-4">
            <p className="text-sm text-brand-muted">© 2026 Lesson Intelligence Framework</p>
          </div>
          <div className="space-y-3 md:px-4 md:justify-self-end md:text-right">
            <h3 className="text-[1.02rem] font-semibold text-brand-navy">Contact</h3>
            <div className="space-y-2">
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
      </Container>
    </footer>
  );
}
