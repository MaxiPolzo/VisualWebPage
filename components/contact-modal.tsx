"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactForm } from "@/lib/actions"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
}

const services = [
  { id: "web-profesional", name: "Página Web Profesional" },
  { id: "menu-digital-qr", name: "Menú Digital con QR" },
  { id: "resenas-automatizadas", name: "Reseñas Automatizadas" },
  { id: "reservas-online", name: "Reservas Online" },
  { id: "fidelizacion", name: "Campañas de Fidelización" },
  { id: "rastreo-automatizado", name: "Rastreo Automatizado" },
  { id: "consulta-personalizada", name: "Consulta Personalizada" },
]

export function ContactModal({ isOpen, onClose, preselectedService }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: preselectedService || "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await sendContactForm(formData)
      setSubmitStatus("success")
      setTimeout(() => {
        onClose()
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          service: "",
          message: "",
        })
        setSubmitStatus("idle")
      }, 3000)
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">Solicitar Presupuesto</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Completá el formulario y nos pondremos en contacto en menos de 24 horas
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">¡Mensaje enviado!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gracias por tu interés. Nos pondremos en contacto pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
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

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 dark:text-white">
                Email <span className="text-wine-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="juan@restaurante.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border-gray-300 dark:border-gray-700"
              />
            </div>

            {/* WhatsApp */}
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

            {/* Service */}
            <div className="space-y-2">
              <Label htmlFor="service" className="text-gray-900 dark:text-white">
                Servicio que te interesa <span className="text-wine-600">*</span>
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
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

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-900 dark:text-white">
                Mensaje <span className="text-gray-500 text-sm">(opcional)</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Contanos más sobre tu restaurante y lo que necesitás..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="border-gray-300 dark:border-gray-700 resize-none"
              />
            </div>

            {/* Error Message */}
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

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 bg-transparent"
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-wine-600 hover:bg-wine-700 text-white">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Solicitud"
                )}
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Al enviar este formulario, aceptás nuestra{" "}
              <a href="/legal/privacidad" className="underline hover:text-wine-600 dark:hover:text-wine-400">
                política de privacidad
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
