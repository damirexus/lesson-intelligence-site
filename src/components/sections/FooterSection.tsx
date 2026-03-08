import { Container } from "@/components/layout/Container";

export function FooterSection() {
  return (
    <footer className="border-t border-brand-border bg-[#e1e6ee] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="space-y-3">
            <h3 className="text-[1.02rem] font-semibold text-brand-navy">Lesson Intelligence Framework</h3>
            <p className="max-w-sm text-sm leading-7 text-brand-muted">
              Helping teachers design lessons where student thinking is required, visible, and guided.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-[1.02rem] font-semibold text-brand-navy">Contact</h3>
            <a
              href="mailto:contact@lifframework.org"
              className="text-sm text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              contact@lifframework.org
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="text-[1.02rem] font-semibold text-brand-navy">Connect</h3>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-brand-border pt-6">
          <p className="text-sm text-brand-muted">© 2026 Lesson Intelligence Framework</p>
        </div>
      </Container>
    </footer>
  );
}
