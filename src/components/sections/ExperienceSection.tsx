import type { Experience } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { BentoCard } from "../ui/BentoCard";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      eyebrow="Pengalaman"
      title="Pengalaman yang membentuk cara saya merancang dan membangun interface"
      description="Setiap project memberi konteks berbeda, tetapi prinsipnya tetap sama: struktur yang jelas, visual yang konsisten, dan pengalaman yang nyaman untuk pengguna."
    >
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.period}`} delay={index * 0.08}>
            <BentoCard className="transition duration-300 hover:bg-white/10">
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-300">{experience.period}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{experience.role}</p>
                  <p className="mt-2 text-sm text-slate-400">{experience.company}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-slate-300">{experience.summary}</p>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-400 sm:grid-cols-3">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
