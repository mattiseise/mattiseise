import Link from "next/link";
import type { Locale } from "@/lib/blog";

const labels = {
  fi: {
    blog: "Blogi",
    projects: "Projektit",
    videos: "Videot",
    training: "Koulutukset",
    contact: "Yhteydenotto",
    nav: "Alatunniste",
    aiBadge: "Sisältöä on muokattu tekoälyllä",
  },
  en: {
    blog: "Blog",
    projects: "Projects",
    videos: "Videos",
    training: "Training",
    contact: "Contact",
    nav: "Footer",
    aiBadge: "Content has been modified using AI",
  },
} as const;

const FOOTER_CAST = ["sune", "rasmus", "claus", "linnea", "borje"];

export default function Footer({ locale = "fi" }: { locale?: Locale }) {
  const t = labels[locale];
  const prefix = locale === "en" ? "/en" : "";
  const links = [
    { href: `${prefix}/blog`, label: t.blog },
    { href: `${prefix}/#projektit`, label: t.projects },
    { href: "/esitykset", label: t.videos },
    { href: `${prefix}/#koulutukset`, label: t.training },
    { href: `${prefix}/#yhteys`, label: t.contact },
  ];
  return (
    <footer className="relative border-t-2 border-ruutu/15 px-5 pb-10 pt-12 md:px-10">
      {/* Rapurivi alatunnisteen yläreunalla: samat hahmot kuin videoissa. */}
      <div aria-hidden className="pointer-events-none absolute -top-[30px] right-5 flex gap-1 md:right-10">
        {FOOTER_CAST.map((id) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={id} src={`/hahmot/${id}.svg`} alt="" width={56} height={56} className="h-14 w-14" />
        ))}
      </div>
      <div className="container-narrow flex flex-wrap items-center justify-between gap-5">
        <nav
          aria-label={t.nav}
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-teksti-300 hover:text-syaani-400"
            >
              {l.label}
            </Link>
          ))}
          <a href="/rss.xml" className="text-teksti-300 hover:text-syaani-400">
            RSS
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <p className="text-[13.5px] text-teksti-400">
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
