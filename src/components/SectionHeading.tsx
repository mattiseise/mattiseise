import { cn } from "@/lib/utils";

export function SectionHeading({
    title,
    lead,
    className,
}: {
    title: string;
    lead?: string;
    className?: string;
}) {
    return (
        <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>
            {lead ? (
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{lead}</p>
            ) : null}
        </div>
    );
}
