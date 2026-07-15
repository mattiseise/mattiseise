import Link from "next/link";
import type { Locale } from "@/lib/blog";

type ProjectCard = {
  tag: string;
  year: string;
  title: string;
  blurb: string;
  linkLabel: string;
  href: string;
};

const strings = {
  fi: {
    eyebrow: "Projektit",
    title: "Nämä eivät ole konseptikuvia.",
    lead: "Olen rakentanut nämä omaan työhön tai oikeaan käyttöön. Siksi niissä näkyy myös se tylsä osa: lokit, virheet, ylläpito ja rajat.",
    projects: [
      {
        tag: "Henkilökohtainen AI-agentti",
        year: "2025–",
        title: "Hermes-agentti",
        blurb:
          "Oma arjen agentti. Se tekee aamubriiffit, seuraa asioita, auttaa varauksissa ja pitää muistia markdownissa. Ei mystiikkaa, vaan paljon pieniä työkaluja saman käyttöliittymän takana.",
        linkLabel: "Lue blogisarja",
        href: "/blog",
      },
      {
        tag: "Koulutus · 27 oppituntia",
        year: "2025–",
        title: "Tekoälyn perusteet -kurssi",
        blurb:
          "Avoin kurssi, jossa tekoälyä opetellaan tekemällä. 27 oppituntia, opiskelija- ja opettajamateriaalit sekä sivustogeneraattori. Materiaali on tehty tekoälyllä, eikä sitä peitellä.",
        linkLabel: "Lue case",
        href: "/caset/tekoalyn-perusteet",
      },
      {
        tag: "Pedagoginen analyysi",
        year: "2025",
        title: "Moodle-kurssiauditointi",
        blurb:
          "Työkalu, joka lukee Moodle-varmuuskopion ja kertoo missä kurssi vuotaa: rakenne, Bloom-tasot, ePerusteet, duplikaatit ja korjausten työmäärä. Raportti, ei runoessee.",
        linkLabel: "Lue case",
        href: "/caset/moodle-kurssiauditointi",
      },
      {
        tag: "Selenium · opetustyö",
        year: "2024–",
        title: "Wilma- ja itslearning-automaatiot",
        blurb:
          "Skriptit niihin hetkiin, kun järjestelmä pakottaa klikkaamaan samaa asiaa 30 opiskelijalle. Opintosuunnitelmat, suorituslistat, poissaolot ja palautusten seuranta.",
        linkLabel: "Lue case",
        href: "/caset/wilma-itslearning-automaatiot",
      },
    ] as readonly ProjectCard[],
  },
  en: {
    eyebrow: "Projects",
    title: "These are not concept slides.",
    lead: "I built these for my own work or real use. That means the boring parts matter too: logs, errors, maintenance and limits.",
    projects: [
      {
        tag: "Personal AI agent",
        year: "2025–",
        title: "Hermes agent",
        blurb:
          "My everyday agent: morning briefs, monitoring, bookings and markdown memory. No mysticism — just many small tools behind one interface.",
        linkLabel: "Read the series",
        href: "/en/blog",
      },
      {
        tag: "Training · 27 lessons",
        year: "2025–",
        title: "AI Fundamentals course",
        blurb:
          "An open course where AI is learned by doing. 27 lessons, student and teacher materials, and a site generator. The material was made with AI, and I don't hide that.",
        linkLabel: "Read case",
        href: "/en/caset/tekoalyn-perusteet",
      },
      {
        tag: "Pedagogical analysis",
        year: "2025",
        title: "Moodle course audit",
        blurb:
          "A tool that reads a Moodle backup and shows where the course leaks: structure, Bloom levels, curriculum coverage, duplicates and fix effort. A report, not a prose exercise.",
        linkLabel: "Read case",
        href: "/en/caset/moodle-kurssiauditointi",
      },
      {
        tag: "Selenium · teaching",
        year: "2024–",
        title: "Wilma & itslearning automations",
        blurb:
          "Scripts for the moments when the system makes you click the same thing for 30 students: study plans, completion lists, absences and submissions.",
        linkLabel: "Read case",
        href: "/en/caset/wilma-itslearning-automaatiot",
      },
    ] as readonly ProjectCard[],
  },
} as const;

/** Projektikortit ovat suoria linkkejä case-/blogisivuille — ei modaalia. */
export default function Projects({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  return (
    <section id="projektit" className="section-pad border-t border-cream-50/[0.08]">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="h2 mt-3.5 text-cream-50">{t.title}</h2>
          </div>
          <p className="max-w-[26em] text-[15px] leading-[1.6] text-cream-400">
            {t.lead}
          </p>
        </div>
        <div className="mt-11 grid gap-[22px] md:grid-cols-2">
          {t.projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="card card-hover-lift flex flex-col !p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow-sm">{p.tag}</p>
                <span className="text-[12.5px] text-cream-400">{p.year}</span>
              </div>
              <h3 className="mt-2.5 font-display text-[23px] font-semibold text-cream-50">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-cream-300">
                {p.blurb}
              </p>
              <span className="mt-[18px] text-[14.5px] font-bold text-amber-400">
                {p.linkLabel} <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
