import ContactForm from "@/components/ContactForm";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Yhteydenotto",
    title: "Tarvitsetko koulutuksen, automaation tai agentin?",
    lead: "Lähetä lyhyt kuvaus: kenelle, mihin tarpeeseen ja millä aikataululla. Vastaan suoraan, jos tässä on järkeä. Sanon myös, jos ei ole.",
    email: "Sähköposti",
  },
  en: {
    eyebrow: "Contact",
    title: "An AI project that needs to work in production?",
    lead: "I take on training, consulting and delivery requests — especially when the solution needs to fit real work and stay in daily use, not just be a demo.",
    email: "Email",
  },
} as const;

export default function Contact({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  return (
    <section
      id="yhteys"
      className="section-pad relative overflow-hidden border-t border-teksti-50/[0.08]"
    >
      <div
        aria-hidden
        className="pisteet pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_60%_at_80%_90%,#000,transparent_75%)]"
      />
      <div className="container-narrow relative grid items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2 mt-3.5 text-teksti-50">{t.title}</h2>
          <p className="mt-[18px] max-w-[32em] text-[17px] leading-[1.7] text-teksti-200">
            {t.lead}
          </p>
          <div className="mt-8">
            <ContactForm locale={locale} />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 md:col-span-5 md:pt-[76px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hahmot/opettaja-wave.svg"
            alt=""
            aria-hidden
            className="mb-1 hidden w-[150px] self-center md:block"
          />
          <a
            href="mailto:seise@seise.org"
            className="card card-hover-lift flex items-center justify-between !px-6 !py-[22px]"
            style={{ ["--c" as string]: "#22d3ee" }}
          >
            <span>
              <span className="block text-[11.5px] font-bold uppercase tracking-[0.13em] text-syaani-400">
                {t.email}
              </span>
              <span className="mt-[5px] block text-[15.5px] font-bold text-teksti-50">
                seise@seise.org
              </span>
            </span>
            <span className="text-syaani-400" aria-hidden>→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mattiseise/"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover-lift flex items-center justify-between !px-6 !py-[22px]"
            style={{ ["--c" as string]: "#60a5fa" }}
          >
            <span>
              <span className="block text-[11.5px] font-bold uppercase tracking-[0.13em] text-syaani-400">
                LinkedIn
              </span>
              <span className="mt-[5px] block text-[15.5px] font-bold text-teksti-50">
                /in/mattiseise
              </span>
            </span>
            <span className="text-syaani-400" aria-hidden>↗</span>
          </a>
          <a
            href="https://github.com/mattiseise"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover-lift flex items-center justify-between !px-6 !py-[22px]"
            style={{ ["--c" as string]: "#a78bfa" }}
          >
            <span>
              <span className="block text-[11.5px] font-bold uppercase tracking-[0.13em] text-syaani-400">
                GitHub
              </span>
              <span className="mt-[5px] block text-[15.5px] font-bold text-teksti-50">
                @mattiseise
              </span>
            </span>
            <span className="text-syaani-400" aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
