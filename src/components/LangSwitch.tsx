import Link from "next/link";
import type { Locale } from "@/lib/blog";

/**
 * FI/EN-segmenttikytkin. Reittipohjainen kielivalinta: aktiivinen kieli
 * amber-pillinä, toinen linkittää vastinsivulle (alternateHref).
 */
export default function LangSwitch({
  locale,
  alternateHref,
}: {
  locale: Locale;
  alternateHref?: string;
}) {
  const seg = (active: boolean, label: string, href?: string) => {
    const cls =
      "rounded-full px-3 py-[5px] text-[12.5px] font-bold " +
      (active ? "bg-syaani-400 text-yo-900" : "text-teksti-300 hover:text-syaani-400");
    if (active || !href) {
      return (
        <span className={cls} aria-current={active ? "true" : undefined}>
          {label}
        </span>
      );
    }
    return (
      <Link href={href} className={cls} rel="alternate" hrefLang={label.toLowerCase()}>
        {label}
      </Link>
    );
  };

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-teksti-50/15 p-[3px]">
      {seg(locale === "fi", "FI", locale === "fi" ? undefined : alternateHref ?? "/")}
      {seg(locale === "en", "EN", locale === "en" ? undefined : alternateHref ?? "/en")}
    </div>
  );
}
