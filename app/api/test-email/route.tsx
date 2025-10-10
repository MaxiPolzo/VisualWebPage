import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
    }

    console.log("🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Configurada ✓" : "NO CONFIGURADA ✗")
    console.log("📧 Enviando email de prueba a:", email)

    const { data, error } = await resend.emails.send({
      from: "VisualCraft Test <onboarding@resend.dev>",
      to: [email],
      subject: "🧪 Email de Prueba - VisualCraft",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #5B47E5, #8B5CF6);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px;
                margin-bottom: 20px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 10px;
              }
              .success {
                background: #D1FAE5;
                border-left: 4px solid #10B981;
                padding: 15px;
                margin-top: 20px;
                border-radius: 5px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🎉 ¡Resend está funcionando!</h1>
            </div>
            <div class="content">
              <p>Este es un email de prueba de <strong>VisualCraft</strong>.</p>
              <p>Si estás viendo este mensaje, significa que:</p>
              <div class="success">
                ✅ Tu API Key de Resend está configurada correctamente<br>
                ✅ Los emails se están enviando sin problemas<br>
                ✅ El email ${email} está verificado
              </div>
              <p style="margin-top: 20px; color: #666; font-size: 14px;">
                Hora de envío: ${new Date().toLocaleString("es-AR")}
              </p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("❌ Error de Resend:", error)
      return NextResponse.json(
        {
          error: "Error al enviar email",
          details: error,
        },
        { status: 500 },
      )
    }

    console.log("✅ Email enviado exitosamente:", data)

    return NextResponse.json({
      success: true,
      message: "Email enviado correctamente",
      id: data?.id,
      data,
    })
  } catch (error: any) {
    console.error("❌ Error general:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
