import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BlogTeaser from "@/components/BlogTeaser";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main id="sisalto" className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <BlogTeaser />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
