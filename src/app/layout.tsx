import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://seise.org"),
  title: "Matti Seise — Tekoälykouluttaja & AI-kehittäjä",
  description:
    "ICT-erityisopettaja ja AI-kehittäjä. Räätälöityjä tekoälykoulutuksia opettajille, asiantuntijoille ja organisaatioille — sekä konkreettisia agentti- ja automaatiototeutuksia tuotantoon.",
  keywords: [
    "tekoälykoulutus",
    "tekoälykouluttaja",
    "AI-koulutus",
    "tekoäly opetuksessa",
    "AI-agentti",
    "multi-agent",
    "selainautomaatio",
    "Helsinki Business College",
    "ICT-erityisopettaja",
    "Matti Seise",
  ],
  authors: [{ name: "Matti Seise", url: "https://seise.org" }],
  creator: "Matti Seise",
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
