"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, LINKS } from "@/data/content";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { Menu, X, Facebook, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-slate-200/60 py-3 shadow-sm"
                    : "bg-white border-transparent py-5"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <a href="#etusivu" className="flex items-center gap-3 group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-[radial-gradient(circle_at_30%_30%,_#ffaaff,_#d876d8)] text-slate-900 text-sm font-black shadow-md transition-transform group-hover:scale-105">
                            13
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-bold text-slate-900">Matti Seise</div>
                            <div className="text-xs text-slate-500">OAJ:n valtuusto 2026 • 13</div>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={LINKS.facebookGroup}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#166fe5]"
                        >
                            <Facebook className="h-4 w-4" />
                            Liity keskusteluun
                            <ExternalLink className="h-4 w-4 opacity-50" />
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white border-b border-slate-100 md:hidden"
                    >
                        <Container className="py-6 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-base font-medium text-slate-700 hover:text-slate-900"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <hr className="border-slate-100 my-2" />
                            <a
                                href={LINKS.facebookGroup}
                                className="text-base font-semibold text-slate-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Liity Facebook-ryhmään →
                            </a>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
