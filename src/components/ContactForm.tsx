"use client";
import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);

        try {
            await fetch("/submit.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Viesti lähetetty!</h3>
                <p className="text-slate-300">Kiitos viestistäsi. Palaan asiaan mahdollisimman pian.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-xl bg-white/10 px-6 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                    Lähetä uusi viesti
                </button>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Nopea viesti</h3>
            </div>

            <p className="text-sm text-slate-300 mb-6">
                Täytä lomake, niin viestisi tulee suoraan minulle. Vastaan mahdollisimman pian.
            </p>

            <form className="space-y-4" name="contact" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-medium text-slate-300 ml-1">Nimi</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-highlight focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-highlight transition"
                        placeholder="Etunimi Sukunimi"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-medium text-slate-300 ml-1">Sähköposti</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-highlight focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-highlight transition"
                        placeholder="Sinun@sähköposti.fi"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300 ml-1">Viesti</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-highlight focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-highlight transition resize-none"
                        placeholder="Moi Matti, haluaisin kysyä..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 hover:bg-highlight hover:text-white transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? "Lähetetään..." : "Lähetä viesti"}
                </button>

                {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                        Viestin lähetys epäonnistui. Yritä myöhemmin uudelleen.
                    </p>
                )}

                <p className="text-xs text-center text-slate-400 mt-4">
                    Lomake on suojattu ja viestit ovat luottamuksellisia.
                </p>
            </form>
        </div>
    );
}
