import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { pageContent } from "@/lib/content";

export function LayersSection() {
  return (
    <section id="five-layers" aria-labelledby="layers-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeader
          id="layers-heading"
          title={pageContent.layers.title}
          description="A practical sequence you can apply during planning, teaching, and reflection."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <ol className="relative space-y-5 before:absolute before:bottom-6 before:left-7 before:top-6 before:hidden before:w-px before:bg-brand-border before:content-[''] sm:before:block">
            {pageContent.layers.layers.map((layer) => (
              <li key={layer.name} className="interactive-tab relative rounded-2xl border border-brand-border bg-white p-6 shadow-soft sm:pl-20">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-xs font-semibold text-white sm:absolute sm:left-6 sm:top-6">
                  {layer.order}
                </span>
                <h3 className="text-[1.08rem] font-semibold text-brand-navy sm:text-xl">{layer.name}</h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-brand-muted sm:text-[1.02rem]">{layer.detail}</p>
              </li>
            ))}
          </ol>
          <aside className="interactive-tab self-center rounded-2xl border border-brand-border bg-brand-card p-3 shadow-soft sm:p-3">
            <div className="overflow-hidden rounded-xl border border-brand-border bg-white">
              <Image
                src="/images/lif-layers-graphic.png"
                alt="LIF five layers framework graphic"
                width={900}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
