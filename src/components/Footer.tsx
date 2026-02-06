import { LINKS } from "@/data/content";
import { Container } from "./Container";
import Image from "next/image";
import { Mail, Phone, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
            <Container>
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-[radial-gradient(circle_at_30%_30%,_#ffaaff,_#d876d8)] text-slate-900 text-sm font-black shadow-md">
                            13
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-900">Matti Seise</div>
                            <div className="text-xs text-slate-500">Ehdolla OAJ:n valtuustoon 2026 • 13</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-slate-600 md:items-end">
                        <div className="flex flex-wrap gap-6">
                            <a href={`mailto:${LINKS.email}`} className="hover:text-slate-900 transition flex items-center gap-2">
                                {LINKS.email}
                            </a>
                            <a href={`tel:${LINKS.phone.replace(/\s/g, "")}`} className="hover:text-slate-900 transition">
                                {LINKS.phone}
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition">
                                <Linkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                            <a href={LINKS.threads} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition">
                                <Image
                                    src="/images/threads_logo.png"
                                    alt="Threads"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <span>Threads</span>
                            </a>
                            <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition">
                                <Youtube className="h-5 w-5" />
                                <span>YouTube</span>
                            </a>
                        </div>

                        <div className="text-xs text-slate-400 mt-2">
                            © {new Date().getFullYear()} Matti Seise. Kaikki oikeudet pidätetään.
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
