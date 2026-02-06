import Image from "next/image";
import { Users, ExternalLink, MessageCircle, Facebook } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThemeCard } from "@/components/ThemeCard";
import { Timeline } from "@/components/Timeline";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { THEMES, PROOFS, LINKS } from "@/data/content";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />

      {/* Themes Section */}
      <section id="teemat" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionHeading
            title="Tärkeimmät teemat"
            lead="Teemat, jotka vaikuttavat suoraan opettajan arkeen. Jokaisessa on ongelma, ratkaisu ja konkreettiset toimet."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {THEMES.map((theme) => (
              <ThemeCard key={theme.title} theme={theme} />
            ))}
          </div>
        </Container>
      </section>

      {/* Community Section */}
      <section id="facebook" className="py-20 bg-white border-t border-slate-200">
        <Container>
          <SectionHeading
            title="Kentän ääni"
            lead="Edunvalvonnan on perustuttava todellisuuteen, ei oletuksiin. Olen rakentanut kanavan, jossa ääni kuuluu."
          />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">19 000 jäsenen yhteisö</h3>
                    <p className="text-sm font-medium text-slate-500">Opettajien edunvalvonta ja professio</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-slate-600 mb-6">
                  Ryhmä syntyi tarpeesta ja kasvoi ilmiöksi. Se on suora linja opettajienhuoneisiin ympäri Suomea.
                  Siellä jaetaan huolet, ratkotaan ongelmia ja sparrataan edunvalvontaa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={LINKS.facebookGroup} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#166fe5]">
                    <Facebook className="h-4 w-4" />
                    Liity keskusteluun
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-indigo-900 p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Lupaukseni</h3>
                  <p className="text-indigo-100 italic">
                    "En lupaa kuuta taivaalta, mutta lupaan kuunnella, perehtyä ja perustella kantani.
                    Jos ja kun teen virheen, pyydän anteeksi ja korjaan."
                  </p>
                </div>
                {/* Decorative circle */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition duration-500 border border-slate-200">
                <Image
                  src="/images/seisepontossa.jpg"
                  alt="Matti puhumassa"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white font-medium text-sm">OAJ:n valtuustossa 2018–2022</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Proofs Section */}
      <section id="nayttoa" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionHeading
            title="Näyttöä, ei pelkkiä puheita"
            lead="Tekeminen ratkaisee. Olen ollut mukana muuttamassa toimintakulttuuria avoimemmaksi."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROOFS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl border border-white bg-white p-6 shadow-sm shadow-slate-200/50 hover:shadow-md transition"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section id="matka" className="py-20 bg-white border-t border-slate-200/60">
        <Container>
          <SectionHeading
            title="Polkuni tähän pisteeseen"
            lead="Opettajuus on kertynyt kokemuksesta: sijaisuuksista, yliopistolta, ammatillisesta koulutuksesta ja edunvalvonnasta."
          />
          <Timeline />
        </Container>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionHeading
            title="Usein kysytyt kysymykset"
            lead="Lyhyesti ja ytimekkäästi."
          />
          <FAQSection />
        </Container>
      </section>

      {/* Contact Section */}
      <section id="kysy" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ole yhteydessä</h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Haluatko kysyä vuosityöajasta, kampanjasta tai tekoälystä? Laita viestiä.
                Vastaan kaikkiin asiallisiin yhteydenottoihin.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10 border border-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-400">Sähköposti</div>
                    <div className="text-base font-semibold text-white">{LINKS.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 rounded-3xl bg-indigo-950/50 border border-indigo-500/20">
                <p className="text-sm text-indigo-200">
                  "Paras tapa vaikuttaa on osallistua. Äänestä, jaa tietoa ja haasta ehdokkaita keskusteluun."
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
