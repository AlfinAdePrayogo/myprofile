import type { HeroData, SocialLink, Stat } from "../../data/profile";
import { Container } from "../layout/Container";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { BentoCard } from "../ui/BentoCard";

type HeroSectionProps = {
  hero: HeroData;
  stats: Stat[];
  links: SocialLink[];
};

export function HeroSection({ hero, stats, links }: HeroSectionProps) {
  return (
    <header className="relative isolate overflow-hidden pb-12 pt-6 sm:pb-16 sm:pt-8">
      <Container>
        <div className="panel rounded-[2rem] px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent-400">Profil Profesional</p>
              <h1 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{hero.name}</h1>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
              <a href="#about" className="transition hover:text-white">
                Tentang
              </a>
              <a href="#skills" className="transition hover:text-white">
                Keahlian
              </a>
              <a href="#projects" className="transition hover:text-white">
                Proyek
              </a>
              <a href="#contact" className="transition hover:text-white">
                Kontak
              </a>
            </nav>
          </div>

          <div className="grid gap-6 pt-8 lg:grid-cols-[1.3fr_0.9fr] lg:pt-10">
            <Reveal>
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="max-w-3xl space-y-5">
                  <span className="inline-flex rounded-full border border-accent-400/20 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-300">
                    {hero.role}
                  </span>
                  <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {hero.headline}
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{hero.description}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
                  <Button href={hero.secondaryCta.href} variant="secondary">
                    {hero.secondaryCta.label}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  {links.map((link) => (
                    <a key={link.label} href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {stats.map((stat) => (
                  <BentoCard key={stat.label} className="transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-3 text-sm font-medium text-slate-100">{stat.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{stat.detail}</p>
                  </BentoCard>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </header>
  );
}
