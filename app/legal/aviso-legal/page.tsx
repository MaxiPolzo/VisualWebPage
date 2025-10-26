import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Aviso Legal</h1>
              <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString()}</p>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>1. Datos Identificativos</h2>
                <p>
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio,
                  de Servicios de la Sociedad de la Información y del Comercio Electrónico, le informamos de los
                  siguientes datos:
                </p>
                <ul>
                  <li>
                    <strong>Denominación social:</strong> VisualCraft Agency
                  </li>
                  <li>
                    <strong>Domicilio:</strong> Madrid, España
                  </li>
                  <li>
                    <strong>Email:</strong> infovisualcraftag@gmail.com
                  </li>
                  <li>
                    <strong>Sitio web:</strong> visualcraft.com
                  </li>
                </ul>

                <h2>2. Objeto</h2>
                <p>
                  El presente sitio web tiene por objeto facilitar al público en general el conocimiento de las
                  actividades que esta organización realiza y de los servicios que presta, así como permitir la
                  comunicación con los usuarios a través de los medios habilitados al efecto.
                </p>

                <h2>3. Condiciones de Uso</h2>
                <p>
                  El acceso y uso de este sitio web se rige por las condiciones que se detallan a continuación, así como
                  por la legislación aplicable. El acceso al sitio web es gratuito salvo en lo relativo al coste de la
                  conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado
                  por los usuarios.
                </p>

                <h2>4. Responsabilidades</h2>
                <p>
                  VisualCraft Agency no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran
                  deberse a la falta de disponibilidad o de continuidad del funcionamiento del sitio web, a la
                  defraudación de la utilidad que los usuarios hubieren podido atribuir al sitio web.
                </p>

                <h2>5. Propiedad Intelectual</h2>
                <p>
                  Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos,
                  fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos
                  fuente, constituyen una obra cuya propiedad pertenece a VisualCraft Agency.
                </p>

                <h2>6. Protección de Datos</h2>
                <p>
                  Para utilizar algunos de los servicios, los usuarios deben facilitar previamente ciertos datos de
                  carácter personal. VisualCraft Agency tratará automatizadamente estos datos y aplicará las
                  correspondientes medidas de seguridad, todo ello en cumplimiento del RGPD y demás legislación
                  aplicable.
                </p>

                <h2>7. Cookies</h2>
                <p>
                  Este sitio web utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle
                  publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Para
                  más información, consulte nuestra Política de Cookies.
                </p>

                <h2>8. Enlaces</h2>
                <p>
                  En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de
                  Internet, VisualCraft Agency no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
                </p>

                <h2>9. Modificaciones</h2>
                <p>
                  VisualCraft Agency se reserva el derecho de efectuar sin previo aviso las modificaciones que considere
                  oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se
                  presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
                </p>

                <h2>10. Legislación Aplicable</h2>
                <p>
                  Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
                  conflicto que pueda surgir con ocasión de la visita al sitio web o del uso de los servicios que en él
                  se puedan ofertar, será de aplicación la legislación española.
                </p>

                <h2>11. Contacto</h2>
                <p>
                  Para cualquier consulta sobre este aviso legal, puede contactarnos en: infovisualcraftag@gmail.com
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
