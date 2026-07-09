import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { consultationSchema } from "@/lib/validation";
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
    const data = consultationSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ ok: true, message: "Consultation request received" });
    }

    await sendMail({
      to: getRecipientForRoute("consultation"),
      subject: `Consultation request from ${data.name}`,
      replyTo: data.email,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company}`,
        `Preferred Date: ${data.preferredDate}`,
        `Preferred Time: ${data.preferredTime}`,
        `Business Goal: ${data.businessGoal}`,
        `Budget: ${data.budget}`,
        "",
        data.message,
      ].join("\n"),
      html: `
        <h2>Consultation request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Business Goal:</strong> ${data.businessGoal}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Consultation booked",
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
