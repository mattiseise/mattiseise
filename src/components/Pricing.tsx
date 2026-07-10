import type { Locale } from "@/lib/blog";

type PackageDef = {
  tier: string;
  badge?: string;
  highlight?: boolean;
  title: string;
  price: string;
  unit: string;
  text: string;
  includes: readonly string[];
  cta: string;
};

const strings = {
  fi: {
    eyebrow: "Koulutukset & hinnasto",
    title: "Tekoälykoulutukset, joista jää käteen työkaluja — ei kalvopinoa.",
    lead: "Sisältö räätälöidään kohderyhmälle: konkreettiset työkalut, oikeat esimerkit ja taidot, jotka jäävät käyttöön koulutuksen jälkeenkin. Aloita kevyellä johdannolla tai tilaa kokonainen agenttisprintti.",
    courseNote: "Haluatko kokeilla ensin itse?",
    courseLink: "Tekoälyn perusteet",
    courseRest: "on avoin ja maksuton 27 oppitunnin kurssini. Koulutuksissa sama sisältö räätälöidään teidän työhönne.",
    packages: [
      {
        tier: "Aloitus",
        title: "2 tunnin johdanto",
        price: "300 €",
        unit: "kiinteä hinta + alv",
        text: "Tiivis työpaja: mitä tekoäly osaa, miten siitä saa hyödyn omaan rooliin ja mitä riskejä on. Sopii tiimeille, joiden tekoälymatka on alussa.",
        includes: [
          "Etänä tai paikan päällä Helsingissä",
          "Käytännön harjoituksia omilla työkaluilla",
          "Sisältö räätälöidään tilaajan tarpeisiin",
        ],
        cta: "Pyydä tarjous",
      },
      {
        tier: "Suosituin",
        highlight: true,
        badge: "Suosituin",
        title: "Puolen päivän työpaja",
        price: "600 €",
        unit: "4 tuntia + alv",
        text: "Syvempi sukellus: promptaus, työkalujen vertailu, agenttien rakenne ja konkreettinen suunnitelma siitä, mitä tiimi ottaa käyttöön heti seuraavana päivänä.",
        includes: [
          "Toimialaan räätälöity esimerkkikierros",
          "Materiaalit ja harjoitukset jakoon",
          "Etätallenne sopimuksen mukaan",
        ],
        cta: "Pyydä tarjous",
      },
      {
        tier: "Toteutus",
        title: "1–2 päivän agenttisprintti",
        price: "alk. 1 800 €",
        unit: "per päivä + alv",
        text: "Suunnittelemme ja rakennamme yhdessä ensimmäisen tekoälyagenttinne: lähtötilanteen kartoitus, työkalujen valinta, tietolähteet ja toimiva pilotti.",
        includes: [
          "Tarvekartoitus ja arkkitehtuuri",
          "Toimiva pilotti tilaajan ympäristössä",
          "Dokumentaatio ja jatkopolku",
        ],
        cta: "Pyydä tarjous",
      },
    ] as readonly PackageDef[],
    termsEyebrow: "Yleiset ehdot",
    termsUnit: "/ tunti tuntiveloituksena",
    termsVat: "+ alv 25,5 %",
    termsItems: [
      "Minimiveloitus 2 tuntia",
      "Sisältää sisällön räätälöinnin",
      "Etä- tai lähitoteutus sopimuksen mukaan",
      "Matkakulut Helsingin ulkopuolelle erikseen",
    ],
    customEyebrow: "Räätälöity ohjelma",
    customTitle: "Useamman päivän koulutusohjelma",
    customBody:
      "Esimerkiksi AI-akatemia johdolle tai asiantuntijatiimille. Suunnitellaan yhdessä tarpeen, aikataulun ja budjetin mukaan.",
    customCta: "Pyydä tarjous",
    privacyLabel: "Tietosuoja:",
    privacyBody:
      "työ tehdään tietosuojalähtöisesti — minimidatalla, tilaajan ympäristössä ja ilman opiskelijatietojen tarpeetonta siirtämistä ulkopuolisiin palveluihin.",
  },
  en: {
    eyebrow: "Training & pricing",
    title: "AI training that leaves you with tools — not a slide deck.",
    lead: "Content is tailored to your audience: concrete tools, real examples, and skills that stay in use after the training. Start with a light introduction or book a full agent sprint.",
    courseNote: "Want to try it yourself first?",
    courseLink: "AI Fundamentals",
    courseRest: "is my open, free 27-lesson course (in Finnish). In trainings, the same content is tailored to your work.",
    packages: [
      {
        tier: "Starter",
        title: "2-hour introduction",
        price: "€300",
        unit: "fixed price + VAT",
        text: "A compact workshop: what AI can do, how to benefit in your own role, and what the risks are. For teams at the start of their AI journey.",
        includes: [
          "Remote or on-site in Helsinki",
          "Hands-on exercises with your own tools",
          "Content tailored to your needs",
        ],
        cta: "Request a quote",
      },
      {
        tier: "Most popular",
        highlight: true,
        badge: "Popular",
        title: "Half-day workshop",
        price: "€600",
        unit: "4 hours + VAT",
        text: "A deeper dive: prompting, tool comparison, agent structure and a concrete plan for what your team can adopt the very next day.",
        includes: [
          "Industry-tailored example tour",
          "Materials and exercises to keep",
          "Recording by agreement",
        ],
        cta: "Request a quote",
      },
      {
        tier: "Delivery",
        title: "1–2 day agent sprint",
        price: "from €1,800",
        unit: "per day + VAT",
        text: "We design and build your first AI agent together: current-state mapping, tool selection, data sources and a working pilot.",
        includes: [
          "Needs assessment & architecture",
          "Working pilot in your environment",
          "Documentation & next steps",
        ],
        cta: "Request a quote",
      },
    ] as readonly PackageDef[],
    termsEyebrow: "General terms",
    termsUnit: "/ hour, hourly billing",
    termsVat: "+ VAT 25.5%",
    termsItems: [
      "Minimum billing 2 hours",
      "Includes content tailoring",
      "Remote or on-site by agreement",
      "Travel outside Helsinki billed separately",
    ],
    customEyebrow: "Custom program",
    customTitle: "Multi-day training program",
    customBody:
      "For example an AI academy for leadership or an expert team. Designed together around your needs, schedule and budget.",
    customCta: "Request a quote",
    privacyLabel: "Privacy:",
    privacyBody:
      "all work is privacy-first — minimal data, in your environment, and without unnecessary transfer of student data to external services.",
  },
} as const;

