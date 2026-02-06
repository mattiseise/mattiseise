import { Container } from "@/components/Container";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex items-center">
                <Container>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-extrabold text-slate-900">404 - Sivua ei löydy</h2>
                        <p className="text-lg text-slate-600">Etsimääsi sivua ei ole olemassa.</p>
                        <Link
                            href="/"
                            className="inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition"
                        >
                            Palaa etusivulle
                        </Link>
                    </div>
                </Container>
            </div>
            <Footer />
        </main>
    );
}
