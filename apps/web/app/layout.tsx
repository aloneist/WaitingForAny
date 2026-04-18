import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waiting For AI",
  description:
    "Track the things you are waiting on with a calm, structured workflow."
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
