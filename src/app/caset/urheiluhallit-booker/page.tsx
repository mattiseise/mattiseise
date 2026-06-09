import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "urheiluhallit-booker";
const title = "Urheiluhallit-booker — varauksen automatisointi";
const description =
  "Selainautomaatio, joka kirjautuu, etsii ryhmäliikuntatunnin ja varaa sen ajastetusti — esimerkki kirjautumista vaativan oman rutiinin hallitusta automatisoinnista.";

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
        eyebrow="Case · Selainautomaatio"
        title="Urheiluhallit-booker — varauksen automatisointi kirjautumisesta peruutukseen"
        lead="Ryhmäliikuntatuntien varausjärjestelmä avautuu kerralla — ja täyttyy minuuteissa. Selainautomaatio, joka kirjautuu, etsii halutun tunnin ja tekee varauksen ilman manuaalista työtä. Esimerkki kirjautumista vaativan järjestelmän automatisoinnista, jota voi soveltaa myös yrityskäyttöön."
        facts={[
          { label: "Aikaväli", value: "2025" },
          { label: "Toteutus", value: "Playwright" },
          { label: "Ajastus", value: "Automaattinen cron" },
          { label: "Lokit", value: "JSONL + kuvakaappaukset" },
        ]}
        sections={[
          {
            heading: "Tilanne",
            body: (
              <>
                <p>
                  Suosittujen ryhmäliikuntatuntien varaus avautuu
                  ennalta sovittuna ajankohtana — esimerkiksi 15 päivää
                  ennen tuntia. Tunnit täyttyvät minuuteissa, ja
                  varaaminen vaatii joko manuaalista valppautta tai
                  rutiinia, joka ei sovi vuorovaikutteisen elämän
                  rytmiin.
                </p>
                <p>
                  Ratkaisu, jota harkittiin: asettaa puhelimeen muistutus
                  ja varata käsin. Tämä toimii satunnaisesti mutta ei
                  skaalaudu. Tarvittiin automaatio, joka hoitaa
                  varauksen taustalla niinä iltoina, kun käyttäjä on
                  itse kiireinen.
                </p>
                <p>
                  Esimerkki ei ole ohitus- tai kuormitustyökalu, vaan malli
                  siitä, miten käyttäjän oma toistuva kirjautumisrutiini
                  voidaan automatisoida hallitusti.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Selainautomaatio tunnistaa kirjautumis- ja varauspolun
                  tutkimusvaiheessa, tallentaa kirjautumistilan ja
                  ajaa varauksen ajastetusti. Skripti ottaa kuvakaappauksen
                  ja kirjoittaa lokin jokaisesta ajosta — niin
                  onnistumisista kuin epäonnistumisistakin.
                </p>
                <p>
                  Toteutus on jaettu erillisiin skripteihin: yksi
                  varauksen tekemiseen, yksi tulevien varausten
                  listaamiseen ja yksi peruutukseen. Tämä pitää koodin
                  selkeänä ja tekee uusien tilanteiden lisäämisestä
                  helppoa.
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
                Varaus toimii itsenäisesti taustalla. Käyttäjälle ei
                tarvitse muistaa milloin varaus avautuu — tunteja
                varataan joka tapauksessa. Tärkeämpää on, että ratkaisun
                runko on suoraan sovellettavissa muihinkin kirjautumista
                vaativiin järjestelmiin: lippuvarauksiin, sisäänkirjautumispolun
                seurantaan, asiointipalvelujen rutiinitehtäviin.
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
