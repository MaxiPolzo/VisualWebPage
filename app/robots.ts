import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/cliente/", "/_next/", "/success/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
