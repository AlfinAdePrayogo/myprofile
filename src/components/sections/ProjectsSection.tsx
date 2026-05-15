import type { Project } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { Badge } from "../ui/Badge";
import { BentoCard } from "../ui/BentoCard";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      eyebrow="Proyek"
      title="Pilihan proyek yang menunjukkan kualitas visual dan ketelitian eksekusi"
      description="Contoh project berikut dirancang untuk menonjolkan cara saya menyusun konten, membangun UI, dan menjaga kesan premium tanpa berlebihan."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08} className={project.featured ? "lg:col-span-2" : ""}>
            <BentoCard className="group transition duration-300 hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-full flex-col gap-6">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent-300">
                    {project.category}
                  </span>
                  <div>
                    <p className="text-2xl font-semibold text-white">{project.title}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                </div>
                <div className="mt-auto space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-accent-300"
                  >
                    Eksplorasi lebih lanjut
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </div>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
