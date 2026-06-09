import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "wilma-itslearning-automaatiot";
const title = "Wilma- ja itslearning-automaatiot — opettajan ajansäästö";
const description =
  "Selainautomaatioita Wilman ja itslearningin rutiineihin: opintosuunnitelmat, suorituslistat ja palautusten seuranta — tunteja työaikaa takaisin opetukseen.";

export const metadata: Metadata = {
  title: title + " · Matti Seise",
  description,
  alternates: { canonical: `https://seise.org/caset/${slug}` },
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
        eyebrow="Case · Selainautomaatio"
        title="Wilma- ja itslearning-automaatiot — tunteja takaisin opettajalle"
        lead="Wilman ja itslearningin käyttöliittymät eivät ole rakennettu opettajan päivittäisten rutiinien tehokkaaseen suorittamiseen. Skriptit, jotka korvaavat toistuvan klikkailun, tuovat tunteja työaikaa takaisin viikossa — keskittyminen voi siirtyä käyttöliittymän kanssa kamppailusta opettamiseen."
        facts={[
          { label: "Aikaväli", value: "2024–" },
          { label: "Järjestelmät", value: "Wilma & itslearning" },
          { label: "Toteutus", value: "Selenium" },
          { label: "Hyöty", value: "Tunteja viikossa" },
        ]}
        sections={[
          {
            heading: "Tilanne",
            body: (
              <>
                <p>
                  Opettaja viettää viikoittain useita tunteja Wilmassa ja
                  itslearningissä tehtävissä, jotka olisi voitu suunnitella
                  paremmin: opintosuunnitelmien täydentäminen
                  opiskelijakohtaisesti, suorituslistojen läpikäynti,
                  poissaolojen seuranta ja palautusten arviointi.
                </p>
                <p>
                  Käyttöliittymät on suunniteltu ennen kaikkea hallinnon
                  tarpeisiin, eivät opettajan päivittäiseen työhön.
                  Niiden työkalut riittävät yksittäiseen klikkaukseen,
                  mutta kun samaa toimenpidettä tehdään 30 opiskelijalle,
                  toistuva klikkailu syö tuntikausia.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Selenium-pohjaiset skriptit suorittavat toistuvat
                  rutiinit kerralla kaikille opiskelijoille. Skriptit
                  eivät korvaa opettajan harkintaa — ne hoitavat sen
                  osan työstä, joka on luonteeltaan mekaanista. Automaatio
                  ei tee pedagogisia päätöksiä eikä siirrä opiskelijadataa
                  ulos tilaajan hyväksymästä ympäristöstä.
                </p>
                <p>
                  Konkreettiset käyttötapaukset:
                </p>
                <CaseList
                  items={[
                    "Opintosuunnitelman täydentäminen: skripti lisää tarvittavat opintojaksot kaikille uusille opiskelijoille kerralla",
                    "Suorituslistan värikoodaaminen: opiskelijoiden tilanne erottuu silmäyksellä — kuka on aikataulussa, kenelle kasaantuu rästejä",
                    "Poissaolodatan korostaminen: oleelliset poissaolot näkyvät selkeämmin kuin Wilman oma näkymä antaa",
                    "Kurssidatan automaattinen lataaminen itslearningistä eräajona — useita kursseja kerralla",
                    "Palautusten seuranta itslearningissä — työkalut, jotka oletustyökaluista puuttuvat",
                  ]}
                />
              </>
            ),
          },
          {
            heading: "Tekninen toteutus",
            body: (
              <CaseList
                items={[
                  "Python + Selenium: vakiintunut, hyvin dokumentoitu yhdistelmä, jota oppilaitoksen IT-tuki pystyy ylläpitämään",
                  "Kirjautumistila tallennetaan, joten skripti ei tarvitse uudelleenkirjautumista jokaisen ajon yhteydessä",
                  "Virhetilanteiden hallinta ja automaattinen uudelleenyritys — skriptit eivät kaadu yksittäisen virheen takia",
                  "Lokit jokaisesta ajosta: jos jokin menee väärin, opettaja näkee mitä tapahtui",
                  "Skriptit on suunniteltu niin, että ihminen tietää milloin pitää astua väliin — automaatio ei tee päätöksiä, jotka kuuluvat opettajalle",
                ]}
              />
            ),
          },
          {
            heading: "Tulokset",
            body: (
              <>
                <p>
                  Skriptit tuovat tunteja työaikaa takaisin viikossa.
                  Esimerkiksi 30 opiskelijan toistuvat päivitykset muuttuvat
                  tuntien klikkailusta yhdeksi tarkistettavaksi ajoksi.
                  Tärkeintä ei ole pelkkä ajansäästö, vaan se, että
                  opettaja voi käyttää aikansa siihen, mihin häntä
                  oikeasti tarvitaan: opetuksen suunnitteluun,
                  ohjaukseen ja kohtaamisiin.
                </p>
                <p>
                  Saavutettavuus on lähtökohta myös automaatioissa:
                  esimerkiksi värikoodattu suorituslista täydennetään
                  aina myös tekstuaalisella tilatiedolla, jotta
                  näkövammaiset käyttäjät pärjäävät.
                </p>
              </>
            ),
          },
          {
            heading: "Mitä tästä voi tilata",
            body: (
              <CaseList
                items={[
                  "Yhden tai useamman rutiinin automatisointi tilaajan ympäristössä",
                  "Konsultointi: mitkä oppilaitostyön rutiineista kannattaa automatisoida ja mitkä ei",
                  "Olemassa olevien manuaalisten työnkulkujen kartoitus ja priorisointi",
                  "Skriptien dokumentointi ja käyttöönotto myös muille opettajille",
                ]}
              />
            ),
          },
        ]}
        cta={{
          label:
            "Tunnistetaan teidän kömpelöt rutiininne ja korvataan ne automaatioilla. Vapautetaan opettajan aika takaisin opettamiseen.",
          href: "/#yhteys",
        }}
        prev={{
          label: "Moodle-kurssiauditointi",
          href: "/caset/moodle-kurssiauditointi",
        }}
        next={{
          label: "Urheiluhallit-booker",
          href: "/caset/urheiluhallit-booker",
        }}
      />
    </>
  );
}
