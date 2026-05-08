export default function Contact() {
  return (
    <section id="yhteys" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow">Yhteys</p>
          <h2 className="h2 mt-3 text-ink-50">
            AI-projekti, jonka pitää toimia tuotannossa?
          </h2>
          <p className="lead mt-5">
            Otan vastaan koulutus-, konsultointi- ja toteutuspyyntöjä.
            Erityisesti silloin, kun ratkaisun on tarkoitus istua oikeaan työhön
            ja jäädä päivittäiseen käyttöön.
          </p>
        </div>
        <div className="md:col-span-5 space-y-4">
          <a
            href="mailto:seise@seise.org"
            className="card flex items-center justify-between hover:border-accent-500/60"
          >
            <div>
              <p className="text-xs eyebrow">Sähköposti</p>
              <p className="mt-1 text-ink-50 font-medium">seise@seise.org</p>
            </div>
            <span className="text-accent-400" aria-hidden>→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mattiseise/"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-between hover:border-accent-500/60"
          >
            <div>
              <p className="text-xs eyebrow">LinkedIn</p>
              <p className="mt-1 text-ink-50 font-medium">/in/mattiseise</p>
            </div>
            <span className="text-accent-400" aria-hidden>↗</span>
          </a>
          <a
            href="https://github.com/mattiseise"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-between hover:border-accent-500/60"
          >
            <div>
              <p className="text-xs eyebrow">GitHub</p>
              <p className="mt-1 text-ink-50 font-medium">@mattiseise</p>
            </div>
            <span className="text-accent-400" aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
