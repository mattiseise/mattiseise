import Link from "next/link";
import type { Locale } from "@/lib/blog";
import { SLIDES, VIDEOS, type Video } from "@/lib/esitykset";

const strings = {
  fi: {
    eyebrow: "Videot",
    title: "Katso videolta, miten työkalut toimivat.",
    lead: "Lyhyitä piirrettyjä videoita, joissa hahmot puhuvat. Luvut voi katsoa yksitellen. Videoissa on tekstitys, joten ne toimivat myös ilman ääntä.",
    video: "Video",
    chapters: "lukua",
    watch: "Katso video",
    slidesTag: `Diaesitys · ${SLIDES.slides} diaa`,
    openSlides: "Avaa diaesitys",
    all: "Kaikki videot ja esitykset",
  },
  en: {
    eyebrow: "Videos",
    title: "Watch how the tools work.",
    lead: "Short animated videos with voiced characters, in Finnish. Each chapter can be watched on its own, and the videos work without sound thanks to subtitles.",
    video: "Video · in Finnish",
    chapters: "chapters",
    watch: "Watch the video",
    slidesTag: `Slides · ${SLIDES.slides} slides · in Finnish`,
    openSlides: "Open the slides",
    all: "All videos and talks",
  },
} as const;

/** Videokortti: kansikuva (kansi.jpg = og.jpg:stä rajattu näyttämö) sarjakuvaruudussa, kestolappu, toistonappi ja videon hahmot kulmassa. */
export function VideoCard({
  v,
  locale = "fi",
  headingLevel = "h3",
}: {
  v: Video;
  locale?: Locale;
  headingLevel?: "h2" | "h3";
}) {
  const t = strings[locale];
  const c = v[locale];
  const Heading = headingLevel;
  return (
    <a
      href={v.href}
      className="card card-hover-lift group flex flex-col overflow-hidden !p-0"
      style={{ ["--c" as string]: v.color }}
    >
      <div className="relative border-b-[2.5px] border-ruutu/80">
        {/* eslint-disable-next-line @next/next/no-img-element -- staattinen jakokuva public-kansiosta */}
        <img
          src={`${v.href}kansi.jpg`}
          width={585}
          height={326}
          alt=""
          loading="lazy"
          className="block aspect-video h-auto w-full object-cover"
        />
        <span className="absolute left-3 top-3 -rotate-1 border-[2.5px] border-muste bg-ruutu px-2 py-0.5 text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-muste shadow-[3px_3px_0_0_var(--c)]">
          {t.video} · {v.minutes} min
        </span>
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-muste bg-syaani-400 pl-1 text-[22px] text-muste shadow-[4px_4px_0_0_#f0459b] transition-transform duration-200 group-hover:scale-110"
        >
          ▶
        </span>
        <span aria-hidden className="absolute -bottom-6 right-3 flex">
          {v.cast.map((id, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={id}
              src={`/hahmot/${id}.svg`}
              alt=""
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-full border-[2.5px] border-muste bg-yo-700"
              style={{ marginLeft: i ? -12 : 0 }}
            />
          ))}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 pt-5">
        <p className="eyebrow-sm max-w-[calc(100%-150px)]" style={{ color: v.color }}>
          {v.chapters} {t.chapters}
        </p>
        <Heading className="mt-3 font-display text-[28px] text-teksti-50" style={{ lineHeight: "var(--display-lh)" }}>
          {c.title}
        </Heading>
        <p className="mt-1 text-[14.5px] font-bold text-teksti-100">{c.tagline}</p>
        <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-teksti-300">{c.blurb}</p>
        <span className="mt-[18px] text-[14.5px] font-bold text-syaani-400 group-hover:text-syaani-300">
          {t.watch} <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

/** Etusivun Videot-osio: kolme videota ja diaesitys, linkki /esitykset-sivulle. */
export default function Videos({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  const s = SLIDES[locale];
  return (
    <section id="videot" className="section-pad relative overflow-hidden border-t border-teksti-50/[0.08]">
      <div aria-hidden className="sateet pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_85%_10%,#000,transparent_70%)]" />
      <div className="container-narrow relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[40em]">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="h2 mt-4 text-teksti-50">{t.title}</h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-teksti-300">{t.lead}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hahmot/claus-point.svg"
            alt=""
            aria-hidden
            className="hidden w-[190px] md:block"
          />
        </div>

        <div className="mt-10 grid gap-x-[22px] gap-y-8 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <VideoCard key={v.slug} v={v} locale={locale} />
          ))}
        </div>

        <div className="card mt-8 grid items-center gap-6 !p-5 md:grid-cols-12 md:!p-6">
          <a href={SLIDES.href} className="ruutu-sm block overflow-hidden md:col-span-3" style={{ ["--c" as string]: "#f0459b" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- staattinen jakokuva public-kansiosta */}
            <img
              src={`${SLIDES.href}og.jpg`}
              width={1200}
              height={630}
              alt=""
              loading="lazy"
              className="block h-auto w-full"
            />
          </a>
          <div className="md:col-span-5">
            <p className="eyebrow-sm">{t.slidesTag}</p>
            <h3 className="mt-2 font-sans text-[20px] font-bold leading-[1.3] text-teksti-50">{s.title}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-teksti-300">{s.blurb}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:col-span-4 md:justify-end">
            <a href={SLIDES.href} className="btn-primary-sm">
              {t.openSlides}
            </a>
            <Link href="/esitykset" className="text-[14.5px] font-bold text-syaani-400 hover:text-syaani-300">
              {t.all} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
