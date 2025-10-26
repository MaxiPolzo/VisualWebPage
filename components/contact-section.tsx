"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"
import { sendContactForm } from "@/lib/actions"
import { motion } from "framer-motion"

const services = [
  { id: "web-profesional", name: "Página Web Profesional" },
  { id: "menu-digital-qr", name: "Menú Digital con QR" },
  { id: "resenas-automatizadas", name: "Reseñas Automatizadas" },
  { id: "reservas-online", name: "Reservas Online" },
  { id: "fidelizacion", name: "Campañas de Fidelización" },
  { id: "rastreo-automatizado", name: "Rastreo Automatizado" },
  { id: "consulta-personalizada", name: "Consulta Personalizada" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await sendContactForm(formData)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900 dark:text-white">Hablemos de tu </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine-600 to-terracotta-600 dark:from-wine-400 dark:to-terracotta-400">
                  proyecto
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Completá el formulario y recibí un presupuesto personalizado en menos de 24 horas. Sin compromisos.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-2 border-wine-200 dark:border-wine-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-wine-100 dark:bg-wine-900 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-wine-600 dark:text-wine-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Email</h3>
                      <a
                        href="mailto:infovisualcraftag@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-wine-600 dark:hover:text-wine-400 transition-colors"
                      >
                        infovisualcraftag@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-terracotta-200 dark:border-terracotta-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-terracotta-100 dark:bg-terracotta-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Ubicación</h3>
                      <p className="text-gray-600 dark:text-gray-400">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-olive-200 dark:border-olive-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-olive-100 dark:bg-olive-900 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-olive-600 dark:text-olive-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Horario de Atención</h3>
                      <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600 dark:text-gray-400">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Message */}
            <div className="bg-wine-50 dark:bg-wine-950/30 rounded-xl p-6 border border-wine-200 dark:border-wine-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-2 animate-pulse" />
                <span>
                  <strong>Respuesta garantizada en 24 horas.</strong> Revisamos todos los mensajes y respondemos con un
                  presupuesto detallado adaptado a tu restaurante.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
              <CardContent className="p-8">
                {submitStatus === "success" ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">¡Mensaje enviado!</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                      Gracias por tu interés en VisualCraft. Nos pondremos en contacto en las próximas 24 horas con un
                      presupuesto personalizado.
                    </p>
                    <Button
                      onClick={() => setSubmitStatus("idle")}
                      className="bg-wine-600 hover:bg-wine-700 text-white mt-4"
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900 dark:text-white">
                        Nombre Completo <span className="text-wine-600">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Juan Pérez"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email <span className="text-wine-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="juan@turestaurante.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-gray-900 dark:text-white">
                        WhatsApp <span className="text-gray-500 text-sm">(opcional)</span>
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="+54 9 11 1234-5678"
                        value={formData.whatsapp}
                        onChange={(e) => handleChange("whatsapp", e.target.value)}
                        className="border-gray-300 dark:border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-900 dark:text-white">
                        ¿Qué servicio te interesa? <span className="text-wine-600">*</span>
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                        required
                      >
                        <SelectTrigger className="border-gray-300 dark:border-gray-700">
                          <SelectValue placeholder="Seleccioná un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 dark:text-white">
                        Contanos sobre tu proyecto <span className="text-gray-500 text-sm">(opcional)</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Ej: Tengo una parrilla en Palermo y necesito un menú digital con fotos de los platos..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="border-gray-300 dark:border-gray-700 resize-none"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <div className="text-sm text-red-800 dark:text-red-200">
                          Hubo un error al enviar el mensaje. Por favor, intentá nuevamente o escribinos directamente a{" "}
                          <a
                            href="mailto:infovisualcraftag@gmail.com"
                            className="underline font-semibold hover:text-red-900 dark:hover:text-red-100"
                          >
                            infovisualcraftag@gmail.com
                          </a>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-wine-600 hover:bg-wine-700 text-white py-6 text-lg"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Solicitud
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      Al enviar este formulario, aceptás nuestra{" "}
                      <Link href="/legal/privacidad" className="underline hover:text-wine-600 dark:hover:text-wine-400">
                        política de privacidad
                      </Link>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
