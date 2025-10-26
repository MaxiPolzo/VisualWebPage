import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Search, TrendingUp, Target, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SEOMarketingPage() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO Técnico",
      description: "Optimización técnica completa de tu sitio web",
      features: ["Auditoría SEO completa", "Optimización de velocidad", "Estructura de URLs", "Schema markup"],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "SEO de Contenidos",
      description: "Estrategia de contenidos para mejorar tu posicionamiento",
      features: ["Investigación de palabras clave", "Optimización de contenido", "Blog corporativo", "Link building"],
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Google Ads",
      description: "Campañas publicitarias efectivas en Google",
      features: [
        "Configuración de campañas",
        "Optimización de anuncios",
        "Seguimiento de conversiones",
        "Informes detallados",
      ],
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Analytics y Reportes",
      description: "Medición y análisis de resultados",
      features: ["Google Analytics", "Search Console", "Informes mensuales", "Recomendaciones de mejora"],
    },
  ]

  const plans = [
    {
      name: "SEO Básico",
      price: "299",
      description: "Para pequeñas empresas",
      features: [
        "Auditoría SEO inicial",
        "Optimización on-page (5 páginas)",
        "Investigación de palabras clave",
        "Configuración Google Analytics",
        "Informe mensual básico",
      ],
    },
    {
      name: "SEO + Marketing",
      price: "599",
      description: "Para empresas en crecimiento",
      features: [
        "Todo lo del plan Básico",
        "Optimización on-page (10 páginas)",
        "Estrategia de contenidos",
        "Gestión Google My Business",
        "Campaña Google Ads básica",
        "Informe mensual detallado",
      ],
      popular: true,
    },
    {
      name: "Marketing Completo",
      price: "999",
      description: "Para empresas establecidas",
      features: [
        "Todo lo del plan anterior",
        "Optimización ilimitada",
        "Link building avanzado",
        "Gestión completa Google Ads",
        "Marketing en redes sociales",
        "Consultoría estratégica mensual",
      ],
    },
  ]

  const benefits = [
    "Aumento del tráfico orgánico",
    "Mejora del posicionamiento en Google",
    "Mayor visibilidad online",
    "Incremento de conversiones",
    "ROI medible y transparente",
    "Ventaja competitiva",
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">SEO y Marketing Digital</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Aumenta tu visibilidad online y atrae más clientes con nuestras estrategias de SEO y marketing digital
                  personalizadas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Auditoría Gratuita</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#planes">Ver Planes</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="/images/seo-marketing.jpg" alt="SEO y Marketing Digital" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estrategias integrales de marketing digital para hacer crecer tu negocio online
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios del SEO y Marketing Digital</h2>
              <p className="text-lg text-muted-foreground">Resultados medibles que impulsan tu negocio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planes" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes de SEO y Marketing</h2>
              <p className="text-lg text-muted-foreground">Elige el plan que mejor se adapte a tus objetivos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border ${
                    plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                  } overflow-hidden`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                      Más Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground ml-1">/mes</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href="/contacto">Contratar Plan</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Crecer Online?</h2>
              <p className="text-xl mb-8 opacity-90">
                Solicita una auditoría SEO gratuita y descubre cómo podemos mejorar tu posicionamiento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contacto">Auditoría Gratuita</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/precios">Ver Todos los Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
