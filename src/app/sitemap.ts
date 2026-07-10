import type { MetadataRoute } from "next";
import { getAllPosts, isPublished } from "@/lib/blog";

const BASE = "https://seise.org";

const cases = [
  "tekoalyn-perusteet",
  "moodle-kurssiauditointi",
  "wilma-itslearning-automaatiot",
  "urheiluhallit-booker",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Vain julkaistut blogiosat — lukitut/tulevat jätetään pois,
  // ettei hakukone indeksoi lukittua teaser-versiota.
  const publishedFiPosts = getAllPosts("fi").filter(isPublished);
  const publishedEnPosts = getAllPosts("en").filter(isPublished);

  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/en`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...cases.map((slug) => ({
      url: `${BASE}/caset/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...publishedFiPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/en/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...publishedEnPosts.map((post) => ({
      url: `${BASE}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
