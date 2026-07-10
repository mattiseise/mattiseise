import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Profiili",
    title: "Tekninen opettaja, joka koodaa.",
    p1: "Opetan tieto- ja viestintätekniikkaa Helsinki Business Collegessa. Yhdistän opetuksessa ohjelmointia, kyberturvallisuutta ja IT-tukea erityispedagogiikan keinoihin. Taustalla tietojenkäsittelytieteen maisterin tutkinto vuodelta 2011 ja yli 15 vuoden kokemus ammatillisesta opetuksesta.",
    p2: "Tekoäly on minulle työkalu, ei pelkkä puheenaihe. Olen rakentanut tuotantokäyttöön oman AI-agentin, automatisoinut Wilman ja itslearningin rutiineja ja kehitän jatkuvasti GPT-pohjaisia opetustyökaluja. Olen mukana Opetushallituksen työryhmässä, joka linjaa tekoälyn käyttöä suomalaisessa opetuksessa.",
    blogLink: "Kirjoitin koko matkasta kuusiosaisen blogisarjan",
    p3: "Pätevyydet: ammatillinen opettaja (Haaga-Helia, 2013) · ammatillinen erityisopettaja (Haaga-Helia, 2018).",
    p4: "Edunvalvonta: OAJ:n valtuuston varajäsen · luottamusmies · yli 19 000 opettajan yhteisön ”Opettajien edunvalvonta ja professio” ylläpitäjä.",
    cards: [
      {
        e: "Tekoäly ja agentit",
        t: "Suunnittelusta tuotantoon",
        b: "Monen agentin arkkitehtuurit, RAG-haku ja työkalut, joissa malli valitaan tehtävän vaativuuden — ei brändin — mukaan. Paikallinen varamalli toimii myös ilman verkkoyhteyttä.",
      },
      {
        e: "Automaatio",
        t: "Selain ja rajapinnat",
        b: "Playwright- ja Selenium-pohjaiset automaatiot kirjautumista vaativiin järjestelmiin. Ajastetut työnkulut, virhetilanteiden hallinta ja raportointi Slackiin tai Telegramiin.",
      },
      {
        e: "Pedagogiikka",
        t: "Linjakkuus ja saavutettavuus",
        b: "Bloomin taksonomia, linjakas opetus ja eriyttäminen — eivät teoriana vaan osana jokaista rakentamaani kurssia. Saavutettavuus on lähtökohta, ei jälkikäteen lisätty kerros.",
      },
    ],
  },
  en: {
    eyebrow: "Profile",
    title: "A technical teacher who codes.",
    p1: "I teach information and communication technology at Helsinki Business College, combining programming, cybersecurity and IT support with special education methods. Behind it: an MSc in Computer Science (2011) and over 15 years of vocational teaching.",
    p2: "AI is a tool for me, not just a topic. I've built my own AI agent for production use, automated Wilma and itslearning routines, and continuously develop GPT-based teaching tools. I'm a member of the Finnish National Agency for Education working group on AI in education.",
    blogLink: "I wrote a six-part blog series about the whole journey",
    p3: "Qualifications: vocational teacher (Haaga-Helia, 2013) · vocational special education teacher (Haaga-Helia, 2018).",
    p4: "Advocacy: OAJ council deputy member · shop steward · admin of a 19,000+ teacher community.",
    cards: [
      {
        e: "AI & agents",
        t: "From design to production",
        b: "Multi-agent architectures, RAG search and tools where the model is chosen by task difficulty — not brand. A local fallback model keeps things running even offline.",
      },
      {
        e: "Automation",
        t: "Browsers & APIs",
        b: "Playwright and Selenium automations for login-protected systems. Scheduled workflows, error handling and reporting to Slack or Telegram.",
      },
      {
        e: "Pedagogy",
        t: "Alignment & accessibility",
        b: "Bloom's taxonomy, constructive alignment and differentiation — not as theory but built into every course I make. Accessibility is the starting point, not an afterthought.",
      },
    ],
  },
} as const;

export default function About({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  const blogHref = locale === "en" ? "/en/blog" : "/blog";
  return (
    <section id="osaaminen" className="section-pad border-t border-cream-50/[0.08]">
      <div className="container-narrow grid items-start gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2 mt-3.5 text-cream-50">{t.title}</h2>

          <div className="relative mt-[30px] aspect-[3/4] w-full max-w-[380px] overflow-hidden rounded-[18px]">
            <Image
              src="/images/seisepontossa.jpg"
              alt="Matti Seise"
              fill
              sizes="(max-width: 768px) 80vw, 380px"
              className="object-cover saturate-[0.95]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-[17.5px] leading-[1.75] text-cream-200 md:col-span-7">
          <p>{t.p1}</p>
          <p>
            {t.p2}{" "}
            <Link
              href={blogHref}
              className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
            >
              {t.blogLink}
            </Link>
            .
          </p>
          <p className="text-[15px] text-cream-400">{t.p3}</p>
          <p className="text-[15px] text-cream-400">{t.p4}</p>
        </div>
      </div>

      <div className="container-narrow mt-14 grid gap-[22px] md:grid-cols-3">
        {t.cards.map((c) => (
          <div key={c.e} className="card card-hover-lift">
            <p className="eyebrow-sm">{c.e}</p>
            <p className="mt-2.5 font-display text-[21px] font-semibold text-cream-50">
              {c.t}
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.65] text-cream-300">
              {c.b}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
