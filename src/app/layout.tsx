import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://seise.org"),
  title: "Matti Seise — Tekoälykouluttaja & rakentaja",
  description:
    "ICT-erityisopettaja ja AI-kehittäjä. Suunnittelen tekoälyagentteja, automatisoin asiantuntijatyötä ja koulutan tekoälyä Suomessa.",
  openGraph: {
    title: "Matti Seise — Tekoälykouluttaja & rakentaja",
    description:
      "Generatiivinen tekoäly, agentti­arkkitehtuurit ja koulutus — käytännönläheisesti.",
    url: "https://seise.org",
    siteName: "Matti Seise",
    images: ["/images/mattivaaka.jpg"],
    locale: "fi_FI",
    type: "website",
  },
  alternates: { canonical: "https://seise.org" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased">
        {/* Netlify Form Definition for Build Bot Detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
          <input type="hidden" name="form-name" value="contact" />
        </form>
        <a
          href="#sisalto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-accent-500 focus:text-ink-900 focus:px-3 focus:py-2 focus:rounded-md"
        >
          Hyppää sisältöön
        </a>
        {children}
      </body>
    </html>
  );
}
