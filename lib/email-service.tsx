import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendAccessRequestEmail(data: {
  name: string
  email: string
  restaurant_name: string
  phone?: string
  message?: string
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "VisualCraft <onboarding@resend.dev>",
      to: ["infovisualcraftag@gmail.com"],
      subject: `Nueva Solicitud de Acceso - ${data.restaurant_name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #5B47E5, #8B5CF6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #5B47E5; }
              .value { color: #333; }
              .button { display: inline-block; padding: 12px 30px; background: #5B47E5; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🍽️ Nueva Solicitud de Acceso</h1>
              </div>
              <div class="content">
                <p>Has recibido una nueva solicitud de acceso al panel de clientes.</p>
                
                <div class="field">
                  <span class="label">Nombre:</span>
                  <span class="value">${data.name}</span>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${data.email}</span>
                </div>
                
                <div class="field">
                  <span class="label">Restaurante:</span>
                  <span class="value">${data.restaurant_name}</span>
                </div>
                
                ${
                  data.phone
                    ? `
                <div class="field">
                  <span class="label">Teléfono:</span>
                  <span class="value">${data.phone}</span>
                </div>
                `
                    : ""
                }
                
                ${
                  data.message
                    ? `
                <div class="field">
                  <span class="label">Mensaje:</span>
                  <div class="value" style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    ${data.message}
                  </div>
                </div>
                `
                    : ""
                }
                
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin" class="button">
                  Ver en Panel Admin
                </a>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export async function sendWelcomeEmail(email: string, name: string, tempPassword: string) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "VisualCraft <onboarding@resend.dev>",
      to: [email],
      subject: "¡Bienvenido a VisualCraft! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #5B47E5, #8B5CF6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .credentials { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #5B47E5; }
              .button { display: inline-block; padding: 12px 30px; background: #5B47E5; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
              .warning { background: #FEF3C7; padding: 15px; border-radius: 5px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Bienvenido a VisualCraft! 🎉</h1>
              </div>
              <div class="content">
                <p>Hola ${name},</p>
                <p>Tu solicitud de acceso ha sido aprobada. Ya puedes acceder a tu panel de cliente.</p>
                
                <div class="credentials">
                  <h3>Tus credenciales de acceso:</h3>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Contraseña temporal:</strong> ${tempPassword}</p>
                </div>
                
                <div class="warning">
                  ⚠️ <strong>Importante:</strong> Te recomendamos cambiar tu contraseña después del primer inicio de sesión.
                </div>
                
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/login" class="button">
                  Iniciar Sesión
                </a>
                
                <p style="margin-top: 30px; color: #666; font-size: 14px;">
                  Si tienes alguna pregunta, no dudes en contactarnos.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Error sending welcome email:", error)
      return { success: false, error }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending welcome email:", error)
    return { success: false, error }
  }
}
