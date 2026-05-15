import type { Stat, Testimonial } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { BentoCard } from "../ui/BentoCard";

type TrustSectionProps = {
  testimonials: Testimonial[];
  trustStats: Stat[];
};

export function TrustSection({ testimonials, trustStats }: TrustSectionProps) {
  return (
    <Section
      eyebrow="Kredibilitas"
      title="Kepercayaan dibangun dari hasil yang jelas dan proses kerja yang solid"
      description="Selain tampilan akhir, saya menjaga kualitas kolaborasi melalui komunikasi yang jelas, ekspektasi realistis, dan detail eksekusi yang konsisten."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <BentoCard className="transition duration-300 hover:bg-white/10">
                <p className="text-base leading-8 text-slate-200">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-5">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </BentoCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4">
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <BentoCard className="transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-100">{stat.label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{stat.detail}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
