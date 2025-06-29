import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforma tu
                <span className="block text-brand-accent-500 font-sans">Belleza Natural</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                En Jhovana Hair Studio creamos looks únicos que resaltan tu personalidad. Expertos en cortes, color y
                tratamientos de última generación.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">4.9 (200+ reseñas)</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-brand-details dark:bg-gray-800 rounded-lg">
                <MapPin className="h-5 w-5 text-brand-accent-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Ubicación</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Centro de la ciudad</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-brand-details dark:bg-gray-800 rounded-lg">
                <Clock className="h-5 w-5 text-brand-accent-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Horarios</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lun - Sáb: 9AM - 7PM</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600">
                Reservar Cita Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-secondary-400 text-brand-accent-500 hover:bg-brand-details dark:border-brand-secondary-500 dark:text-brand-secondary-400 dark:hover:bg-gray-800"
              >
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Jhovana Hair Studio - Salon de belleza"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-brand-details dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-brand-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Jhovana</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Estilista Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
