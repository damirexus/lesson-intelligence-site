type SectionHeaderProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionHeader({ id, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl animate-fade-up text-center">
      <h2
        id={id}
        className="font-display text-[2rem] uppercase leading-[1.08] tracking-[0.03em] text-brand-navy sm:text-[2.5rem]"
      >
        {title}
      </h2>
      {description ? <p className="mt-5 text-[1.03rem] leading-8 text-brand-muted sm:text-[1.15rem]">{description}</p> : null}
    </div>
  );
}
