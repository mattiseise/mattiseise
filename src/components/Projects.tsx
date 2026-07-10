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
    title: "Toteutettuja, ei vain suunniteltuja.",
    lead: "Tekoälyagentit, selainautomaatiot ja pedagogiset työkalut — tuotantokäytössä tai aktiivisessa kehityksessä.",
    projects: [
      {
        tag: "Henkilökohtainen AI-agentti",
        year: "2025–",
        title: "Hermes-agentti",
        blurb:
          "Oma agentti, joka hoitaa rutiinit taustalla: aamubriiffit, sähköpostien luokittelun ja varaukset. Muisti on selattavaa markdownia — ei musta laatikko.",
        linkLabel: "Lue koko tarina",
        href: "/blog",
      },
      {
        tag: "Koulutus · 27 oppituntia",
        year: "2025–",
        title: "Tekoälyn perusteet -kurssi",
        blurb:
          "Avoin 27 oppitunnin kurssi kolmessa kokonaisuudessa: teoria, käyttö ja agentit. Materiaali on tuotettu kokonaan tekoälyllä, agentteja hyödyntäen.",
        linkLabel: "Lue case",
        href: "/caset/tekoalyn-perusteet",
      },
      {
        tag: "Pedagoginen analyysi",
        year: "2025",
        title: "Moodle-kurssiauditointi",
        blurb:
          "Yhden komennon pedagoginen auditointi: lukee Moodle-varmuuskopion ja tuottaa PDF-raportin Bloom-tasoista, ePerusteiden kattavuudesta ja kurssin koherenssista.",
        linkLabel: "Lue case",
        href: "/caset/moodle-kurssiauditointi",
      },
      {
        tag: "Selenium · opetustyö",
        year: "2024–",
        title: "Wilma- ja itslearning-automaatiot",
        blurb:
          "Selainautomaatiot, jotka korvaavat toistuvan klikkailun: opintosuunnitelmat, suorituslistat, poissaolot ja palautusten seuranta. Tunteja viikossa takaisin.",
        linkLabel: "Lue case",
        href: "/caset/wilma-itslearning-automaatiot",
      },
    ] as readonly ProjectCard[],
  },
  en: {
    eyebrow: "Projects",
    title: "Built, not just planned.",
    lead: "AI agents, browser automations and pedagogical tools — in production use or active development.",
    projects: [
      {
        tag: "Personal AI agent",
        year: "2025–",
        title: "Hermes agent",
        blurb:
          "My own agent handling routines in the background: morning briefs, email triage and bookings. Its memory is browsable markdown — not a black box.",
        linkLabel: "Read the full story",
        href: "/en/blog",
      },
      {
        tag: "Training · 27 lessons",
        year: "2025–",
        title: "AI Fundamentals course",
        blurb:
          "An open 27-lesson course in three parts: theory, practice and agents. The material was produced entirely with AI, using agents.",
        linkLabel: "Read case",
        href: "/en/caset/tekoalyn-perusteet",
      },
      {
        tag: "Pedagogical analysis",
        year: "2025",
        title: "Moodle course audit",
        blurb:
          "One-command pedagogical audit: reads a Moodle backup and produces a PDF report on Bloom levels, curriculum coverage and course coherence.",
        linkLabel: "Read case",
        href: "/en/caset/moodle-kurssiauditointi",
      },
      {
        tag: "Selenium · teaching",
        year: "2024–",
        title: "Wilma & itslearning automations",
        blurb:
          "Browser automations replacing repetitive clicking: study plans, completion lists, absences and submission tracking. Hours back every week.",
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
