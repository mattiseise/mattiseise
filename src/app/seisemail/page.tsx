import type { Metadata } from "next";
import Link from "next/link";
import CaseLayout, { CaseList } from "@/components/CaseLayout";

/** seisemailin kotisivu: Google Auth Platformin Branding-sivun "Application home page" osoittaa tänne. */
const title = "seisemail";
const description =
  "Oma, näppäimistöllä käytettävä sähköpostiohjelma Gmailille: torkut, Inbox 0, lajittelu ja kalenterikutsut.";

export const metadata: Metadata = {
  title: `${title} — oma sähköpostiohjelma · Matti Seise`,
  description,
  alternates: { canonical: "https://seise.org/seisemail" },
};

const link = "text-amber-400 underline underline-offset-4 hover:text-amber-300";

export default function Page() {
  return (
    <CaseLayout
      eyebrow="Oma työkalu · Sähköposti"
      title={title}
      lead="Oma sähköpostiohjelma Gmailille, jota käytetään näppäimistöllä. Siinä on torkut, Inbox 0, automaattinen lajittelu ja kalenterikutsut. Rakensin sen omaan käyttööni tekoälyn kanssa avoimen Mak8r Mailin pohjalle."
      facts={[
        { label: "Alusta", value: "macOS" },
        { label: "Käyttäjät", value: "Vain minä" },
        { label: "Palvelin", value: "Ei ole" },
        { label: "Lähdekoodi", value: "Avoin (MIT)" },
      ]}
      sections={[
        {
          heading: "Mitä se tekee",
          body: (
            <CaseList
              items={[
                "Torkuttaa viestit ja palauttaa ne Saapuneisiin oikeaan aikaan, myös silloin, kun kone on kiinni.",
                "Lajittelee uutiskirjeet, ilmoitukset ja kuitit omiin näkymiinsä. Käsiteltävät-näkymään jää vain se, mikä vaatii minua.",
                "Näyttää kalenterikutsun päivän tapahtumineen, ja kutsuun voi vastata yhdellä näppäimellä.",
                "Tila on Gmailissa tunnisteina, joten sama torkku näkyy myös Gmailin verkkoversiossa ja puhelimessa.",
              ]}
            />
          ),
        },
        {
          heading: "Tietosuoja",
          body: (
            <p>
              Ohjelma toimii vain omilla laitteillani eikä lähetä viestejä tai kalenteritietoja minnekään muualle kuin
              Googlelle. Tarkemmin:{" "}
              <Link href="/seisemail/tietosuoja" className={link}>
                tietosuojaseloste
              </Link>
              .
            </p>
          ),
        },
        {
          heading: "Lähdekoodi",
          body: (
            <p>
              Julkinen kopio on GitHubissa:{" "}
              <a href="https://github.com/mattiseise/seisemail-public" className={link}>
                mattiseise/seisemail-public
              </a>
              . Pohjana on{" "}
              <a href="https://github.com/slemppa/mak8r-mail-public" className={link}>
                Mak8r Mail
              </a>{" "}
              (MIT-lisenssi).
            </p>
          ),
        },
      ]}
    />
  );
}
