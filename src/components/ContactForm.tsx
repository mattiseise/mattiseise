"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import type { Locale } from "@/lib/blog";

type Status = "idle" | "sending" | "sent" | "error";

const strings = {
  fi: {
    name: "Nimi",
    namePh: "Etunimi Sukunimi",
    email: "Sähköposti",
    emailPh: "nimi@organisaatio.fi",
    msg: "Viesti",
    msgPh: "Kerro lyhyesti kohderyhmä, tavoite ja toivottu aikataulu.",
    send: "Lähetä viesti",
    sending: "Lähetetään…",
    sentTitle: "Kiitos viestistä! 🦀",
    sentBody: "Vastaan yleensä saman tai seuraavan arkipäivän aikana.",
    errorPrefix: "Lähetys epäonnistui — laita viesti suoraan osoitteeseen",
    honeypot: "Älä täytä tätä kenttää:",
  },
  en: {
    name: "Name",
    namePh: "First Last",
    email: "Email",
    emailPh: "name@organization.com",
    msg: "Message",
    msgPh: "Briefly describe the audience, goal and preferred schedule.",
    send: "Send message",
    sending: "Sending…",
    sentTitle: "Thanks for your message! 🦀",
    sentBody: "I usually reply within one business day.",
    errorPrefix: "Sending failed — email me directly at",
    honeypot: "Do not fill this field:",
  },
} as const;

/**
 * Netlify Forms -yhteydenottolomake. POST menee staattiseen
 * /forms.html-stubiin (Netlify poimii lähetyksen siitä — Next.js-runtimen
 * dokumentoitu tapa). Honeypot-kenttä (bot-field) suodattaa botit.
 */
export default function ContactForm({ locale = "fi" }: { locale?: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const t = strings[locale];

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
      // Konversiomittaus: lomakelähetys GA4-liidiksi. Consent Mode
      // ratkaisee, lähteekö tapahtuma eteenpäin — try/catch varalta.
      try {
        sendGAEvent("event", "generate_lead", { form: "contact", locale });
      } catch {
        // Analytiikan puuttuminen ei saa rikkoa lomaketta.
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border border-amber-400/40 bg-bark-800 p-7"
        role="status"
      >
        <p className="font-bold text-cream-50">{t.sentTitle}</p>
        <p className="mt-2 text-[14.5px] leading-[1.65] text-cream-300">
          {t.sentBody}
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
      className="flex flex-col gap-4 rounded-2xl border border-cream-50/[0.08] bg-bark-800 p-7"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          {t.honeypot} <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow-sm">{t.name}</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="input-field"
            placeholder={t.namePh}
          />
        </label>
        <label className="block">
          <span className="eyebrow-sm">{t.email}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="input-field"
            placeholder={t.emailPh}
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow-sm">{t.msg}</span>
        <textarea
          name="message"
          required
          rows={4}
          className="input-field resize-y"
          placeholder={t.msgPh}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary-sm disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.send}
        </button>
        {status === "error" && (
          <p className="text-sm text-amber-300" role="alert">
            {t.errorPrefix}{" "}
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
