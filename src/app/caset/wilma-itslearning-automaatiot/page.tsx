import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "wilma-itslearning-automaatiot";
const title = "Wilma- ja itslearning-automaatiot — opettajan ajansäästö";
const description =
  "Selainautomaatioita Wilman ja itslearningin rutiineihin: opintosuunnitelmat, suorituslistat ja palautusten seuranta — tunteja työaikaa takaisin opetukseen.";

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
        eyebrow="Case · Selainautomaatio"
        title="Wilma- ja itslearning-automaatiot — vähemmän klikkailua, enemmän opetusta"
        lead="Rakensin skriptejä niihin opetustyön kohtiin, joissa järjestelmä pakottaa tekemään saman asian kymmeniä kertoja. Opintosuunnitelmat, suorituslistat, poissaolot ja palautusten seuranta eivät vaadi sankarillista käsityötä. Ne vaativat paremman työkalun."
        facts={[
          { label: "Aikaväli", value: "2024–" },
          { label: "Järjestelmät", value: "Wilma & itslearning" },
          { label: "Toteutus", value: "Selenium" },
          { label: "Hyöty", value: "Tunteja viikossa" },
        ]}
        sections={[
          {
            heading: "Ongelma",
            body: (
              <>
                <p>
                  Opettaja käyttää viikoittain tunteja Wilmassa ja
                  itslearningissä tehtäviin, jotka ovat sisällöltään
                  mekaanisia: sama opiskelijakohtainen päivitys, sama listan
                  tarkistus, sama palautusten seuranta.
                </p>
                <p>
                  Käyttöliittymät toimivat yksittäiseen toimenpiteeseen.
                  Ongelma alkaa, kun sama tehdään 30 opiskelijalle tai monelle
                  kurssille. Siinä kohtaa käyttöliittymästä tulee työn este,
                  ei työn väline.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Selenium-skriptit hoitavat toistuvat rutiinit kerralla.
                  Ne eivät korvaa opettajan harkintaa. Ne tekevät sen osan,
                  jossa ihminen on käyttöliittymän takia huono robotti.
                  Automaatio ei tee pedagogisia päätöksiä eikä vie
                  opiskelijadataa pois hyväksytystä ympäristöstä.
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
                  Skriptit palauttavat tunteja viikossa. Esimerkiksi 30
                  opiskelijan päivitys muuttuu tuntien klikkailusta yhdeksi
                  ajoksi, jonka opettaja tarkistaa. Se on oleellinen ero:
                  automaatio tekee rutiinin, ihminen tarkistaa seuraukset.
                </p>
                <p>
                  Saavutettavuus ei katoa automaatioon. Jos suorituslista
                  värikoodataan, mukaan tulee myös tekstimuotoinen tila.
                  Väri yksin ei riitä.
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
