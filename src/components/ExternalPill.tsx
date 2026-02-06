import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExternalPill({
    href,
    label,
    className,
}: {
    href: string;
    label: string;
    className?: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(
                "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 hover:text-slate-700",
                className
            )}
        >
            {label}
            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
        </a>
    );
}
