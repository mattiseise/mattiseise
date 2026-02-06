import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Matti Seise — OAJ:n valtuustoon 2026",
  description:
    "Ammatillinen erityisopettaja, tekoälykouluttaja ja edunvalvonnan tekijä. Teemat: työaika ja oikeudenmukaisuus, ammatillisten asema OAJ:ssa, teknologia ja tekoäly opetuksen tukena.",
  openGraph: {
    title: "Matti Seise — OAJ:n valtuustoon 2026",
    description:
      "Aitoa edunvalvontaa: työaika, ammatillisten asema ja tekoäly opetuksen tukena.",
    images: ["/images/mattivaaka.jpg"],
    type: "website",
  },
  metadataBase: new URL("https://seise.org"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-slate-50 font-sans text-slate-900 antialiased",
          inter.variable,
          jakarta.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
