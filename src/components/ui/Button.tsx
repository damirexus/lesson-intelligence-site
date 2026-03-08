import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const shared =
    "inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold transition duration-200 sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const style =
    variant === "primary"
      ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20 hover:-translate-y-0.5 hover:bg-[#b8850e] focus-visible:outline-brand-purple"
      : "border border-brand-border bg-brand-bg text-brand-navy hover:border-brand-purple hover:text-brand-purple focus-visible:outline-brand-purple";

  return (
    <Link href={href} className={`${shared} ${style}`}>
      {children}
    </Link>
  );
}
