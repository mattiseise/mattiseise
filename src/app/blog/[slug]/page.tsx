import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostLayout from "@/components/PostLayout";
import { getAllPosts, getPostBySlug, getAdjacent } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://seise.org/blog/${post.slug}`;
  // Lukittu (tuleva) osa: ei indeksoida ennen julkaisuaikaa.
  const locked = new Date(post.date).getTime() > Date.now();
  // LinkedIn/OG: oma 1200×630-rajaus (1.91:1) kansikuvasta.
  const ogImage = post.cover?.replace("/images/blog/", "/images/blog/og/");
  const images = ogImage
    ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.coverAlt ?? post.title,
          type: "image/jpeg",
        },
      ]
    : undefined;
  return {
    title: `${post.title} · Matti Seise`,
    description: post.description,
    keywords: [post.keyword, "AI-agentti", "tekoäly", "Matti Seise"],
    alternates: { canonical: url },
    robots: locked ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Matti Seise"],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacent(slug);
  return <PostLayout post={post} prev={prev} next={next} />;
}
