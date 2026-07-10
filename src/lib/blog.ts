import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export type Locale = "fi" | "en";

/** Blogin aiheet — listaussivun suodatuspillit. */
export type Topic = "agents" | "automation" | "pedagogy";

export const topicLabels: Record<Locale, Record<Topic, string>> = {
  fi: { agents: "AI-agentit", automation: "Automaatio", pedagogy: "Pedagogiikka" },
  en: { agents: "AI agents", automation: "Automation", pedagogy: "Pedagogy" },
};

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
  /** Aihe suodatusta varten. Puuttuessa "agents" (alkuperäinen sarja). */
  topic?: Topic;
  /**
   * Tuleva sisältö: näkyy listauksessa "Tulossa"-korttina eikä julkaistu
   * automaattisesti vaikka date menisi ohi. Poista lippu kun sarja julkaistaan.
   */
  upcoming?: boolean;
  /** Vapaa aikataululupaus Tulossa-kortin metariville, esim. "Syksy 2026". */
  plannedLabel?: string;
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

/** Sarja johdettuna postauksista — listaussivun sarjanosto ja ryhmittely. */
export type Series = {
  slug: string;
  title: string;
  posts: Post[];
  upcoming: boolean;
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
  return {
    ...meta,
    topic: meta.topic ?? "agents",
    lang: meta.lang ?? locale,
    locale,
    cover,
    content,
    readingMinutes,
  };
}

/** Kaikki postaukset julkaisujärjestyksessä (vanhin ensin); tulevat lopussa. */
export function getAllPosts(locale: Locale = "fi"): Post[] {
  const dir = dirForLocale(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => readPost(entry.name, locale))
    .sort((a, b) => {
      if (!!a.upcoming !== !!b.upcoming) return a.upcoming ? 1 : -1;
      const byDate = new Date(a.date).getTime() - new Date(b.date).getTime();
      return byDate !== 0 ? byDate : a.part - b.part;
    });
}

/** Onko postaus julkaistu (build-hetkellä): ei upcoming-lippua ja julkaisuaika ohitettu. */
export function isPublished(post: Pick<Post, "date" | "upcoming">): boolean {
  return !post.upcoming && new Date(post.date).getTime() <= Date.now();
}

/** Sarjat ryhmiteltynä; osat sarjan sisäisessä järjestyksessä. */
export function getSeries(locale: Locale = "fi"): Series[] {
  const groups = new Map<string, Post[]>();
  for (const post of getAllPosts(locale)) {
    const list = groups.get(post.seriesSlug) ?? [];
    list.push(post);
    groups.set(post.seriesSlug, list);
  }
  return Array.from(groups.entries()).map(([slug, posts]) => {
    const sorted = [...posts].sort((a, b) => a.part - b.part);
    return {
      slug,
      title: sorted[0].series,
      posts: sorted,
      upcoming: sorted.every((p) => !isPublished(p)),
    };
  });
}

export function getPostBySlug(slug: string, locale: Locale = "fi"): Post | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug);
}

/** Edellinen ja seuraava osa saman sarjan sisällä — sisäistä linkitystä varten. */
export function getAdjacent(
  slug: string,
  locale: Locale = "fi",
): { prev?: Post; next?: Post } {
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  const series = getAllPosts(locale)
    .filter((p) => p.seriesSlug === post.seriesSlug)
    .sort((a, b) => a.part - b.part);
  const i = series.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: series[i - 1], next: series[i + 1] };
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
