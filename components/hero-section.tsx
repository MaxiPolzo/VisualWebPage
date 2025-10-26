"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, TrendingUp, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-visualcraft-50 via-white to-visualcraft-100 dark:from-gray-900 dark:via-visualcraft-950 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzVCNDdFNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-900" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-visualcraft-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-visualcraft-400/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-visualcraft-100 dark:bg-visualcraft-900/30 px-4 py-2 rounded-full border border-visualcraft-200 dark:border-visualcraft-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
              <span className="text-sm font-semibold text-visualcraft-800 dark:text-visualcraft-200">
                Especialistas en Gastronomía Digital
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Transformá</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-visualcraft-600 to-visualcraft-400">
                  tu restaurante
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">en digital</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl">
                Optimizá tu carta, aumentá tus reservas y fidelizá tus clientes.{" "}
                <span className="font-bold text-visualcraft-600 dark:text-visualcraft-400">Todo en 48 horas.</span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">48h</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tiempo promedio</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">+40%</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Más reservas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-visualcraft-600 hover:bg-visualcraft-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all visualcraft-glow"
              >
                <Link href="#tickets">
                  Ver Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-visualcraft-600 text-visualcraft-600 hover:bg-visualcraft-50 dark:border-visualcraft-400 dark:text-visualcraft-400 dark:hover:bg-visualcraft-950 text-lg px-8 py-6 bg-transparent"
              >
                <Link href="#contacto">Solicitar Presupuesto</Link>
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Trabajamos con restaurantes de todo Argentina
            </motion.p>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              {/* Restaurant Website Mockup */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 visualcraft-glow">
                <div className="bg-gradient-to-r from-visualcraft-600 to-visualcraft-500 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-white/20 rounded px-3 py-1 text-xs text-white">turestaurante.com</div>
                </div>
                <Image
                  src="/images/restaurant-hero.jpg"
                  alt="Ejemplo de sitio web para restaurante"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-4 top-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 max-w-[200px] border-2 border-visualcraft-200 dark:border-visualcraft-700"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-visualcraft-100 dark:bg-visualcraft-900 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Menú Digital</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Con código QR</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-20 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 max-w-[200px] border-2 border-visualcraft-200 dark:border-visualcraft-700"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-visualcraft-100 dark:bg-visualcraft-900 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">+40%</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Más reservas</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-visualcraft-500/20 to-visualcraft-400/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">Descubre más</p>
          <ArrowRight className="w-5 h-5 text-visualcraft-600 dark:text-visualcraft-400 rotate-90" />
        </div>
      </motion.div>
    </section>
  )
}
