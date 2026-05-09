import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, rgba(236,72,153,0.22), transparent 60%), radial-gradient(50% 40% at 85% 30%, rgba(244,114,182,0.14), transparent 60%)",
        }}
      />
      <div className="container-narrow grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-6">
          <p className="eyebrow">Helsinki · 2026</p>
          <h1 className="h1 mt-4 text-ink-50">
            Rakennan tekoälystä<br />
            <span className="text-accent-400">arjen työkaluja.</span>
          </h1>
          <p className="lead mt-6 max-w-2xl">
            Koulutan ja rakennan opettajille sekä organisaatioille tekoäly­ratkaisuja,
            jotka säästävät aikaa, parantavat opetusta ja kestävät arjen käytössä.
            Vähemmän kalvoja, enemmän käsillä tekemistä.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projektit"
              className="rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
            >
              Katso projektit
            </a>
            <a
              href="#koulutukset"
              className="rounded-xl border border-ink-600/60 px-5 py-3 text-sm font-semibold text-ink-100 hover:border-accent-500/50 hover:text-accent-400"
            >
              Tilaa koulutus
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-400">
            <span>· Tekoälykoulutukset</span>
            <span>· Multi-agent-järjestelmät</span>
            <span>· Selainautomaatio</span>
            <span>· Pedagoginen suunnittelu</span>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-accent-500/30 shadow-2xl shadow-accent-500/10">
            <Image
              src="/images/mattivaaka.jpg"
              alt="Matti Seise"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-ink-900/50 via-transparent to-accent-500/10 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
