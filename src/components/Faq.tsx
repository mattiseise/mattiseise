"use client";

import { useState } from "react";
import { getFaqItems } from "@/lib/faq";
import type { Locale } from "@/lib/blog";

const strings = {
  fi: {
    title: "Yleisimmät kysymykset.",
    lead: "Käytännön asiat koulutuksista, agenteista ja yhteistyöstä. Jos tästä puuttuu olennainen kysymys, lähetä viesti.",
  },
  en: {
    title: "Answers before you ask.",
    lead: "The most common questions about training, agents and how collaboration works. If yours is missing, get in touch — I'm happy to answer.",
  },
} as const;

export default function Faq({ locale = "fi" }: { locale?: Locale }) {
  const [open, setOpen] = useState<number | null>(0);
  const t = strings[locale];
  const items = getFaqItems(locale);

  return (
    <section id="faq" className="section-pad border-t border-cream-50/[0.08]">
      <div className="container-narrow grid items-start gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3.5 font-display text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-cream-50 md:text-[34px]">
            {t.title}
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-cream-300">
            {t.lead}
          </p>
        </div>
        <div className="border-t border-cream-50/10 md:col-span-8">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-cream-50/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-[16.5px] font-bold text-cream-50 transition-colors hover:text-amber-400"
                >
                  <span>{it.q}</span>
                  <span
                    aria-hidden
                    className={
                      "shrink-0 text-xl text-amber-400 transition-transform duration-200 " +
                      (isOpen ? "rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-[22px] pr-0 text-[15px] leading-[1.7] text-cream-300 md:pr-11">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
