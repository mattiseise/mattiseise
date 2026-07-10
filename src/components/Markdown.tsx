import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/** Paikallinen kuva näytetään vain jos tiedosto on olemassa publicissa. */
function imgExists(src: unknown): src is string {
  if (typeof src !== "string" || src.length === 0) return false;
  if (!src.startsWith("/")) return true;
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: { src?: string; alt?: string; title?: string };
  children?: HastNode[];
};

/**
 * Ennen–jälkeen-kuvapari: kaksi kuvaa samassa markdown-kappaleessa
 * (peräkkäisillä riveillä ilman tyhjää riviä) renderöityy vierekkäin,
 * ja kuvan title-attribuutti ('Ennen' / 'Jälkeen') nousee otsakkeeksi.
 */
function imagePairFrom(node: HastNode | undefined) {
  if (!node?.children) return null;
  const imgs = node.children.filter(
    (c) => c.type === "element" && c.tagName === "img",
  );
  const rest = node.children.filter(
    (c) => !(c.type === "element" && c.tagName === "img"),
  );
  const onlyWhitespace = rest.every(
    (c) => c.type === "text" && (c.value ?? "").trim() === "",
  );
  if (imgs.length < 2 || !onlyWhitespace) return null;
  const existing = imgs.filter((i) => imgExists(i.properties?.src));
  if (existing.length < 2) return null;
  return existing.map((i) => ({
    src: i.properties?.src as string,
    alt: i.properties?.alt ?? "",
    title: i.properties?.title,
  }));
}

/**
 * Renderöi markdownin Iltavalo-tyyleillä (bark/cream/amber-paletti,
 * display-otsikot, blockquote-nosto). remark-gfm = listat/taulukot,
 * rehype-slug = otsikoiden id:t ankkurilinkkejä varten.
 */
const components: Components = {
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-28 font-display text-[26px] font-semibold text-cream-50 md:text-[27px]"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="mb-3 mt-8 scroll-mt-28 font-display text-xl font-semibold text-cream-50"
    >
      {children}
    </h3>
  ),
  p: ({ children, node }) => {
    const pair = imagePairFrom(node as HastNode | undefined);
    if (pair) {
      return (
        <div className="my-8 grid gap-3.5 sm:grid-cols-2">
          {pair.map((img) => (
            <figure
              key={img.src}
              className="m-0 overflow-hidden rounded-[14px] border border-cream-50/[0.08] bg-bark-800"
            >
              {img.title && (
                <figcaption className="px-3.5 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-cream-400">
                  {img.title}
                </figcaption>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="block w-full"
              />
            </figure>
          ))}
        </div>
      );
    }
    return (
      <p className="my-6 text-[17.5px] leading-[1.8] text-cream-100">{children}</p>
    );
  },
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-amber-400 underline underline-offset-4 decoration-amber-400/40 hover:text-amber-300 hover:decoration-amber-300"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="my-6 list-disc space-y-3 pl-6 text-[17.5px] leading-[1.8] text-cream-100 marker:text-amber-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 list-decimal space-y-3 pl-6 text-[17.5px] leading-[1.8] text-cream-100 marker:font-semibold marker:text-amber-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-bold text-cream-50">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-cream-200">{children}</em>,
  code: ({ children }) => (
    <code className="rounded border border-cream-50/10 bg-bark-800 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-300">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-cream-50/10 bg-bark-800/80 p-5 font-mono text-sm text-cream-100">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-[3px] border-amber-400 py-1 pl-6 font-display text-[21px] leading-[1.5] text-cream-50 [&_p]:my-0 [&_p]:text-[21px] [&_p]:leading-[1.5] [&_p]:text-cream-50 [&_strong]:font-semibold">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-cream-50/10" />,
  img: ({ src, alt }) => {
    // Tulevien sarjojen kuvitus voi puuttua vielä julkaisuvaiheessa.
    if (!imgExists(src)) return null;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="my-8 w-full rounded-[18px] border border-cream-50/[0.08]"
      />
    );
  },
};

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={components}
    >
      {children}
    </ReactMarkdown>
  );
}
