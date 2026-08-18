import Link from "next/link";
import type { Locale } from "@/lib/blog";

const labels = {
  fi: {
    blog: "Blogi",
    projects: "Projektit",
    training: "Koulutukset",
    contact: "Yhteydenotto",
    nav: "Alatunniste",
    aiBadge: "Sisältöä on muokattu tekoälyllä",
  },
  en: {
    blog: "Blog",
    projects: "Projects",
    training: "Training",
    contact: "Contact",
    nav: "Footer",
    aiBadge: "Content has been modified using AI",
  },
} as const;

export default function Footer({ locale = "fi" }: { locale?: Locale }) {
  const t = labels[locale];
  const prefix = locale === "en" ? "/en" : "";
  const links = [
    { href: `${prefix}/blog`, label: t.blog },
    { href: `${prefix}/#projektit`, label: t.projects },
    { href: `${prefix}/#koulutukset`, label: t.training },
    { href: `${prefix}/#yhteys`, label: t.contact },
  ];
  return (
    <footer className="border-t border-cream-50/[0.08] px-5 py-10 md:px-10">
      <div className="container-narrow flex flex-wrap items-center justify-between gap-5">
        <nav
          aria-label={t.nav}
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-cream-300 hover:text-amber-400"
            >
              {l.label}
            </Link>
          ))}
          <a href="/rss.xml" className="text-cream-300 hover:text-amber-400">
            RSS
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <p className="text-[13.5px] text-cream-400">
            © {new Date().getFullYear()} Matti Seise · Helsinki
          </p>
          <img
            src="/images/ai-modified-badge.svg"
            alt={t.aiBadge}
            width={96}
            height={32}
            className="h-6 w-auto opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}
