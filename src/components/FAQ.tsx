import { FAQS } from "@/data/content";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
    return (
        <div className="mx-auto max-w-3xl space-y-4">
            {FAQS.map((f, i) => (
                <details
                    key={i}
                    className="group rounded-2xl border border-slate-200 bg-white [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-6">
                        <span className="text-sm font-semibold text-slate-900">
                            {f.q}
                        </span>
                        <span className="transition group-open:rotate-180">
                            <ChevronDown className="h-5 w-5 text-slate-400" />
                        </span>
                    </summary>
                    <div className="border-t border-slate-100 px-5 pb-6 pt-0 sm:px-6">
                        <p className="pt-4 text-sm font-semibold text-slate-900">
                            {f.heading}
                        </p>
                        <p className="pt-2 text-sm leading-relaxed text-slate-600">
                            {f.body}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
