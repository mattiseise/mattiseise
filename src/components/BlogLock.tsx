"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Ajastettu julkaisu client-puolella: osa on "lukossa" kunnes sen julkaisuaika
 * koittaa. initialLocked lasketaan palvelimella (build-aika) hydraatioturvaa
 * varten; client tarkistaa oikean kellonajan ja avaa lukon automaattisesti.
 * forceLocked (upcoming-frontmatter) pitää lukon kiinni ajasta riippumatta,
 * kunnes lippu poistetaan sisällöstä.
 */
function useUnlocked(
  publishAt: string,
  initialLocked: boolean,
  forceLocked = false,
): boolean {
  const previewUnlocked = process.env.NODE_ENV !== "production";
  const [locked, setLocked] = useState(previewUnlocked ? false : initialLocked);
  useEffect(() => {
    if (previewUnlocked) {
      setLocked(false);
      return;
    }
    if (forceLocked) {
      setLocked(true);
      return;
    }

    const target = new Date(publishAt).getTime();
    const tick = () => setLocked(Date.now() < target);
    tick();
    if (Date.now() < target) {
      const id = setInterval(tick, 20000);
      return () => clearInterval(id);
    }
  }, [publishAt, previewUnlocked, forceLocked]);
  return !locked;
}

export type PublishGateLabels = {
  publishes: string;
  backToSeries: string;
};

const defaultPublishGateLabels: PublishGateLabels = {
  publishes: "Julkaistaan",
  backToSeries: "← Blogin etusivulle",
};

/** Lukitsee artikkelin sisällön julkaisuaikaan asti (overlay + sumennettu sisältö). */
export function PublishGate({
  publishAt,
  initialLocked,
  forceLocked = false,
  publishLabel,
  children,
  backHref = "/blog",
  labels = defaultPublishGateLabels,
}: {
  publishAt: string;
  initialLocked: boolean;
  forceLocked?: boolean;
  publishLabel: string;
  children: React.ReactNode;
  backHref?: string;
  labels?: PublishGateLabels;
}) {
  const unlocked = useUnlocked(publishAt, initialLocked, forceLocked);
  if (unlocked) return <>{children}</>;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none max-h-[60vh] select-none overflow-hidden opacity-20 blur-md"
      >
        {children}
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center px-4 pt-10 sm:pt-16">
        <div className="max-w-sm rounded-2xl border border-amber-400/40 bg-bark-800 p-7 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-bark-900/60 text-xl">
            🔒
          </div>
          <p className="eyebrow-sm mt-4">{labels.publishes}</p>
          <p className="mt-1 text-lg font-bold text-cream-50">{publishLabel}</p>
          <Link
            href={backHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
          >
            {labels.backToSeries}
          </Link>
        </div>
      </div>
    </div>
  );
}
