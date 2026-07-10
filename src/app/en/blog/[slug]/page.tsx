import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostLayout from "@/components/PostLayout";
import { getAllPosts, getPostBySlug, getAdjacent, isPublished } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return {};

  const url = `https://seise.org/en/blog/${post.slug}`;
  const fiPost = getAllPosts("fi").find((p) => p.part === post.part);
  const locked = !isPublished(post);
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
    keywords: [post.keyword, "AI agent", "artificial intelligence", "Matti Seise"],
    alternates: {
      canonical: url,
      languages: {
        fi: fiPost ? `https://seise.org/blog/${fiPost.slug}` : "https://seise.org/blog",
        en: url,
      },
    },
    robots: locked ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      siteName: "Matti Seise",
      locale: "en_US",
      alternateLocale: ["fi_FI"],
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
  const post = getPostBySlug(slug, "en");
  if (!post) notFound();

  const { prev, next } = getAdjacent(slug, "en");
  const fiPost = getAllPosts("fi").find((p) => p.part === post.part);
  return (
    <PostLayout
      post={post}
      prev={prev}
      next={next}
      locale="en"
      alternateHref={fiPost ? `/blog/${fiPost.slug}` : "/blog"}
    />
  );
}
