import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"], display: "swap" })

// Avoid static prerender serialization issues (e.g. dynamic components) on Vercel
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "REAP Solutions | B-BBEE Transformation Consulting",
  description: "Real Empowerment Accumulates Profit. We integrate B-BBEE transformation into your business model to drive growth and profit, not just compliance.",
  keywords: "B-BBEE, transformation, empowerment, consulting, South Africa, business growth",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


