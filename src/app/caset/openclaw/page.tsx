import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "openclaw";
const title = "OpenClaw — kymmenen tekoälyagentin järjestelmä tuotannossa";
const description =
  "Multi-agent-järjestelmä, joka pyörittää erikoistuneita tekoälyagentteja Slackissa ja Telegramissa. Ratkaisu, jossa kustannukset, vasteajat ja tarkastusjälki ovat hallinnassa.";

export const metadata: Metadata = {
  title: title + " · Matti Seise",
  description,
  alternates: { canonical: `https://seise.org/caset/${slug}` },
  openGraph: {
    title,
    description,
    url: `https://seise.org/caset/${slug}`,
    type: "article",
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
        eyebrow="Case · Multi-agent-järjestelmä"
        title="OpenClaw — kymmenen erikoistuneen tekoälyagentin järjestelmä"
        lead="OpenClaw on tuotannossa pyörivä tekoälyjärjestelmä, jossa kymmenen erikoistunutta agenttia hoitaa keskustelut, suunnittelun, koodauksen, auditoinnit ja päivittäiset rutiinit kahdella viestintäkanavalla. Järjestelmä on rakennettu kestämään päivittäistä käyttöä — ei demoesityksiä."
        facts={[
          { label: "Aikaväli", value: "2025–" },
          { label: "Agentit", value: "10+" },
          { label: "Kanavat", value: "Slack & Telegram" },
          { label: "Status", value: "Aktiivinen kehitys" },
        ]}
        sections={[
          {
            heading: "Tilanne",
            body: (
              <>
                <p>
                  Yksittäinen tekoälyassistentti riittää harvoin oikeaan
                  työhön. Käyttäjä haluaa, että aamulla tulee tiivis briefi
                  yön tapahtumista, viikon aikana eri agentit hoitavat omat
                  vastuualueensa ja kriittisistä päätöksistä jää tarkastusjälki.
                  Markkinoilla olevat valmisratkaisut eivät joustaneet näihin
                  vaatimuksiin tai tulivat liian kalliiksi pyörimään 24/7.
                </p>
                <p>
                  Tarvittiin oma järjestelmä, joka kestää tuotantokäytön,
                  pysyy kustannustehokkaana ja jonka kaikki muistipalat ovat
                  omalla koneella — ilman riippuvuutta yhdestä mallintarjoajasta.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  OpenClaw on multi-agent-järjestelmä, jossa pääagentti
                  ohjaa erikoistuneita aliagentteja. Jokaisella agentilla on
                  oma rooli ja vastuualue: pääagentti hoitaa keskustelut,
                  henkilökohtainen aliagentti aamubriifit ja viikkokatsaukset,
                  erikoisagentit suunnittelun, koodauksen, pedagogisen
                  analyysin, auditoinnin ja viimeistelyn.
                </p>
                <p>
                  Mallit valitaan tehtäväkohtaisesti: raskaat ajatteluvaiheet
                  käyttävät tehokkainta saatavilla olevaa mallia, kevyet
                  rutiinit halvempaa, ja koneella pyörivä paikallinen
                  varamalli ottaa kopin verkkohäiriöissä. Tämä pitää sekä
                  laadun että kustannukset hallinnassa.
                </p>
              </>
            ),
          },
          {
            heading: "Tekninen toteutus",
            body: (
              <>
                <p>
                  Järjestelmä toimii oman gateway-palvelun kautta paikallisella
                  palvelimella. Kanavina Slack ja Telegram, ajastettuina
                  työkaluina käyttöjärjestelmän omat ajastimet — ei ulkoisia
                  riippuvuuksia.
                </p>
                <CaseList
                  items={[
                    "Pääagentti + henkilökohtainen aliagentti + 7 erikoistunutta agenttia (suunnittelija, rakentaja, koodari, pedagogi, auditori, viimeistelijä, erikoistehtäväagentti)",
                    "Tehtäväkohtainen mallivalinta: kustannukset hallinnassa, vasteajat ennakoitavia",
                    "Paikallinen varamalli + paikallinen vektorointi — toiminta jatkuu myös ilman verkkoyhteyttä",
                    "Strukturoitu muistikerros: agentit erottavat faktat, tehtävät, päivämerkinnät ja semanttiset hakut",
                    "Agenttien välinen tarkastusjälki — jokaisesta päätöksestä ja viestistä jää tieto",
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
                  Järjestelmä hoitaa nyt itsenäisesti viestinnän kahdella
                  kanavalla, tuottaa aamubriifit ja viikkokatsaukset
                  automaattisesti, ja tukee päivittäistä asiantuntijatyötä
                  ilman jatkuvaa valvontaa. Käyttäjä saa keskittyä siihen,
                  mitä haluaa tehdä — agentit hoitavat toistuvan työn.
                </p>
                <p>
                  Tärkeintä ei ole agenttien lukumäärä vaan se, että
                  kokonaisuus on kestävä: kun yksi malli tai palvelu hidastuu,
                  järjestelmä jatkaa toimintaansa.
                </p>
              </>
            ),
          },
          {
            heading: "Mitä tästä voi tilata",
            body: (
              <>
                <p>
                  Vastaava agentti­arkkitehtuuri voidaan suunnitella ja
                  toteuttaa myös organisaatiollesi — mittakaavassa, joka
                  istuu tarpeisiisi. Tyypillinen aloitus on 1–2 päivän
                  agentti­sprintti, jossa rakennetaan ensimmäinen toimiva
                  pilotti.
                </p>
                <CaseList
                  items={[
                    "Tarvekartoitus: mitkä työnkulut hyötyisivät automatisoinnista, mitkä eivät",
                    "Arkkitehtuurin suunnittelu: agenttien roolit, mallivalinta, muistikerrokset",
                    "Toimiva pilotti tilaajan ympäristössä",
                    "Dokumentaatio ja jatkopolku, jotta järjestelmä voi kasvaa hallitusti",
                  ]}
                />
              </>
            ),
          },
        ]}
        cta={{
          label:
            "Suunnittelen ja rakennan vastaavan agentti­ratkaisun teidän tarpeisiinne. Aloita pyytämällä tarjous.",
          href: "/#yhteys",
        }}
        next={{
          label: "Tekoälyn perusteet -kurssi",
          href: "/caset/tekoalyn-perusteet",
        }}
      />
    </>
  );
}
