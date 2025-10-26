import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import { StructuredData } from "@/components/structured-data"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "VisualCraft - Desarrollo Web para Restaurantes",
    template: "%s | VisualCraft",
  },
  description:
    "Especialistas en desarrollo web, e-commerce y marketing digital para restaurantes. Creamos experiencias digitales que impulsan tu negocio gastronómico.",
  keywords: [
    "desarrollo web",
    "restaurantes",
    "e-commerce",
    "marketing digital",
    "páginas web",
    "menús digitales",
    "diseño web",
    "sitios web para restaurantes",
    "desarrollo web Argentina",
    "web para gastronomía",
  ],
  authors: [{ name: "VisualCraft" }],
  creator: "VisualCraft",
  publisher: "VisualCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VisualCraft - Desarrollo Web para Restaurantes",
    description: "Especialistas en desarrollo web, e-commerce y marketing digital para restaurantes.",
    url: "/",
    siteName: "VisualCraft",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "VisualCraft - Desarrollo Web para Restaurantes",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisualCraft - Desarrollo Web para Restaurantes",
    description: "Especialistas en desarrollo web, e-commerce y marketing digital para restaurantes.",
    images: ["/images/hero-bg.jpg"],
    creator: "@visualcraft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
    // Añade otros códigos de verificación cuando los tengas
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
