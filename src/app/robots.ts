import type { MetadataRoute } from "next";

/**
 * Eksplisiittinen allow AI-hakukoneiden ja -mallien crawlereille (GEO):
 * sivuston halutaan näkyvän ChatGPT:ssä, Perplexityssä, Claudessa ja
 * Googlen AI Overviews'ssa. Sama estolista kuin yleissäännössä.
 */
const DISALLOW = ["/_next/", "/api/", "/forms.html", "/submit.html"];

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: "https://seise.org/sitemap.xml",
    host: "https://seise.org",
  };
}
