import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codergidingz.xyz"),
  title: "Gideon Anosike — Full-stack Developer",
  description:
    "Full-stack developer building thoughtful, fast, and reliable digital products with React, Next.js, Node.js, and modern databases.",
  keywords: ["Gideon Anosike", "full-stack developer", "Next.js developer", "Lagos developer"],
  openGraph: {
    title: "Gideon Anosike — Full-stack Developer",
    description: "Thoughtful digital products, built from interface to infrastructure.",
    url: "/",
    siteName: "Gideon Anosike",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Gideon Anosike — Full-stack Developer" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
