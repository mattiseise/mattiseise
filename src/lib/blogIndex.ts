import {
  getAllPosts,
  getSeries,
  isPublished,
  formatDate,
  blogPath,
  topicLabels,
  type Locale,
  type Post,
} from "@/lib/blog";
import type {
  BlogCard,
  BlogIndexStrings,
  FeaturedSeries,
} from "@/components/BlogIndexClient";

const ui = {
  fi: {
    eyebrow: "Blogi",
    title: "Kirjoituksia agenteista, automaatiosta ja opettamisesta.",
    lead: "Sarjat ja irtokirjoitukset — tuotantokokemusta ilman hypeä. Kalliit virheet kerrotaan yhtä tarkasti kuin onnistumiset.",
    allLabel: "Kaikki",
    upcomingLabel: "Tulossa",
    ctaTitle: "Rakennatko omaa agenttia?",
    ctaBody: "Autan suunnittelusta tuotantoon — kevyestä koulutusjohdannosta kokonaiseen 1–2 päivän agenttisprinttiin.",
    ctaBtn1: "Katso koulutukset",
    ctaBtn2: "Ota yhteyttä",
    aerialCredit: "Ilmakuva: Helsingin kaupunginmuseo / Suomen Ilmakuva Oy (CC BY 4.0)",
    seriesKicker: (part: number, total: number) => `Sarja · osa ${part}/${total}`,
    newSeriesKicker: (topic: string) => `Uusi blogisarja · ${topic}`,
    standaloneKicker: (topic: string) => `Irtokirjoitus · ${topic}`,
    seriesEyebrow: (n: number) => `Blogisarja · ${n} osaa`,
    seriesCta: "Aloita osasta 1",
    seriesMeta: (n: number, month: string, min: number) =>
      `${n} osaa · ${month} · yht. n. ${min} min`,
  },
  en: {
    eyebrow: "Blog",
    title: "Writing on agents, automation and teaching.",
    lead: "Series and standalone posts — production experience without the hype. Expensive mistakes reported as precisely as the wins.",
    allLabel: "All",
    upcomingLabel: "Upcoming",
    ctaTitle: "Building your own agent?",
    ctaBody: "I help from design to production — from a light training introduction to a full 1–2 day agent sprint.",
    ctaBtn1: "See training",
    ctaBtn2: "Get in touch",
    aerialCredit: "Aerial photo: Helsinki City Museum / Suomen Ilmakuva Oy (CC BY 4.0)",
    seriesKicker: (part: number, total: number) => `Series · part ${part}/${total}`,
    newSeriesKicker: (topic: string) => `New blog series · ${topic}`,
    standaloneKicker: (topic: string) => `Standalone · ${topic}`,
    seriesEyebrow: (n: number) => `Blog series · ${n} parts`,
    seriesCta: "Start with part 1",
    seriesMeta: (n: number, month: string, min: number) =>
      `${n} parts · ${month} · ~${min} min total`,
  },
} as const;

/** Sarjakohtaiset kuvaukset sarjanostoon; puuttuessa käytetään osan 1 kuvausta. */
const seriesDescriptions: Record<string, Record<Locale, string>> = {
  "oman-ai-agentin-rakentaminen": {
    fi: "Kuusiosainen sarja oman tekoälyagentin viemisestä tuotantoon: chatbotin ja agentin ero, yliarkkitehtuuri, kahdeksan kallista virhettä, autonomian rajat ja alustanvaihto OpenClaw'sta Hermekseen — rehellisesti, ilman AI-hypeä.",
    en: "A six-part series on taking a personal AI agent to production: chatbot vs. agent, over-architecture, eight expensive mistakes, the limits of autonomy and the platform switch from OpenClaw to Hermes — honestly, without AI hype.",
  },
};

function monthLabel(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(
    locale === "en" ? "en-US" : "fi-FI",
    { month: "long", year: "numeric", timeZone: "Europe/Helsinki" },
  );
}

