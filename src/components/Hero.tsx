import Image from "next/image";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Helsinki · opetus · agentit",
    title: "Rakennan tekoälystä",
    words: ["arjen työkaluja.", "opetuksen tukea.", "luotettavia agentteja."],
    lead: "Olen erityisopettaja, joka vie tekoälyagentit tuotantoon asti — ja kertoo rehellisesti, mikä toimi ja mikä maksoi liikaa. Koulutukset, automaatiot ja pedagogiikka samasta osoitteesta.",
    cta1: "Tilaa koulutus",
    cta2: "Katso projektit",
    tags: [
      "Tekoälykoulutukset",
      "Tekoälyagentit",
      "Selainautomaatio",
      "Pedagoginen suunnittelu",
    ],
    liveTitle: "Hermes-agentti · live",
    liveMsg: "Aamubriiffi lähetetty klo 6.30 ✓",
    stats: [
      { value: "15+ v", label: "ammatillista opetusta" },
      { value: "27", label: "avointa oppituntia tekoälystä" },
      { value: "19 000+", label: "opettajan yhteisön ylläpitäjä" },
      { value: "OPH", label: "tekoälytyöryhmän jäsen" },
    ],
  },
  en: {
    eyebrow: "Helsinki · teaching · agents",
    title: "I turn AI into",
    words: ["everyday tools.", "teaching support.", "reliable agents."],
    lead: "I'm a special education teacher who takes AI agents all the way to production — and honestly reports what worked and what cost too much. Training, automation and pedagogy from one place.",
    cta1: "Book a training",
    cta2: "See projects",
    tags: ["AI training", "AI agents", "Browser automation", "Pedagogical design"],
    liveTitle: "Hermes agent · live",
    liveMsg: "Morning brief sent at 6:30 AM ✓",
    stats: [
      { value: "15+ yrs", label: "of vocational teaching" },
      { value: "27", label: "open AI lessons published" },
      { value: "19,000+", label: "teacher community admin" },
      { value: "EDUFI", label: "national AI working group member" },
    ],
  },
} as const;

export default function Hero({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  const prefix = locale === "en" ? "/en" : "";
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-16 md:px-10 md:pb-[72px] md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(55% 60% at 20% 10%, rgba(224,164,88,0.13), transparent 65%), radial-gradient(40% 45% at 90% 80%, rgba(217,119,66,0.07), transparent 60%)",
        }}
      />
      <div className="container-narrow relative grid items-center gap-10 md:grid-cols-11 md:gap-14">
        <div className="md:col-span-6">
          <p className="eyebrow fade-up fade-up-1">{t.eyebrow}</p>
          <h1 className="fade-up fade-up-2 mt-[22px] font-display text-[clamp(34px,4.2vw,58px)] font-semibold leading-[1.08] tracking-[-0.015em]">
            {t.title}
            <br />
            <span className="inline-block h-[1.15em] overflow-hidden align-bottom">
              <span className="block animate-word-cycle text-amber-400">
                {[...t.words, t.words[0]].map((w, i) => (
                  <span
                    key={i}
                    aria-hidden={i > 0}
                    className="block h-[1.15em] whitespace-nowrap"
                  >
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="fade-up fade-up-3 mt-[26px] max-w-[32em] text-lg leading-[1.7] text-cream-200">
            {t.lead}
          </p>
          <div className="fade-up fade-up-4 mt-9 flex flex-wrap gap-3.5">
            <a href={`${prefix}/#koulutukset`} className="btn-primary">
              {t.cta1}
            </a>
            <a href={`${prefix}/#projektit`} className="btn-outline">
              {t.cta2}
            </a>
          </div>
          <div className="fade-up fade-up-5 mt-11 flex flex-wrap gap-x-[22px] gap-y-2 text-sm text-cream-400">
            {t.tags.map((tag) => (
              <span key={tag}>· {tag}</span>
            ))}
          </div>
        </div>

        <div className="fade-up fade-up-3 relative md:col-span-5">
          <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/mattivaaka.jpg"
              alt="Matti Seise"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover saturate-[0.95]"
            />
          </div>
          <div className="absolute bottom-5 left-5 rounded-xl border border-amber-400/40 bg-bark-900/85 px-[18px] py-3.5 backdrop-blur-[6px]">
            <p className="flex items-center gap-[7px] text-[12.5px] font-bold text-amber-400">
              <span
                aria-hidden
                className="inline-block h-[7px] w-[7px] animate-blink-dot rounded-full bg-amber-400"
              />
              {t.liveTitle}
            </p>
            <p className="mt-1 text-sm text-cream-50">{t.liveMsg}</p>
          </div>
        </div>
      </div>

      <div className="container-narrow relative mt-16">
        <div className="grid grid-cols-2 gap-x-7 gap-y-7 border-t border-cream-50/10 pt-[30px] md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-cream-50">
                {s.value}
              </p>
              <p className="mt-1 text-[13.5px] leading-[1.45] text-cream-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
