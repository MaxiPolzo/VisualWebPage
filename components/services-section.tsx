import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Server, Wrench, TrendingUp, QrCode } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Páginas Web Profesionales",
    description: "Sitios web modernos y responsivos que reflejan la identidad de tu restaurante",
    features: ["Diseño responsive", "Optimización SEO", "Carga rápida", "Fácil administración"],
    price: "Desde $800",
    href: "/servicios/web-simple",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce para Delivery",
    description: "Tienda online completa para pedidos y delivery con pasarela de pagos",
    features: ["Carrito de compras", "Pagos online", "Gestión de pedidos", "Panel administrativo"],
    price: "Desde $1,500",
    href: "/servicios/web-compleja",
  },
  {
    icon: QrCode,
    title: "Menú Digital QR",
    description: "Menús digitales interactivos accesibles mediante código QR",
    features: ["Código QR personalizado", "Actualización en tiempo real", "Múltiples idiomas", "Sin contacto"],
    price: "Desde $300",
    href: "/servicios",
  },
  {
    icon: Server,
    title: "Hosting y Dominio",
    description: "Alojamiento web confiable y dominio personalizado para tu negocio",
    features: ["Hosting premium", "Dominio incluido", "SSL gratuito", "Soporte 24/7"],
    price: "Desde $200/año",
    href: "/servicios/desarrollo-hosting",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Web",
    description: "Mantenimiento continuo y actualizaciones para tu sitio web",
    features: ["Actualizaciones regulares", "Backup automático", "Monitoreo 24/7", "Soporte técnico"],
    price: "Desde $150/mes",
    href: "/servicios/mantenimiento",
  },
  {
    icon: TrendingUp,
    title: "SEO y Marketing Digital",
    description: "Posicionamiento en Google y estrategias de marketing digital",
    features: ["Optimización SEO", "Google Ads", "Redes sociales", "Análisis de resultados"],
    price: "Desde $400/mes",
    href: "/servicios/seo-marketing",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios Especializados para <span className="text-purple-600 font-bold">Restaurantes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas específicamente para el sector gastronómico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href={service.href}>Ver más</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/contacto">Solicitar Cotización Personalizada</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
