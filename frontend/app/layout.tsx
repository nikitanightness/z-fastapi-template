import { ReactNode } from "react";

import { JetBrains_Mono, Oxanium, Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const FONT_OXANIUM = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const FONT_SPACE_GROTESK = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const FONT_JETBRAINS_MONO = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        FONT_SPACE_GROTESK.variable,
        FONT_JETBRAINS_MONO.variable,
        FONT_OXANIUM.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
