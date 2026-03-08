import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lesson Intelligence Framework | LIF Teacher's Guide",
  description:
    "Get the free LIF Teacher's Guide and design lessons where student thinking is required, visible, and guided.",
  icons: {
    icon: "/images/lif-logo.png",
    shortcut: "/images/lif-logo.png",
    apple: "/images/lif-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
