import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList } from "@/components/CaseLayout";
import { aiperusteetUrl } from "@/lib/links";

/** Staattinen esityssivu, ks. scripts/rakenna-esitys.py. */
const ESITYS = "/esitykset/tekoaly-tyossa-ja-arjessa";
const title = "Näin käytän tekoälyä työssä ja arjessa";
const description =
  "Esitys omista tekoälyllä rakennetuista työkaluista: Wilma- ja itslearning-apuvälineet, agenttiputkella tehdyt oppimateriaalit, oma avustaja ja arjen automaatiot.";

export const metadata: Metadata = {
  title: `${title} — esitys · Matti Seise`,
  description,
  alternates: { canonical: "https://seise.org/esitykset" },
  openGraph: {
    title,
    description,
    url: "https://seise.org/esitykset",
    type: "article",
    siteName: "Matti Seise",
    locale: "fi_FI",
    images: [
      {
        url: `${ESITYS}/og.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: title,
      },
    ],
  },
};

const link = "text-amber-400 underline underline-offset-4 hover:text-amber-300";

export default function Page() {
  return (
    <CaseLayout
      alternateHref="/en"
      eyebrow="Esitys · Tekoäly käytännössä"
      title={title}
      lead="Esitys siitä, mitä olen rakentanut tekoälyn avulla opettajan työhön ja omaan arkeeni. Jokainen työkalu syntyi samalla kaavalla: huomaan toistuvan työvaiheen, kuvaan tavoitteen tekoälylle, kokeilen ja korjaan. Lopputuloksena on käyttökelpoinen työkalu."
      facts={[
        { label: "Dioja", value: "19" },
        { label: "Osia", value: "4" },
        { label: "Kieli", value: "Suomi" },
        { label: "Toimii", value: "Selain & puhelin" },
      ]}
      sections={[
        {
          heading: "Avaa esitys",
          body: (
            <>
              <a
                href={ESITYS}
                className="group block overflow-hidden rounded-[14px] border border-cream-50/10 transition-colors hover:border-amber-400/50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- staattinen jakokuva public-kansiosta */}
                <img
                  src={`${ESITYS}/og.jpg`}
                  width={1200}
                  height={630}
                  alt="Esityksen kansi: Näin käytän tekoälyä työssä ja arjessa"
                  className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </a>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
                <a href={ESITYS} className="btn-primary-sm">
                  Avaa esitys <span aria-hidden>→</span>
                </a>
                <p className="text-[15px] leading-[1.6] text-cream-300">
                  Diat vaihtuvat nuolinäppäimillä tai puhelimessa napauttamalla. Koko näytön tila: F-näppäin tai oikean yläkulman painike.
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Mitä esityksessä on",
          body: (
            <>
              <p>Esitys etenee neljässä osassa opetustyöstä omaan arkeen.</p>
              <CaseList
                items={[
                  "Opettajan arki: opintosuunnitelmat Excelistä Wilmaan, keskeneräisten suoritusten korostus, Wilman sarakkeiden piilotus ja itslearningissä odottavat palautukset.",
                  "Opetus: agenttiputki, joka tekee kokonaisen kurssin oppitunteineen, vanhan kurssin tarkistus ja korjaus, näyttöprojektit sekä oppimisen tuen työkalut.",
                  "Avustaja: Claus, oma tekoälyavustajani. Se kokoaa aamulla päivän ytimen, hoitaa varausmuutokset luvallani ja vei domainin siirron maaliin, kun lähdin saunaan.",
                  "Omat palvelut ja arki: kaksi julkaistua verkkopalvelua, oma sähköpostiohjelma, tekoälylle opetettu visuaalinen tyyli ja kirjoitusääni sekä arjen vahdit.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "Kaksi periaatetta",
          body: (
            <>
              <p>
                <strong className="text-cream-50">Tekoäly auttaa rakentamaan, valmis työkalu ei aina tarvitse sitä.</strong>{" "}
                Wilman ja itslearningin apuvälineet toimivat sovituilla säännöillä. Ne korostavat ja järjestävät tietoa, mutta eivät arvioi opiskelijaa eivätkä muuta arvosanoja. Wilma on rajattu pois tekoälyagenttien käytöstä.
              </p>
              <p>
                <strong className="text-cream-50">Minä päätän.</strong>{" "}
                Kurssin korjausehdotukset menevät hyväksyntäjonoon, julkaisusta päätän itse, eikä avustaja peru varauksia ilman lupaa.
              </p>
            </>
          ),
        },
        {
          heading: "Lisää aiheesta",
          body: (
            <ul className="flex list-disc flex-col gap-2.5 pl-6 marker:text-amber-400">
              <li className="pl-1">
                <Link href="/caset/wilma-itslearning-automaatiot" className={link}>
                  Wilma- ja itslearning-automaatiot
                </Link>{" "}
                — esityksen ensimmäisen osan työkalut tarkemmin.
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
          ),
        },
      ]}
      cta={{
        label:
          "Haluatko esityksen omalle työyhteisöllenne? Pidän sen etänä tai paikan päällä. Jatkoksi voidaan tehdä työpaja teidän omista työvaiheistanne.",
        href: "/#yhteys",
      }}
    />
  );
}
