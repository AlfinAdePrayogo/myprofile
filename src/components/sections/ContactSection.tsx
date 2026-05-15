import type { ContactData } from "../../data/profile";
import { Section } from "../layout/Section";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { BentoCard } from "../ui/BentoCard";

type ContactSectionProps = {
  contact: ContactData;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact" eyebrow="Kontak" title={contact.title} description={contact.description} className="pb-24">
      <Reveal>
        <BentoCard className="overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-accent-500/10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-300">Mari berkolaborasi</p>
              <p className="mt-4 text-base leading-8 text-slate-200">{contact.availability}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={contact.primaryCta.href}>{contact.primaryCta.label}</Button>
              <Button href={contact.secondaryCta.href} variant="secondary">
                {contact.secondaryCta.label}
              </Button>
            </div>
          </div>
        </BentoCard>
      </Reveal>
    </Section>
  );
}
