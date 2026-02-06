export function ContactForm() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Nopea viesti</h3>
            </div>

            <p className="text-sm text-slate-300 mb-6">
                Täytä lomake, niin viestisi tulee suoraan minulle. Vastaan mahdollisimman pian.
            </p>

            <form className="space-y-4" name="contact" method="POST" data-netlify="true">
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
                        placeholder="sinu@sähköposti.fi"
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
                    className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 hover:bg-highlight hover:text-white transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    Lähetä viesti
                </button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    Lomake on suojattu ja viestit ovat luottamuksellisia.
                </p>
            </form>
        </div>
    );
}
