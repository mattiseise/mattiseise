import Image from "next/image";

export default function About() {
  return (
    <section id="osaaminen" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <p className="eyebrow">Profiili</p>
          <h2 className="h2 mt-3 text-ink-50">Tekninen opettaja, joka koodaa.</h2>

          <div className="mt-8 relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden border border-ink-600/50">
            <Image
              src="/images/seisepontossa.jpg"
              alt="Matti Seise"
              fill
              sizes="(max-width: 768px) 80vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-5 lead">
          <p>
            Opetan ICT:tä Helsinki Business Collegen Joustava-ryhmässä —
            yhdistäen ohjelmoinnin (web, Python), kyberturvallisuuden ja IT-tuen
            erityispedagogiikan keinoihin. Taustalla tietojenkäsittelytieteen
            maisterin tutkinto (2011) ja yli kymmenen vuoden kokemus
            ammatillisesta opetuksesta.
          </p>
          <p>
            Tekoäly on minulle työkalu, ei aihe. Rakensin oman multi-agent-
            järjestelmän tuotantokäyttöön, automatisoin Wilman ja itslearningin
            rutiinit Seleniumilla ja kehitän GPT-pohjaisia opetustyökaluja
            jatkuvasti. Olen mukana Opetushallituksen työryhmässä, joka linjaa
            tekoälyn käyttöä suomalaisessa opetuksessa.
          </p>
          <p className="muted">
            Pätevyydet: Ammatillinen opettaja (Haaga-Helia, 2013) ·
            Ammatillinen erityisopettaja (Haaga-Helia, 2018).
          </p>
          <p className="muted">
            Edunvalvonta: OAJ:n valtuuston varajäsen · luottamusmies · ylläpidän
            yli 19 000 opettajan yhteisöä &ldquo;Opettajien edunvalvonta ja
            professio&rdquo;.
          </p>
        </div>
      </div>

      <div className="container-narrow mt-14 grid md:grid-cols-3 gap-5">
        <div className="card">
          <p className="eyebrow">Tekoäly & agentit</p>
          <h3 className="h3 mt-2 text-ink-50">Suunnittelu &nbsp;→&nbsp; tuotanto</h3>
          <p className="muted mt-3 text-sm leading-relaxed">
            Multi-agent-arkkitehtuurit, RAG-haku ja työkalut, joissa malli
            valitaan tehtävän vaativuuden — ei brändin — perusteella.
            Paikallinen Ollama-fallback varmistaa toiminnan myös offline.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">Automaatio</p>
          <h3 className="h3 mt-2 text-ink-50">Selain & API</h3>
          <p className="muted mt-3 text-sm leading-relaxed">
            Playwright- ja Selenium-pohjaisia automaatioita autentikoituihin
            järjestelmiin. Ajastetut työnkulut, virhetilanteiden hallinta ja
            raportointi Slackiin tai Telegramiin.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">Pedagogiikka</p>
          <h3 className="h3 mt-2 text-ink-50">Linjakkuus & saavutettavuus</h3>
          <p className="muted mt-3 text-sm leading-relaxed">
            Bloomin taksonomia, constructive alignment ja eriyttäminen — ei
            teoriana vaan osana jokaista kurssia, jonka rakennan. Saavutettavuus
            on lähtökohta, ei lisäosa.
          </p>
        </div>
      </div>
    </section>
  );
}
