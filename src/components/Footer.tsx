import Link from "next/link";

const links = [
  { href: "/blog", label: "Blogi" },
  { href: "/#projektit", label: "Projektit" },
  { href: "/#koulutukset", label: "Koulutukset" },
  { href: "/#yhteys", label: "Yhteys" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-600/30 py-10 px-6 md:px-10">
      <div className="container-narrow space-y-5">
        <nav aria-label="Alatunniste" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink-200 hover:text-accent-400"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/rss.xml"
            className="text-ink-200 hover:text-accent-400"
          >
            RSS
          </a>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm muted">
          <p>© {new Date().getFullYear()} Matti Seise · Helsinki</p>
          <p>Rakennettu Next.js + Tailwind CSS:llä. Hostattu Netlifyssä.</p>
        </div>
      </div>
    </footer>
  );
}
