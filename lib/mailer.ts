import nodemailer from "nodemailer";
import { lookup } from "node:dns/promises";
import { siteConfig } from "./site";

type MailPayload = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  to?: string;
};

async function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.local.");
  }

  const resolvedHost = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) ? host : (await lookup(host, { family: 4 })).address;

  return {
    host: resolvedHost,
    port: Number(port),
    secure: process.env.SMTP_SECURE === "true" || Number(port) === 465,
    tls: {
      servername: host,
      rejectUnauthorized: process.env.SMTP_ALLOW_INVALID_CERT === "true" ? false : undefined,
    },
    auth: {
      user,
      pass: pass.replace(/\s+/g, ""),
    },
  };
}

function getDefaultFrom() {
  return process.env.MAIL_FROM ?? `${siteConfig.name} <no-reply@digitaldk.com>`;
}

function getDefaultTo() {
  return process.env.MAIL_TO ?? siteConfig.email;
}

export function getRecipientForRoute(route: "contact" | "consultation" | "newsletter") {
  if (route === "contact") {
    return process.env.CONTACT_TO ?? getDefaultTo();
  }

  if (route === "consultation") {
    return process.env.CONSULTATION_TO ?? getDefaultTo();
  }

  return process.env.NEWSLETTER_TO ?? getDefaultTo();
}

export async function sendMail(payload: MailPayload) {
  const smtpConfig = await getSmtpConfig();

  const transporter = nodemailer.createTransport(smtpConfig);

  await transporter.sendMail({
    from: getDefaultFrom(),
    to: payload.to ?? getDefaultTo(),
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });
}
