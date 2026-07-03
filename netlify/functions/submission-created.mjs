import crypto from "node:crypto";

/**
 * Netlify event -funktio: ajetaan automaattisesti jokaisesta verifioidusta
 * lomakelähetyksestä (nimen "submission-created" perusteella). Välittää
 * lähetyksen Hermes-webhookille HMAC-SHA256-allekirjoitettuna, josta se
 * jatkaa Telegramiin. Palauttaa aina 200 — relay-virhe ei saa kaataa
 * lomakkeen käsittelyä (lähetys jää joka tapauksessa Netlifyn talteen).
 */
export const handler = async (event) => {
  const url = process.env.HERMES_WEBHOOK_URL;
  const secret = process.env.HERMES_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("HERMES_WEBHOOK_URL tai HERMES_WEBHOOK_SECRET puuttuu");
    return { statusCode: 200 };
  }

  let submission;
  try {
    submission = JSON.parse(event.body || "{}").payload ?? {};
  } catch {
    return { statusCode: 400, body: "Bad request" };
  }
  const data = submission.data ?? {};
  const hasContent = [data.name, data.email, data.message].some(
    (v) => typeof v === "string" && v.trim() !== "",
  );
  if (!hasContent) {
    return { statusCode: 400, body: "Bad request" };
  }
  const body = JSON.stringify({
    event: "form_submission",
    form: submission.form_name ?? "contact",
    name: data.name ?? "",
    email: data.email ?? "",
    message: data.message ?? "",
  });

  const signature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Signature": signature,
      },
      body,
    });
    console.log(`Hermes-relay: ${res.status}`);
  } catch (err) {
    console.error("Hermes-relay epäonnistui:", err);
  }
  return { statusCode: 200 };
};
