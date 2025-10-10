import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  // Páginas estáticas principales
  const staticPages = [
    "",
    "/sobre-nosotros",
    "/servicios",
    "/portafolio",
    "/precios",
    "/contacto",
    "/login",
    "/solicitar-acceso",
  ]

  // Páginas de servicios
  const servicePages = [
    "/servicios/web-simple",
    "/servicios/web-compleja",
    "/servicios/desarrollo-hosting",
    "/servicios/mantenimiento",
    "/servicios/seo-marketing",
  ]

  // Páginas legales
  const legalPages = ["/legal/terminos", "/legal/privacidad", "/legal/cookies", "/legal/aviso-legal"]

  const allPages = [...staticPages, ...servicePages, ...legalPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : page.includes("/servicios") ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.includes("/servicios") ? 0.8 : 0.5,
  }))
}
