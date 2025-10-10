"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { useToast } from "@/hooks/use-toast"

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const plans = [
    {
      id: "web-simple",
      name: "Web Simple",
      price: 499,
      description: "Ideal para pequeños negocios que buscan establecer su presencia online",
      features: ["Diseño responsive", "Hasta 5 páginas", "Formulario de contacto", "SEO básico", "Entrega en 3-5 días"],
      priceId: "price_simple",
    },
    {
      id: "web-complex",
      name: "Web Compleja",
      price: 999,
      description: "Perfecto para negocios que necesitan funcionalidades avanzadas",
      features: [
        "Diseño responsive premium",
        "Hasta 10 páginas",
        "E-commerce o funcionalidades avanzadas",
        "SEO avanzado",
        "Entrega en 10-15 días",
      ],
      priceId: "price_complex",
      popular: true,
    },
    {
      id: "desarrollo-hosting",
      name: "Desarrollo + Hosting",
      price: 1299,
      description: "Solución completa con alojamiento incluido",
      features: ["Web compleja", "Hosting por 1 año", "Dominio personalizado", "Certificado SSL", "Soporte técnico"],
      priceId: "price_hosting",
    },
    {
      id: "todo-incluido",
      name: "Todo Incluido",
      price: 1999,
      description: "La solución más completa para tu negocio",
      features: [
        "Web compleja",
        "Hosting por 1 año",
        "Mantenimiento mensual",
        "Actualizaciones ilimitadas",
        "Soporte prioritario 24/7",
      ],
      priceId: "price_all_inclusive",
    },
  ]

  const handleAddToCart = (plan: (typeof plans)[0]) => {
    addItem({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      description: plan.description,
      priceId: plan.priceId,
    })
    toast({
      title: "Añadido al carrito",
      description: `${plan.name} ha sido añadido a tu carrito.`,
    })
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes y Precios</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border ${
                plan.popular ? "border-primary" : "border-border"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  Más Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground ml-1">/ único pago</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => handleAddToCart(plan)}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Añadir al Carrito
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
