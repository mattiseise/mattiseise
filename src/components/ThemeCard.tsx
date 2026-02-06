import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeProps {
    icon: LucideIcon;
    title: string;
    kicker: string;
    problem: string;
    solution: string;
    actions: string[];
    meaning: string;
    quote?: string;
    timeline?: string[];
}

export function ThemeCard({ theme }: { theme: ThemeProps }) {
    const Icon = theme.icon;

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:shadow-md h-full">
            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-highlight/20 text-[#d876d8] transition group-hover:bg-highlight group-hover:text-white">
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900">{theme.title}</h3>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">{theme.kicker}</p>
                </div>
            </div>

            <div className="flex-1 space-y-6">
                <div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-rose-500">Ongelma</div>
                    <p className="text-sm leading-relaxed text-slate-600">{theme.problem}</p>
                </div>

                <div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">Ratkaisu</div>
                    <p className="text-sm leading-relaxed text-slate-600">{theme.solution}</p>
                </div>

                {theme.quote && (
                    <div className="relative rounded-2xl bg-slate-50 p-4 border border-slate-100">
                        <div className="absolute top-4 left-4 text-4xl text-slate-200 font-serif leading-3">“</div>
                        <p className="relative z-10 text-sm italic text-slate-700 pt-2">{theme.quote}</p>
                    </div>
                )}

                <div>
                    <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">Konkreettiset toimet</div>
                    <ul className="space-y-3">
                        {theme.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                                <span>{action}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {theme.timeline && (
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                        <div className="mb-2 text-xs font-bold uppercase text-slate-900">Näyttöä</div>
                        <ul className="space-y-2">
                            {theme.timeline.map((t, i) => (
                                <li key={i} className="text-xs text-slate-600 flex gap-2">
                                    <span className="font-semibold text-slate-900">{t.split(':')[0]}:</span>
                                    <span>{t.split(':')[1]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-900">
                    👉 {theme.meaning}
                </p>
            </div>
        </div>
    );
}
