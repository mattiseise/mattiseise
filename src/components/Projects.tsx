"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  tag: string;
  year: string;
  blurb: string;
  details: string;
  stack: string[];
  status?: string;
  highlights?: string[];
  caseUrl?: string;
  caseLabel?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Hermes-agentti",
    tag: "Henkilökohtainen AI-agentti",
    year: "2025–",
    caseUrl: "/blog",
    caseLabel: "Lue koko tarina →",
    blurb:
      "Oma henkilökohtainen AI-agentti, joka hoitaa päivittäiset rutiinit taustalla: aamubriiffit, sähköpostien luokittelun, kalenterin ja jumppavaraukset. Aloitti OpenClaw'lla, sittemmin migratoitu Hermes-frameworkille — kolmestakymmenestä taustapalvelusta yhteen gatewayhin ja selattavaan muistiin.",
    details:
      "Ensimmäinen versio kasvoi liian monimutkaiseksi: 30 launchd-palvelua, kolme rinnakkaista tehtävälistaa ja kasa watchdogeja. Migraatio Hermekseen (Nous Researchin avoin agenttiframework) yksinkertaisti kaiken — yksi gateway hoitaa Telegramin, Slackin ja ajastukset, ja muisti on selattavaa markdownia mustan laatikon sijaan. Suunnitteluperiaate on luotettavuus ennen näyttävyyttä: agentti pysyy hiljaa kun kaikki on kunnossa ja kertoo selkokielellä kun ei ole.",
    stack: [
      "Hermes",
      "Telegram & Slack",
      "Selattava muisti",
      "Luonnollisen kielen cron",
      "Playwright",
    ],
    status: "Tuotantokäytössä, jatkuva kehitys",
    highlights: [
      "Aamu- ja iltabriiffi: yksi tiivis viesti, vain se mihin pitää reagoida — ei dashboardia",
      "Jumppavaraukset, sähköpostien luokittelu ja matkavalmistelut hoituvat itsestään",
      "Selattava markdown-muisti: voin avata ja lukea, mitä agentti “muistaa” minusta",
      "Luotettavuusprotokolla: “korjattu” vaatii todisteen — optimismi ei ole todiste",
      "Turvarajat: riskialttiit toimet (sammutus, maksu, poisto) kulkevat hyväksynnän kautta",
    ],
  },
  {
    title: "Tekoälyn perusteet -kurssi",
    tag: "Koulutus · 27 oppituntia",
    year: "2025–",
    caseUrl: "/caset/tekoalyn-perusteet",
    blurb:
      "27 oppitunnin kurssi tekoälyn perusteista kolmessa kokonaisuudessa: teoria, käyttö ja agentit. Materiaali on tuotettu kokonaan tekoälyllä, agentteja hyödyntäen.",
    details:
      "Kurssi opettaa käytännön taitoja tekemällä, ei kalvoilla. Sisältää opiskelija- ja opettajamateriaalit kaikille oppitunneille sekä automaattisen sivuston­generaattorin. Lähdekoodi ja sisältö ovat avoimia GitHubissa.",
    stack: [
      "Pedagoginen suunnittelu",
      "Bloomin taksonomia",
      "Linjakas opetus",
      "Generatiivinen tekoäly",
      "Avoin lähdekoodi",
    ],
    status: "Julkaistu, jatkokehitys aktiivinen",
    highlights: [
      "27 oppituntia jaettuna kolmeen kokonaisuuteen: teoria, käytännön työkalut ja agentit",
      "Erilliset opiskelija- ja opettajamateriaalit jokaiselle oppitunnille",
      "Painopiste työkalujen käytössä — kalvojen sijaan harjoituksia",
      "Sisältö kattaa myös agenttien rakenteen, ei pelkkää chatbotin käyttöä",
      "Avoin lähdekoodi GitHubissa, julkinen sivusto ai-perusteet.netlify.app",
      "Materiaali tuotettu kokonaan tekoälyllä, agentteja hyödyntäen — pienet virheet jätetty tarkoituksella näkyviin kriittisen lukutaidon harjoitukseksi",
    ],
    links: [
      {
        label: "Avoin sivusto",
        href: "https://ai-perusteet.netlify.app/",
      },
      {
        label: "Lähdekoodi GitHubissa",
        href: "https://github.com/mattiseise/ai-perusteet",
      },
    ],
  },
  {
    title: "Moodle-kurssiauditointi",
    tag: "Pedagoginen analyysi",
    year: "2025",
    caseUrl: "/caset/moodle-kurssiauditointi",
    blurb:
      "Yhden komennon pedagoginen auditointi Moodle-kursseille: lukee varmuuskopion ja tuottaa PDF-raportin Bloom-tasoista, ePerusteiden kattavuudesta ja kurssin koherenssista.",
    details:
      "Auditointiagentti jäsentää Moodlen .mbz-varmuuskopion, ajaa rakenne-, sisältö- ja linjakkuusanalyysit ja priorisoi havainnot toimenpidelistaksi. Opettaja saa konkreettiset korjausehdotukset aika-arvioineen — ei pitkää sanallista raporttia.",
    stack: ["Python", "Pedagoginen analyysi", "Moodle .mbz", "PDF-raportointi"],
    highlights: [
      "Yksi komento → analyysi → PDF-raportti, ei manuaalista työtä",
      "Bloomin taksonomian tasapainon tarkistus tavoitteista tehtäviin",
      "Linjakkaan opetuksen tarkistus: tavoitteet ↔ opetus ↔ arviointi",
      "ePerusteiden ammattitaitovaatimusten kattavuuden vertailu",
      "Priorisoidut toimenpide-ehdotukset aika-arvioineen, ei pelkkää kuvailua",
    ],
  },
  {
    title: "Urheiluhallit-booker",
    tag: "Selainautomaatio",
    year: "2025",
    caseUrl: "/caset/urheiluhallit-booker",
    blurb:
      "Selainautomaatio, joka varaa ryhmäliikuntatunnit puolestani — kirjautumisesta varaukseen ja peruutukseen.",
    details:
      "Toteutus tunnistaa kirjautumis- ja varauspolut automaattisesti, tallentaa kirjautumistilan ja ajaa varauksen ajastetusti. Lokit ja kuvakaappaukset jokaisesta ajosta nopeuttavat vianetsintää, kun varausjärjestelmä päivittyy.",
    stack: ["Python", "Playwright", "Ajastettu cron", "JSONL-loki"],
    highlights: [
      "Tunnistaa kirjautumis- ja varauspolut automaattisesti — ei kovakoodattuja selektoreita",
      "Tallentaa kirjautumistilan, joten varauksia ei keskeytä uudelleenkirjautuminen",
      "Erilliset skriptit varaukselle, listaukselle ja peruutukselle",
      "Manuaalinen tallennustila näkyvässä selaimessa, kun varauspolku muuttuu",
      "Kuvakaappaukset ja JSONL-loki jokaisesta ajosta vianetsintää varten",
    ],
  },
  {
    title: "Wilma- ja itslearning-automaatiot",
    tag: "Selenium · opetustyö",
    year: "2024–",
    caseUrl: "/caset/wilma-itslearning-automaatiot",
    blurb:
      "Selainautomaatioita, jotka säästävät opettajan aikaa Wilman ja itslearningin kömpelöissä rutiineissa: opintosuunnitelmat, suorituslistat, poissaolot ja palautusten seuranta.",
    details:
      "Skriptit korvaavat toistuvan klikkailun: täydentävät opintosuunnitelmia, värikoodaavat suorituslistat, korostavat poissaolodatan ja lataavat itslearningistä kurssidatat eräajona. Tunteja työaikaa viikossa takaisin opettajalle — keskittymistä opettamiseen, ei käyttöliittymän kanssa kamppailuun.",
    stack: ["Python", "Selenium", "Wilma", "itslearning"],
    highlights: [
      "Opintosuunnitelman täydentäminen automaattisesti opiskelijakohtaisesti",
      "Opiskelijan suorituslistan värikoodaaminen tilanteen perusteella",
      "Poissaolodatan korostaminen näkyvämmin kuin Wilman oma näkymä",
      "Kurssidatan automaattinen lataaminen itslearningistä eräajona",
      "Palautusten seuranta itslearningissä — työkalut, jotka oletustyökalusta puuttuvat",
    ],
  },
  {
    title: "GPT-pohjaiset opetustyökalut",
    tag: "Generatiivinen tekoäly",
    year: "2024–",
    blurb:
      "Räätälöityjä assistentteja ja agentteja opetuksen tueksi: tehtävien tarkistus, materiaalin tuottaminen ja eriyttäminen.",
    details:
      "Työkalut toimivat opettajan parina, eivät korvaa häntä. Saavutettavuus ja erityispedagogiikan periaatteet ovat suunnittelun lähtökohta — ei jälkikäteen lisätty kerros.",
    stack: ["GPT", "Promptaus", "RAG", "Saavutettavuus"],
    highlights: [
      "Tehtävien tarkistus eri vaikeustasoilla — opettaja säilyttää viimeisen sanan",
      "Eriyttäminen ja saavutettavuus rakennettu mukaan jo promptaukseen",
      "RAG-haku omiin opetussisältöihin: oppilas saa oman aineiston, ei yleistä webistä poimittua",
    ],
  },
  {
    title: "Sekunda Oy — mobiilipeli",
    tag: "Pelinkehitys",
    year: "2014–2026",
    blurb:
      "Pelifirma vuosilta 2014–2026, yksi julkaistu mobiilipeli Unityllä.",
    details:
      "Yrittäjyyskokemus suunnittelusta julkaisuun: tuotteistus, julkaisukanavat ja käyttäjäkokemus opittu kantapään kautta. Pohja, jolle myöhempi tuotekehitys ja konsultointi rakentuvat.",
    stack: ["Unity", "C#", "Mobiili"],
    highlights: [
      "Mobiilipelin koko elinkaari: konseptista suunnittelun ja toteutuksen kautta julkaisuun",
      "Yrittäjyyskokemus tuotteistuksesta, julkaisukanavista ja käyttäjäkokemuksesta",
      "Toiminta päättyy 2026 — Y-tunnus jatkuu Ukko.fin kautta laskutuskäyttöön",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    if (selected) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="projektit" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow">
        <p className="eyebrow">Projektit</p>
        <h2 className="h2 mt-3 text-ink-50">
          Toteutettuja, ei vain suunniteltuja.
        </h2>
        <p className="lead mt-4 max-w-2xl">
          Tekoälyagentit, selainautomaatiot ja pedagogiset työkalut — joko
          tuotantokäytössä tai aktiivisessa kehityksessä. Klikkaa korttia,
          niin näet miten ja miksi.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setSelected(p)}
              className="card text-left flex flex-col cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
              aria-haspopup="dialog"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{p.tag}</p>
                  <h3 className="h3 mt-2 text-ink-50 group-hover:text-accent-400 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <span className="text-xs muted shrink-0 mt-1">{p.year}</span>
              </div>
              <p className="mt-3 text-ink-100">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
                {p.stack.length > 4 && (
                  <span className="tag">+{p.stack.length - 4}</span>
                )}
              </div>
              <span className="mt-5 text-sm text-accent-400 font-medium inline-flex items-center gap-1.5">
                Lue lisää
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-accent-500/40 bg-ink-800 p-7 md:p-9 shadow-2xl shadow-accent-500/10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Sulje"
          className="absolute top-4 right-4 rounded-full w-9 h-9 flex items-center justify-center text-ink-200 hover:text-ink-50 hover:bg-ink-600/40 transition-colors"
        >
          <span className="text-xl leading-none" aria-hidden>
            ×
          </span>
        </button>

        <p className="eyebrow">{project.tag}</p>
        <h3 id="project-title" className="h2 mt-2 text-ink-50 pr-10">
          {project.title}
        </h3>
        <p className="text-sm muted mt-2">{project.year}</p>

        <p className="mt-6 text-ink-100 leading-relaxed">{project.blurb}</p>
        <p className="mt-4 text-ink-200 leading-relaxed">{project.details}</p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-7">
            <p className="eyebrow">Kohokohdat</p>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-ink-100 leading-relaxed"
                >
                  <span aria-hidden className="text-accent-400 mt-1.5">
                    ▸
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7">
          <p className="eyebrow">Mitä projekti hyödyntää</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        {(project.caseUrl ||
          project.status ||
          (project.links && project.links.length > 0)) && (
          <div className="mt-7 pt-6 border-t border-ink-600/40 flex flex-wrap gap-x-6 gap-y-3 items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {project.status && (
                <span className="muted">Tila: {project.status}</span>
              )}
              {project.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            {project.caseUrl && (
              <Link
                href={project.caseUrl}
                className="rounded-xl bg-accent-500 text-ink-900 px-4 py-2.5 text-sm font-semibold hover:bg-accent-400"
              >
                {project.caseLabel ?? "Lue koko case →"}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