function cardFor(post: Post, locale: Locale): BlogCard {
  const t = ui[locale];
  const topic = post.topic ?? "agents";
  const topicLabel = topicLabels[locale][topic];
  const upcoming = !isPublished(post);
  const kicker =
    post.totalParts > 1
      ? t.seriesKicker(post.part, post.totalParts)
      : upcoming
        ? t.newSeriesKicker(topicLabel)
        : t.standaloneKicker(topicLabel);
  const meta = upcoming
    ? post.plannedLabel ?? monthLabel(post.date, locale)
    : `${formatDate(post.date, locale)} · ${post.readingMinutes} min`;
  return {
    slug: post.slug,
    href: blogPath(locale, post.slug),
    title: post.title,
    description: post.description,
    kicker,
    meta,
    cover: post.cover,
    topic,
    upcoming,
  };
}

export function buildBlogIndexData(locale: Locale): {
  t: BlogIndexStrings;
  featured?: FeaturedSeries;
  cards: BlogCard[];
} {
  const t = ui[locale];
  const posts = getAllPosts(locale);
  const cards = posts.map((p) => cardFor(p, locale));

  // Aihepillit vain aiheista, joissa on sisältöä.
  const presentTopics = Array.from(new Set(posts.map((p) => p.topic ?? "agents")));
  const order = ["agents", "automation", "pedagogy"] as const;
  const topics: BlogIndexStrings["topics"] = [
    { id: "all", label: t.allLabel },
    ...order
      .filter((topic) => presentTopics.includes(topic))
      .map((topic) => ({ id: topic, label: topicLabels[locale][topic] })),
  ];

  // Sarjanosto: uusin monivaiheinen sarja, jossa on julkaistuja osia.
  // Irtokirjoitukset (yhden postauksen "sarjat") eivät syrjäytä nostoa.
  const withPublished = getSeries(locale).filter(
    (s) => s.posts.length > 1 && s.posts.some(isPublished),
  );
  const featuredSeries = withPublished
    .sort((a, b) => {
      const latest = (posts: Post[]) =>
        Math.max(
          ...posts.filter(isPublished).map((p) => new Date(p.date).getTime()),
        );
      return latest(b.posts) - latest(a.posts);
    })[0];

  let featured: FeaturedSeries | undefined;
  if (featuredSeries && featuredSeries.posts.length > 1) {
    const first = featuredSeries.posts[0];
    const totalMin = featuredSeries.posts.reduce(
      (sum, p) => sum + p.readingMinutes,
      0,
    );
    const covers = featuredSeries.posts
      .filter((p) => p.cover)
      .map((p) => p.cover as string);
    featured = {
      eyebrow: t.seriesEyebrow(featuredSeries.posts.length),
      title: featuredSeries.title,
      description:
        seriesDescriptions[featuredSeries.slug]?.[locale] ?? first.description,
      ctaLabel: t.seriesCta,
      ctaHref: blogPath(locale, first.slug),
      meta: t.seriesMeta(
        featuredSeries.posts.length,
        monthLabel(first.date, locale),
        Math.round(totalMin / 5) * 5,
      ),
      covers: [covers[0], covers[2] ?? covers[1], covers[4] ?? covers[2]].filter(
        Boolean,
      ),
      topic: first.topic ?? "agents",
    };
  }

  const prefix = locale === "en" ? "/en" : "";
  return {
    t: {
      eyebrow: t.eyebrow,
      title: t.title,
      lead: t.lead,
      topics,
      upcomingLabel: t.upcomingLabel,
      ctaTitle: t.ctaTitle,
      ctaBody: t.ctaBody,
      ctaBtn1: t.ctaBtn1,
      ctaBtn2: t.ctaBtn2,
      ctaHref1: `${prefix}/#koulutukset`,
      ctaHref2: `${prefix}/#yhteys`,
      aerialCredit: t.aerialCredit,
    },
    featured,
    cards,
  };
}
