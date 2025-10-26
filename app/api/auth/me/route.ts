import { NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return NextResponse.json({ success: false, error: "No autenticado" }, { status: 401 })
    }

    const payload = await verifyToken(token)

    if (!payload || !payload.user) {
      return NextResponse.json({ success: false, error: "Token inválido" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user: payload.user,
    })
  } catch (error) {
    console.error("Auth me error:", error)
    return NextResponse.json({ success: false, error: "Error en el servidor" }, { status: 500 })
  }
}