export default function Pricing({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  const contact = locale === "en" ? "/en/#yhteys" : "#yhteys";
  return (
    <section id="koulutukset" className="section-pad border-t border-cream-50/[0.08]">
      <div className="container-narrow">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="h2 mt-3.5 max-w-[22em] text-cream-50">{t.title}</h2>
        <p className="lead mt-[18px] max-w-[38em]">{t.lead}</p>
        <p className="mt-3 max-w-[38em] text-[15px] leading-[1.65] text-cream-300">
          {t.courseNote}{" "}
          <a
            href="https://aiperusteet.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
          >
            {t.courseLink}
          </a>{" "}
          {t.courseRest}
        </p>

        <div className="mt-12 grid gap-[22px] md:grid-cols-3">
          {t.packages.map((p) => (
            <div
              key={p.title}
              className={
                "relative flex flex-col rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-[3px] " +
                (p.highlight
                  ? "border border-amber-400/50"
                  : "border border-cream-50/[0.08] bg-bark-800")
              }
              style={
                p.highlight
                  ? {
                      background:
                        "linear-gradient(160deg, rgba(224,164,88,0.1), #241d18 55%)",
                    }
                  : undefined
              }
            >
              <div className="flex items-center justify-between gap-2">
                <p className="eyebrow-sm">{p.tier}</p>
                {p.highlight && p.badge && (
                  <span className="rounded-full bg-amber-400 px-2.5 py-[3px] text-[10.5px] font-bold uppercase tracking-[0.06em] text-bark-900">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-2.5 font-display text-[23px] font-semibold text-cream-50">
                {p.title}
              </h3>
              <div className="mt-3.5 flex items-baseline gap-2">
                <span className="whitespace-nowrap font-display text-[32px] font-semibold text-amber-400">
                  {p.price}
                </span>
                <span className="text-[13.5px] text-cream-400">{p.unit}</span>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-[1.65] text-cream-300">
                {p.text}
              </p>
              <ul className="mt-[18px] flex flex-col gap-2 text-sm text-cream-200">
                {p.includes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="text-amber-400">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={contact}
                className="mt-[22px] inline-flex items-center gap-1.5 self-start text-[14.5px] font-bold text-amber-400 hover:text-amber-300"
              >
                {p.cta} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-[22px] md:grid-cols-12">
          <div className="rounded-2xl border border-cream-50/[0.08] bg-bark-800 p-7 md:col-span-7">
            <p className="eyebrow-sm">{t.termsEyebrow}</p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-display text-[34px] font-semibold text-cream-50">
                150 €
              </span>
              <span className="text-[15px] text-cream-300">{t.termsUnit}</span>
              <span className="text-[13.5px] text-cream-400">{t.termsVat}</span>
            </div>
            <ul className="mt-[18px] grid gap-x-6 gap-y-[9px] text-sm text-cream-200 sm:grid-cols-2">
              {t.termsItems.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="text-amber-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex flex-col justify-between rounded-2xl border border-amber-400/35 p-7 md:col-span-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(224,164,88,0.14), rgba(217,119,66,0.06))",
            }}
          >
            <div>
              <p className="eyebrow-sm">{t.customEyebrow}</p>
              <h3 className="mt-2.5 font-display text-[22px] font-semibold text-cream-50">
                {t.customTitle}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-cream-200">
                {t.customBody}
              </p>
            </div>
            <a href={contact} className="btn-primary-sm mt-[22px] self-start">
              {t.customCta} <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <p className="mt-[26px] text-sm leading-[1.65] text-cream-400">
          <span className="font-bold text-amber-400">{t.privacyLabel}</span>{" "}
          {t.privacyBody}
        </p>
      </div>
    </section>
  );
}
