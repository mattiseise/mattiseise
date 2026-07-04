"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Ajastettu julkaisu client-puolella: osa on "lukossa" kunnes sen julkaisuaika
 * koittaa. initialLocked lasketaan palvelimella (build-aika) hydraatioturvaa
 * varten; client tarkistaa oikean kellonajan ja avaa lukon automaattisesti.
 */
function useUnlocked(publishAt: string, initialLocked: boolean): boolean {
  const previewUnlocked = process.env.NODE_ENV !== "production";
  const [locked, setLocked] = useState(previewUnlocked ? false : initialLocked);
  useEffect(() => {
    if (previewUnlocked) {
      setLocked(false);
      return;
    }

    const target = new Date(publishAt).getTime();
    const tick = () => setLocked(Date.now() < target);
    tick();
    if (Date.now() < target) {
      const id = setInterval(tick, 20000);
      return () => clearInterval(id);
    }
  }, [publishAt, previewUnlocked]);
  return !locked;
}

export type PublishGateLabels = {
  publishes: string;
  backToSeries: string;
};

export type CardStatusLabels = {
  readPart: string;
  publishesAt: string;
};

const defaultPublishGateLabels: PublishGateLabels = {
  publishes: "Julkaistaan",
  backToSeries: "← Sarjan etusivulle",
};

/** Lukitsee artikkelin sisällön julkaisuaikaan asti (overlay + sumennettu sisältö). */
export function PublishGate({
  publishAt,
  initialLocked,
  publishLabel,
  children,
  backHref = "/blog",
  labels = defaultPublishGateLabels,
}: {
  publishAt: string;
  initialLocked: boolean;
  publishLabel: string;
  children: React.ReactNode;
  backHref?: string;
  labels?: PublishGateLabels;
}) {
  const unlocked = useUnlocked(publishAt, initialLocked);
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
        <div className="card max-w-sm text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-ink-900/60 text-xl">
            🔒
          </div>
          <p className="eyebrow mt-4">{labels.publishes}</p>
          <p className="mt-1 text-lg font-semibold text-ink-50">
            {publishLabel}
          </p>
          <Link
            href={backHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300"
          >
            {labels.backToSeries}
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Koontisivun kortin tilarivi: joko normaali "Lue osa N →" tai lukittu "🔒 Julkaistaan …". */
export function CardStatus({
  publishAt,
  initialLocked,
  publishLabel,
  dateLabel,
  readingMinutes,
  part,
  labels,
}: {
  publishAt: string;
  initialLocked: boolean;
  publishLabel: string;
  dateLabel: string;
  readingMinutes: number;
  part: number;
  labels?: CardStatusLabels;
}) {
  const unlocked = useUnlocked(publishAt, initialLocked);
  if (unlocked) {
    return (
      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm muted">
        <time dateTime={publishAt}>{dateLabel}</time>
        <span aria-hidden>·</span>
        <span>{readingMinutes} min</span>
        <span aria-hidden>·</span>
        <span className="text-accent-400 group-hover:text-accent-300">
          {labels?.readPart ?? `Lue osa ${part} →`}
        </span>
      </p>
    );
  }
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-accent-400/90">
      <span aria-hidden>🔒</span>
      <span>{labels?.publishesAt ?? `Julkaistaan ${publishLabel}`}</span>
    </p>
  );
}
