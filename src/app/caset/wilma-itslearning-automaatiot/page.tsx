import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "wilma-itslearning-automaatiot";
const title = "Wilma- ja itslearning-automaatiot — työkalut ja ohjeet";
const description = "Neljä omaan opettajan työhöni tehtyä työkalua: Wilman ja itslearningin korostukset, sarakkeiden piilotus ja opintosuunnitelman täyttö. Blogipostaukset ja käyttöönotto-ohjeet.";
const posts = [
  ["tekoaly-opettajan-hallintotyossa", "Tekoäly opettajan hallintotyössä", "Mistä työkalut lähtivät ja miten rajasin niiden tehtävät."],
  ["wilma-keskeneraiset-suoritukset-nakyviin", "Wilman keskeneräiset suoritukset näkyviin", "Vaaleanpunainen korostus, tunnistusehto ja testaus."],
  ["itslearning-arvioimattomat-palautukset", "itslearningin arvioimattomat palautukset", "Tiedostokuvake ja puuttuva arviointi esiin keltaisella."],
  ["tampermonkey-tekoaly-kayttajaskripti", "Oma selainapuri tekoälyn ja Tampermonkeyn avulla", "Rakenteen tutkiminen, tehtävänanto, asennus ja käytöstä poistaminen."],
  ["wilma-sarakkeiden-piilotus", "Wilman turhat sarakkeet pois tieltä", "Sarakkeet-paneeli, paikalliset valinnat ja taulukon tarkistus."],
  ["opintosuunnitelma-excelista-wilmaan", "Opintosuunnitelma Excelistä Wilmaan", "Valmis sovellus Macille ja Windowsille, esikatselu ja täyttötavat."],
  ["opettajan-aloitustarkistukset", "Työkalut yhdeksi tarkistusrutiiniksi", "Lyhyt työjärjestys omiin tarkistuksiin."],
];
const linkStyle = "font-semibold text-amber-400 underline underline-offset-4";

export const metadata: Metadata = {
  title: title + " · Matti Seise", description,
  alternates: {
    canonical: `https://seise.org/caset/${slug}`,
    languages: { fi: `https://seise.org/caset/${slug}`, en: `https://seise.org/en/caset/${slug}` },
  },
  openGraph: {
    title, description, url: `https://seise.org/caset/${slug}`, type: "article", siteName: "Matti Seise", locale: "fi_FI",
    images: [{ url: "/images/blog/og/kausi-1-opettajan-hallintotyo/11-opintosuunnitelman-muokkaaja.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Opintosuunnitelman muokkaaja esimerkkidatalla" }],
  },
};

export default function Page() {
  return <>
    <CaseArticleSchema title={title} description={description} slug={slug} datePublished="2026-05-08" />
    <CaseLayout
      alternateHref={`/en/caset/${slug}`}
      eyebrow="Case · Selainautomaatio"
      title={title}
      lead="Rakensin omaan opettajan työhöni pieniä apuvälineitä tekoälyn avulla. Ne nostavat tarkistettavat kohdat näkyviin, rauhoittavat taulukkoa ja siirtävät valitut opintosuunnitelman rivit lomakkeelle. Tässä ovat toteutukset ja ohjeet."
      facts={[
        { label: "Järjestelmät", value: "Wilma & itslearning" },
        { label: "Selainapurit", value: "Tampermonkey" },
        { label: "Lomakkeen täyttö", value: "Playwright + Chrome" },
        { label: "Ohjeet", value: "7 blogipostausta" },
      ]}
      sections={[
        { heading: "Lue blogipostaukset ja kokeile itse", body: <>
          <p>Sarjan voi lukea alusta tai avata suoraan oman työvaiheen ohjeen. Korostus- ja saraketyökalujen ohjeissa rakennetaan omaan näkymään sopiva skripti. Lomakkeen täyttäjästä on ladattava sovellus.</p>
          <ol className="list-decimal space-y-5 pl-6">
            {posts.map(([postSlug, postTitle, detail]) => <li key={postSlug}>
              <Link href={`/blog/${postSlug}`} className={linkStyle}>{postTitle}</Link>
              <p className="mt-1">{detail}</p>
            </li>)}
          </ol>
        </> },
        { heading: "Mitä työkalut tekevät", body: <CaseList items={[
          "Wilma: keskeneräiset suoritukset korostuvat vaaleanpunaisella. Alkuperäinen merkintä säilyy näkyvissä.",
          "itslearning: tiedostokuvakkeen ja puuttuvan arvioinnin yhdistelmä korostuu keltaisella. Minä avaan ja arvioin työn.",
          "Wilman tuntimerkinnät: valitsen Sarakkeet-paneelista näkyvät sarakkeet. Valinnat tallentuvat omaan selaimeen.",
          "Opintosuunnitelman muokkaaja: valitsen ja muokkaan rivit esikatselussa, sovellus täyttää avoimen lomakkeen ja minä tarkistan sekä tallennan Wilmassa.",
        ]} /> },
        { heading: "Lataa Opintosuunnitelman muokkaaja", body: <>
          <p>Valmis paketti on saatavilla Apple Silicon -Macille ja Windows 10/11:lle. Koneella tarvitaan Google Chrome. Wilman lomakkeen kenttäkartoitus pitää sovittaa omaan ympäristöön.</p>
          <p><a href="https://github.com/mattiseise/Opiskelusuunnitelmoittaja/releases/latest" className={linkStyle} target="_blank" rel="noopener noreferrer">Avaa sovelluksen lataussivu GitHubissa →</a></p>
          <p><Link href="/blog/opintosuunnitelma-excelista-wilmaan" className={linkStyle}>Asennus ja käyttö vaihe vaiheelta →</Link></p>
        </> },
        { heading: "Tekoälyn rooli ja oma tarkistus", body: <>
          <p>Tekoäly auttoi rakentamaan työkalut. Valmiit apuvälineet toimivat sovituilla säännöillä. Wilma on rajattu pois tekoälyagenttieni käytöstä.</p>
          <p>Korostukset ja sarakkeiden piilotus muuttavat omaa selainnäkymääni. Lomakesovellus täyttää kenttiä, mutta ei tallenna suunnitelmaa puolestani. Opiskelijan valinta, suunnitelman sisältö, arviointi ja lopullinen tallennus jäävät minulle.</p>
          <p>Blogien kuvat ovat havainnekuvia tai sovelluksen keksittyä esimerkkidataa. Näkymän tai lomakkeen rakenteen muuttuessa tarkistan myös työkalun toiminnan.</p>
        </> },
        { heading: "Katso myös esitys", body: <p>Työkalut ovat mukana <Link href="/esitykset/tekoaly-tyossa-ja-arjessa/" className={linkStyle}>Tekoäly työssä ja arjessa -esityksessä</Link>. Blogisarjassa avaan toteutukset ja käyttöönoton tarkemmin.</p> },
      ]}
      cta={{ label: "Haluatko kokeilla vastaavia työkaluja omassa työssäsi? Autan rutiinin rajaamisessa, toteutuksessa ja käyttöönotossa.", href: "/#yhteys" }}
      prev={{ label: "Moodle-kurssiauditointi", href: "/caset/moodle-kurssiauditointi" }}
      next={{ label: "Urheiluhallit-booker", href: "/caset/urheiluhallit-booker" }}
    />
  </>;
}
