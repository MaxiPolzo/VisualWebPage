import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ChefHat, Users, Target, Award, Lightbulb, Heart, Utensils, MapPin } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <ChefHat className="h-8 w-8 text-primary" />
                <Utensils className="h-8 w-8 text-secondary" />
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Jóvenes, profesionales y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  apasionados
                </span>{" "}
                por la gastronomía
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Somos una agencia especializada exclusivamente en el sector gastronómico argentino. Combinamos juventud,
                profesionalismo y una profunda pasión por la gastronomía para crear soluciones digitales que realmente
                funcionen para restaurantes.
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <ChefHat className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">Nuestra Historia</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nacimos del amor por la{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    gastronomía
                  </span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    VisualCraft nació de la combinación perfecta entre la pasión por la tecnología y el amor profundo
                    por la gastronomía argentina. Fundada en Buenos Aires por un equipo joven de desarrolladores y
                    diseñadores que también son amantes de la buena comida.
                  </p>
                  <p>
                    Entendemos que cada restaurante tiene su propia alma, su propia historia y su propia forma de
                    conquistar paladares. Por eso, cada solución que desarrollamos está pensada específicamente para
                    potenciar la esencia única de cada negocio gastronómico.
                  </p>
                  <p>
                    No somos una agencia más que hace "de todo". Somos especialistas que vivimos, respiramos y
                    entendemos el mundo de los restaurantes, parrillas, pizzerías y todo el ecosistema culinario
                    argentino.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/chef-cooking.jpg"
                  alt="Chef cocinando - representando nuestra pasión gastronómica"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">100% Gastronómico</p>
                        <p className="text-xs text-muted-foreground">Especialización exclusiva</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Nuestros Valores</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Los ingredientes de nuestro{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">éxito</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Como en una buena receta, cada valor es un ingrediente esencial que define quiénes somos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pasión Gastronómica</h3>
                <p className="text-muted-foreground text-sm">
                  Vivimos y respiramos gastronomía. Entendemos tu negocio porque amamos la comida tanto como vos.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipo Joven</h3>
                <p className="text-muted-foreground text-sm">
                  Energía fresca, ideas innovadoras y la experiencia necesaria para hacer realidad tus proyectos.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enfoque Especializado</h3>
                <p className="text-muted-foreground text-sm">
                  100% dedicados al sector gastronómico. Conocemos sus desafíos únicos y oportunidades.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Como un plato gourmet, cada proyecto recibe atención al detalle y los mejores ingredientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Nuestra Misión</h2>
                    <p className="text-sm text-muted-foreground">El propósito que nos mueve</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar la experiencia gastronómica digital de cada restaurante argentino, potenciando su
                  identidad única y conectándolo de manera más efectiva con sus comensales a través de soluciones
                  tecnológicas pensadas específicamente para el sector culinario.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-2xl border border-secondary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">Nuestra Visión</h2>
                    <p className="text-sm text-muted-foreground">Hacia dónde vamos</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la agencia de referencia en soluciones digitales gastronómicas en Argentina, reconocidos por
                  nuestra especialización, creatividad y compromiso inquebrantable con el éxito de cada restaurante que
                  confía en nosotros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <ChefHat className="h-8 w-8 text-primary" />
                <Users className="h-8 w-8 text-secondary" />
                <Utensils className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para potenciar tu restaurante?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Somos el equipo que entiende tu pasión por la gastronomía y sabe cómo llevarla al mundo digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Solicitar Consulta Gratuita
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Ver Nuestros Servicios
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
