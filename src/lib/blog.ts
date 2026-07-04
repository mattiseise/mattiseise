import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export type Locale = "fi" | "en";

export type PostMeta = {
  slug: string;
  part: number;
  totalParts: number;
  series: string;
  seriesSlug: string;
  title: string;
  description: string;
  keyword: string;
  date: string;
  /** Optional content language marker from frontmatter. Inferred from directory when missing. */
  lang?: Locale;
  /** Kansikuvan polku publicista, esim. "/images/blog/01-aamubriiffi.jpg". Näytetään vain jos tiedosto on olemassa. */
  cover?: string;
  /** Kansikuvan vaihtoehtoinen teksti (saavutettavuus). */
  coverAlt?: string;
  /** LinkedIn-nosto — ei renderöidä sivulle, kulkee mukana julkaisua varten. */
  nosto?: string;
};

export type Post = PostMeta & {
  locale: Locale;
  content: string;
  readingMinutes: number;
};

function dirForLocale(locale: Locale): string {
  return locale === "en" ? path.join(BLOG_DIR, "en") : BLOG_DIR;
}

function readPost(file: string, locale: Locale): Post {
  const raw = fs.readFileSync(path.join(dirForLocale(locale), file), "utf8");
  const { data, content } = matter(raw);
  const meta = data as PostMeta;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(words / 200));
  // Näytä kansikuva vain jos tiedosto on oikeasti olemassa publicissa.
  const cover =
    meta.cover && fs.existsSync(path.join(PUBLIC_DIR, meta.cover))
      ? meta.cover
      : undefined;
  return { ...meta, lang: meta.lang ?? locale, locale, cover, content, readingMinutes };
}

/** Kaikki sarjan osat järjestyksessä (osa 1 → n). */
export function getAllPosts(locale: Locale = "fi"): Post[] {
  const dir = dirForLocale(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => readPost(entry.name, locale))
    .sort((a, b) => a.part - b.part);
}

export function getPostBySlug(slug: string, locale: Locale = "fi"): Post | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug);
}

/** Edellinen ja seuraava osa sarjan järjestyksessä — sisäistä linkitystä varten. */
export function getAdjacent(
  slug: string,
  locale: Locale = "fi",
): { prev?: Post; next?: Post } {
  const posts = getAllPosts(locale);
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: posts[i - 1], next: posts[i + 1] };
}

/** fi-FI/en-US-muotoiltu päivämäärä. */
export function formatDate(iso: string, locale: Locale = "fi"): string {
  return new Date(iso).toLocaleDateString(locale === "en" ? "en-US" : "fi-FI", {
    day: "numeric",
    month: locale === "en" ? "long" : "numeric",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  });
}

/** fi-FI/en-US päivä + kellonaika Helsingin ajassa. */
export function formatDateTime(iso: string, locale: Locale = "fi"): string {
  const d = new Date(iso);
  const date = d.toLocaleDateString(locale === "en" ? "en-US" : "fi-FI", {
    day: "numeric",
    month: locale === "en" ? "long" : "numeric",
    year: "numeric",
    timeZone: "Europe/Helsinki",
  });
  const time = d.toLocaleTimeString(locale === "en" ? "en-US" : "fi-FI", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Europe/Helsinki",
    timeZoneName: locale === "en" ? "short" : undefined,
  });
  return locale === "en" ? `${date} at ${time}` : `${date} klo ${time}`;
}

export function blogPath(locale: Locale, slug?: string): string {
  const base = locale === "en" ? "/en/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}
