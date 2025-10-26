import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidad</h1>
              <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Información que Recopilamos</h2>
                <p>
                  En VisualCraft Agency recopilamos información que usted nos proporciona directamente, como cuando se
                  pone en contacto con nosotros a través de nuestro formulario de contacto o por email.
                </p>

                <h3>Información Personal</h3>
                <ul>
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Mensaje o consulta</li>
                </ul>

                <h2>2. Cómo Utilizamos su Información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                  <li>Responder a sus consultas y solicitudes</li>
                  <li>Proporcionar nuestros servicios</li>
                  <li>Enviar información sobre nuestros servicios (solo si lo autoriza)</li>
                  <li>Mejorar nuestros servicios y sitio web</li>
                </ul>

                <h2>3. Compartir Información</h2>
                <p>
                  No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento,
                  excepto en los casos descritos en esta política.
                </p>

                <h2>4. Cookies</h2>
                <p>
                  Nuestro sitio web utiliza cookies para mejorar su experiencia. Puede configurar su navegador para
                  rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>

                <h2>5. Seguridad</h2>
                <p>
                  Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no
                  autorizado, alteración, divulgación o destrucción.
                </p>

                <h2>6. Sus Derechos</h2>
                <p>Según el RGPD, usted tiene derecho a:</p>
                <ul>
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al tratamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                </ul>

                <h2>7. Contacto</h2>
                <p>
                  Para ejercer sus derechos o realizar consultas sobre esta política, puede contactarnos en:
                  infovisualcraftag@gmail.com
                </p>

                <h2>8. Cambios en esta Política</h2>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios serán publicados en
                  esta página con la fecha de actualización correspondiente.
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
