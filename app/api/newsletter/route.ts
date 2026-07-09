import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { newsletterSchema } from "@/lib/validation";
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
    const data = newsletterSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ ok: true, message: "Subscribed" });
    }

    await sendMail({
      to: getRecipientForRoute("newsletter"),
      subject: `Newsletter subscription from ${data.email}`,
      text: `Newsletter signup: ${data.email}`,
      html: `<p>Newsletter signup: <strong>${data.email}</strong></p>`,
    });

    return NextResponse.json({
      ok: true,
      message: "Subscribed",
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
