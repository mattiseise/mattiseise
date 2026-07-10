import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import BlogIndexClient from "@/components/BlogIndexClient";
import { getAllPosts, isPublished, blogPath } from "@/lib/blog";
import { buildBlogIndexData } from "@/lib/blogIndex";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

const metaDesc =
  "Kirjoituksia agenteista, automaatiosta ja opettamisesta — sarjat ja irtokirjoitukset. Tuotantokokemusta ilman hypeä: kalliit virheet kerrotaan yhtä tarkasti kuin onnistumiset.";

export const metadata: Metadata = {
  title: "Blogi · Matti Seise",
  description: metaDesc,
  alternates: {
    canonical: "https://seise.org/blog",
    languages: {
      fi: "https://seise.org/blog",
      en: "https://seise.org/en/blog",
    },
  },
  openGraph: {
    title: "Blogi — kirjoituksia agenteista, automaatiosta ja opettamisesta",
    description: metaDesc,
    url: "https://seise.org/blog",
    type: "website",
    siteName: "Matti Seise",
    locale: "fi_FI",
    images: [
      {
        url: "/images/blog/og/01-aamubriiffi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Matti Seisen blogi",
      },
    ],
  },
};

export default function BlogIndex() {
  const posts = getAllPosts("fi");
  const data = buildBlogIndexData("fi");

  // Schema vain julkaistuista osista — tulevat ovat noindex.
  const published = posts.filter(isPublished);
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE}/blog#blog`,
    name: "Matti Seise — Blogi",
    url: `${BASE}/blog`,
    description: metaDesc,
    inLanguage: "fi-FI",
    author: PERSON,
    publisher: PERSON,
    blogPost: published.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE}${blogPath("fi", p.slug)}`,
      datePublished: p.date,
    })),
  };
  const breadcrumb = breadcrumbLd([
    { name: "Etusivu", item: `${BASE}/` },
    { name: "Blogi" },
  ]);

  return (
    <main id="sisalto" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogHeader locale="fi" alternateHref="/en/blog" />
      <BlogIndexClient t={data.t} featured={data.featured} cards={data.cards} />
      <Footer locale="fi" />
    </main>
  );
}
