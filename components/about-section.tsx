"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Users, Zap, TrendingUp, Award, HeartHandshake } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
  {
    icon: Zap,
    title: "Rápidos y Eficientes",
    description: "Entregamos tus proyectos en tiempo récord sin sacrificar calidad",
  },
  {
    icon: TrendingUp,
    title: "Resultados Medibles",
    description: "Cada proyecto está diseñado para aumentar tus ventas y reservas",
  },
  {
    icon: HeartHandshake,
    title: "Soporte Continuo",
    description: "Estamos con vos antes, durante y después del lanzamiento",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-work.jpg"
                alt="Equipo de VisualCraft trabajando en soluciones gastronómicas"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-900/60 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-2 border-wine-200 dark:border-wine-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-wine-100 dark:bg-wine-900 flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine-600 dark:text-wine-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clientes satisfechos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-2 border-terracotta-200 dark:border-terracotta-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta-100 dark:bg-terracotta-900 flex items-center justify-center">
                  <Users className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Restaurantes</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-wine-100 dark:bg-wine-900 flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-wine-600 dark:text-wine-400" />
                </div>
                <span className="text-sm font-semibold text-wine-600 dark:text-wine-400 uppercase tracking-wider">
                  Sobre Nosotros
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gray-900 dark:text-white">Somos una agencia </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine-600 to-terracotta-600 dark:from-wine-400 dark:to-terracotta-400">
                  joven y especializada
                </span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Nacimos con una misión clara:{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  ayudar a restaurantes a crecer en el mundo digital
                </span>
                . Entendemos los desafíos únicos del rubro gastronómico porque trabajamos exclusivamente con él.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                No somos una agencia genérica. Cada parrilla, pizzería, bodegón o café tiene necesidades específicas, y
                nosotros las conocemos al detalle. Desde menús digitales hasta sistemas de reservas, diseñamos
                soluciones que realmente funcionan para tu negocio.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-2 border-gray-200 dark:border-gray-800 hover:border-wine-300 dark:hover:border-wine-700 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-wine-100 dark:bg-wine-900 flex items-center justify-center shrink-0">
                            <Icon className="w-6 h-6 text-wine-600 dark:text-wine-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Ya trabajamos con restaurantes de todo Argentina, desde grandes cadenas hasta emprendimientos
                familiares. Todos con algo en común: <span className="font-semibold">resultados reales</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
