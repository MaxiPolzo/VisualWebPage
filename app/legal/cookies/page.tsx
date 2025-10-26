import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Cookies</h1>
              <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio
                  web. Nos ayudan a hacer que el sitio web funcione correctamente y de manera más eficiente.
                </p>

                <h2>Tipos de Cookies que Utilizamos</h2>

                <h3>Cookies Esenciales</h3>
                <p>
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                  Incluyen:
                </p>
                <ul>
                  <li>Cookies de sesión para mantener su navegación</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de tema (claro/oscuro)</li>
                </ul>

                <h3>Cookies de Rendimiento</h3>
                <p>Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:</p>
                <ul>
                  <li>Google Analytics (si está configurado)</li>
                  <li>Métricas de velocidad de carga</li>
                  <li>Información sobre errores técnicos</li>
                </ul>

                <h3>Cookies de Funcionalidad</h3>
                <p>Estas cookies permiten que el sitio web recuerde sus elecciones:</p>
                <ul>
                  <li>Preferencias de idioma</li>
                  <li>Configuración de tema</li>
                  <li>Contenido del carrito de compras</li>
                </ul>

                <h2>Gestión de Cookies</h2>
                <p>
                  Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en
                  su dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen.
                </p>

                <h3>Configuración del Navegador</h3>
                <ul>
                  <li>
                    <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos del sitio
                  </li>
                  <li>
                    <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web
                  </li>
                  <li>
                    <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
                  </li>
                </ul>

                <h2>Cookies de Terceros</h2>
                <p>Algunos servicios de terceros que utilizamos pueden establecer sus propias cookies:</p>
                <ul>
                  <li>Google Analytics (para análisis de tráfico)</li>
                  <li>Stripe (para procesamiento de pagos)</li>
                  <li>Resend (para envío de emails)</li>
                </ul>

                <h2>Consentimiento</h2>
                <p>
                  Al continuar navegando en nuestro sitio web, usted acepta el uso de cookies según se describe en esta
                  política. Puede retirar su consentimiento en cualquier momento modificando la configuración de su
                  navegador.
                </p>

                <h2>Contacto</h2>
                <p>
                  Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
                  infovisualcraftag@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
