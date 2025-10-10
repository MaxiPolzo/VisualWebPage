import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StructuredData } from "@/components/structured-data"
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Desarrollo Web Simple - Páginas Web para Restaurantes",
  description:
    "Diseño y desarrollo de páginas web informativas para restaurantes. Landing pages profesionales con diseño responsive, optimizadas para SEO y conversión. Desde $299.",
  keywords: [
    "página web restaurante",
    "landing page gastronómica",
    "diseño web simple",
    "sitio web informativo",
    "web económica restaurante",
    "página web básica",
  ],
  openGraph: {
    title: "Desarrollo Web Simple para Restaurantes | VisualCraft",
    description:
      "Páginas web profesionales para restaurantes desde $299. Diseño responsive, optimizado para SEO y fácil de actualizar.",
    images: ["/images/web-development.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/servicios/web-simple",
  },
}

const features = [
  "Diseño responsive (móvil, tablet y desktop)",
  "Hasta 5 secciones personalizadas",
  "Formulario de contacto integrado",
  "Integración con redes sociales",
  "Galería de imágenes optimizada",
  "Mapa de ubicación integrado",
  "Optimización SEO básica",
  "Hosting incluido por 1 año",
  "Certificado SSL (conexión segura)",
  "Panel de administración básico",
  "Capacitación para actualizar contenido",
  "Soporte técnico por 30 días",
]

const process = [
  {
    title: "1. Consulta inicial",
    description: "Conversamos sobre tu restaurante, tus objetivos y lo que necesitas mostrar en tu web.",
  },
  {
    title: "2. Diseño personalizado",
    description: "Creamos un diseño único que refleje la identidad de tu restaurante.",
  },
  {
    title: "3. Desarrollo",
    description: "Construimos tu sitio web con las mejores tecnologías y prácticas.",
  },
  {
    title: "4. Revisión y ajustes",
    description: "Revisas el sitio y hacemos todos los ajustes necesarios.",
  },
  {
    title: "5. Lanzamiento",
    description: "Publicamos tu sitio web y te capacitamos para que puedas actualizarlo.",
  },
]

export default function WebSimplePage() {
  const serviceSchema = getServiceSchema({
    name: "Desarrollo Web Simple para Restaurantes",
    description:
      "Diseño y desarrollo de páginas web informativas para restaurantes con diseño responsive y optimización SEO",
    price: "299",
    url: "/servicios/web-simple",
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: "Web Simple", url: "/servicios/web-simple" },
  ])

  return (
    <>
      <StructuredData data={[serviceSchema, breadcrumbSchema]} />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-gray-900 to-black">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <Link
                href="/servicios"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Servicios
              </Link>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Desarrollo Web Simple
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    La solución perfecta para restaurantes que necesitan presencia online profesional. Ideal para
                    mostrar tu menú, ubicación y atraer nuevos clientes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Solicitar Cotización
                    </Button>
                    <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 bg-transparent">
                      Ver Ejemplos
                    </Button>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/web-development.jpg"
                    alt="Desarrollo web simple para restaurantes"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">¿Qué Incluye?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-gray-900/50 border-purple-800/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Nuestro Proceso</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {process.map((step, index) => (
                  <Card key={index} className="bg-gray-900/50 border-purple-800/50">
                    <CardHeader>
                      <CardTitle className="text-purple-400">{step.title}</CardTitle>
                      <CardDescription className="text-gray-400">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl text-white">Precio Especial</CardTitle>
                    <CardDescription className="text-gray-300">Inversión única</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-8">
                      <span className="text-6xl font-bold text-white">$299</span>
                      <span className="text-2xl text-gray-300"> USD</span>
                    </div>
                    <p className="text-gray-300 mb-8">+ Hosting $10/mes después del primer año</p>
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                      Comenzar Ahora
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para Comenzar?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Cotiza tu proyecto sin compromiso. Te responderemos en menos de 24 horas.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Solicitar Cotización
              </Button>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
