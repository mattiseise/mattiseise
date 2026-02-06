"use client";

import Image from "next/image";
import { LINKS } from "@/data/content";
import { Container } from "./Container";
import { SocialButton } from "./SocialButton";
import { Facebook, ExternalLink } from "lucide-react";


export function Hero() {
    return (
        <section id="etusivu" className="py-20 sm:py-28 overflow-hidden">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-highlight/50 bg-highlight/20 px-3 py-1 text-xs font-bold text-slate-900 mb-6">
                            OAJ:n valtuustovaalit 2026 • Numero 13
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 leading-tight">
                            Kun mokataan, pyydetään anteeksi – <span className="text-[#d876d8]">ja korjataan.</span>
                        </h1>

                        <p className="text-lg leading-8 text-slate-600 mb-8 max-w-lg">
                            OAJ:n pitää uskaltaa toimia. Nyt liitossa varotaan liikaa — ja silti joskus sössitään.
                            Ero on siinä, mitä tapahtuu sen jälkeen: myönnetäänkö virhe, pyydetäänkö anteeksi ja opitaanko siitä.
                        </p>

                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 mb-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-highlight" />
                            <div className="text-sm font-bold text-slate-900 mb-2">Minä sanon suoraan</div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Ajan liittoa kohti kulttuuria, jossa ei selitellä, vaan korjataan.
                                Kulttuuria, jossa kentän ääni kuuluu oikeasti — ja jossa opettajat saavat tukea myös työn jatkuvaan muutokseen.
                            </p>
                        </div>



                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href={LINKS.facebookGroup}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-bold text-white transition hover:bg-slate-800 hover:scale-105"
                            >
                                Liity keskusteluun
                            </a>
                            <a
                                href="#kysy"
                                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-base font-bold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                            >
                                Kysy suoraan
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <SocialButton href={LINKS.linkedin} label="LinkedIn" type="linkedin" />
                            <SocialButton href={LINKS.threads} label="Threads" type="threads" />
                            <SocialButton href={LINKS.youtube} label="YouTube" type="youtube" />
                        </div>
                    </div>

                    <div className="relative lg:h-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 border border-slate-100 bg-slate-50 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                            <Image
                                src="/images/mattivaaka.jpg"
                                alt="Matti Seise"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <div className="font-bold text-lg">Matti Seise</div>
                                <div className="text-sm text-slate-200">Ammatillinen erityisopettaja</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
