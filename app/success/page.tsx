"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const total = searchParams.get("total")

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">¡Pago Completado!</h1>

        {total && (
          <div className="bg-primary/10 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground">Total pagado:</p>
            <p className="text-2xl font-bold text-primary">{total}€</p>
          </div>
        )}

        <p className="text-muted-foreground mb-6">
          Gracias por tu compra. Hemos recibido tu pago y nos pondremos en contacto contigo en breve para comenzar con
          tu proyecto.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-center mb-2">
            <Mail className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-800 dark:text-blue-200">Próximos pasos</span>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Te enviaremos un email con los detalles del proyecto y el cronograma de trabajo en las próximas 24 horas.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/">Volver al Inicio</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/contacto">Contactar con Soporte</Link>
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Recibirás un email de confirmación en breve. Si tienes alguna pregunta, no dudes en contactarnos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
