import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juadebgabriel.com/"),
  title: "Juadeb Gabriel",
  description:
    "Hobby Designer and Software Engineer, currently working as a program lead at PluralCode Academy. Focused on immersive experiences, engaging new techies and ensuring business processes are enhanced.",
  generator: "Next.js",
  applicationName: "Juadeb Gabriel",
  keywords: [
    "Juadeb Gabriel",
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
    "tailwindcss",
  ],
  openGraph: {
    title: "Juadeb Gabriel - Designer and Developer",
    description:
      "Hobby Designer and Software Engineer, currently at PluralCode Academy. Focused on immersive experiences, engaging new techies and ensuring business processes are enhanced.",
    url: "https://www.juadebgabriel.com/",
    siteName: "www.juadebgabriel.com",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
