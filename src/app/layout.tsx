import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import "katex/dist/katex.min.css";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Marginalia",
    template: "%s · Marginalia",
  },
  description:
    "A personal problem set for derivatives, partial derivatives, matrices, elasticity, and constrained optimization.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Suspense fallback={<div className="h-16 border-b bg-background" />}>
          <SiteHeader />
        </Suspense>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:py-12">{children}</main>
      </body>
    </html>
  );
}
