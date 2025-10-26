"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, QrCode, Star, Calendar, Heart, TrendingUp, ArrowRight, Check, Sparkles } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"
import { motion } from "framer-motion"

const tickets = [
  {
    id: "web-profesional",
    icon: Globe,
    title: "Página Web Profesional",
    description:
      "Sitio web completo y responsive para tu restaurante. Incluye galería de platos, información de contacto y ubicación.",
    features: [
      "Diseño 100% personalizado",
      "Optimizado para móviles",
      "Galería de platos y bebidas",
      "Información y ubicación",
      "Formulario de contacto",
      "Integración con redes sociales",
    ],
    popular: true,
  },
  {
    id: "menu-digital-qr",
    icon: QrCode,
    title: "Menú Digital con QR",
    description:
      "Menú interactivo accesible mediante código QR. Tus clientes pueden ver la carta desde su celular sin contacto físico.",
    features: [
      "Menú interactivo y visual",
      "Códigos QR personalizados",
      "Actualización en tiempo real",
      "Fotos de alta calidad",
      "Categorías organizadas",
      "Sin instalación de apps",
    ],
    popular: false,
  },
  {
    id: "resenas-automatizadas",
    icon: Star,
    title: "Reseñas Automatizadas",
    description:
      "Sistema automatizado para recolectar y gestionar reseñas de tus clientes en Google, TripAdvisor y redes sociales.",
    features: [
      "Envío automático de solicitudes",
      "Integración con Google",
      "Panel de gestión",
      "Respuestas automáticas",
      "Análisis de sentimiento",
      "Reportes mensuales",
    ],
    popular: false,
  },
  {
    id: "reservas-online",
    icon: Calendar,
    title: "Reservas Online",
    description:
      "Sistema de reservas integrado en tu web. Tus clientes pueden reservar mesa las 24 horas sin necesidad de llamar.",
    features: [
      "Reservas 24/7",
      "Confirmación automática",
      "Gestión de mesas",
      "Recordatorios por email/SMS",
      "Panel de administración",
      "Cancelaciones gestionadas",
    ],
    popular: true,
  },
  {
    id: "fidelizacion",
    icon: Heart,
    title: "Campañas de Fidelización",
    description: "Programas de puntos, descuentos y promociones exclusivas para mantener a tus clientes volviendo.",
    features: [
      "Sistema de puntos",
      "Promociones personalizadas",
      "Cupones digitales",
      "Email marketing",
      "Cumpleaños y aniversarios",
      "Estadísticas de clientes",
    ],
    popular: false,
  },
  {
    id: "rastreo-automatizado",
    icon: TrendingUp,
    title: "Rastreo Automatizado",
    description:
      "Monitoreo y análisis de tu presencia online. Seguimiento de menciones, competencia y tendencias del mercado.",
    features: [
      "Monitoreo de menciones",
      "Análisis de competencia",
      "Tendencias del mercado",
      "Alertas en tiempo real",
      "Reportes semanales",
      "Sugerencias de mejora",
    ],
    popular: false,
  },
]

export function TicketsSection() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicket(ticketId)
    setIsModalOpen(true)
  }

  return (
    <section
      id="tickets"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-visualcraft-50/30 dark:to-visualcraft-950/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-visualcraft-600 text-white hover:bg-visualcraft-700">Nuestros Servicios</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Elegí el ticket </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-visualcraft-600 to-visualcraft-400">
              perfecto
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Soluciones diseñadas específicamente para restaurantes, parrillas, pizzerías y todo tipo de negocios
            gastronómicos
          </p>
        </motion.div>

        {/* Tickets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => {
            const Icon = ticket.icon

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full hover:shadow-2xl transition-all duration-300 border-2 ${ticket.popular ? "border-visualcraft-400 shadow-lg shadow-visualcraft-200/50 dark:shadow-visualcraft-900/50" : "border-gray-200 dark:border-gray-800"} bg-white dark:bg-gray-900 group cursor-pointer hover:scale-105`}
                  onClick={() => handleTicketSelect(ticket.id)}
                >
                  {ticket.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-visualcraft-600 text-white flex items-center gap-1 px-4 py-1 shadow-lg hover:bg-visualcraft-700">
                        <Sparkles className="w-3 h-3" />
                        Más popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="space-y-4 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-visualcraft-100 dark:bg-visualcraft-900 text-visualcraft-600 dark:text-visualcraft-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2 text-gray-900 dark:text-white">{ticket.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                        {ticket.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <ul className="space-y-3">
                      {ticket.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-visualcraft-600 hover:bg-visualcraft-700 text-white group-hover:shadow-xl transition-all"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleTicketSelect(ticket.id)
                      }}
                    >
                      Solicitar Presupuesto
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-visualcraft-600 to-visualcraft-500 border-0 text-white max-w-4xl mx-auto visualcraft-glow">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4">¿No encontrás lo que buscás?</h3>
              <p className="text-xl mb-6 text-visualcraft-50">
                Cada restaurante es único. Contanos tu idea y armamos una solución personalizada.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-visualcraft-600 hover:bg-visualcraft-50 shadow-xl"
                onClick={() => {
                  setSelectedTicket("consulta-personalizada")
                  setIsModalOpen(true)
                }}
              >
                Consulta Personalizada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedTicket(null)
        }}
        preselectedService={selectedTicket || undefined}
      />
    </section>
  )
}
