export default function Pricing() {
  return (
    <section
      id="koulutukset"
      className="section-pad border-t border-ink-600/30"
    >
      <div className="container-narrow">
        <p className="eyebrow">Koulutukset & hinnasto</p>
        <h2 className="h2 mt-3 text-ink-50">
          Tekoälykoulutukset opettajille, asiantuntijoille ja organisaatioille.
        </h2>
        <p className="lead mt-4 max-w-2xl">
          Sisältö räätälöidään kohderyhmälle: konkreettiset työkalut, oikeat
          esimerkit ja taidot, jotka jäävät käyttöön myös koulutuksen
          jälkeen. Aloita kevyestä johdannosta tai tilaa kokonainen
          agentti­sprintti.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <Package
            tier="Aloitus"
            title="2 tunnin johdanto"
            price="300 €"
            unit="kiinteä hinta, + alv"
            text="Tiivis työpaja: mitä tekoäly osaa, miten siitä saa hyödyn omaan rooliin ja mitä riskejä on. Sopii tiimeille, joiden tekoälymatka on alkuvaiheessa."
            includes={[
              "Etänä tai paikan päällä Helsingissä",
              "Käytännön harjoituksia osallistujien omilla työkaluilla",
              "Sisällön räätälöinti tilaajan tarpeisiin",
            ]}
          />
          <Package
            tier="Suosituin"
            highlight
            title="Puolen päivän työpaja"
            price="600 €"
            unit="4 tuntia, + alv"
            text="Syvempi sukellus: promptaus, työkalujen vertailu, agenttien rakenne ja konkreettinen suunnitelma siitä, mitä tiimi voi ottaa käyttöön heti seuraavana päivänä."
            includes={[
              "Tilaajan toimialaan räätälöity esimerkki­kierros",
              "Materiaalit ja harjoitukset jakoon",
              "Etätallenne sopimuksen mukaan",
            ]}
          />
          <Package
            tier="Toteutus"
            title="1–2 päivän agentti­sprintti"
            price="alkaen 1 800 €"
            unit="per päivä, + alv"
            text="Suunnittelemme ja rakennamme yhdessä ensimmäisen tekoäly­agenttinne: lähtötilanteen kartoituksen, työkalujen valinnan, tietolähde­rakenteen ja toimivan pilotin."
            includes={[
              "Tarvekartoitus ja arkkitehtuuri",
              "Toimiva pilotti tilaajan ympäristössä",
              "Dokumentaatio ja jatkopolku",
            ]}
          />
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 card">
            <p className="eyebrow">Yleiset ehdot</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-semibold text-ink-50 tracking-tight">
                150 €
              </span>
              <span className="text-ink-200 text-base">
                / tunti tuntiveloituksena
              </span>
            </div>
            <p className="muted text-sm mt-1">+ alv 25,5 %</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-100">
              <li className="flex gap-2">
                <span aria-hidden className="text-accent-400 mt-1">▸</span>
                <span>Minimiveloitus 2 tuntia</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent-400 mt-1">▸</span>
                <span>Sisältää sisällön räätälöinnin</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent-400 mt-1">▸</span>
                <span>Etä- tai lähitoteutus sopimuksen mukaan</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent-400 mt-1">▸</span>
                <span>Matkakulut Helsingin ulkopuolelle erikseen</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 card flex flex-col justify-between">
            <div>
              <p className="eyebrow">Räätälöity ohjelma</p>
              <h3 className="h3 mt-2 text-ink-50">
                Useamman päivän koulutus­ohjelma
              </h3>
              <p className="muted text-sm mt-3 leading-relaxed">
                Esim. AI-akatemia johdolle tai asiantuntijatiimille.
                Suunnitellaan yhdessä tarpeen, aikataulun ja budjetin mukaan.
              </p>
            </div>
            <a
              href="#yhteys"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
            >
              Pyydä tarjous
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Package({
  tier,
  title,
  price,
  unit,
  text,
  includes,
  highlight,
}: {
  tier: string;
  title: string;
  price: string;
  unit: string;
  text: string;
  includes: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "card flex flex-col" +
        (highlight ? " border-accent-500/60 bg-ink-800/80" : "")
      }
    >
      <div className="flex items-center justify-between gap-2">
        <p className="eyebrow">{tier}</p>
        {highlight && (
          <span className="rounded-full bg-accent-500 text-ink-900 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5">
            Suosituin
          </span>
        )}
      </div>
      <h3 className="h3 mt-2 text-ink-50">{title}</h3>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-ink-50 tracking-tight">
          {price}
        </span>
        <span className="muted text-sm">{unit}</span>
      </div>
      <p className="muted text-sm mt-3 leading-relaxed">{text}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-ink-100">
        {includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className="text-accent-400 mt-1">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href="#yhteys"
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm text-accent-400 font-medium hover:underline"
      >
        Pyydä tarjous
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
