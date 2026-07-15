import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Profiili",
    title: "Erkkaope, joka kyllästyi tekemään saman asian käsin.",
    p1: "Opetan tieto- ja viestintätekniikkaa Helsinki Business Collegessa. Käytännössä se tarkoittaa ohjelmointia, kyberturvallisuutta, IT-tukea ja paljon opiskelijoiden kanssa tehtävää arjen säätöä. Taustalla on tietojenkäsittelytieteen maisterin tutkinto ja yli 15 vuotta ammatillista opetusta.",
    p2: "Tekoäly ei ole minulle keynote-aihe vaan työväline. Olen rakentanut oman Hermes-agentin, automatisoinut Wilman ja itslearningin rutiineja, tehnyt avoimen tekoälykurssin ja käyttänyt agenttiputkia kurssimateriaalien, tehtävien, rubriikkien ja opettajan ohjeiden tuotantoon.",
    blogLink: "Kirjoitin oman agentin rakentamisesta blogisarjan",
    p3: "Pätevyydet: ammatillinen opettaja (Haaga-Helia, 2013) · ammatillinen erityisopettaja (Haaga-Helia, 2018).",
    p4: "Mukana myös: OAJ:n valtuuston varajäsen · luottamusmies · yli 19 000 opettajan yhteisön ylläpitäjä · OPH:n tekoälytyöryhmän jäsen.",
    cards: [
      {
        e: "Tekoäly ja agentit",
        t: "Ei demoksi, vaan käyttöön",
        b: "Rakennan agentteja, jotka hakevat tietoa, käyttävät työkaluja ja jättävät jäljen siitä mitä tekivät. Jos ratkaisu toimii vain lavalla, se ei ole valmis.",
      },
      {
        e: "Automaatio",
        t: "Pois turha klikkailu",
        b: "Wilma, itslearning, varausjärjestelmät ja muut kirjautumista vaativat rutiinit. Ihminen päättää, skripti hoitaa mekaanisen työn.",
      },
      {
        e: "Pedagogiikka",
        t: "Kurssi pitää myös opettaa",
        b: "Bloomin taksonomia, linjakkuus, saavutettavuus ja eriyttäminen. Ei koristeena, vaan rakenteessa: tehtävissä, arvioinnissa ja opiskelijan ohjeissa.",
      },
    ],
  },
  en: {
    eyebrow: "Profile",
    title: "A special ed teacher who got tired of doing the same thing by hand.",
    p1: "I teach ICT at Helsinki Business College: programming, cybersecurity, IT support and a lot of practical student work. I have an MSc in Computer Science and over 15 years in vocational teaching.",
    p2: "AI is not a keynote topic for me. It's a work tool. I've built my own Hermes agent, automated Wilma and itslearning routines, published an open AI course, and used agent pipelines to produce course materials, assignments, rubrics and teacher guides.",
    blogLink: "I wrote a blog series about building my own agent",
    p3: "Qualifications: vocational teacher (Haaga-Helia, 2013) · vocational special education teacher (Haaga-Helia, 2018).",
    p4: "Also: OAJ council deputy member · shop steward · admin of a 19,000+ teacher community · member of the Finnish National Agency for Education AI working group.",
    cards: [
      {
        e: "AI & agents",
        t: "Not demos. Working tools.",
        b: "I build agents that retrieve information, use tools and leave an audit trail. If it only works on stage, it is not done.",
      },
      {
        e: "Automation",
        t: "Less pointless clicking",
        b: "Wilma, itslearning, booking systems and other login-protected routines. The human decides; the script handles the mechanical work.",
      },
      {
        e: "Pedagogy",
        t: "The course still has to teach",
        b: "Bloom's taxonomy, constructive alignment, accessibility and differentiation — built into assignments, assessment and student instructions.",
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
