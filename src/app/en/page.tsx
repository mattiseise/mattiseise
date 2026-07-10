import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matti Seise — AI Trainer & Developer",
  description:
    "ICT special education teacher and AI developer from Helsinki. AI training for teachers and organizations, plus agent and automation builds for production.",
  alternates: {
    canonical: "https://seise.org/en",
    languages: {
      fi: "https://seise.org/",
      en: "https://seise.org/en",
    },
  },
  openGraph: {
    title: "Matti Seise — AI trainer & builder",
    description:
      "Generative AI, agent architectures and training — hands-on and honest.",
    url: "https://seise.org/en",
    siteName: "Matti Seise",
    images: ["/images/matti-vaaka-kesa.jpg"],
    locale: "en_US",
    alternateLocale: ["fi_FI"],
    type: "website",
  },
};

export default function EnglishHome() {
  return (
    <main id="sisalto" className="min-h-screen" lang="en">
      <Nav locale="en" alternateHref="/" showCta />
      <Hero locale="en" />
      <About locale="en" />
      <Pricing locale="en" />
      <Projects locale="en" />
      <BlogTeaser locale="en" />
      <Faq locale="en" />
      <Contact locale="en" />
      <Footer locale="en" />
    </main>
  );
}
