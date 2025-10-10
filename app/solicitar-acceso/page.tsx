"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2, ArrowLeft } from "lucide-react"

export default function SolicitarAccesoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant_name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/access-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        setError(data.error || "Error al enviar la solicitud")
      }
    } catch (err) {
      setError("Error de conexión. Por favor, intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-visualcraft-50 via-white to-visualcraft-100 p-4">
        <Card className="w-full max-w-md border-visualcraft-200 shadow-2xl">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-visualcraft-600">¡Solicitud Enviada!</h2>
              <p className="text-gray-600">
                Hemos recibido tu solicitud. Te contactaremos pronto para darte acceso a tu panel de cliente.
              </p>
              <Button onClick={() => router.push("/")} className="bg-visualcraft-500 hover:bg-visualcraft-600">
                Volver al Inicio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-visualcraft-50 via-white to-visualcraft-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-visualcraft-600 hover:text-visualcraft-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <Card className="border-visualcraft-200 shadow-2xl">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <div className="relative w-48 h-16">
                <Image src="/logo.png" alt="VisualCraft Agency" fill className="object-contain" priority />
              </div>
            </div>
            <CardTitle className="text-3xl text-center text-visualcraft-600">Solicitar Acceso</CardTitle>
            <CardDescription className="text-center text-lg">
              Completa el formulario y nos pondremos en contacto contigo para crear tu cuenta
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="restaurant_name">Nombre del Restaurante *</Label>
                <Input
                  id="restaurant_name"
                  name="restaurant_name"
                  placeholder="La Parrilla de Pepe"
                  value={formData.restaurant_name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (Opcional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+34 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (Opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500 resize-none"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full bg-visualcraft-500 hover:bg-visualcraft-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando solicitud...
                  </>
                ) : (
                  "Enviar Solicitud"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="text-visualcraft-600 hover:text-visualcraft-700 font-medium">
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
