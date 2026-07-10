import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import LangSwitch from "@/components/LangSwitch";
import type { Locale } from "@/lib/blog";

const labels = {
  fi: {
    skills: "Osaaminen",
    training: "Koulutukset",
    projects: "Projektit",
    blog: "Blogi",
    contact: "Yhteydenotto",
    cta: "Ota yhteyttä",
  },
  en: {
    skills: "Expertise",
    training: "Training",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    cta: "Get in touch",
  },
} as const;

/**
 * Yhteinen sticky-yläpalkki kaikille sivuille. Kielivalinta on
 * reittipohjainen: FI/EN-kytkin linkittää vastinsivulle (alternateHref).
 */
export default function Nav({
  locale = "fi",
  active,
  alternateHref,
  showCta = false,
}: {
  locale?: Locale;
  active?: "blog" | "projects";
  alternateHref?: string;
  showCta?: boolean;
}) {
  const t = labels[locale];
  const prefix = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";
  const blogHref = `${prefix}/blog`;
  const items = [
    { href: `${prefix}/#osaaminen`, label: t.skills },
    { href: `${prefix}/#koulutukset`, label: t.training },
    { href: `${prefix}/#projektit`, label: t.projects },
    { href: blogHref, label: t.blog },
    { href: `${prefix}/#yhteys`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-cream-50/[0.08] bg-bark-900/85 backdrop-blur-[10px]">
      <nav className="container-narrow flex items-center justify-between px-5 py-[18px] md:px-10">
        <Link
          href={home}
          className="font-display text-[19px] font-semibold text-cream-50"
        >
          matti seise
        </Link>
        <div className="hidden items-center gap-7 text-[14.5px] lg:flex">
          <Link
            href={`${prefix}/#osaaminen`}
            className="text-cream-300 hover:text-amber-400"
          >
            {t.skills}
          </Link>
          <Link
            href={`${prefix}/#koulutukset`}
            className="text-cream-300 hover:text-amber-400"
          >
            {t.training}
          </Link>
          <Link
            href={`${prefix}/#projektit`}
            className={
              active === "projects"
                ? "font-bold text-amber-400"
                : "text-cream-300 hover:text-amber-400"
            }
          >
            {t.projects}
          </Link>
          <Link
            href={blogHref}
            className={
              active === "blog"
                ? "font-bold text-amber-400"
                : "text-cream-300 hover:text-amber-400"
            }
          >
            {t.blog}
          </Link>
          <Link
            href={`${prefix}/#yhteys`}
            className="text-cream-300 hover:text-amber-400"
          >
            {t.contact}
          </Link>
          <LangSwitch locale={locale} alternateHref={alternateHref} />
          {showCta && (
            <Link
              href={`${prefix}/#yhteys`}
              className="rounded-[10px] border-[1.5px] border-amber-400 px-[18px] py-[9px] font-bold text-amber-400 hover:bg-amber-400 hover:text-bark-900"
            >
              {t.cta}
            </Link>
          )}
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch locale={locale} alternateHref={alternateHref} />
          <MobileNav items={items} />
        </div>
      </nav>
    </header>
  );
}
