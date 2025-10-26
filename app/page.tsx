import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TicketsSection } from "@/components/tickets-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VisualCraft | Soluciones Digitales para Restaurantes",
  description:
    "Especialistas en transformación digital para restaurantes en Argentina. Menús digitales, páginas web, reservas online y más. Optimiza tu restaurante en 48 horas.",
  keywords: [
    "restaurantes argentina",
    "menú digital",
    "página web para restaurante",
    "reservas online",
    "marketing gastronómico",
    "digitalización restaurante",
  ],
  openGraph: {
    title: "VisualCraft | Soluciones Digitales para Restaurantes",
    description: "Especialistas en transformación digital para restaurantes en Argentina",
    images: ["/images/hero-bg.jpg"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TicketsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
