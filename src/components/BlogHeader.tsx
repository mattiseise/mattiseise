import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { blogPath, type Locale } from "@/lib/blog";

const labels = {
  fi: {
    projects: "Projektit",
    training: "Koulutukset",
    blog: "Blogi",
    contact: "Yhteys",
    language: "English",
  },
  en: {
    projects: "Projects",
    training: "Training",
    blog: "Blog",
    contact: "Contact",
    language: "Suomeksi",
  },
} as const;

/** Sticky-yläpalkki blogisivuille — samaa linjaa CaseLayoutin headerin kanssa. */
export default function BlogHeader({
  locale = "fi",
  alternateHref,
}: {
  locale?: Locale;
  alternateHref?: string;
}) {
  const t = labels[locale];
  const home = locale === "en" ? "/en" : "/";
  const sectionPrefix = locale === "en" ? "/en" : "";
  const items = [
    { href: `${sectionPrefix}/#projektit`, label: t.projects },
    { href: `${sectionPrefix}/#koulutukset`, label: t.training },
    { href: blogPath(locale), label: t.blog },
    { href: `${sectionPrefix}/#yhteys`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-ink-600/30 bg-ink-900/80 backdrop-blur">
      <nav className="container-narrow flex items-center justify-between py-4 px-6 md:px-10">
        <Link href={home} className="font-semibold tracking-tight text-ink-50">
          Matti Seise
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-ink-200">
          <Link href={`${sectionPrefix}/#projektit`} className="hover:text-accent-400">
            {t.projects}
          </Link>
          <Link href={`${sectionPrefix}/#koulutukset`} className="hover:text-accent-400">
            {t.training}
          </Link>
          <Link href={blogPath(locale)} className="text-accent-400">
            {t.blog}
          </Link>
          <Link href={`${sectionPrefix}/#yhteys`} className="hover:text-accent-400">
            {t.contact}
          </Link>
          {alternateHref && (
            <Link href={alternateHref} className="rounded-full border border-ink-600/60 px-3 py-1 text-xs font-semibold text-ink-100 hover:border-accent-500/50 hover:text-accent-300">
              {t.language}
            </Link>
          )}
        </div>
        <MobileNav
          items={
            alternateHref
              ? [...items, { href: alternateHref, label: t.language }]
              : items
          }
        />
      </nav>
    </header>
  );
}
