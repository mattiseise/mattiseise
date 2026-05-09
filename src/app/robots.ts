import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/", "/forms.html", "/submit.html"],
      },
    ],
    sitemap: "https://seise.org/sitemap.xml",
    host: "https://seise.org",
  };
}
