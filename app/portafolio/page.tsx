import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StructuredData } from "@/components/structured-data"
import { getBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Portafolio - Proyectos Web para Restaurantes",
  description:
    "Descubre nuestros proyectos de desarrollo web para restaurantes. Páginas web profesionales, menús digitales y e-commerce para la industria gastronómica en Argentina.",
  keywords: [
    "portafolio desarrollo web",
    "proyectos web restaurantes",
    "ejemplos páginas web gastronómicas",
    "sitios web restaurantes Argentina",
    "casos de éxito web restaurantes",
  ],
  openGraph: {
    title: "Portafolio de Proyectos Web | VisualCraft",
    description: "Conoce nuestros proyectos exitosos de desarrollo web para restaurantes en Argentina.",
    images: ["/images/portfolio/parrilla-pepe.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "/portafolio",
  },
}

const projects = [
  {
    id: 1,
    title: "Parrilla Don Pepe",
    description: "Sitio web completo con reservas online y menú digital interactivo para una parrilla tradicional.",
    image: "/images/portfolio/parrilla-pepe.jpg",
    previewImage: "/images/portfolio/parrilla-pepe-preview.jpg",
    category: "Web Completa",
    technologies: ["Next.js", "Tailwind CSS", "Sistema de Reservas"],
    url: "#",
    features: ["Reservas Online", "Menú Digital", "Galería de Fotos", "Integración WhatsApp"],
  },
  {
    id: 2,
    title: "Pizzería Mario",
    description: "E-commerce con sistema de pedidos online y seguimiento en tiempo real de entregas.",
    image: "/images/portfolio/pizzeria-mario.jpg",
    previewImage: "/images/portfolio/pizzeria-mario-preview.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "Sistema de Pedidos"],
    url: "#",
    features: ["Pedidos Online", "Pagos Seguros", "Tracking de Delivery", "Panel Admin"],
  },
  {
    id: 3,
    title: "Café Central",
    description: "Landing page moderna con menú de cafetería y sistema de suscripción para café del mes.",
    image: "/images/portfolio/cafe-central.jpg",
    previewImage: "/images/portfolio/cafe-central-preview.jpg",
    category: "Landing Page",
    technologies: ["React", "Tailwind CSS", "Subscripciones"],
    url: "#",
    features: ["Diseño Minimalista", "Menú Digital", "Suscripciones", "Blog de Café"],
  },
  {
    id: 4,
    title: "Sushi Zen",
    description: "Plataforma completa con catálogo de productos, carrito de compras y sistema de puntos.",
    image: "/images/portfolio/sushi-zen.jpg",
    previewImage: "/images/portfolio/sushi-zen-preview.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "Sistema de Puntos", "Carrito"],
    url: "#",
    features: ["Catálogo Completo", "Sistema de Puntos", "Ofertas Especiales", "App Móvil"],
  },
  {
    id: 5,
    title: "Bodegón del Tano",
    description: "Sitio web clásico con galería de platos, historia del restaurante y reservas telefónicas.",
    image: "/images/portfolio/bodegon-tano.jpg",
    previewImage: "/images/portfolio/bodegon-tano-preview.jpg",
    category: "Web Completa",
    technologies: ["Next.js", "Galería", "Formularios"],
    url: "#",
    features: ["Galería de Platos", "Historia", "Reservas", "Eventos Especiales"],
  },
  {
    id: 6,
    title: "Cervecería Hop",
    description: "Web interactiva con carta de cervezas artesanales, eventos y sistema de reservas para grupos.",
    image: "/images/portfolio/cerveceria-hop.jpg",
    previewImage: "/images/portfolio/cerveceria-hop-preview.jpg",
    category: "Web Completa",
    technologies: ["Next.js", "Calendario Eventos", "Reservas Grupales"],
    url: "#",
    features: ["Carta de Cervezas", "Eventos", "Reservas Grupales", "Newsletter"],
  },
]

const categories = ["Todos", "Web Completa", "E-commerce", "Landing Page"]

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Portafolio", url: "/portafolio" },
  ])

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portafolio de Proyectos Web para Restaurantes",
    description:
      "Proyectos exitosos de desarrollo web para restaurantes en Argentina. Landing pages, e-commerce y sitios web completos.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/portafolio`,
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      image: `${process.env.NEXT_PUBLIC_APP_URL}${project.image}`,
    })),
  }

  return (
    <>
      <StructuredData data={[breadcrumbSchema, portfolioSchema]} />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-gray-900 to-black">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nuestro Portafolio
                </h1>
                <p className="text-xl text-gray-300">
                  Descubre algunos de los proyectos que hemos desarrollado para restaurantes como el tuyo. Cada sitio
                  web está diseñado para aumentar las ventas y mejorar la experiencia del cliente.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    className={
                      category === "Todos"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "border-purple-400 text-purple-400 hover:bg-purple-400/10"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gray-900/50 border-purple-800/50 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} - Proyecto web para restaurante`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <Badge variant="secondary" className="bg-purple-900/50 text-purple-300">
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Características:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-400 flex items-center">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Tecnologías:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="outline" className="border-purple-400/50 text-purple-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para tu Proyecto?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Comienza hoy mismo tu proyecto web y únete a nuestros clientes satisfechos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Solicitar Cotización
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 bg-transparent"
                  asChild
                >
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
