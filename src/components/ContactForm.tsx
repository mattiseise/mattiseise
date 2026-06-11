"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Netlify Forms -yhteydenottolomake. POST menee staattiseen
 * /forms.html-stubiin (Netlify poimii lähetyksen siitä — Next.js-runtimen
 * dokumentoitu tapa). Honeypot-kenttä (bot-field) suodattaa botit.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as Record<string, string>,
        ).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card border-accent-500/40" role="status">
        <p className="text-ink-50 font-medium">Kiitos viestistä! 🦀</p>
        <p className="mt-2 text-sm text-ink-200 leading-relaxed">
          Vastaan yleensä saman tai seuraavan arkipäivän aikana.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Älä täytä tätä kenttää: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs eyebrow">Nimi</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-ink-600/60 bg-ink-900/60 px-3.5 py-2.5 text-sm text-ink-50 placeholder:text-ink-400 focus:border-accent-500/60 focus:outline-none"
            placeholder="Etunimi Sukunimi"
          />
        </label>
        <label className="block">
          <span className="text-xs eyebrow">Sähköposti</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-ink-600/60 bg-ink-900/60 px-3.5 py-2.5 text-sm text-ink-50 placeholder:text-ink-400 focus:border-accent-500/60 focus:outline-none"
            placeholder="nimi@organisaatio.fi"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs eyebrow">Viesti</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-ink-600/60 bg-ink-900/60 px-3.5 py-2.5 text-sm text-ink-50 placeholder:text-ink-400 focus:border-accent-500/60 focus:outline-none"
          placeholder="Kerro lyhyesti kohderyhmä, tavoite ja toivottu aikataulu."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400 disabled:opacity-60"
        >
          {status === "sending" ? "Lähetetään…" : "Lähetä viesti"}
        </button>
        {status === "error" && (
          <p className="text-sm text-accent-300" role="alert">
            Lähetys epäonnistui — laita viesti suoraan osoitteeseen{" "}
            <a href="mailto:seise@seise.org" className="underline">
              seise@seise.org
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
