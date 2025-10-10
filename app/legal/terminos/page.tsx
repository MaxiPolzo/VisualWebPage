"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Términos y Condiciones
              </motion.h1>
              <motion.p
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Última actualización: {new Date().toLocaleDateString("es-AR")}
              </motion.p>

              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">1. Información General</h2>
                  <p className="text-blue-700 dark:text-blue-300">
                    Estos términos y condiciones regulan el uso de los servicios ofrecidos por VisualCraft Agency, con
                    domicilio en Buenos Aires, Argentina. Al contratar nuestros servicios, usted acepta estos términos
                    en su totalidad.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">2. Servicios Ofrecidos</h2>
                  <p className="mb-4">VisualCraft Agency ofrece los siguientes servicios profesionales:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Desarrollo de sitios web simples y complejos</li>
                    <li>Diseño web responsive y moderno</li>
                    <li>Servicios de hosting y dominio</li>
                    <li>Mantenimiento y soporte técnico</li>
                    <li>SEO y marketing digital</li>
                    <li>Consultoría en transformación digital</li>
                  </ul>
                  <p className="mt-4">
                    Los detalles específicos de cada servicio se especifican en el presupuesto correspondiente.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">3. Precios y Condiciones de Pago</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3.1 Precios</h3>
                      <p>
                        Los precios están expresados en pesos argentinos (ARS) y no incluyen IVA (21%). Los precios
                        pueden variar según la complejidad del proyecto y los requerimientos específicos del cliente.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3.2 Formas de Pago</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Transferencia bancaria</li>
                        <li>Tarjeta de crédito/débito (a través de Stripe)</li>
                        <li>MercadoPago</li>
                        <li>Efectivo (solo en Buenos Aires)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3.3 Planes de Pago</h3>
                      <p>
                        Para proyectos superiores a $100.000 ARS, ofrecemos planes de pago personalizados con un
                        adelanto mínimo del 50%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">4. Plazos de Entrega y Desarrollo</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4.1 Plazos Estimados</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Web Simple: 3-5 días hábiles</li>
                        <li>Web Compleja: 10-15 días hábiles</li>
                        <li>E-commerce: 15-20 días hábiles</li>
                        <li>Aplicaciones personalizadas: 20-30 días hábiles</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4.2 Factores que Afectan los Plazos</h3>
                      <p>
                        Los plazos pueden variar según la disponibilidad de contenidos por parte del cliente, cambios en
                        los requerimientos, y la complejidad técnica del proyecto. Los retrasos causados por el cliente
                        no serán responsabilidad de VisualCraft Agency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">5. Propiedad Intelectual y Derechos</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5.1 Derechos del Cliente</h3>
                      <p>
                        Una vez completado el pago total del proyecto, el cliente adquiere los derechos de uso del sitio
                        web y su contenido personalizado.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5.2 Derechos de VisualCraft</h3>
                      <p>
                        VisualCraft Agency se reserva el derecho de utilizar el proyecto en su portafolio y como
                        referencia comercial, respetando la confidencialidad de datos sensibles del cliente.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">5.3 Código Fuente</h3>
                      <p>
                        El código fuente desarrollado específicamente para el cliente le pertenece una vez completado el
                        pago. Los frameworks, librerías y herramientas de terceros mantienen sus licencias originales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">6. Garantías y Soporte</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">6.1 Garantía de Funcionamiento</h3>
                      <p>
                        Ofrecemos garantía de 30 días para corrección de errores técnicos y bugs que impidan el
                        funcionamiento normal del sitio web.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">6.2 Soporte Técnico</h3>
                      <p>
                        Incluimos soporte técnico gratuito por 30 días después de la entrega del proyecto para consultas
                        y problemas técnicos.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">6.3 Limitaciones</h3>
                      <p>
                        No nos hacemos responsables de daños indirectos, pérdidas de beneficios, o problemas derivados
                        del mal uso del sitio web por parte del cliente o terceros.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">7. Modificaciones y Cancelaciones</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">7.1 Modificaciones del Proyecto</h3>
                      <p>
                        Las modificaciones sustanciales al proyecto original pueden generar costos adicionales y
                        extensión de plazos, que serán acordados previamente con el cliente.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">7.2 Cancelación por el Cliente</h3>
                      <p>
                        El cliente puede cancelar el proyecto en cualquier momento. Se facturará el trabajo realizado
                        hasta la fecha de cancelación, con un mínimo del 30% del valor total del proyecto.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">7.3 Cancelación por VisualCraft</h3>
                      <p>
                        Nos reservamos el derecho de cancelar un proyecto en caso de incumplimiento de pago, falta de
                        colaboración del cliente, o solicitudes que vayan contra nuestros principios éticos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">8. Confidencialidad y Protección de Datos</h2>
                  <p>
                    Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por el
                    cliente. Cumplimos con las normativas de protección de datos personales vigentes en Argentina y
                    aplicamos medidas de seguridad apropiadas para proteger la información.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-4">9. Legislación Aplicable y Jurisdicción</h2>
                  <p>
                    Estos términos se rigen por la legislación argentina. Para la resolución de cualquier conflicto, las
                    partes se someten a la jurisdicción de los tribunales de la Ciudad Autónoma de Buenos Aires,
                    Argentina.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                    10. Contacto y Consultas
                  </h2>
                  <p className="text-green-700 dark:text-green-300 mb-4">
                    Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                    <li>Email: infovisualcraftag@gmail.com</li>
                    <li>Ubicación: Buenos Aires, Argentina</li>
                    <li>Sitio web: visualcraft.com</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <h2 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">
                    11. Modificaciones de los Términos
                  </h2>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
                    entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad
                    del cliente revisar periódicamente estos términos.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
