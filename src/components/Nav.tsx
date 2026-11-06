import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import LangSwitch from "@/components/LangSwitch";
import type { Locale } from "@/lib/blog";

const labels = {
  fi: {
    skills: "Osaaminen",
    training: "Koulutukset",
    projects: "Projektit",
    videos: "Videot",
    blog: "Blogi",
    contact: "Yhteydenotto",
    cta: "Ota yhteyttä",
  },
  en: {
    skills: "Expertise",
    training: "Training",
    projects: "Projects",
    videos: "Videos",
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
}: {
  locale?: Locale;
  active?: "blog" | "projects";
  alternateHref?: string;
}) {
  const t = labels[locale];
  const prefix = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";
  const blogHref = `${prefix}/blog`;
  const items = [
    { href: `${prefix}/#osaaminen`, label: t.skills },
    { href: `${prefix}/#koulutukset`, label: t.training },
    { href: `${prefix}/#projektit`, label: t.projects },
    { href: `${prefix}/#videot`, label: t.videos },
    { href: blogHref, label: t.blog },
    { href: `${prefix}/#yhteys`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b-2 border-ruutu/15 bg-yo-900/90 backdrop-blur-[10px]">
      <nav className="container-narrow flex items-center justify-between px-5 py-[18px] md:px-10">
        <Link
          href={home}
          className="group flex items-center gap-2.5 font-display text-[22px] uppercase tracking-[0.04em] text-teksti-50 hover:text-syaani-400"
          style={{ lineHeight: "var(--display-lh)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hahmot/claus.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border-2 border-muste bg-yo-700 transition-transform duration-200 group-hover:-rotate-6"
          />
          Matti Seise
        </Link>
        <div className="hidden items-center gap-7 text-[14.5px] lg:flex">
          <Link
            href={`${prefix}/#osaaminen`}
            className="text-teksti-300 hover:text-syaani-400"
          >
            {t.skills}
          </Link>
          <Link
            href={`${prefix}/#koulutukset`}
            className="text-teksti-300 hover:text-syaani-400"
          >
            {t.training}
          </Link>
          <Link
            href={`${prefix}/#projektit`}
            className={
              active === "projects"
                ? "font-bold text-syaani-400"
                : "text-teksti-300 hover:text-syaani-400"
            }
          >
            {t.projects}
          </Link>
          <Link
            href={`${prefix}/#videot`}
            className="text-teksti-300 hover:text-syaani-400"
          >
            {t.videos}
          </Link>
          <Link
            href={blogHref}
            className={
              active === "blog"
                ? "font-bold text-syaani-400"
                : "text-teksti-300 hover:text-syaani-400"
            }
          >
            {t.blog}
          </Link>
          <LangSwitch locale={locale} alternateHref={alternateHref} />
          <Link
            href={`${prefix}/#yhteys`}
            className="btn-primary-sm !px-4 !py-1.5 !text-[15px]"
          >
            {t.cta}
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch locale={locale} alternateHref={alternateHref} />
          <MobileNav items={items} />
        </div>
      </nav>
    </header>
  );
}
