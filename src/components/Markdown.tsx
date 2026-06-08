import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/**
 * Renderöi markdownin sivuston brändityyleillä (ink/accent-paletti, .h*-luokat).
 * remark-gfm = listat/taulukot, rehype-slug = otsikoiden id:t ankkurilinkkejä varten.
 */
const components: Components = {
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-semibold tracking-tight text-ink-50 mt-12 mb-4 scroll-mt-28"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="text-xl font-semibold text-ink-50 mt-8 mb-3 scroll-mt-28"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-ink-100 leading-relaxed my-5">{children}</p>
  ),
  a: ({ href, children }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        className="text-accent-400 underline underline-offset-4 decoration-accent-500/40 hover:text-accent-300 hover:decoration-accent-400"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="my-5 space-y-2.5 list-disc pl-5 text-ink-100 marker:text-accent-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 space-y-3 list-decimal pl-5 text-ink-100 marker:text-accent-400 marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-ink-50">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-ink-200">{children}</em>,
  code: ({ children }) => (
    <code className="rounded border border-ink-600/50 bg-ink-800 px-1.5 py-0.5 text-[0.85em] font-mono text-accent-300">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-ink-600/50 bg-ink-800/80 p-5 text-sm font-mono text-ink-100">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent-500/60 pl-5 text-ink-200 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-ink-600/40" />,
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
