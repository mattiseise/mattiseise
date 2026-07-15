import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "tekoalyn-perusteet";
const title = "Tekoälyn perusteet — 27 oppitunnin kurssi";
const description =
  "27 oppitunnin kurssi tekoälyn perusteista. Kolme kokonaisuutta: teoria, käyttö ja agentit. Avoin lähdekoodi GitHubissa.";

export const metadata: Metadata = {
  title: title + " · Matti Seise",
  description,
  alternates: {
    canonical: `https://seise.org/caset/${slug}`,
    languages: {
      fi: `https://seise.org/caset/${slug}`,
      en: `https://seise.org/en/caset/${slug}`,
    },
  },
  openGraph: {
    title,
    description,
    url: `https://seise.org/caset/${slug}`,
    type: "article",
    siteName: "Matti Seise",
    locale: "fi_FI",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: title,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <CaseArticleSchema
        title={title}
        description={description}
        slug={slug}
        datePublished="2026-05-08"
      />
      <CaseLayout
        alternateHref={`/en/caset/${slug}`}
        eyebrow="Case · Koulutus"
        title="Tekoälyn perusteet — 27 oppituntia ilman kalvosirkusta"
        lead="Tein avoimen tekoälykurssin, jossa opiskelija käyttää tekoälyä eikä vain kuuntele siitä. 27 oppituntia, opiskelija- ja opettajamateriaalit, sivustogeneraattori ja lähdekoodi GitHubissa. Materiaali on tehty tekoälyllä, koska se oli osa pointtia."
        facts={[
          { label: "Aikaväli", value: "2025–" },
          { label: "Oppitunteja", value: "27" },
          { label: "Materiaalit", value: "Opiskelija + opettaja" },
          { label: "Lisenssi", value: "Avoin lähdekoodi" },
        ]}
        sections={[
          {
            heading: "Ongelma",
            body: (
              <>
                <p>
                  Tekoälykoulutuksia on paljon. Ongelma on, että moni niistä
                  jää tasolle “tässä on ChatGPT ja tässä on prompti”.
                  Opiskelija kuulee mitä generatiivinen tekoäly on, mutta ei
                  opi käyttämään sitä omassa työssä.
                </p>
                <p>
                  Halusin kurssin, jossa tehdään asioita: haetaan tietoa,
                  arvioidaan tulosta, promptataan paremmin, rakennetaan
                  pieniä agentteja ja opetellaan sanomaan mallille vastaan.
                  Ilman että kurssi muuttuu ohjelmistokehittäjien sisäpiiriksi.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Jaoin kurssin kolmeen kokonaisuuteen: ensin teoria
                  (mitä tekoäly on, miten se toimii ja millaiset rajat
                  sillä on), sitten käytäntö (työkalut, promptaus,
                  kriittinen arviointi) ja lopuksi agentit (miten
                  yksinkertaisia automaatioita voi rakentaa itse).
                </p>
                <p>
                  Jokaiseen oppituntiin kuuluu opiskelijan materiaali ja
                  opettajan materiaali. Opiskelijalle on itseopiskeluteksti,
                  tehtävät ja sanasto. Opettajalle on rungot, taustat ja
                  vetotehtävät. Sisältö on sivustona ja avoimena koodina,
                  jotta muut voivat ottaa sen pohjaksi eivätkä aloita tyhjästä.
                </p>
              </>
            ),
          },
          {
            heading: "Tekninen toteutus",
            body: (
              <>
                <CaseList
                  items={[
                    "27 oppituntia jaettuna kolmeen kokonaisuuteen: teoria, käyttö ja agentit",
                    "Erillinen opiskelija- ja opettajamateriaali jokaiselle oppitunnille (itseopiskelu, tehtävät, sanasto, opettajavetoiset tehtävät)",
                    "Sivuston­generaattori muuntaa Markdown-sisällön julkaistavaksi sivustoksi yhdellä komennolla",
                    "Sisältö avoimena lähdekoodina GitHubissa — muut oppilaitokset voivat hyödyntää, muokata ja jatkokehittää",
                    "Julkinen versio: aiperusteet.fi",
                  ]}
                />
                <p className="mt-5 text-sm muted">
                  Avoin sivusto:{" "}
                  <a
                    className="text-amber-400 hover:text-amber-300 hover:underline"
                    href="https://aiperusteet.fi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aiperusteet.fi
                  </a>{" "}
                  · Lähdekoodi:{" "}
                  <a
                    className="text-amber-400 hover:text-amber-300 hover:underline"
                    href="https://github.com/mattiseise/ai-perusteet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/mattiseise/ai-perusteet
                  </a>
                </p>
              </>
            ),
          },
          {
            heading: "Rehellisesti: kurssi on tehty tekoälyllä",
            body: (
              <>
                <p>
                  Kurssi on tehty tekoälyllä ja agenttiputkilla. En piilota
                  sitä. Jätin mukaan myös pieniä outouksia: kömpelöitä
                  lauseita ja kuvien artefakteja. Ne näyttävät opiskelijalle
                  saman asian, jonka opettajan pitää itsekin hyväksyä:
                  hyväkin malli tuottaa välillä roskaa.
                </p>
                <p>
                  Ala muuttuu nopeasti, joten yksittäiset työkalut vanhenevat.
                  Se ei haittaa, jos perusajattelu on kunnossa. Jokainen
                  tehtävä on suunniteltu tehtäväksi tekoälyn kanssa: jos
                  tehtävä on epäselvä, ensimmäinen kysymys kuuluu tekoälylle.
                </p>
                <p className="eyebrow mt-6">
                  Kurssin luonnissa käytetyt työkalut
                </p>
                <CaseList
                  items={[
                    "Kielimallit: GPT 5.5 Pro, Claude Opus 4.6 & 4.7, ChatGPT 5.4 auto",
                    "Agenttikehikot: OpenClaw, Hermes, n8n, Claude Cowork",
                    "Muut työkalut: Google NotebookLM, GitHub Copilot",
                  ]}
                />
              </>
            ),
          },
          {
            heading: "Tulokset",
            body: (
              <>
                <p>
                  Kurssi on käytössä ammatillisessa koulutuksessa ja kehittyy
                  edelleen. Sitä voi käyttää kokonaisena kurssina tai purkaa
                  yksittäisiksi työpajan osiksi.
                </p>
                <p>
                  Avoin lähdekoodi on tarkoituksellinen ratkaisu. En halunnut
                  tehdä PDF-pinoa, joka kuolee ensimmäiseen työkalumuutokseen.
                  Yksittäisen oppitunnin voi vaihtaa ilman, että koko kurssi
                  hajoaa.
                </p>
              </>
            ),
          },
          {
            heading: "Mitä tästä voi tilata",
            body: (
              <>
                <CaseList
                  items={[
                    "Tekoälykoulutus organisaatiollesi käyttäen näiden materiaalien runkoa, räätälöitynä toimialaan",
                    "Pedagoginen suunnittelu ja sisältö omaan koulutukseen — Bloomin taksonomian ja linjakkaan opetuksen periaattein",
                    "Sivuston­generaattori avoimena lähdekoodina, jos haluat vastaavan Markdown-pohjaisen sivuston",
                    "Yhteistyö koulutusvientiin: kurssin englanninkielinen versio on suunnitteilla",
                  ]}
                />
                <p className="mt-5">
                  Katso{" "}
                  <Link
                    href="/#koulutukset"
                    className="text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    koulutuspaketit ja hinnasto
                  </Link>{" "}
                  tai pyydä räätälöity tarjous.
                </p>
              </>
            ),
          },
        ]}
        cta={{
          label:
            "Räätälöidään koulutus tai työpaja tarpeesi mukaan — yhden työpajan kestosta useamman päivän ohjelmaan.",
          href: "/#yhteys",
        }}
        prev={{
          label: "Hermes-agentti (blogisarja)",
          href: "/blog/openclaw-arkkitehtuuri",
        }}
        next={{
          label: "Moodle-kurssiauditointi",
          href: "/caset/moodle-kurssiauditointi",
        }}
      />
    </>
  );
}
