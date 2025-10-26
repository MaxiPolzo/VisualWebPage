import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Descubre nuestros proyectos de desarrollo web para restaurantes",
}

const projects = [
  {
    id: 1,
    title: "Parrilla Don Pepe",
    description:
      "Sitio web completo con menú digital, sistema de reservas y galería de fotos. Diseño enfocado en la experiencia del comensal.",
    image: "/images/portfolio/parrilla-pepe.jpg",
    preview: "/images/portfolio/parrilla-pepe-preview.jpg",
    category: "Restaurante",
    tags: ["Web Completa", "Reservas", "Menú Digital"],
    url: "https://parrilladonpepe.vercel.app",
  },
  {
    id: 2,
    title: "Pizzería Mario",
    description:
      "E-commerce integrado con sistema de pedidos online y seguimiento en tiempo real. Optimizado para delivery.",
    image: "/images/portfolio/pizzeria-mario.jpg",
    preview: "/images/portfolio/pizzeria-mario-preview.jpg",
    category: "Pizzería",
    tags: ["E-commerce", "Pedidos Online", "Tracking"],
    url: "#",
  },
  {
    id: 3,
    title: "Café Central",
    description: "Landing page moderna con enfoque en la experiencia del café y ambiente acogedor.",
    image: "/images/portfolio/cafe-central.jpg",
    preview: "/images/portfolio/cafe-central-preview.jpg",
    category: "Café",
    tags: ["Landing Page", "Branding", "Diseño"],
    url: "#",
  },
  {
    id: 4,
    title: "Sushi Zen",
    description: "Sistema de reservas integrado con gestión de mesas y menú digital interactivo.",
    image: "/images/portfolio/sushi-zen.jpg",
    preview: "/images/portfolio/sushi-zen-preview.jpg",
    category: "Sushi Bar",
    tags: ["Reservas", "Menú Digital", "Gestión"],
    url: "#",
  },
  {
    id: 5,
    title: "Bodegón El Tano",
    description: "Sitio web tradicional con galería de platos y sistema de contacto para reservas telefónicas.",
    image: "/images/portfolio/bodegon-tano.jpg",
    preview: "/images/portfolio/bodegon-tano-preview.jpg",
    category: "Bodegón",
    tags: ["Web Tradicional", "Galería", "Contacto"],
    url: "#",
  },
  {
    id: 6,
    title: "Cervecería Hop",
    description: "Diseño cervecero con carta de cervezas artesanales y eventos en vivo.",
    image: "/images/portfolio/cerveceria-hop.jpg",
    preview: "/images/portfolio/cerveceria-hop-preview.jpg",
    category: "Cervecería",
    tags: ["Eventos", "Carta Digital", "Branding"],
    url: "#",
  },
]

const categories = ["Todos", "Restaurante", "Pizzería", "Café", "Sushi Bar", "Bodegón", "Cervecería"]

export default function PortafolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-visualcraft-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-visualcraft-600 to-visualcraft-400 bg-clip-text text-transparent">
                Nuestro Portafolio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Descubre cómo hemos ayudado a restaurantes a crecer en el mundo digital
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={
                    category === "Todos"
                      ? "bg-visualcraft-600 hover:bg-visualcraft-700"
                      : "hover:bg-visualcraft-50 dark:hover:bg-visualcraft-950"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      {project.url && project.url !== "#" ? (
                        <Button asChild className="bg-visualcraft-600 hover:bg-visualcraft-700">
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Proyecto
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled className="bg-gray-500">
                          Próximamente
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-visualcraft-100 text-visualcraft-700 dark:bg-visualcraft-900 dark:text-visualcraft-300"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-visualcraft-600 to-visualcraft-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para impulsar tu restaurante?</h2>
            <p className="text-xl text-visualcraft-100 mb-8 max-w-2xl mx-auto">
              Únete a los restaurantes que ya han transformado su presencia digital con nosotros
            </p>
            <Button asChild size="lg" className="bg-white text-visualcraft-600 hover:bg-gray-100">
              <Link href="/#contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
