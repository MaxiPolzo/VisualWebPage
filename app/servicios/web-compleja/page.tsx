import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Server, ShoppingCart, Database, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WebComplejaPage() {
  const features = [
    "Diseño responsive premium",
    "Hasta 10 páginas personalizadas",
    "E-commerce completo con carrito de compras",
    "Sistema de gestión de contenidos (CMS)",
    "Integración con APIs externas",
    "Base de datos personalizada",
    "Panel de administración",
    "SEO avanzado y optimización técnica",
    "Integración con pasarelas de pago",
    "Sistema de usuarios y autenticación",
  ]

  const useCases = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "Tiendas Online",
      description: "E-commerce completo con gestión de productos, inventario y pagos",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Plataformas de Gestión",
      description: "Sistemas personalizados para gestionar tu negocio",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Aplicaciones Web",
      description: "Herramientas interactivas y funcionalidades avanzadas",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Portales Corporativos",
      description: "Sitios web complejos para grandes empresas",
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Web Compleja</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  E-commerce, plataformas interactivas y sistemas personalizados para necesidades específicas.
                  Soluciones avanzadas que impulsan tu negocio al siguiente nivel.
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
                <Image src="/images/ecommerce.jpg" alt="Ejemplo de web compleja" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Avanzadas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nuestras webs complejas incluyen todas las funcionalidades necesarias para proyectos ambiciosos
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

        {/* Use Cases Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Uso</h2>
              <p className="text-lg text-muted-foreground">Perfectas para diferentes tipos de proyectos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologías que Utilizamos</h2>
              <p className="text-lg text-muted-foreground">Las mejores herramientas para proyectos complejos</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS"].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-border text-center"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary font-bold">{tech.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un proyecto ambicioso?</h2>
              <p className="text-xl mb-8 opacity-90">
                Desde 999€ creamos soluciones web complejas que transforman tu negocio. Entrega en 10-15 días hábiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contacto">Consulta Gratuita</Link>
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
