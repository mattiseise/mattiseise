import Image from "next/image";
import {
    Linkedin,
    Youtube,
    Facebook,
    Mail,
    Phone,
    ExternalLink,
} from "lucide-react";

function ThreadsIcon({ className }: { className?: string }) {
    // The className typically contains w-5 h-5 (20px) and text color. 
    // We can't easily apply text color to a PNG, but using 'brightness-0' or similar could work for black, 
    // but the icon is likely already black/white.
    // We render it in a container of size 20px (w-5 h-5 is standard here).
    return (
        <div className={`relative h-5 w-5 ${className?.includes('text-white') ? '' : ''} select-none`}>
            <Image
                src="/images/threads_logo.png"
                alt="Threads"
                fill
                className="object-contain"
                sizes="20px"
            />
        </div>
    );
}

export function SocialButton({
    href,
    label,
    type,
}: {
    href: string;
    label: string;
    type: "linkedin" | "youtube" | "threads" | "facebook" | "email" | "phone";
}) {
    const icons = {
        linkedin: Linkedin,
        youtube: Youtube,
        facebook: Facebook,
        email: Mail,
        phone: Phone,
        threads: ThreadsIcon,
    };

    const Icon = icons[type];

    return (
        <a
            href={href}
            target={type === "email" || type === "phone" ? undefined : "_blank"}
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition group"
        >
            <Icon className="h-5 w-5 text-slate-500 group-hover:text-indigo-600 transition" />
            <span>{label}</span>
            {type !== "email" && type !== "phone" && (
                <ExternalLink className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
            )}
        </a>
    );
}
