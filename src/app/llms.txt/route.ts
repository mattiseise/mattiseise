import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://seise.org";

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  });
}

/**
 * llms.txt — kuvaus sivustosta AI-hakukoneille ja kielimalleille (GEO).
 * Generoituu build-aikana; päivittäinen Netlify-rebuild pitää
 * blogilistan ajan tasalla julkaisujen avautuessa.
 */
export async function GET() {
  const now = Date.now();
  const posts = getAllPosts();
  const published = posts.filter((p) => new Date(p.date).getTime() <= now);
  const upcoming = posts.filter((p) => new Date(p.date).getTime() > now);

  const publishedList = published
    .map(
      (p) =>
        `- [Osa ${p.part}: ${p.title}](${BASE}/blog/${p.slug}): ${p.description}`,
    )
    .join("\n");

  const upcomingList = upcoming
    .map((p) => `- Osa ${p.part}: ${p.title} — julkaistaan ${fmtDate(p.date)}`)
    .join("\n");

  const body = `# Matti Seise — seise.org

> ICT-erityisopettaja ja AI-kehittäjä Helsingistä. Tekoälykoulutukset opettajille, asiantuntijoille ja organisaatioille sekä tekoälyagenttien ja selainautomaatioiden toteutukset tuotantoon — suomeksi, käytännönläheisesti ja ilman hypeä.

Matti Seise on ammatillinen erityisopettaja (tietojenkäsittelytieteen maisteri 2011, yli 15 vuotta ammatillista opetusta), joka rakentaa tuotantokäyttöön tekoälyagentteja ja automaatioita sekä kouluttaa niiden käyttöön. Mukana Opetushallituksen tekoälytyöryhmässä. Työ tehdään tietosuojalähtöisesti: minimidatalla, tilaajan ympäristössä ja ilman opiskelijatietojen tarpeetonta siirtämistä ulkopuolisiin palveluihin.

## Palvelut ja hinnat

- [Koulutukset ja hinnasto](${BASE}/#koulutukset): 2 tunnin johdanto 300 €, puolen päivän työpaja 600 €, 1–2 päivän agenttisprintti alkaen 1 800 €/päivä, tuntiveloitus 150 €/h (+ alv).
- [Yhteydenotto](${BASE}/#yhteys): seise@seise.org

## Blogisarja: Oman AI-agentin rakentaminen

Kuusiosainen, rehellinen sarja oman tekoälyagentin rakentamisesta tuotantoon — chatbotin ja agentin ero, yliarkkitehtoinnin sudenkuopat, kahdeksan kallista virhettä, autonomian turvarajat ja migraatio OpenClaw'sta Hermekseen.

${publishedList}${upcomingList ? `\n\nTulossa:\n${upcomingList}` : ""}

- [Sarjan koontisivu](${BASE}/blog)
- [RSS-syöte](${BASE}/rss.xml)

## Projektit ja caset

- [Tekoälyn perusteet -kurssi](${BASE}/caset/tekoalyn-perusteet): 27 oppitunnin avoin kurssi (teoria, käyttö, agentit). Materiaali tuotettu kokonaan tekoälyllä, agentteja hyödyntäen. Avoin lähdekoodi: https://github.com/mattiseise/ai-perusteet
- [Moodle-kurssiauditointi](${BASE}/caset/moodle-kurssiauditointi): yhden komennon pedagoginen analyysi Moodle-kursseille (Bloom, ePerusteet, koherenssi).
- [Wilma- ja itslearning-automaatiot](${BASE}/caset/wilma-itslearning-automaatiot): selainautomaatiot opettajan rutiineihin — tunteja työaikaa takaisin viikossa.
- [Urheiluhallit-booker](${BASE}/caset/urheiluhallit-booker): esimerkki kirjautumista vaativan oman rutiinin hallitusta automatisoinnista.
- Hermes-agentti: henkilökohtainen AI-agentti tuotannossa (aamubriiffit, sähköpostien luokittelu, varaukset). Koko tarina blogisarjassa.

## Profiilit

- LinkedIn: https://www.linkedin.com/in/mattiseise/
- GitHub: https://github.com/mattiseise
- YouTube: https://www.youtube.com/@MattiSeise
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
