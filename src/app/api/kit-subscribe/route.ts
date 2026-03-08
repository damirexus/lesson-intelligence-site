import { NextResponse } from "next/server";

const KIT_ACTION_URL = "https://app.kit.com/forms/9177547/subscriptions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const emailAddress = String(body?.email_address || "").trim();

    if (!emailAddress) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    const response = await fetch(KIT_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        email_address: emailAddress
      }).toString(),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Kit submission failed." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "Unable to submit right now." }, { status: 500 });
  }
}

