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

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: emailAddress
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: "Kit API error", data }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}