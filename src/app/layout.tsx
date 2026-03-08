import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lesson Intelligence Framework | LIF Teacher's Guide",
  description:
    "Get the free LIF Teacher's Guide and design lessons where student thinking is required, visible, and guided."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
