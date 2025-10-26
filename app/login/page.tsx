"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success && data.user) {
        // Redirigir según el rol
        if (data.user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/cliente")
        }
      } else {
        setError(data.error || "Error al iniciar sesión")
      }
    } catch (err) {
      setError("Error de conexión. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-visualcraft-50 via-white to-visualcraft-100 p-4">
      <Card className="w-full max-w-md border-visualcraft-200 shadow-2xl">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="relative w-48 h-16">
              <Image src="/logo.png" alt="VisualCraft Agency" fill className="object-contain" priority />
            </div>
          </div>
          <CardTitle className="text-2xl text-center text-visualcraft-600">Iniciar Sesión</CardTitle>
          <CardDescription className="text-center">Accede a tu panel de control de VisualCraft</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="border-visualcraft-200 focus:border-visualcraft-500 focus:ring-visualcraft-500"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-visualcraft-500 hover:bg-visualcraft-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-visualcraft-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-visualcraft-500">Credenciales de Prueba</span>
              </div>
            </div>

            <div className="space-y-2 text-sm bg-visualcraft-50 p-4 rounded-lg border border-visualcraft-200">
              <div>
                <p className="font-semibold text-visualcraft-700">Admin:</p>
                <p className="text-visualcraft-600">Email: infovisualcraftag@gmail.com</p>
                <p className="text-visualcraft-600">Contraseña: VISUALVISUALVISUAL</p>
              </div>
              <div className="pt-2 border-t border-visualcraft-200">
                <p className="font-semibold text-visualcraft-700">Cliente:</p>
                <p className="text-visualcraft-600">Email: prueba1@gmail.com</p>
                <p className="text-visualcraft-600">Contraseña: VISUALVISUALVISUAL</p>
              </div>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">¿No tienes cuenta? </span>
              <Link href="/solicitar-acceso" className="text-visualcraft-600 hover:text-visualcraft-700 font-medium">
                Solicitar acceso
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
