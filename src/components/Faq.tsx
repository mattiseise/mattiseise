"use client";

import { useState } from "react";
import { faqItems as items } from "@/lib/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow">
        <p className="eyebrow">Usein kysytyt kysymykset</p>
        <h2 className="h2 mt-3 text-ink-50">
          Vastauksia ennen kuin kysyt.
        </h2>
        <p className="lead mt-4 max-w-2xl">
          Yleisimmät kysymykset koulutuksista, agenteista ja yhteistyön
          käytännöistä. Jos kysymyksesi puuttuu, ota yhteyttä — vastaan mielelläni.
        </p>

        <div className="mt-10 divide-y divide-ink-600/40 border-y border-ink-600/40">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left text-ink-50 hover:text-accent-400 transition-colors"
                >
                  <span className="font-medium">{it.q}</span>
                  <span
                    aria-hidden
                    className={
                      "shrink-0 text-accent-400 text-xl transition-transform " +
                      (isOpen ? "rotate-45" : "")
                    }
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-10 text-ink-200 leading-relaxed">
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
