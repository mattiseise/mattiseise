import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseLayout, { CaseList } from "@/components/CaseLayout";

/**
 * Englanninkieliset case-tiivistelmät. Täydet caset ovat vain suomeksi
 * (/caset/[slug]) — nämä sivut antavat EN-kävijälle ytimen ja ohjaavat
 * joko FI-versioon tai yhteydenottoon.
 */
type EnCase = {
  eyebrow: string;
  title: string;
  description: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; body: React.ReactNode }[];
  cta: string;
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
};

const cases: Record<string, EnCase> = {
  "tekoalyn-perusteet": {
    eyebrow: "Case · Training",
    title: "AI Fundamentals — a 27-lesson course put into practice",
    description:
      "An open 27-lesson course on AI fundamentals in three parts: theory, practice and agents. Student and teacher materials for every lesson, open source on GitHub.",
    lead: "A course that teaches AI by doing — not with slides. Includes student and teacher materials for all 27 lessons, an automatic site generator and open source code.",
    facts: [
      { label: "Timeframe", value: "2025–" },
      { label: "Lessons", value: "27" },
      { label: "Materials", value: "Student + teacher" },
      { label: "License", value: "Open source" },
    ],
    sections: [
      {
        heading: "The case in brief",
        body: (
          <>
            <p>
              Too much AI training stops at the slide level: students hear
              what generative AI is but never learn to use it independently.
              This course teaches real skills — prompting, tool use, critical
              literacy and agent structure — in three parts: theory, practice
              and agents. Every lesson ships with separate student and
              teacher materials.
            </p>
            <p>
              The material was produced entirely with AI, using agents.
              Small quirks were deliberately left in: they are part of the
              learning content, showing that even a good language model makes
              mistakes in skilled hands. Critical literacy is the core of the
              course, not a footnote.
            </p>
          </>
        ),
      },
      {
        heading: "Results",
        body: (
          <>
            <p>
              The course is in use in vocational education and under active
              development. Content is shareable lesson by lesson, and the
              open source license lets other teachers adopt and adapt it.
            </p>
            <p className="text-[14.5px] text-cream-400">
              Open site:{" "}
              <a
                href="https://ai-perusteet.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                ai-perusteet.netlify.app
              </a>{" "}
              · Source:{" "}
              <a
                href="https://github.com/mattiseise/ai-perusteet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300"
              >
                github.com/mattiseise/ai-perusteet
              </a>
            </p>
          </>
        ),
      },
      {
        heading: "What you can order",
        body: (
          <CaseList
            items={[
              "AI training for your organization built on these materials, tailored to your field",
              "Pedagogical design and content for your own training — Bloom's taxonomy and constructive alignment as the framework",
              "The site generator as open source, if you want a similar markdown-based site",
              "Collaboration on an English version of the course (planned)",
            ]}
          />
        ),
      },
    ],
    cta: "Let's tailor a training or workshop to your needs — from a single workshop to a multi-day program.",
    prev: { label: "Wilma & itslearning automations", href: "/en/caset/wilma-itslearning-automaatiot" },
    next: { label: "Moodle course audit", href: "/en/caset/moodle-kurssiauditointi" },
  },
  "moodle-kurssiauditointi": {
    eyebrow: "Case · Pedagogical analysis",
    title: "Moodle course audit — a one-command pedagogical analysis",
    description:
      "An AI agent parses a Moodle course backup and produces a PDF report on Bloom levels, curriculum coverage and course coherence — with prioritized, time-estimated fixes.",
    lead: "An AI agent reads a Moodle course backup, runs structure, content and alignment analyses, and produces a PDF report of prioritized actions with time estimates. In use in my own teaching and in training consultancy.",
    facts: [
      { label: "Timeframe", value: "2025" },
      { label: "Input", value: "Moodle .mbz" },
      { label: "Benchmark", value: "National curriculum" },
      { label: "Output", value: "PDF report" },
    ],
    sections: [
      {
        heading: "The case in brief",
        body: (
          <>
            <p>
              Vocational courses are layers of years: activities get added,
              old ones never get removed, and tracking curriculum coverage by
              hand is heavy. The audit agent parses a Moodle .mbz backup,
              checks structure, Bloom's taxonomy balance and alignment
              against the Finnish national curriculum (ePerusteet), and
              produces an action-oriented PDF report — every finding comes
              with a concrete fix and a time estimate.
            </p>
            <p>
              Auditing my own 45-credit course surfaced 289 activities,
              83 duplicates, one 137-activity monster section and a Bloom
              distribution with only ~1% analysis-level tasks. A day of
              manual audit work now takes minutes.
            </p>
          </>
        ),
      },
      {
        heading: "What you can order",
        body: (
          <CaseList
            items={[
              "A single-course audit: PDF report with prioritized actions",
              "Multi-course audits at institution level: a summary of common structural issues",
              "Tailoring the audit agent to your organization: your own benchmark, your own report format",
              "Training on interpreting the audit report and phasing the fixes",
            ]}
          />
        ),
      },
    ],
    cta: "Let's audit your courses — one or many. A PDF report with concrete, prioritized actions.",
    prev: { label: "AI Fundamentals course", href: "/en/caset/tekoalyn-perusteet" },
    next: { label: "Wilma & itslearning automations", href: "/en/caset/wilma-itslearning-automaatiot" },
  },
  "wilma-itslearning-automaatiot": {
    eyebrow: "Case · Browser automation",
    title: "Wilma & itslearning automations — hours back to the teacher",
    description:
      "Browser automations for Wilma and itslearning routines: study plans, completion lists and submission tracking — hours of work time back to teaching every week.",
    lead: "The user interfaces of Finnish school systems weren't built for a teacher's daily routines. Scripts that replace repetitive clicking bring hours of work time back every week — attention shifts from fighting the UI to teaching.",
    facts: [
      { label: "Timeframe", value: "2024–" },
      { label: "Systems", value: "Wilma & itslearning" },
      { label: "Stack", value: "Selenium" },
      { label: "Benefit", value: "Hours weekly" },
    ],
    sections: [
      {
        heading: "The case in brief",
        body: (
          <>
            <p>
              Teachers spend hours every week on tasks the systems make
              needlessly slow: filling study plans student by student, going
              through completion lists, tracking absences and submissions.
              Selenium-based scripts run these routines for all students at
              once: bulk-filling study plans, color-coding completion lists,
              highlighting absences and downloading course data in batches.
            </p>
            <p>
              The automations don&apos;t replace the teacher&apos;s judgment
              — they handle the mechanical part. They make no pedagogical
              decisions and move no student data outside the approved
              environment. Accessibility is built in: color coding is always
              paired with textual status information.
            </p>
          </>
        ),
      },
      {
        heading: "What you can order",
        body: (
          <CaseList
            items={[
              "Automating one or more routines in your environment",
              "Consulting: which school-work routines are worth automating and which are not",
              "Mapping and prioritizing existing manual workflows",
              "Documenting the scripts and rolling them out to other teachers",
            ]}
          />
        ),
      },
    ],
    cta: "Let's identify your clumsy routines and replace them with automations — and free teachers' time back to teaching.",
    prev: { label: "Moodle course audit", href: "/en/caset/moodle-kurssiauditointi" },
    next: { label: "Urheiluhallit booker", href: "/en/caset/urheiluhallit-booker" },
  },
  "urheiluhallit-booker": {
    eyebrow: "Case · Browser automation",
    title: "Urheiluhallit booker — booking automation from login to cancellation",
    description:
      "A browser automation that logs in, finds a group exercise class and books it on schedule — an example of automating a login-protected personal routine in a controlled way.",
    lead: "Popular group exercise classes fill up in minutes. This browser automation logs in, finds the right class and makes the booking without manual work — a model for automating login-protected routines that also applies to business use.",
    facts: [
      { label: "Timeframe", value: "2025" },
      { label: "Stack", value: "Playwright" },
      { label: "Scheduling", value: "Automatic cron" },
      { label: "Logs", value: "JSONL + screenshots" },
    ],
    sections: [
      {
        heading: "The case in brief",
        body: (
          <>
            <p>
              Bookings for popular classes open at a set time and fill up in
              minutes. The automation detects the login and booking paths,
              stores the login state and runs the booking on schedule. Every
              run produces a screenshot and a log entry — successes and
              failures alike. Separate scripts handle booking, listing and
              cancellation.
            </p>
            <p>
              This is not a bypass or load tool — it&apos;s a model for
              automating your own recurring, login-protected routine in a
              controlled way. The same skeleton applies to ticket bookings
              and routine tasks in e-services.
            </p>
          </>
        ),
      },
      {
        heading: "What you can order",
        body: (
          <CaseList
            items={[
              "A similar booking or e-service automation for your organization",
              "Mapping an existing routine: what can be automated, what cannot",
              "Login and workflow detection built to survive UI updates",
              "A durable implementation: error handling, logging and a human checkpoint for decisions that don't belong to automation",
            ]}
          />
        ),
      },
    ],
    cta: "Let's automate your organization's login-protected routines — design, implementation and durable logging.",
    prev: { label: "Wilma & itslearning automations", href: "/en/caset/wilma-itslearning-automaatiot" },
    next: { label: "Hermes agent (blog series)", href: "/en/blog" },
  },
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return {};
  const url = `https://seise.org/en/caset/${slug}`;
  return {
    title: `${c.title} · Matti Seise`,
    description: c.description,
    alternates: {
      canonical: url,
      languages: {
        fi: `https://seise.org/caset/${slug}`,
        en: url,
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
      type: "article",
      siteName: "Matti Seise",
      locale: "en_US",
      alternateLocale: ["fi_FI"],
      images: [
        {
          url: "/images/og-default.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: c.title,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) notFound();

  return (
    <CaseLayout
      locale="en"
      alternateHref={`/caset/${slug}`}
      banner={
        <>
          This is a short English summary — the full case study is available{" "}
          <Link href={`/caset/${slug}`} className="underline underline-offset-4 hover:text-amber-300">
            in Finnish
          </Link>
          .
        </>
      }
      eyebrow={c.eyebrow}
      title={c.title}
      lead={c.lead}
      facts={c.facts}
      sections={c.sections}
      cta={{ label: c.cta, href: "/en/#yhteys" }}
      prev={c.prev}
      next={c.next}
    />
  );
}
