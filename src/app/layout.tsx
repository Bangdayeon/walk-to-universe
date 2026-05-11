import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dungGeunMo = localFont({
  src: "./fonts/DungGeunMo.otf",
  variable: "--font-dunggeunmo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "walk-to-universe",
  description: "걸어서 우주로",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${dungGeunMo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
