export default function Footer() {
  return (
    <footer className="border-t border-ink-600/30 py-10 px-6 md:px-10">
      <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm muted">
        <p>© {new Date().getFullYear()} Matti Seise · Helsinki</p>
        <p>
          Rakennettu Next.js + Tailwind CSS:llä. Hostattu Netlifyssä.
        </p>
      </div>
    </footer>
  );
}
