import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sites de Casinos em Portugal - Ranking 2025 | sitesdecasinosemportugal.com",
  description:
    "Descubra os melhores casinos online em Portugal. Análises especializadas, comparações de bónus e avaliações de segurança para jogar com confiança.",
  keywords:
    "casinos Portugal, melhores casinos Portugal, ranking casinos online, avaliações casino, bónus casino, SRIJ, casinos licenciados",
  openGraph: {
    title: "Sites de Casinos em Portugal - Ranking 2025",
    description: "Descubra os melhores casinos online em Portugal com análises especializadas.",
    url: "https://sitesdecasinosemportugal.com",
    siteName: "Sites de Casinos em Portugal",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen bg-background antialiased">{children}</body>
    </html>
  )
}
