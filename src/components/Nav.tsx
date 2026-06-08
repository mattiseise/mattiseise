export default function Nav() {
  const items = [
    { href: "#osaaminen", label: "Osaaminen" },
    { href: "#projektit", label: "Projektit" },
    { href: "#koulutukset", label: "Koulutukset" },
    { href: "/blog", label: "Blogi" },
    { href: "#faq", label: "FAQ" },
    { href: "#yhteys", label: "Yhteys" },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-ink-600/30 bg-ink-900/80 backdrop-blur">
      <nav className="container-narrow flex items-center justify-between py-4 px-6 md:px-10">
        <a href="#" className="font-semibold tracking-tight text-ink-50">
          Matti Seise
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-ink-200">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="hover:text-accent-400">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
