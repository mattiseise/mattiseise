import { TIMELINE } from "@/data/content";

export function Timeline() {
    return (
        <div className="mx-auto max-w-3xl py-10">
            <h2 className="sr-only">Kokemus ja koulutus</h2>
            <div className="space-y-8">
                {TIMELINE.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex gap-4 sm:gap-6 group">
                            {/* Logo / Icon Column */}
                            <div className="shrink-0">
                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-white group-hover:border-highlight group-hover:text-highlight transition duration-300">
                                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="flex flex-col pb-8 border-b border-slate-100 w-full last:border-0 last:pb-0">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-highlight transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-sm font-semibold text-slate-700">
                                    {item.organization}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5 mb-2 font-medium">
                                    {item.year}
                                </div>
                                {item.text && (
                                    <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                                        {item.text}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
