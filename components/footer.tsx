"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block logo-animate">
              <Image src="/logo.png" alt="VisualCraft Agency" width={200} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Especialistas en transformación digital para restaurantes en Argentina. Aumentá tus ventas con tecnología.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-visualcraft-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-visualcraft-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-visualcraft-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Página Web Profesional
                </Link>
              </li>
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Menú Digital con QR
                </Link>
              </li>
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Reseñas Automatizadas
                </Link>
              </li>
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Reservas Online
                </Link>
              </li>
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Campañas de Fidelización
                </Link>
              </li>
              <li>
                <Link href="/#tickets" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Rastreo Automatizado
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm hover:text-visualcraft-400 transition-colors">
                  Acceso Clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-visualcraft-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:infovisualcraftag@gmail.com"
                  className="text-sm hover:text-visualcraft-400 transition-colors break-all"
                >
                  infovisualcraftag@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-visualcraft-400 shrink-0 mt-0.5" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {currentYear} VisualCraft Agency. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/legal/terminos"
                className="text-sm text-gray-400 hover:text-visualcraft-400 transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/legal/privacidad"
                className="text-sm text-gray-400 hover:text-visualcraft-400 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/legal/aviso-legal"
                className="text-sm text-gray-400 hover:text-visualcraft-400 transition-colors"
              >
                Aviso Legal
              </Link>
              <Link
                href="/legal/cookies"
                className="text-sm text-gray-400 hover:text-visualcraft-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
