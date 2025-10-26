import { NextResponse } from "next/server"
import { createAccessRequest } from "@/lib/access-requests"
import { sendAccessRequestEmail } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, restaurant_name, phone, message } = body

    if (!name || !email || !restaurant_name) {
      return NextResponse.json({ success: false, error: "Datos incompletos" }, { status: 400 })
    }

    const result = await createAccessRequest({
      name,
      email,
      restaurant_name,
      phone,
      message,
    })

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    // Enviar email de notificación
    await sendAccessRequestEmail({
      name,
      email,
      restaurant_name,
      phone,
      message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error creating access request:", error)
    return NextResponse.json({ success: false, error: "Error en el servidor" }, { status: 500 })
  }
}
