"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Mitä tekoälykoulutus opettajille sisältää?",
    a: "Käytännönläheistä työpajatyöskentelyä: tehtävien suunnittelua, arviointia ja eriyttämistä tekoälyn aikakaudella. Saavutettavuus ja erityispedagogiikka mukana koko ajan. Sisältö räätälöidään koulutusasteen ja kohderyhmän mukaan.",
  },
  {
    q: "Mitä AI-agentti tekee organisaatiossa?",
    a: "Tekoälyagentti hoitaa toistuvia työnkulkuja, kirjoittaa luonnoksia, tarkistaa rutiinitehtäviä ja kommunikoi muiden työkalujen kanssa rajapintojen kautta. Se eroaa chatbotista siinä, että se voi käyttää työkaluja, päättää seuraavasta askeleesta ja palauttaa tulokset osaksi prosessia. Hyvin rakennettu agentti säästää tunteja viikossa, ei vain vastaa kysymyksiin.",
  },
  {
    q: "Miten tekoälyä voi käyttää arvioinnissa?",
    a: "Tekoäly soveltuu hyvin arvioinnin tukivälineeksi: nopea palaute oppilaalle, kriteerien sanallistus, eriyttäminen ja saavutettavuuden parantaminen. Tärkeintä on suunnitella arviointi siten, että opettaja säilyttää ammatillisen viimeisen sanan ja tekoäly toimii laadun varmistajana — ei korvaajana. Constructive alignment ja Bloomin taksonomia toimivat suunnittelun runkona.",
  },
  {
    q: "Mikä on minimiveloitus ja matkakustannukset?",
    a: "Tuntiveloitus on 150 €/h + alv ja minimiveloitus on 2 tuntia. Matkakulut Helsingin ulkopuolelle veloitetaan erikseen Verohallinnon päivärahojen ja kilometrikorvausten mukaan. Toteutus joko paikan päällä tai etänä sopimuksen mukaan.",
  },
  {
    q: "Toimiiko etänä toteutettu koulutus?",
    a: "Kyllä — etäkoulutukset toimivat hyvin, kun ryhmä on enintään noin 20 osallistujaa ja sisältö on suunniteltu vuorovaikutteiseksi. Etätoteutus mahdollistaa hands-on-harjoitukset omilla työkaluilla ja säästää matkakulut.",
  },
  {
    q: "Miten varaan koulutuksen tai tarjouksen?",
    a: "Lähetä viesti osoitteeseen seise@seise.org tai LinkedInin kautta. Kerro lyhyesti kohderyhmä, tavoite ja toivottu aikataulu — vastaan yleensä saman tai seuraavan arkipäivän aikana ja toimitan tarjouksen sopimuksen mukaan.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow">
        <p className="eyebrow">Usein kysytyt kysymykset</p>
        <h2 className="h2 mt-3 text-ink-50">
          Vastauksia ennen kuin kysyt.
        </h2>
        <p className="lead mt-4 max-w-2xl">
          Yleisimmät kysymykset koulutuksista, agenteista ja yhteistyön
          käytännöistä. Jos kysymyksesi puuttuu, ota yhteyttä — vastaan mielelläni.
        </p>

        <div className="mt-10 divide-y divide-ink-600/40 border-y border-ink-600/40">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left text-ink-50 hover:text-accent-400 transition-colors"
                >
                  <span className="font-medium">{it.q}</span>
                  <span
                    aria-hidden
                    className={
                      "shrink-0 text-accent-400 text-xl transition-transform " +
                      (isOpen ? "rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-10 text-ink-200 leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
