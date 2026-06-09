"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "seise-consent";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Choice | null;
    if (stored === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    } else if (!stored) {
      setVisible(true);
    }
  }, []);

  function decide(choice: Choice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Evästesuostumus"
      className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-2xl rounded-xl border border-ink-600/40 bg-ink-800/95 p-4 shadow-lg backdrop-blur md:bottom-5 md:p-5"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-ink-100">
          Käytän anonyymiä kävijäseurantaa (Google Analytics) sivuston
          kehittämiseen. Analytiikkaevästeet otetaan käyttöön vain
          suostumuksellasi.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="rounded-md border border-ink-600 px-4 py-2 text-sm text-ink-100 transition hover:bg-ink-600/40"
          >
            Vain välttämättömät
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="rounded-md bg-accent-500 px-4 py-2 text-sm font-medium text-ink-900 transition hover:bg-accent-400"
          >
            Hyväksy
          </button>
        </div>
      </div>
    </div>
  );
}
