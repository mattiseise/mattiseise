import type { Metadata } from "next";
import CaseLayout, { CaseList, CaseArticleSchema } from "@/components/CaseLayout";

const slug = "moodle-kurssiauditointi";
const title = "Moodle-kurssiauditointi — yhden komennon pedagoginen analyysi";
const description =
  "Tekoälyagentti jäsentää Moodle-kurssin varmuuskopion ja tuottaa PDF-raportin Bloom-tasoista, ePerusteiden kattavuudesta ja kurssin koherenssista.";

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
        eyebrow="Case · Pedagoginen analyysi"
        title="Moodle-kurssiauditointi — kurssin sotkut näkyviin yhdellä ajolla"
        lead="Rakensin agentin, joka lukee Moodle-varmuuskopion ja tekee siitä pedagogisen auditoinnin. Ei yleistä tunnelmapuhetta, vaan rakenne, Bloom-tasot, ePerusteiden kattavuus, duplikaatit ja korjausehdotukset aika-arvioineen."
        facts={[
          { label: "Aikaväli", value: "2025" },
          { label: "Kohde", value: "Moodle .mbz" },
          { label: "Vertailupohja", value: "ePerusteet" },
          { label: "Tuotos", value: "PDF-raportti" },
        ]}
        sections={[
          {
            heading: "Ongelma",
            body: (
              <>
                <p>
                  Moodle-kurssit keräävät vuosien aikana kerroksia. Lisätään
                  uusi tehtävä, jätetään vanha varmuuden vuoksi näkyviin,
                  kopioidaan osio seuraavalle toteutukselle ja lopulta kukaan
                  ei enää näe kokonaisuutta.
                </p>
                <p>
                  Käsin auditointi onnistuu, jos kursseja on yksi ja aikaa
                  liikaa. Todellisuudessa kursseja on monta. Tarvitsin tavan
                  nähdä nopeasti, mitä kurssissa oikeasti on ja mihin korjaus
                  kannattaa aloittaa.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Agentti purkaa Moodlen .mbz-varmuuskopion, lukee rakenteen
                  ja vertaa sisältöä ePerusteiden ammattitaitovaatimuksiin.
                  Lopuksi se tuottaa PDF-raportin, jossa havainnot on laitettu
                  tärkeysjärjestykseen.
                </p>
                <p>
                  Olennaista on, että raportista seuraa työlista. Jos havainto
                  ei johda toimenpiteeseen, se on lähinnä konsulttirunoutta.
                </p>
              </>
            ),
          },
          {
            heading: "Esimerkki — Joustava: Ohjelmointi (web)",
            body: (
              <>
                <p>
                  Auditoin omaa kurssiani &ldquo;Joustava — Ohjelmointi
                  (web)&rdquo; (45 osp, ePerusteet OPH-2596-2019).
                  Raportti analysoi 289 aktiviteettia ja löysi useita
                  selkeitä korjaus­kohteita.
                </p>
                <CaseList
                  items={[
                    "289 aktiviteettia: 142 teoriasivua (49 %) ja 126 tehtävää (44 %) — runko vahva",
                    "Bloomin jakauma painottui voimakkaasti soveltamis­tasolle (43 %), mutta analysointi­tason tehtäviä oli vain noin 1 %",
                    "Yksi pääosio oli kasvanut 137 aktiviteetin kokonaisuudeksi, joka vaikeutti opiskelijan navigointia",
                    "83 duplikaattiaktiviteettia eri osioissa — pedagoginen polku ei ollut selkeä",
                    "Viisi opiskelijoiden nimillä nimettyä tyhjää osiota ja muutama rikkinäinen linkki",
                  ]}
                />
                <p>
                  Raportti teki priorisoidun toimenpidelistan
                  aika-arvioineen — esimerkiksi rakenteen jakaminen
                  ammatti­taito­vaatimuksittain (4–6 h), duplikaattien
                  ratkaisu (3–4 h) ja Bloomin tasapainon korjaus
                  analysointi­tason tehtävillä (8–12 h). Opettaja sai
                  konkreettisen suunnitelman, ei pitkää sanallista arviointia.
                </p>
              </>
            ),
          },
          {
            heading: "Tulokset",
            body: (
              <>
                <p>
                  Auditointi, joka olisi helposti vienyt päivän, valmistuu nyt
                  minuuteissa. Opettaja näkee nopeasti, kannattaako ensin
                  korjata rakennetta, tehtäviä, duplikaatteja vai arvioinnin
                  linjakkuutta.
                </p>
                <p>
                  Sama toimii myös oppilaitostasolla. Kun auditoidaan useita
                  kursseja, nähdään missä ongelma toistuu: tehtävärakenteessa,
                  arvioinnissa, linkeissä vai opetussuunnitelman kattavuudessa.
                </p>
              </>
            ),
          },
          {
            heading: "Mitä tästä voi tilata",
            body: (
              <CaseList
                items={[
                  "Yksittäisen kurssin auditointi: PDF-raportti priorisoiduilla toimenpiteillä",
                  "Useamman kurssin auditointi oppilaitos­tasolla: yhteenveto rakenteellisista haasteista",
                  "Auditointi­agentin räätälöinti omaan organisaatioon: oma vertailupohja, oma raportti­muoto",
                  "Koulutus auditointi­raportin tulkitsemiseen ja toimenpiteiden vaiheistamiseen",
                ]}
              />
            ),
          },
        ]}
        cta={{
          label:
            "Auditoidaan teidän kurssinne — yksi tai useita. PDF-raportti ja konkreettiset toimenpide-ehdotukset.",
          href: "/#yhteys",
        }}
        prev={{
          label: "Tekoälyn perusteet -kurssi",
          href: "/caset/tekoalyn-perusteet",
        }}
        next={{
          label: "Wilma- ja itslearning-automaatiot",
          href: "/caset/wilma-itslearning-automaatiot",
        }}
      />
    </>
  );
}
