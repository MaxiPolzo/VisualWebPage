"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestEmailPage() {
  const [email, setEmail] = useState("infovisualcraftag@gmail.com")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  async function handleTest() {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error: any) {
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-visualcraft-50 to-visualcraft-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-visualcraft-600">🧪 Prueba de Email - Resend</CardTitle>
          <CardDescription>Verifica que tu configuración de Resend está funcionando correctamente</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email de destino (debe estar verificado en Resend)
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-email@ejemplo.com"
              className="w-full"
            />
            <p className="text-xs text-gray-500">💡 Tip: Usa el email que registraste en Resend para evitar errores</p>
          </div>

          <Button
            onClick={handleTest}
            disabled={loading || !email}
            className="w-full bg-visualcraft-600 hover:bg-visualcraft-700"
          >
            {loading ? "📤 Enviando..." : "📧 Enviar Email de Prueba"}
          </Button>

          {result && (
            <Card className={result.success ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}>
              <CardContent className="pt-6">
                {result.success ? (
                  <div className="space-y-2">
                    <p className="text-green-800 font-semibold flex items-center gap-2">
                      ✅ Email enviado exitosamente
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
                      <p className="text-sm text-gray-700">
                        <strong>ID del email:</strong> {result.id}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Revisa tu bandeja de entrada (y spam) en {email}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-red-800 font-semibold flex items-center gap-2">❌ Error al enviar email</p>
                    <div className="bg-white p-4 rounded-lg border border-red-200 mt-4">
                      <pre className="text-xs text-red-700 overflow-auto">
                        {JSON.stringify(result.error || result.details, null, 2)}
                      </pre>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Posibles soluciones:</strong>
                      </p>
                      <ul className="text-xs text-yellow-700 mt-2 space-y-1 list-disc list-inside">
                        <li>Verifica que el email esté registrado en Resend</li>
                        <li>Revisa que tu API Key sea correcta</li>
                        <li>Asegúrate de haber verificado el email en Resend</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-blue-900 mb-2">📋 Checklist de Configuración</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  API Key configurada: re_89UXvbSM_FuU5u1c2tEzsT9T2YNn6t8Wt
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-600">⚠️</span>
                  Email debe estar verificado en Resend
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">ℹ️</span>
                  Usando dominio: onboarding@resend.dev
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <a
              href="https://resend.com/emails"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-visualcraft-600 hover:underline"
            >
              🔗 Ver logs en Resend Dashboard →
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
