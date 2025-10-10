import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Shield, RefreshCw, Headphones, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MantenimientoPage() {
  const features = [
    "Actualizaciones de seguridad automáticas",
    "Copias de seguridad diarias",
    "Monitoreo 24/7 del sitio web",
    "Soporte técnico prioritario",
    "Optimización de velocidad mensual",
    "Actualizaciones de contenido (hasta 2 horas/mes)",
    "Informes mensuales de rendimiento",
    "Protección contra malware",
    "Actualizaciones de plugins y temas",
    "Soporte por email y teléfono",
  ]

  const plans = [
    {
      name: "Básico",
      price: "99",
      description: "Para sitios web simples",
      features: [
        "Actualizaciones de seguridad",
        "Backup semanal",
        "Monitoreo básico",
        "Soporte por email",
        "1 hora de cambios/mes",
      ],
    },
    {
      name: "Profesional",
      price: "199",
      description: "Para sitios web complejos",
      features: [
        "Todo lo del plan Básico",
        "Backup diario",
        "Monitoreo avanzado 24/7",
        "Soporte prioritario",
        "2 horas de cambios/mes",
        "Optimización mensual",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "399",
      description: "Para e-commerce y aplicaciones",
      features: [
        "Todo lo del plan Profesional",
        "Backup en tiempo real",
        "Soporte telefónico",
        "5 horas de cambios/mes",
        "Optimización semanal",
        "Consultoría estratégica",
      ],
    },
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Seguridad Garantizada",
      description: "Protección constante contra amenazas y vulnerabilidades",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Siempre Actualizado",
      description: "Tu sitio web siempre con las últimas versiones y mejoras",
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Soporte Experto",
      description: "Equipo técnico especializado a tu disposición",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Prevención de Problemas",
      description: "Detectamos y solucionamos problemas antes de que afecten tu negocio",
    },
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Mantenimiento Web</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Mantén tu sitio web seguro, actualizado y funcionando perfectamente con nuestro servicio de
                  mantenimiento profesional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Solicitar Información</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#planes">Ver Planes</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="/images/maintenance.jpg" alt="Mantenimiento web" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué Necesitas Mantenimiento?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un sitio web sin mantenimiento es vulnerable a ataques, puede volverse lento y perder posicionamiento
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planes" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes de Mantenimiento</h2>
              <p className="text-lg text-muted-foreground">Elige el plan que mejor se adapte a tus necesidades</p>
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

        {/* What's Included Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué Incluye el Mantenimiento?</h2>
              <p className="text-lg text-muted-foreground">
                Servicios completos para mantener tu web en perfecto estado
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Protege tu Inversión Digital</h2>
              <p className="text-xl mb-8 opacity-90">
                No dejes que tu sitio web se vuelva vulnerable. Contrata nuestro servicio de mantenimiento desde 99€/mes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contacto">Solicitar Información</Link>
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
