"use client";

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
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "OpenClaw",
    tag: "Multi-agent",
    year: "2025–",
    blurb:
      "Tuotannossa pyörivä multi-agent-järjestelmä — yli kymmenen erikoistunutta agenttia hoitavat keskustelut, suunnittelun, koodauksen ja auditoinnit Slackissa ja Telegramissa.",
    details:
      "Pyörii Mac mini -kotipalvelimella gateway-palvelun kautta. Mallivalinta on tehtäväkohtainen: OpenAI Codex pääajossa, OpenRouter raskaammille pyynnöille ja paikallinen Ollama embeddingille ja heartbeatille — kustannukset hallinnassa, latenssi ennakoitava. Ajastettu launchd:llä, kanavat Slack (socket mode) ja Telegram.",
    stack: [
      "Node.js",
      "Python",
      "OpenAI Codex",
      "OpenRouter",
      "Ollama",
      "Slack Socket Mode",
      "Telegram Bot API",
      "launchd",
    ],
    status: "Jatkuvassa kehityksessä",
    highlights: [
      "Yli kymmenen erikoistunutta agenttia: pääagentti, henkilökohtainen aliagentti, planner, builder, coder, pedagogy, auditor, finisher",
      "Ajastetut työnkulut: aamubriifit, viikkokatsaukset, terveys­tarkistukset",
      "RAG-muistihaku paikallisella Ollamalla; Gemini-fallback rate-limit-tilanteissa",
      "Mempalace-muistikerros: rakenteinen knowledge graph, diary ja semanttinen haku",
      "Cowork-bridge: agenttien välinen JSONL-pohjainen kommunikaatio audit-jäljellä",
    ],
  },
  {
    title: "Tekoälyn perusteet -kurssi",
    tag: "Koulutus · 3 osp",
    year: "2025–",
    blurb:
      "Kolmen opintopisteen kurssi generatiivisen tekoälyn käytöstä — kolmella vaikeustasolla opettajille, aikuisopiskelijoille ja nuorille.",
    details:
      "Tekemällä oppimista: työkalujen käyttö, promptauksen perusteet ja kriittinen lukutaito. Sisältö kattaa myös agenttien rakenteen — pipelines, tools, skills — koska tekoälyn ymmärtäminen vaatii enemmän kuin chatbotin koukuttamisen. Käytössä Helsinki Business Collegella, jatkokehitys aktiivinen.",
    stack: ["Pedagoginen suunnittelu", "Bloom", "Constructive alignment", "Generatiivinen AI"],
    status: "Julkaistu, jatkokehitys",
    highlights: [
      "Kolme vaikeustasoa kohderyhmittäin: opettajat, aikuisopiskelijat ja nuoret",
      "Painotus työkalujen käytössä — kalvojen sijaan harjoitukset",
      "Agenttien rakenne osana sisältöä: pipelines, tools, skills",
      "Suunnitteilla englanninkielinen versio koulutusvientiä varten",
    ],
  },
  {
    title: "Moodle-kurssiauditointi",
    tag: "Pedagoginen analyysi",
    year: "2025",
    blurb:
      "Yhden komennon pedagoginen auditointi Moodle-kursseille: parsii .mbz-varmuuskopion ja tuottaa PDF-raportin Bloom-tasoista, OPS-linjasta ja kurssin koherenssista.",
    details:
      "Skillipipeline lukee Moodle-varmuuskopion, ajaa rakenne-, sisältö- ja linjakkuusanalyysit ja priorisoi toimenpiteet. Opettaja saa konkreettisen tehtävälistan — ei essee­arviota. Käytössä omassa opetustyössäni ja koulutuskonsultoinnissa.",
    stack: ["Python", "Claude/Gemini", "PDF-raportointi", "MBZ-parsinta"],
    highlights: [
      "Yhden komennon pipeline: .mbz → analyysit → PDF-raportti",
      "Bloomin taksonomian etenemisen tarkistus tavoitteista tehtäviin",
      "Constructive alignment: tavoitteet ↔ opetus ↔ arviointi",
      "Punaisen langan ja kurssin sisäisen koherenssin arviointi",
      "Priorisoidut toimenpide-ehdotukset, ei pelkkää kuvailua",
    ],
  },
  {
    title: "Urheiluhallit-booker",
    tag: "Selainautomaatio",
    year: "2025",
    blurb:
      "Playwright-automaatio, joka varaa ryhmäliikuntatunnit puolestani — kirjautuminen, haku, varaus ja peruutus.",
    details:
      "Discovery-pohjainen toteutus: skripti mappaa sisäänkirjautumisen ja varauspolun automaattisesti, tallentaa auth-tilan ja ajaa varauksen ajastetusti. Logitus ja kuvakaappaukset jokaisesta ajosta tekevät debuggaamisesta nopean — ja tuovat selkeyden, kun jokin järjestelmäpäivityksen jälkeen muuttuu.",
    stack: ["Python", "Playwright", "launchd-cron", "JSONL-logit"],
    highlights: [
      "Login-flow discovery automaattisesti — ei kovakoodattuja selektoreita",
      "Auth-state tallennetaan kertakirjautumisen jälkeen, varauksia ei keskeytä uudelleenkirjautuminen",
      "Manuaalinen capture-tila headed-selaimessa varauspolun mappaamiseen",
      "Erilliset skriptit varaukselle, listaukselle ja peruutukselle",
      "Kuvakaappaukset ja JSONL-loki jokaisesta ajosta",
    ],
  },
  {
    title: "Selenium-koulujärjestelmäautomaatiot",
    tag: "Wilma · itslearning",
    year: "2024–",
    blurb:
      "Wilman ja itslearningin rutiinit Seleniumilla: poissaolot, viestit, arvioinnit ja materiaalin synkkaus.",
    details:
      "Tunteja per viikko takaisin opettajalle — ei klikkailuun vaan opettamiseen. Skriptit kestävät tuotantokäytön: virhetilanteet hoidetaan, lokit kertyvät, ja ihminen tietää milloin pitää astua väliin.",
    stack: ["Python", "Selenium", "scheduled jobs"],
    highlights: [
      "Rinnakkaiset automaatiot Wilma- ja itslearning-järjestelmiin",
      "Useita tunteja työaikaa säästyy viikoittain per skripti",
      "Tuotantotason virhe­käsittely ja automaattinen uudelleen­yritys",
    ],
  },
  {
    title: "GPT-pohjaiset opetustyökalut",
    tag: "Generatiivinen AI",
    year: "2024–",
    blurb:
      "Räätälöityjä GPT-assistentteja ja agentteja opetuksen tueksi: tehtävien tarkistus, materiaalin tuottaminen ja eriyttäminen.",
    details:
      "Toimivat opettajan parina, eivät korvaa häntä. Saavutettavuus ja erityispedagogiikan periaatteet ovat suunnittelun lähtökohta — ei jälkikäteen lisätty kerros.",
    stack: ["GPT", "Custom GPTs", "Prompt engineering", "RAG"],
    highlights: [
      "Tehtävien tarkistus eri vaikeustasoilla — opettaja säilyttää viimeisen sanan",
      "Eriyttäminen ja saavutettavuus rakennettu promptaukseen sisään",
      "RAG-pohjainen haku omiin opetussisältöihin: oppilas saa oman aineiston, ei yleistä webin kaikua",
    ],
  },
  {
    title: "Sekunda Oy — mobiilipeli",
    tag: "Pelinkehitys",
    year: "2014–2026",
    blurb:
      "Pelifirma 2014–2026, yksi julkaistu mobiilipeli Unityllä.",
    details:
      "Yrittäjyyskokemus suunnittelusta julkaisuun: tuotteistus, julkaisukanavat ja käyttäjäkokemus opittu kantapään kautta. Pohja, jolle myöhempi tuotekehitys ja konsultointi rakentuvat.",
    stack: ["Unity", "C#", "Mobile"],
    highlights: [
      "Mobiilipelin koko elinkaari: konsepti → suunnittelu → toteutus → julkaisu",
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
        <h2 className="h2 mt-3 text-ink-50">Toteutettuja, ei vain suunniteltuja.</h2>
        <p className="lead mt-4 max-w-2xl">
          Tekoäly­agentit, selainautomaatio ja pedagogiset työkalut.
          Tuotantoon päässeitä tai aktiivisessa kehityksessä —
          klikkaa korttia, niin näet miten ja miksi.
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
                  <span key={s} className="tag">{s}</span>
                ))}
                {p.stack.length > 4 && (
                  <span className="tag">+{p.stack.length - 4}</span>
                )}
              </div>
              <span className="mt-5 text-sm text-accent-400 font-medium inline-flex items-center gap-1.5">
                Lue lisää
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
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
          <span className="text-xl leading-none" aria-hidden>×</span>
        </button>

        <p className="eyebrow">{project.tag}</p>
        <h3
          id="project-title"
          className="h2 mt-2 text-ink-50 pr-10"
        >
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
                <li key={h} className="flex gap-3 text-ink-100 leading-relaxed">
                  <span aria-hidden className="text-accent-400 mt-1.5">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7">
          <p className="eyebrow">Teknologiat</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        {(project.status || (project.links && project.links.length > 0)) && (
          <div className="mt-7 pt-6 border-t border-ink-600/40 flex flex-wrap gap-x-6 gap-y-3 items-center justify-between text-sm">
            {project.status && (
              <span className="muted">Status: {project.status}</span>
            )}
            {project.links && project.links.length > 0 && (
              <div className="flex gap-4">
                {project.links.map((l) => (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
