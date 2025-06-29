import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jhovana Hair Studio - Salón de Belleza",
  description:
    "Transforma tu belleza natural en Jhovana Hair Studio. Especialistas en cortes, color y tratamientos capilares con más de 8 años de experiencia.",
  keywords: "peluquería, salón de belleza, cortes de cabello, coloración, tratamientos capilares, Jhovana Hair Studio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
