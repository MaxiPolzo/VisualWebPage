export function getOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VisualCraft",
    description: "Especialistas en desarrollo web, e-commerce y marketing digital para restaurantes",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/images/hero-bg.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["Spanish"],
    },
    sameAs: [
      // Añade aquí tus redes sociales cuando las tengas
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
  }
}

export function getWebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VisualCraft",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/servicios?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  price?: string
  url: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "VisualCraft",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    url: `${baseUrl}${service.url}`,
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "USD",
      },
    }),
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://visualcraft.com"

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}
