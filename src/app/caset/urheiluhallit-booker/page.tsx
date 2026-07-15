import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "urheiluhallit-booker";
const title = "Urheiluhallit-booker — varauksen automatisointi";
const description =
  "Selainautomaatio, joka kirjautuu, etsii ryhmäliikuntatunnin ja varaa sen ajastetusti — esimerkki kirjautumista vaativan oman rutiinin hallitusta automatisoinnista.";

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
        title="Urheiluhallit-booker — koska en halunnut päivystää varausnappia"
        lead="Ryhmäliikuntatunnit täyttyvät nopeasti. Rakensin Playwright-automaatin, joka kirjautuu sisään, etsii oikean tunnin, tekee varauksen ja jättää lokin sekä kuvakaappauksen. Pieni oma työkalu, mutta sama malli toimii monessa kirjautumista vaativassa rutiinissa."
        facts={[
          { label: "Aikaväli", value: "2025" },
          { label: "Toteutus", value: "Playwright" },
          { label: "Ajastus", value: "Automaattinen cron" },
          { label: "Lokit", value: "JSONL + kuvakaappaukset" },
        ]}
        sections={[
          {
            heading: "Ongelma",
            body: (
              <>
                <p>
                  Suosittujen ryhmäliikuntatuntien varaus avautuu tiettynä
                  hetkenä ja paikat menevät nopeasti. Jos haluaa mukaan,
                  pitäisi muistaa olla oikealla sivulla oikeaan aikaan.
                  Se on huono käyttöliittymä ihmiselle.
                </p>
                <p>
                  Puhelinmuistutus toimii joskus. Usein ei. Tarvitsin
                  automaation, joka tekee saman rutiinin taustalla ja kertoo
                  jälkeenpäin mitä tapahtui.
                </p>
                <p>
                  Tämä ei ole ohitus- tai kuormitustyökalu. Tämä on esimerkki
                  siitä, miten oma toistuva kirjautumisrutiini automatisoidaan
                  hallitusti ja lokitetaan kunnolla.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Automaatio tunnistaa kirjautumis- ja varauspolun,
                  tallentaa kirjautumistilan ja ajaa varauksen ajastetusti.
                  Jokaisesta ajosta jää loki ja kuvakaappaus. Jos jokin
                  muuttuu, näen mistä se hajosi.
                </p>
                <p>
                  Toteutus on jaettu erillisiin skripteihin: varaus, tulevien
                  varausten listaus ja peruutus. Pieni jako, mutta se pitää
                  työkalun ylläpidettävänä.
                </p>
              </>
            ),
          },
          {
            heading: "Tekninen toteutus",
            body: (
              <CaseList
                items={[
                  "Python + Playwright — moderni selainautomaatio, joka kestää JavaScript-painotteiset käyttöliittymät",
                  "Tutkimuspohjainen toteutus: skripti tunnistaa kirjautumis- ja varauspolut automaattisesti — ei kovakoodattuja selektoreita, jotka rikkoutuisivat ensimmäisen päivityksen yhteydessä",
                  "Kirjautumistila tallennetaan: yksi kirjautuminen riittää, varauksia ei keskeytä uudelleenkirjautuminen",
                  "Manuaalinen tallennustila näkyvässä selaimessa, kun varauspolku muuttuu — opetustila uudelle käyttötapaukselle",
                  "Lokit ja kuvakaappaukset jokaisesta ajosta — vianetsintä on nopeaa kun jokin järjestelmäpäivityksen jälkeen muuttuu",
                ]}
              />
            ),
          },
          {
            heading: "Tulokset",
            body: (
              <p>
                Varaus toimii taustalla. Minun ei tarvitse päivystää
                varausikkunaa, mutta näen silti mitä automaatio teki. Tärkein
                hyöty ei ole yksi liikuntatunti, vaan malli: sama rakenne
                toimii lippuvarauksissa, asiointipalveluissa ja muissa
                kirjautumista vaativissa rutiineissa.
              </p>
            ),
          },
          {
            heading: "Mitä tästä voi tilata",
            body: (
              <CaseList
                items={[
                  "Vastaava varaus- tai asiointiautomaatio organisaatiollesi",
                  "Olemassa olevan rutiinin kartoitus: mikä on automatisoitavissa, mikä ei",
                  "Kirjautumis- ja työnkulun tunnistus tutkimuspohjaisesti — kestää käyttöliittymäpäivityksiä paremmin",
                  "Kestävä toteutus: virhetilanteiden hallinta, lokitus ja ihmisen rajapinta päätöksiin, jotka eivät kuulu automaatiolle",
                ]}
              />
            ),
          },
        ]}
        cta={{
          label:
            "Automatisoidaan organisaationne kirjautumista vaativat rutiinit. Suunnittelu, toteutus ja kestävä lokitus.",
          href: "/#yhteys",
        }}
        prev={{
          label: "Wilma- ja itslearning-automaatiot",
          href: "/caset/wilma-itslearning-automaatiot",
        }}
        next={{
          label: "Hermes-agentti (blogisarja)",
          href: "/blog/openclaw-arkkitehtuuri",
        }}
      />
    </>
  );
}
