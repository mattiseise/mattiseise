"use client";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="fi">
            <body className={`min-h-screen bg-white font-sans ${inter.variable} ${jakarta.variable}`}>
                <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Vakava virhe tapahtui</h2>
                    <button
                        onClick={() => reset()}
                        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                    >
                        Lataa uudelleen
                    </button>
                </div>
            </body>
        </html>
    );
}
