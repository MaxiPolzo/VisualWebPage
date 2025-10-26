import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Cloud, Shield, Zap, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DesarrolloHostingPage() {
  const features = [
    "Web compleja con todas las funcionalidades",
    "Hosting premium por 1 año incluido",
    "Dominio personalizado (.com, .es, etc.)",
    "Certificado SSL gratuito",
    "Panel de control cPanel",
    "Copias de seguridad automáticas",
    "Soporte técnico incluido",
    "99.9% de uptime garantizado",
    "CDN global para máxima velocidad",
    "Protección contra malware",
  ]

  const hostingFeatures = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Hosting Premium",
      description: "Servidores de alta velocidad con tecnología SSD",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Seguridad Avanzada",
      description: "Protección SSL, firewall y monitoreo 24/7",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Máximo Rendimiento",
      description: "CDN global y optimización automática",
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "Soporte Técnico",
      description: "Asistencia especializada cuando la necesites",
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Desarrollo + Hosting</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  La solución completa: desarrollo de tu web compleja más hosting premium por un año. Todo en un solo
                  paquete sin complicaciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Solicitar Presupuesto</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/precios">Ver Precios</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="/images/hosting-server.jpg" alt="Desarrollo y hosting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que Necesitas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desarrollo profesional más hosting premium en un solo paquete
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

        {/* Hosting Features */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hosting Premium Incluido</h2>
              <p className="text-lg text-muted-foreground">Características de nuestro servicio de hosting</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hostingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué Elegir Este Paquete?</h2>
              <p className="text-lg text-muted-foreground">Comparación con contratar servicios por separado</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">Por Separado</h3>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>• Web compleja: 999€</li>
                  <li>• Hosting premium: 200€/año</li>
                  <li>• Dominio: 15€/año</li>
                  <li>• SSL: 50€/año</li>
                  <li>• Configuración: 100€</li>
                  <li className="font-bold border-t pt-2">Total: 1,364€</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Nuestro Paquete</h3>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>• Web compleja incluida</li>
                  <li>• Hosting premium por 1 año</li>
                  <li>• Dominio incluido</li>
                  <li>• SSL gratuito</li>
                  <li>• Configuración incluida</li>
                  <li className="font-bold border-t pt-2">Total: 1,299€</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Ahorras 65€</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Lanzar tu Proyecto?</h2>
              <p className="text-xl mb-8 opacity-90">
                Desde 1,299€ tienes tu web compleja online con hosting premium por un año completo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contacto">Empezar Ahora</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/precios">Ver Todos los Planes</Link>
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
