import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import BlogIndexClient from "@/components/BlogIndexClient";
import { getAllPosts, isPublished, blogPath } from "@/lib/blog";
import { buildBlogIndexData } from "@/lib/blogIndex";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

const metaDesc =
  "Writing on agents, automation and teaching — series and standalone posts. Production experience without the hype: expensive mistakes reported as precisely as the wins.";

export const metadata: Metadata = {
  title: "Blog · Matti Seise",
  description: metaDesc,
  alternates: {
    canonical: "https://seise.org/en/blog",
    languages: {
      fi: "https://seise.org/blog",
      en: "https://seise.org/en/blog",
    },
  },
  openGraph: {
    title: "Blog — writing on agents, automation and teaching",
    description: metaDesc,
    url: "https://seise.org/en/blog",
    type: "website",
    siteName: "Matti Seise",
    locale: "en_US",
    alternateLocale: ["fi_FI"],
    images: [
      {
        url: "/images/blog/og/01-aamubriiffi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Matti Seise's blog",
      },
    ],
  },
};

export default function EnglishBlogIndex() {
  const posts = getAllPosts("en");
  const data = buildBlogIndexData("en");

  const published = posts.filter(isPublished);
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE}/en/blog#blog`,
    name: "Matti Seise — Blog",
    url: `${BASE}/en/blog`,
    description: metaDesc,
    inLanguage: "en-US",
    author: PERSON,
    publisher: PERSON,
    blogPost: published.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE}${blogPath("en", p.slug)}`,
      datePublished: p.date,
    })),
  };
  const breadcrumb = breadcrumbLd([
    { name: "Home", item: `${BASE}/en` },
    { name: "Blog" },
  ]);

  return (
    <main id="sisalto" className="min-h-screen" lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogHeader locale="en" alternateHref="/blog" />
      <BlogIndexClient t={data.t} featured={data.featured} cards={data.cards} />
      <Footer locale="en" />
    </main>
  );
}
