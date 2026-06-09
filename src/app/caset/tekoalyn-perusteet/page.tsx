import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "tekoalyn-perusteet";
const title = "Tekoälyn perusteet — 27 oppitunnin kurssi";
const description =
  "Helsinki Business Collegelle suunniteltu 27 oppitunnin kurssi tekoälyn perusteista. Kolme kokonaisuutta: teoria, käyttö ja agentit. Avoin lähdekoodi GitHubissa.";

export const metadata: Metadata = {
  title: title + " · Matti Seise",
  description,
  alternates: { canonical: `https://seise.org/caset/${slug}` },
  openGraph: {
    title,
    description,
    url: `https://seise.org/caset/${slug}`,
    type: "article",
    images: ["/images/og-default.jpg"],
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
        eyebrow="Case · Koulutus"
        title="Tekoälyn perusteet — 27 oppitunnin kurssi käytäntöön"
        lead="Helsinki Business Collegelle suunniteltu kurssi, joka opettaa tekoälyä tekemällä — ei kalvoilla. Sisältää opiskelija- ja opettajamateriaalit jokaiselle 27 oppitunnille, automaattisen sivuston­generaattorin ja avoimen lähdekoodin."
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
                  (mitä tekoäly on, miten se toimii ja millaisia rajat
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
                    className="text-accent-400 hover:underline"
                    href="https://ai-perusteet.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ai-perusteet.netlify.app
                  </a>{" "}
                  · Lähdekoodi:{" "}
                  <a
                    className="text-accent-400 hover:underline"
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
            heading: "Tulokset",
            body: (
              <>
                <p>
                  Kurssi on käytössä Helsinki Business Collegella ja
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
                    className="text-accent-400 hover:underline"
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
