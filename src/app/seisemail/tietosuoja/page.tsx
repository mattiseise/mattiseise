import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList } from "@/components/CaseLayout";

/** seisemailin tietosuojaseloste: Google Auth Platformin Branding-sivun "Application privacy policy link". */
const title = "seisemail: tietosuojaseloste";
const description = "Mitä tietoja seisemail-sähköpostiohjelma käsittelee, missä ne ovat ja miten luvan voi perua.";

export const metadata: Metadata = {
  title: `${title} · Matti Seise`,
  description,
  alternates: { canonical: "https://seise.org/seisemail/tietosuoja" },
};

const link = "text-amber-400 underline underline-offset-4 hover:text-amber-300";

export default function Page() {
  return (
    <CaseLayout
      eyebrow="seisemail · Tietosuoja"
      title={title}
      lead="seisemail on Matti Seisen oma sähköpostiohjelma, jolla hän käyttää omia Gmail-tilejään. Se ei ole julkinen palvelu. Tämä seloste kertoo, mitä tietoja ohjelma käsittelee ja missä ne ovat."
      facts={[
        { label: "Rekisterinpitäjä", value: "Matti Seise" },
        { label: "Palvelin", value: "Ei ole" },
        { label: "Kolmannet osapuolet", value: "Ei ole" },
        { label: "Päivitetty", value: "9.10.2026" },
      ]}
      sections={[
        {
          heading: "Mitä tietoja käsitellään",
          body: (
            <>
              <p>Ohjelma käyttää Googlen rajapintoja vain kirjautuneen käyttäjän omiin tietoihin:</p>
              <CaseList
                items={[
                  "Gmail (gmail.modify): viestien lukeminen, lähettäminen, arkistointi, torkutus ja lajittelu tunnisteisiin.",
                  "Google-kalenteri (calendar.events): kalenterikutsuihin vastaaminen sekä kutsun päivän tapahtumien ja päällekkäisyyksien näyttäminen.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "Missä tiedot ovat",
          body: (
            <>
              <p>
                Tiedot pysyvät Googlella ja käyttäjän omilla laitteilla: Mac-sovelluksessa ja omalla Mac minillä
                toimivassa taustapalvelussa. Ohjelmalla ei ole omaa palvelinta. Se ei lähetä viestejä,
                kalenteritietoja tai kirjautumistietoja kolmansille osapuolille, eikä siinä ole analytiikkaa tai
                mainontaa.
              </p>
              <p>
                Kirjautumistiedot tallennetaan macOS:n avainnippuun tai taustapalvelun suojattuun tiedostoon samalla
                koneella. Torkut ja lajittelu tallentuvat Gmailiin tunnisteina.
              </p>
            </>
          ),
        },
        {
          heading: "Googlen käyttäjätietoja koskevat ehdot",
          body: (
            <p lang="en">
              seisemail&apos;s use and transfer to any other app of information received from Google APIs will adhere
              to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" className={link}>
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          ),
        },
        {
          heading: "Luvan peruminen ja tietojen poistaminen",
          body: (
            <p>
              Ohjelman pääsyn Google-tiliin voi perua milloin tahansa osoitteessa{" "}
              <a href="https://myaccount.google.com/permissions" className={link}>
                myaccount.google.com/permissions
              </a>
              . Paikalliset tiedot poistuvat, kun ohjelma ja sen tiedostot poistetaan koneelta.
            </p>
          ),
        },
        {
          heading: "Yhteystiedot",
          body: (
            <p>
              Kysymykset:{" "}
              <Link href="/#yhteys" className={link}>
                yhteydenottolomake
              </Link>
              . Ohjelman esittely:{" "}
              <Link href="/seisemail" className={link}>
                seise.org/seisemail
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
