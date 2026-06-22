import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground
from "@/components/layout/AuroraBackground";
import {
  GeistSans
} from "geist/font/sans";

export const metadata: Metadata = {
  title: "Atmos AI",
  description:
    "AI-Powered Weather Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={
    GeistSans.className
  }>
      <body>
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}

