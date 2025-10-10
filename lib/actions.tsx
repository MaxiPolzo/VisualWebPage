"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().optional(),
  service: z.string().min(1, "Debe seleccionar un servicio"),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const serviceNames = {
  "web-profesional": "Página Web Profesional",
  "menu-digital-qr": "Menú Digital con QR",
  "reseñas-automatizadas": "Reseñas Automatizadas",
  "reservas-online": "Reservas Online",
  fidelizacion: "Campañas de Fidelización",
  "rastreo-automatizado": "Rastreo Automatizado",
  "consulta-personalizada": "Consulta Personalizada",
}

export async function sendContactForm(data: ContactFormData) {
  try {
    // Validar los datos
    const validatedData = contactFormSchema.parse(data)
    const serviceName = serviceNames[validatedData.service as keyof typeof serviceNames] || validatedData.service

    console.log("📧 Intentando enviar email a:", "infovisualcraftag@gmail.com")
    console.log("📝 Datos del formulario:", validatedData)

    // Enviar email al administrador
    const { data: emailData, error } = await resend.emails.send({
      from: "VisualCraft <onboarding@resend.dev>",
      to: ["infovisualcraftag@gmail.com"],
      subject: `Nueva consulta gastronómica - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fcfcf8; padding: 20px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #5B47E5; margin: 0; font-size: 28px;">🍽️ Nueva Consulta Gastronómica</h1>
            <p style="color: #8B5CF6; margin: 10px 0 0 0; font-size: 16px;">VisualCraft - Especialistas en Restaurantes</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #5B47E5;">
            <h2 style="color: #5B47E5; margin-top: 0;">Información del Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6; width: 120px;">Nombre:</td>
                <td style="padding: 8px 0; color: #191917;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Email:</td>
                <td style="padding: 8px 0; color: #191917;">${validatedData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">WhatsApp:</td>
                <td style="padding: 8px 0; color: #191917;">${validatedData.whatsapp || "No proporcionado"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #8B5CF6;">Servicio:</td>
                <td style="padding: 8px 0; color: #191917; font-weight: bold;">${serviceName}</td>
              </tr>
            </table>
          </div>

          ${
            validatedData.message
              ? `
          <div style="background: #f5f5f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8B5CF6; margin-top: 0;">Mensaje del Cliente:</h3>
            <p style="color: #191917; line-height: 1.6; margin: 0;">${validatedData.message}</p>
          </div>
          `
              : ""
          }

          <div style="background: #5B47E5; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-weight: bold;">⏰ Responder en las próximas 24 horas</p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e0;">
            <p style="color: #737373; font-size: 12px; margin: 0;">
              VisualCraft Agency - Soluciones Digitales para Restaurantes<br>
              Buenos Aires, Argentina | infovisualcraftag@gmail.com
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("❌ Error al enviar email:", error)
      throw new Error(`Error de Resend: ${JSON.stringify(error)}`)
    }

    console.log("✅ Email enviado exitosamente:", emailData)

    // Enviar confirmación al cliente
    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: "VisualCraft <onboarding@resend.dev>",
      to: validatedData.email,
      subject: "¡Recibimos tu consulta! - VisualCraft Gastronómico",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fcfcf8; padding: 20px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #5B47E5; margin: 0; font-size: 28px;">🍽️ ¡Gracias por contactarnos!</h1>
            <p style="color: #8B5CF6; margin: 10px 0 0 0; font-size: 16px;">VisualCraft - Especialistas en Restaurantes</p>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #191917; font-size: 16px; line-height: 1.6;">Hola <strong>${validatedData.name}</strong>,</p>
            <p style="color: #191917; line-height: 1.6;">
              Hemos recibido tu consulta sobre <strong style="color: #5B47E5;">${serviceName}</strong> y nos pondremos en contacto contigo en las próximas 24 horas.
            </p>
            <p style="color: #191917; line-height: 1.6;">
              Nuestro equipo especializado en soluciones gastronómicas revisará tu solicitud y te enviará una propuesta personalizada para tu restaurante.
            </p>
          </div>

          <div style="background: #5B47E5; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">🚀 Mientras tanto...</h3>
            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Prepara información sobre tu restaurante</li>
              <li>Piensa en tus objetivos digitales</li>
              <li>Revisa nuestros otros servicios en nuestra web</li>
            </ul>
          </div>

          <div style="background: #f5f5f0; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #8B5CF6; margin: 0 0 10px 0;">¿Tienes alguna urgencia?</h3>
            <p style="color: #191917; margin: 0;">
              Escríbenos directamente a: <strong>infovisualcraftag@gmail.com</strong>
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e0;">
            <p style="color: #5B47E5; font-weight: bold; margin: 0 0 10px 0;">
              VisualCraft Agency
            </p>
            <p style="color: #737373; font-size: 12px; margin: 0;">
              Especialistas en Soluciones Digitales para Restaurantes<br>
              Buenos Aires, Argentina | infovisualcraftag@gmail.com
            </p>
          </div>
        </div>
      `,
    })

    if (confirmError) {
      console.error("⚠️ Error al enviar confirmación al cliente:", confirmError)
      // No lanzamos error aquí porque el email principal ya se envió
    } else {
      console.log("✅ Email de confirmación enviado:", confirmData)
    }

    return { success: true }
  } catch (error) {
    console.error("❌ Error general al enviar el formulario:", error)
    throw error
  }
}
