import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VisualCraft Agency - Soluciones Web Profesionales",
    short_name: "VisualCraft",
    description: "Creamos las mejores páginas web para tu negocio. Desarrollo, hosting y mantenimiento incluidos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4834c4",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
