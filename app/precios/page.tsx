import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { redirect } from "next/navigation"

export default function PreciosPage() {
  redirect("/#tickets")

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Planes y Precios</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Elige el plan que mejor se adapte a las necesidades de tu negocio. Todos nuestros planes incluyen diseño
                responsive, SEO básico y soporte técnico.
              </p>
            </div>
          </div>
        </section>

        <PricingSection />

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground">Resolvemos las dudas más comunes sobre nuestros precios</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Los precios incluyen IVA?</h3>
                <p className="text-muted-foreground">
                  Todos los precios mostrados no incluyen IVA. Se aplicará el 21% de IVA según la legislación española.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Ofrecen planes de pago?</h3>
                <p className="text-muted-foreground">
                  Sí, para proyectos superiores a 1000€ ofrecemos planes de pago personalizados. Contáctanos para más
                  información.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">¿Qué incluye el mantenimiento?</h3>
                <p className="text-muted-foreground">
                  El mantenimiento incluye actualizaciones de seguridad, backups automáticos, monitoreo 24/7 y soporte
                  técnico prioritario.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
