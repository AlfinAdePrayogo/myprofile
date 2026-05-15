import type { PropsWithChildren } from "react";
import { Container } from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
}>;

export function Section({ id, eyebrow, title, description, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`.trim()}>
      <Container>
        <div className="flex max-w-3xl flex-col gap-4">
          {eyebrow ? <span className="text-sm font-medium uppercase tracking-[0.24em] text-accent-400">{eyebrow}</span> : null}
          <h2 className="section-title">{title}</h2>
          <p className="section-copy">{description}</p>
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
