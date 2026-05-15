import type { SocialLink } from "../../data/profile";
import { Container } from "../layout/Container";

type FooterProps = {
  footer: {
    name: string;
    note: string;
  };
  links: SocialLink[];
};

export function Footer({ footer, links }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{footer.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{footer.note}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
