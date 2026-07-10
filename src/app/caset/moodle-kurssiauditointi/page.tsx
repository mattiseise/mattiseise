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
        title="Moodle-kurssiauditointi — yhden komennon pedagoginen analyysi"
        lead="Tekoälyagentti lukee Moodle-kurssin varmuuskopion, ajaa rakenne-, sisältö- ja linjakkuusanalyysit sekä tuottaa PDF-raportin priorisoiduista toimenpiteistä — aika-arvioineen. Käytössä omassa opetustyössäni ja koulutuskonsultoinnissa."
        facts={[
          { label: "Aikaväli", value: "2025" },
          { label: "Kohde", value: "Moodle .mbz" },
          { label: "Vertailupohja", value: "ePerusteet" },
          { label: "Tuotos", value: "PDF-raportti" },
        ]}
        sections={[
          {
            heading: "Tilanne",
            body: (
              <>
                <p>
                  Ammatillisen koulutuksen kurssit ovat usein vuosien
                  kerrostumia: aktiviteetteja on lisätty, vanhoja ei ole
                  poistettu ja kokonaisuudesta on tullut vaikeasti
                  navigoitava. Samaan aikaan opetus­suunnitelmien
                  ammatti­taito­vaatimukset elävät, ja niiden seuranta
                  käsin on raskasta.
                </p>
                <p>
                  Opettaja tarvitsi tavan tarkistaa, kattaako kurssi
                  ePerusteiden vaatimukset, onko Bloomin taksonomian
                  jakauma järkevä ja löytyykö rakenteesta selkeitä
                  ongelmakohtia. Kursseja on monta, eikä jokaisen
                  käsin auditointiin ollut aikaa.
                </p>
              </>
            ),
          },
          {
            heading: "Ratkaisu",
            body: (
              <>
                <p>
                  Auditointiagentti jäsentää Moodlen .mbz-varmuuskopion,
                  ajaa rakenneanalyysin ja sisällön linjakkuus­tarkastuksen
                  sekä vertaa kurssia ePerusteiden ammatti­taito­vaatimuksiin.
                  Lopputuotos on PDF-raportti, jonka opettaja voi lukea
                  ja jonka korjausehdotuksia voi toteuttaa heti.
                </p>
                <p>
                  Olennaista on, että raportti on toimenpide­lähtöinen
                  — ei kuvaileva. Jokaisesta havainnosta seuraa konkreettinen
                  ehdotus ja aika-arvio.
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
                  Raportti tuotti priorisoidun toimenpide­listan
                  aika-arvioineen — esimerkiksi rakenteen jakaminen
                  ammatti­taito­vaatimuksittain (4–6 h), duplikaattien
                  ratkaisu (3–4 h) ja Bloomin tasapainon korjaus
                  analysointi­tason tehtävillä (8–12 h). Opettaja sai
                  konkreettisen suunnitelman, ei pitkää sanallista
                  arviointia.
                </p>
              </>
            ),
          },
          {
            heading: "Tulokset",
            body: (
              <>
                <p>
                  Auditointi, joka aiemmin olisi vaatinut päivän työn,
                  valmistuu nyt minuuteissa. Opettaja voi auditoida
                  jokaisen lukukauden kurssin ennen seuraavan
                  toteutuksen alkua ja tehdä korjauksia priorisoidusti
                  sieltä, missä vaikutus on suurin.
                </p>
                <p>
                  Sama agentti­paketti on käytettävissä myös
                  oppilaitos­tason kehittämis­työhön: kun useita
                  kursseja auditoidaan rinnakkain, syntyy kuva siitä,
                  millaisia rakenteellisia haasteita oppilaitoksessa
                  on yleisimmin.
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
