import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Please provide your name and phone number." },
      { status: 422 },
    );
  }

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 422 },
    );
  }

  // In production, forward this lead to email/CRM. For now, log it server-side.
  console.log("New leak detection inquiry:", {
    name,
    phone,
    email: body.email?.trim() || "(none)",
    service: body.service || "(unspecified)",
    message: body.message?.trim() || "(none)",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    message: `Thanks, ${name}! We received your request and will call you shortly.`,
  });
}
