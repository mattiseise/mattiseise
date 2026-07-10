import Nav from "@/components/Nav";
import type { Locale } from "@/lib/blog";

/** Blogisivujen yläpalkki — ohut kääre yhteisen Navin ympärille. */
export default function BlogHeader({
  locale = "fi",
  alternateHref,
}: {
  locale?: Locale;
  alternateHref?: string;
}) {
  return <Nav locale={locale} active="blog" alternateHref={alternateHref} />;
}
