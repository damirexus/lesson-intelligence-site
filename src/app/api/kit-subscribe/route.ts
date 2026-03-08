import { NextResponse } from "next/server";

const FORM_ID = "9177547";
const API_KEY = process.env.KIT_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const emailAddress = String(body?.email_address || "").trim();

    if (!emailAddress) {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }

    if (!API_KEY) {
      return NextResponse.json({ message: "Missing KIT_API_KEY." }, { status: 500 });
    }

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: emailAddress,
        }),
        cache: "no-store",
      }
    );

    const raw = await response.text();

    let data: unknown = null;
    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      data = raw;
    }

    if (!response.ok) {
      return NextResponse.json(
        { message: "Kit API error.", status: response.status, data },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Kit subscribe error:", error);
    return NextResponse.json(
      { message: "Unable to submit right now." },
      { status: 500 }
    );
  }
}