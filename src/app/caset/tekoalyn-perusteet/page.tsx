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
        title="Tekoälyn perusteet — 27 oppitunnin kurssi käytäntöön"
        lead="Kurssi, joka opettaa tekoälyä tekemällä — ei kalvoilla. Sisältää opiskelija- ja opettajamateriaalit jokaiselle 27 oppitunnille, automaattisen sivuston­generaattorin ja avoimen lähdekoodin."
        facts={[
          { label: "Aikaväli", value: "2025–" },
          { label: "Oppitunteja", value: "27" },
          { label: "Materiaalit", value: "Opiskelija + opettaja" },
          { label: "Lisenssi", value: "Avoin lähdekoodi" },
        ]}
        sections={[
          {
            heading: "Tilanne",
            body: (
              <>
                <p>
                  Tekoälykoulutuksia on tarjolla paljon, mutta liian moni
                  jää kalvotason esitykseksi. Opiskelija kuulee, mitä
                  generatiivinen tekoäly on, mutta ei opi käyttämään sitä
                  itsenäisesti. Toinen ääripää on syvätekninen kurssi, joka
                  sulkee ulos suurimman osan ammatillisen koulutuksen
                  opiskelijoista.
                </p>
                <p>
                  Tarvittiin kurssi, joka opettaa todellisia taitoja —
                  promptauksen perusteet, työkalujen käytön, kriittisen
                  lukutaidon ja agenttien rakenteen — niin, että opiskelija
                  pärjää tekoälyn kanssa myös kurssin jälkeen.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Kurssi on jaettu kolmeen kokonaisuuteen: ensin teoria
                  (mitä tekoäly on, miten se toimii ja millaiset rajat
                  sillä on), sitten käytäntö (työkalut, promptaus,
                  kriittinen arviointi) ja lopuksi agentit (miten
                  yksinkertaisia automaatioita voi rakentaa itse).
                </p>
                <p>
                  Jokaiseen oppituntiin kuuluu erillinen opiskelija- ja
                  opettajamateriaali. Opiskelija saa itseopiskelu­materiaalin,
                  tehtävät ja sanaston; opettaja saa opettajavetoisten
                  tehtävien rungon ja taustamateriaalin. Sisältö on
                  saatavilla sekä luettavana sivustona että avoimena
                  lähdekoodina, joka muut opettajat voivat ottaa pohjaksi.
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
                    "Julkinen versio: ai-perusteet.netlify.app",
                  ]}
                />
                <p className="mt-5 text-sm muted">
                  Avoin sivusto:{" "}
                  <a
                    className="text-amber-400 hover:text-amber-300 hover:underline"
                    href="https://ai-perusteet.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ai-perusteet.netlify.app
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
                  Kurssin materiaali on tuotettu kokonaan tekoälyllä,
                  tekoälyagentteja hyödyntäen. Lopputulokseen on jätetty
                  tarkoituksella pieniä kummallisuuksia — hassuja kielellisiä
                  rakenteita ja artefakteja kuvissa. Niitä ei ole siivottu
                  pois, koska ne ovat osa oppisisältöä: ne osoittavat, että
                  laadukaskin kielimalli tuottaa ammattitaitoisen promptaajan
                  käsissä silti virheitä. Kriittinen lukutaito on kurssin
                  ydintä, ei jälkihuomautus.
                </p>
                <p>
                  Ala muuttuu nopeasti, joten osa sisällöstä voi olla jo
                  julkaisuhetkellä vanhentunutta — ydinasiat pätevät silti.
                  Jokainen tehtävä on lisäksi suunniteltu tehtäväksi tekoälyn
                  kanssa: jos tehtävä tuntuu epäselvältä, ensimmäinen kysymys
                  kuuluu tekoälylle — “mitä minun pitää tässä oikein tehdä?”
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
                  Kurssi on käytössä ammatillisessa koulutuksessa ja
                  jatkokehitys on aktiivista. Sisältö on jaettavissa
                  oppitunneittain — tilaaja voi ottaa käyttöön koko paketin
                  tai poimia siitä työpajaan sopivat osat.
                </p>
                <p>
                  Avoin lähdekoodi mahdollistaa, että muut opettajat voivat
                  ottaa kurssin pohjaksi ja muokata sen omaan käyttöönsä.
                  Sisältö on suunniteltu päivitettäväksi — yksittäisen
                  oppitunnin sisältö voidaan vaihtaa ilman, että koko
                  kurssi rikkoutuu.
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
