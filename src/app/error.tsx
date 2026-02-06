"use client";

import { useEffect } from "react";
import { Container } from "@/components/Container";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Container className="py-20">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">Jotain meni pieleen!</h2>
                <p className="text-slate-600">Sivua ei voitu ladata.</p>
                <button
                    onClick={() => reset()}
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition"
                >
                    Yritä uudelleen
                </button>
            </div>
        </Container>
    );
}
