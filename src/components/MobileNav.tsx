"use client";

import { useState } from "react";
import Link from "next/link";

type Item = { href: string; label: string };

/**
 * Mobiilivalikko (hampurilainen) sticky-headeriin. Header toimii
 * positiointikontekstina (sticky = positioned), joten paneeli
 * levittäytyy headerin alle koko leveydelle.
 */
export default function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Sulje valikko" : "Avaa valikko"}
        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md text-cream-100 hover:text-amber-400"
      >
        <span aria-hidden className="flex flex-col items-center justify-center gap-[5px]">
          <span
            className={
              "h-0.5 w-5 rounded bg-current transition-transform " +
              (open ? "translate-y-[7px] rotate-45" : "")
            }
          />
          <span
            className={
              "h-0.5 w-5 rounded bg-current transition-opacity " +
              (open ? "opacity-0" : "")
            }
          />
          <span
            className={
              "h-0.5 w-5 rounded bg-current transition-transform " +
              (open ? "-translate-y-[7px] -rotate-45" : "")
            }
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-cream-50/10 bg-bark-900 shadow-xl shadow-bark-900/50">
          <ul className="px-4 py-3 space-y-0.5">
            {items.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-cream-100 hover:bg-bark-800 hover:text-amber-400"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
