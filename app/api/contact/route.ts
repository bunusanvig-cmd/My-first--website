import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validation";
import { getApiErrorMessage, readJsonBody } from "@/lib/api";
import { getRecipientForRoute, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const parsedBody = await readJsonBody(request);
    if (!parsedBody.ok) {
      return NextResponse.json({ ok: false, error: parsedBody.error }, { status: 400 });
    }

    const body = parsedBody.data;
    const data = contactSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ ok: true, message: "Message received" });
    }

    await sendMail({
      to: getRecipientForRoute("contact"),
      subject: `New contact form from ${data.name}`,
      replyTo: data.email,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\n${data.message}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Contact form submitted",
    });
  } catch (error) {
    const status = error instanceof ZodError ? 400 : 500;

    return NextResponse.json(
      {
        ok: false,
        error: getApiErrorMessage(error),
      },
      { status }
    );
  }
}
