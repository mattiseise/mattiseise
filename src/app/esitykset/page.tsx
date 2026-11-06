import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { VideoCard } from "@/components/Videos";
import { aiperusteetUrl } from "@/lib/links";
import { SLIDES, VIDEOS } from "@/lib/esitykset";
import { BASE, breadcrumbLd } from "@/lib/schema";

/** Videot (scripts/julkaise-sarjakuva.py) ja diaesitys (scripts/rakenna-esitys.py), data: lib/esitykset.ts. */
const title = "Videot ja esitykset";
const description =
  "Piirrettyjä videoita ja diaesitys tekoälyllä rakennetuista työkaluista: agenttiputki, joka tekee oppimateriaalia, opettajan apurit Wilmaan ja itslearningiin sekä erityisen tuen työkalut.";

export const metadata: Metadata = {
  title: `${title} · Matti Seise`,
  description,
  alternates: { canonical: "https://seise.org/esitykset" },
  openGraph: {
    title,
    description,
    url: "https://seise.org/esitykset",
    type: "website",
    siteName: "Matti Seise",
    locale: "fi_FI",
    images: [
      {
        url: `${SLIDES.href}og.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: SLIDES.fi.title,
      },
    ],
  },
};

const link = "text-syaani-400 underline underline-offset-4 hover:text-syaani-300";

const SLIDE_PARTS = [
  "Opettajan arki: opintosuunnitelmat Excelistä Wilmaan, keskeneräisten suoritusten korostus, Wilman sarakkeiden piilotus ja itslearningissä odottavat palautukset.",
  "Opetus: agenttiputki, joka tekee kokonaisen kurssin oppitunteineen, vanhan kurssin tarkistus ja korjaus, näyttöprojektit sekä oppimisen tuen työkalut.",
  "Avustaja: Claus, oma tekoälyavustajani. Se kokoaa aamulla päivän tärkeimmät asiat, hoitaa varausmuutokset luvallani ja vei domainin siirron maaliin, kun lähdin saunaan.",
  "Omat palvelut ja arki: kaksi julkaistua verkkopalvelua, oma sähköpostiohjelma, tekoälylle opetettu visuaalinen tyyli ja kirjoitusääni sekä arjen vahdit.",
];

export default function Page() {
  const breadcrumb = breadcrumbLd([
    { name: "Etusivu", item: `${BASE}/` },
    { name: title },
  ]);
  return (
    <main id="sisalto" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Nav locale="fi" alternateHref="/en#videot" />

      {/* Avaus */}
      <section className="relative overflow-hidden px-5 pb-6 pt-14 md:px-10 md:pt-20">
        <div aria-hidden className="sateet pointer-events-none absolute inset-0 [mask-image:radial-gradient(55%_75%_at_80%_30%,#000,transparent_75%)]" />
        <div aria-hidden className="pisteet pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_80%_at_20%_10%,#000,transparent_70%)]" />
        <div className="container-narrow relative grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow fade-up fade-up-1">Tekoäly käytännössä</p>
            <h1 className="h1 fade-up fade-up-2 mt-5 text-teksti-50">{title}</h1>
            <p className="lead fade-up fade-up-3 mt-5 max-w-[38em]">
              Mitä olen rakentanut tekoälyn avulla opettajan työhön ja omaan arkeeni. Jokainen työkalu on tehty samalla
              tavalla: huomaan toistuvan työvaiheen, kuvaan tavoitteen tekoälylle, kokeilen ja korjaan.
            </p>
            <nav aria-label="Sivun osiot" className="fade-up fade-up-4 mt-7 flex flex-wrap gap-3 text-[14.5px] font-bold">
              <a href="#videot" className="tag !px-3.5 !py-1.5 !text-[14px] hover:!border-syaani-400 hover:text-syaani-400">
                {VIDEOS.length} videota
              </a>
              <a href="#diaesitys" className="tag !px-3.5 !py-1.5 !text-[14px] hover:!border-syaani-400 hover:text-syaani-400">
                Diaesitys
              </a>
              <a href="#tilaa" className="tag !px-3.5 !py-1.5 !text-[14px] hover:!border-syaani-400 hover:text-syaani-400">
                Esitys työyhteisölle
              </a>
            </nav>
          </div>
          <div className="relative hidden md:col-span-4 md:block">
            <p className="kupla kupla-pop viive-6 absolute -top-4 left-0 max-w-[15em]">
              Valitse video. Minä esiinnyn niissä kaikissa.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hahmot/claus-point.svg"
              alt=""
              aria-hidden
              className="hahmo-sisaan viive-6 ml-auto mt-16 w-[260px]"
            />
          </div>
        </div>
      </section>

      {/* Videot */}
      <section id="videot" className="scroll-mt-24 px-5 py-12 md:px-10 md:py-16">
        <div className="container-narrow">
          <h2 className="h2 text-teksti-50">Videot</h2>
          <p className="mt-3 max-w-[44em] text-[16px] leading-[1.65] text-teksti-300">
            Piirrettyjä videoita, joissa hahmot puhuvat. Ääni käynnistyy Aloita-painikkeesta. Videoissa on tekstitys, joten
            ne toimivat myös ilman ääntä. Luvut voi katsoa yksitellen tai lukea käsikirjoituksena.
          </p>
          <div className="mt-10 grid gap-x-[22px] gap-y-10 md:grid-cols-3">
            {VIDEOS.map((v) => (
              <VideoCard key={v.slug} v={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Diaesitys */}
      <section id="diaesitys" className="scroll-mt-24 border-t border-teksti-50/[0.08] px-5 py-12 md:px-10 md:py-16">
        <div className="container-narrow grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href={SLIDES.href}
              className="ruutu group block overflow-hidden"
              style={{ ["--c" as string]: "#f0459b" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- staattinen jakokuva public-kansiosta */}
              <img
                src={`${SLIDES.href}og.jpg`}
                width={1200}
                height={630}
                alt="Diaesityksen kansi: Näin käytän tekoälyä työssä ja arjessa"
                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={SLIDES.href} className="btn-primary-sm">
                Avaa diaesitys
              </a>
              <p className="max-w-[24em] text-[14px] leading-[1.55] text-teksti-300">
                Diat vaihtuvat nuolinäppäimillä tai puhelimessa napauttamalla. Koko näyttö: F-näppäin.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow-sm">Diaesitys · {SLIDES.slides} diaa · 4 osaa</p>
            <h2 className="h2 mt-3 text-teksti-50">{SLIDES.fi.title}</h2>
            <ol className="mt-6 flex flex-col gap-3 text-[15.5px] leading-[1.65] text-teksti-200">
              {SLIDE_PARTS.map((p, i) => (
                <li key={i} className="flex gap-3.5">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-muste bg-ruutu font-display text-[15px] text-muste"
                  >
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Periaatteet */}
      <section className="border-t border-teksti-50/[0.08] px-5 py-12 md:px-10 md:py-16">
        <div className="container-narrow">
          <h2 className="h2 text-teksti-50">Kaksi periaatetta</h2>
          <div className="mt-8 grid gap-[22px] md:grid-cols-2">
            <div className="card relative" style={{ ["--c" as string]: "#fbbf24" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hahmot/es-korostin.svg" alt="" aria-hidden width={56} height={56} className="absolute -top-5 right-5 h-14 w-14 rounded-full border-[2.5px] border-muste bg-yo-700" />
              <h3 className="h3 pr-14 text-teksti-50">Tekoälyllä tehty työkalu ei aina itse käytä tekoälyä.</h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-teksti-300">
                Wilman ja itslearningin apuvälineet toimivat sovituilla säännöillä. Ne korostavat ja järjestävät tietoa,
                mutta eivät arvioi opiskelijaa eivätkä muuta arvosanoja. Wilma on rajattu pois tekoälyagenttien käytöstä.
              </p>
            </div>
            <div className="card relative" style={{ ["--c" as string]: "#2dd4bf" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hahmot/opettaja.svg" alt="" aria-hidden width={56} height={56} className="absolute -top-5 right-5 h-14 w-14 rounded-full border-[2.5px] border-muste bg-yo-700" />
              <h3 className="h3 pr-14 text-teksti-50">Minä päätän.</h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-teksti-300">
                Kurssin korjausehdotukset menevät hyväksyntäjonoon, julkaisusta päätän itse, eikä avustaja peru
                varauksia ilman lupaa.
              </p>
            </div>
          </div>

          <h2 className="mt-14 font-sans text-[20px] font-bold text-teksti-50">Lisää aiheesta</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-6 text-[16px] leading-[1.7] text-teksti-200 marker:text-syaani-400">
            <li className="pl-1">
              <Link href="/caset/wilma-itslearning-automaatiot" className={link}>
                Wilma- ja itslearning-automaatiot
              </Link>{" "}
              — opettajan apurit tarkemmin.
            </li>
            <li className="pl-1">
              <a href={aiperusteetUrl("esitys")} target="_blank" rel="noopener noreferrer" className={link}>
                Tekoälyn perusteet
              </a>{" "}
              — agenttiputkella tehty avoin ja maksuton 27 oppitunnin kurssi.
            </li>
            <li className="pl-1">
              <Link href="/blog" className={link}>
                Blogi
              </Link>{" "}
              — miten rakensin oman AI-agentin.
            </li>
          </ul>

          <div id="tilaa" className="card-glow mt-14 flex scroll-mt-24 flex-wrap items-center justify-between gap-7 p-8">
            <p className="max-w-[34em] text-base leading-[1.65] text-teksti-100">
              Haluatteko esityksen omalle työyhteisöllenne? Pidän sen etänä tai paikan päällä. Jatkoksi voidaan tehdä
              työpaja teidän omista työvaiheistanne.
            </p>
            <Link href="/#yhteys" className="btn-primary-sm shrink-0">
              Ota yhteyttä <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Footer locale="fi" />
      </div>
    </main>
  );
}
