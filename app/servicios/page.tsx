import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Globe, Server, Cloud, Wrench, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Web Simple",
      description:
        "Sitios informativos, landing pages y páginas institucionales perfectas para establecer tu presencia online.",
      features: ["Diseño responsive", "Hasta 5 páginas", "Formulario de contacto", "SEO básico"],
      href: "/servicios/web-simple",
      price: "Desde 499€",
    },
    {
      icon: <Server className="h-12 w-12 text-primary" />,
      title: "Web Compleja",
      description: "E-commerce, plataformas interactivas y sistemas personalizados para necesidades específicas.",
      features: ["Funcionalidades avanzadas", "E-commerce", "Sistemas personalizados", "Integración APIs"],
      href: "/servicios/web-compleja",
      price: "Desde 999€",
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Desarrollo + Hosting",
      description: "Desarrollo completo con alojamiento en servidores rápidos y seguros incluido.",
      features: ["Hosting por 1 año", "Certificado SSL", "Dominio personalizado", "Panel de control"],
      href: "/servicios/desarrollo-hosting",
      price: "Desde 1299€",
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Mantenimiento Web",
      description: "Mantenimiento mensual, actualizaciones, soporte técnico y monitoreo constante.",
      features: ["Actualizaciones periódicas", "Soporte técnico", "Monitoreo 24/7", "Backups automáticos"],
      href: "/servicios/mantenimiento",
      price: "Desde 99€/mes",
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "SEO y Marketing Digital",
      description: "Optimización para motores de búsqueda y estrategias de marketing digital.",
      features: ["SEO técnico", "Marketing de contenidos", "Google Ads", "Analytics y reportes"],
      href: "/servicios/seo-marketing",
      price: "Desde 299€/mes",
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Nuestros Servicios</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ofrecemos soluciones web completas adaptadas a las necesidades específicas de tu negocio, desde sitios
                simples hasta plataformas complejas con funcionalidades avanzadas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button asChild>
                      <Link href={service.href}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ofrecemos soluciones personalizadas para cada proyecto. Contáctanos y cuéntanos tu idea.
              </p>
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar Presupuesto Personalizado</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
