import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sivua ei löytynyt · Matti Seise",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="sisalto" className="min-h-screen">
      <Nav locale="fi" alternateHref="/en" />
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div aria-hidden className="sateet pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_60%_at_70%_50%,#000,transparent_75%)]" />
        <div className="container-narrow relative grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">404</p>
            <h1 className="h1 mt-5 text-teksti-50">Tätä sivua ei löytynyt.</h1>
            <p className="lead mt-5 max-w-[30em]">
              Osoite on voinut muuttua tai linkissä on kirjoitusvirhe. Etusivulta pääset eteenpäin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/" className="btn-primary">
                Etusivulle
              </Link>
              <Link href="/blog" className="btn-outline">
                Blogi
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-6">
            <p className="kupla kupla-oikea kupla-pop absolute right-[8%] top-0 max-w-[16em]">
              Etsin joka paikasta. Tätä sivua ei ole.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hahmot/claus-wave.svg"
              alt="Claus-rapu"
              className="hahmo-sisaan mx-auto mt-20 w-[min(100%,380px)]"
            />
          </div>
        </div>
      </section>
      <Footer locale="fi" />
    </main>
  );
}
