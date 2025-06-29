import { Award, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, label: "Clientes Satisfechos", value: "500+" },
  { icon: Clock, label: "Años de Experiencia", value: "8+" },
  { icon: Award, label: "Certificaciones", value: "15+" },
  { icon: Heart, label: "Reseñas 5 Estrellas", value: "200+" },
]

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Sobre Jhovana Hair Studio"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-brand-details dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-accent-600 dark:text-brand-secondary-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                En Jhovana Hair Studio, creemos que cada persona tiene una belleza única que merece ser resaltada. Con
                más de 8 años de experiencia en el mundo de la belleza capilar, nos especializamos en crear looks
                personalizados que reflejen tu personalidad y estilo de vida.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestro equipo de estilistas certificados se mantiene constantemente actualizado con las últimas
                tendencias y técnicas, utilizando únicamente productos de la más alta calidad para garantizar resultados
                excepcionales y el cuidado óptimo de tu cabello.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-brand-details dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Nuestra Misión</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transformar no solo tu cabello, sino también tu confianza. Cada cliente que sale de nuestro salón lleva
                consigo una sonrisa y la seguridad de lucir espectacular.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="h-12 w-12 bg-brand-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Calidad</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Productos premium</p>
              </div>
              <div className="text-center p-4">
                <div className="h-12 w-12 bg-brand-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Pasión</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Amor por el arte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-brand-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
