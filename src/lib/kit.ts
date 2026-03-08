export async function submitEmailToKit(emailAddress: string) {
  const response = await fetch("/api/kit-subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email_address: emailAddress
    })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.message || "Submission failed.");
  }

  return payload;
}
