import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main id="sisalto" className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
