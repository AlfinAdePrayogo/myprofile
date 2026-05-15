import type { SkillGroup } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { Badge } from "../ui/Badge";
import { BentoCard } from "../ui/BentoCard";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <Section
      id="skills"
      eyebrow="Keahlian"
      title="Keahlian yang mendukung produk terasa rapi, cepat, dan siap digunakan"
      description="Saya memadukan kemampuan teknis dan pertimbangan UX agar hasil akhirnya tidak hanya indah, tetapi juga jelas untuk pengguna."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <BentoCard className="transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <p className="text-lg font-semibold text-white">{group.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
