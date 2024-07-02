import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { Footer } from "@/components/layout/Footer"

import favicon from "public/favicon.ico"
import faviconDark from "public/favicon-dark.ico"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inove Jr",
  description: "Inove o seu negócio.",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: favicon.src,
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: faviconDark.src,
      media: "(prefers-color-scheme: dark)",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
