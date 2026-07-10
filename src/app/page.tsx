import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main id="sisalto" className="min-h-screen">
      <Nav locale="fi" alternateHref="/en" />
      <Hero locale="fi" />
      <About locale="fi" />
      <Pricing locale="fi" />
      <Projects locale="fi" />
      <BlogTeaser locale="fi" />
      <Faq locale="fi" />
      <Contact locale="fi" />
      <Footer locale="fi" />
    </main>
  );
}
