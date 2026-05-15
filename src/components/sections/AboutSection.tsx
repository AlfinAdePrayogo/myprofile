import type { Highlight } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { BentoCard } from "../ui/BentoCard";

type AboutSectionProps = {
  about: {
    title: string;
    description: string;
  };
  highlights: Highlight[];
};

export function AboutSection({ about, highlights }: AboutSectionProps) {
  return (
    <Section id="about" eyebrow="Tentang" title={about.title} description={about.description}>
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        {highlights.map((highlight, index) => (
          <Reveal key={highlight.title} delay={index * 0.08}>
            <BentoCard className="transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <p className="text-lg font-semibold text-white">{highlight.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{highlight.description}</p>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
