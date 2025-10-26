import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contacto</h1>
              <p className="text-xl text-muted-foreground mb-8">
                ¿Tienes alguna pregunta o necesitas un presupuesto personalizado? Estamos aquí para ayudarte a hacer
                realidad tu proyecto digital.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
