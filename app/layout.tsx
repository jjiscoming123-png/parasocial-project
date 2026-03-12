import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PARASOCIAL",
  description: "They don't know you exist. The truth about the connections you think you have.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body>{children}</body>
    </html>
  );
}
