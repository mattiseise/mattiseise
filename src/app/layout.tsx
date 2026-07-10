import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Atkinson_Hyperlegible } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";
import ConsentBanner from "@/components/ConsentBanner";

// Iltavalo-typografia: Bricolage Grotesque otsikoille, Atkinson Hyperlegible
// (saavutettavuusfontti — osa brändiä) leipätekstille.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seise.org"),
  title: "Matti Seise — Tekoälykouluttaja & AI-kehittäjä",
  description:
    "ICT-erityisopettaja ja AI-kehittäjä Helsingistä. Tekoälykoulutukset opettajille ja organisaatioille sekä agentti- ja automaatiototeutukset tuotantoon.",
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
    images: ["/images/matti-vaaka-kesa.jpg"],
    locale: "fi_FI",
    type: "website",
  },
  alternates: {
    canonical: "https://seise.org/",
    types: { "application/rss+xml": "https://seise.org/rss.xml" },
  },
  icons: { icon: "/favicon.svg" },
  verification: {
    google: "-23DgluogoMo06iYHsIqPBAIDfS1DXo5l6B6LOuSrig",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fi"
      className={`scroll-smooth ${bricolage.variable} ${atkinson.variable}`}
    >
      <body className="antialiased font-sans">
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});`}
        </Script>
        {/* Netlify Form Definition for Build Bot Detection */}
        <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
          <input type="hidden" name="form-name" value="contact" />
        </form>
        <a
          href="#sisalto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-amber-400 focus:text-bark-900 focus:px-3 focus:py-2 focus:rounded-md"
        >
          Hyppää sisältöön
        </a>
        <JsonLd />
        {children}
        <ConsentBanner />
        <GoogleAnalytics gaId="G-VVGP87MCL3" />
      </body>
    </html>
  );
}
