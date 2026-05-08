export default function Pricing() {
  return (
    <section
      id="koulutukset"
      className="section-pad border-t border-ink-600/30"
    >
      <div className="container-narrow">
        <p className="eyebrow">Hinnasto</p>
        <h2 className="h2 mt-3 text-ink-50">Tekoälykoulutukset.</h2>
        <p className="lead mt-4 max-w-2xl">
          Räätälöityjä tekoälykoulutuksia opettajille, asiantuntijoille ja
          organisaatioille. Sisältö muotoillaan kohderyhmälle: konkreettiset
          työkalut, oikeat esimerkit ja taidot, jotka jäävät käyttöön
          koulutuksen jälkeenkin.
        </p>

        <div className="mt-12 grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 card flex flex-col">
            <p className="eyebrow">Tuntiveloitus</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-semibold text-ink-50 tracking-tight">
                150 €
              </span>
              <span className="text-ink-200 text-lg">/ tunti</span>
            </div>
            <p className="muted text-sm mt-2">+ alv 25,5 %</p>

            <ul className="mt-7 space-y-3 text-ink-100">
              <li className="flex gap-3">
                <span aria-hidden className="text-accent-400 mt-1.5">▸</span>
                <span>
                  <strong className="text-ink-50">Minimiveloitus 2 tuntia</strong>{" "}
                  · sisältää sisällön räätälöinnin tilaajan tarpeisiin.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-accent-400 mt-1.5">▸</span>
                <span>
                  Toteutus paikan päällä Helsingissä tai etänä — sopimuksen
                  mukaan.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-accent-400 mt-1.5">▸</span>
                <span>
                  Matkakulut Helsingin ulkopuolelle erikseen (Verohallinnon
                  päivärahat ja kilometrikorvaukset).
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="text-accent-400 mt-1.5">▸</span>
                <span>
                  Materiaalien ja tallenteiden käyttöoikeudet sovitaan
                  tapauskohtaisesti.
                </span>
              </li>
            </ul>

            <a
              href="#yhteys"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
            >
              Pyydä tarjous
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-5 grid gap-4">
            <Topic
              title="AI-perusteet henkilöstölle"
              text="Mitä generatiivinen tekoäly osaa, mitä se ei osaa ja miten siitä saa konkreettisen hyödyn arkityöhön. Painopiste käsillä tekemisessä, ei kalvoissa."
            />
            <Topic
              title="Tekoäly opetuksessa"
              text="Tehtävien suunnittelu, arviointi ja eriyttäminen tekoälyn aikakaudella — saavutettavuus mukana koko ajan. Räätälöity opettajille kaikilla asteilla."
            />
            <Topic
              title="Agentit ja automaatio"
              text="Multi-agent-arkkitehtuurit, työkalut ja RAG. Työpajan jälkeen mukaan lähtee valmis suunnitelma ensimmäisestä omasta agentista."
            />
            <Topic
              title="Räätälöity ohjelma"
              text="Suunnitellaan yhdessä — yksittäisestä työpajasta useamman päivän ohjelmaan. Aloita pyytämällä tarjous, niin sovitaan tarpeet ja aikataulu."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Topic({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h3 className="text-base font-semibold text-ink-50">{title}</h3>
      <p className="muted text-sm mt-2 leading-relaxed">{text}</p>
    </div>
  );
}
