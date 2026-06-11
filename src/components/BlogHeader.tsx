import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const items = [
  { href: "/#projektit", label: "Projektit" },
  { href: "/#koulutukset", label: "Koulutukset" },
  { href: "/blog", label: "Blogi" },
  { href: "/#yhteys", label: "Yhteys" },
];

/** Sticky-yläpalkki blogisivuille — samaa linjaa CaseLayoutin headerin kanssa. */
export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-600/30 bg-ink-900/80 backdrop-blur">
      <nav className="container-narrow flex items-center justify-between py-4 px-6 md:px-10">
        <Link href="/" className="font-semibold tracking-tight text-ink-50">
          Matti Seise
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-ink-200">
          <Link href="/#projektit" className="hover:text-accent-400">
            Projektit
          </Link>
          <Link href="/#koulutukset" className="hover:text-accent-400">
            Koulutukset
          </Link>
          <Link href="/blog" className="text-accent-400">
            Blogi
          </Link>
          <Link href="/#yhteys" className="hover:text-accent-400">
            Yhteys
          </Link>
        </div>
        <MobileNav items={items} />
      </nav>
    </header>
  );
}
