"use client";

import { useState } from "react";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Vlogi",
    play: "Katso video",
    note: "Video ladataan YouTubesta (youtube-nocookie.com) vasta, kun käynnistät sen.",
    iframeTitle: (title: string) => `Video: ${title}`,
  },
  en: {
    eyebrow: "Vlog",
    play: "Watch the video",
    note: "The video is loaded from YouTube (youtube-nocookie.com) only when you start it.",
    iframeTitle: (title: string) => `Video: ${title}`,
  },
} as const;

/**
 * Tietosuojaystävällinen YouTube-upotus: ennen klikkiä sivu ei lataa
 * mitään Googlelta (ei edes esikatselukuvaa). Klikkaus lataa iframen
 * youtube-nocookie.com-domainilta autoplaylla.
 */
export default function VideoEmbed({
  videoId,
  title,
  locale = "fi",
}: {
  videoId: string;
  title: string;
  locale?: Locale;
}) {
  const [loaded, setLoaded] = useState(false);
  const t = strings[locale];

  return (
    <figure className="my-0">
      <div
        className="relative w-full overflow-hidden rounded-[18px] border border-cream-50/[0.08] bg-bark-800"
        style={{ aspectRatio: "16/9" }}
      >
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={t.iframeTitle(title)}
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`${t.play}: ${title}`}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center"
            style={{
              background:
                "linear-gradient(150deg, rgba(224,164,88,0.14), #241d18 65%)",
            }}
          >
            <span
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-bark-900 transition-transform duration-200 group-hover:scale-105"
            >
              <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor">
                <path d="M0 0 L22 13 L0 26 Z" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-cream-50 md:text-xl">
              {title}
            </span>
            <span className="text-[12.5px] text-cream-400">{t.note}</span>
          </button>
        )}
      </div>
    </figure>
  );
}
