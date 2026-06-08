import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

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
  /** Kansikuvan polku publicista, esim. "/images/blog/01-aamubriiffi.jpg". Näytetään vain jos tiedosto on olemassa. */
  cover?: string;
  /** Kansikuvan vaihtoehtoinen teksti (saavutettavuus). */
  coverAlt?: string;
  /** LinkedIn-nosto — ei renderöidä sivulle, kulkee mukana julkaisua varten. */
  nosto?: string;
};

export type Post = PostMeta & {
  content: string;
  readingMinutes: number;
};

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta = data as PostMeta;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(words / 200));
  // Näytä kansikuva vain jos tiedosto on oikeasti olemassa publicissa.
  const cover =
    meta.cover && fs.existsSync(path.join(PUBLIC_DIR, meta.cover))
      ? meta.cover
      : undefined;
  return { ...meta, cover, content, readingMinutes };
}

/** Kaikki sarjan osat järjestyksessä (osa 1 → n). */
export function getAllPosts(): Post[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => a.part - b.part);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** Edellinen ja seuraava osa sarjan järjestyksessä — sisäistä linkitystä varten. */
export function getAdjacent(slug: string): { prev?: Post; next?: Post } {
  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: posts[i - 1], next: posts[i + 1] };
}

/** fi-FI-muotoiltu päivämäärä, esim. "9.6.2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}
