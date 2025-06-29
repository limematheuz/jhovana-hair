"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = ["Todos", "Cortes", "Color", "Peinados", "Tratamientos"]

const galleryItems = [
  { id: 1, category: "Cortes", image: "/placeholder.svg?height=400&width=300", title: "Corte Bob Moderno" },
  { id: 2, category: "Color", image: "/placeholder.svg?height=400&width=300", title: "Balayage Rubio" },
  { id: 3, category: "Peinados", image: "/placeholder.svg?height=400&width=300", title: "Peinado de Novia" },
  { id: 4, category: "Cortes", image: "/placeholder.svg?height=400&width=300", title: "Corte Pixie" },
  { id: 5, category: "Color", image: "/placeholder.svg?height=400&width=300", title: "Mechas Californianas" },
  { id: 6, category: "Tratamientos", image: "/placeholder.svg?height=400&width=300", title: "Keratina Brasileña" },
  { id: 7, category: "Peinados", image: "/placeholder.svg?height=400&width=300", title: "Ondas Vintage" },
  { id: 8, category: "Color", image: "/placeholder.svg?height=400&width=300", title: "Color Fantasía" },
  { id: 9, category: "Cortes", image: "/placeholder.svg?height=400&width=300", title: "Corte en Capas" },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems =
    activeCategory === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Nuestra Galería</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados y déjate inspirar para tu próximo cambio de look.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-brand-accent-500 text-white border-0"
                  : "border-brand-secondary-400 text-brand-accent-500 hover:bg-brand-details dark:border-brand-secondary-500 dark:text-brand-secondary-400 dark:hover:bg-gray-700"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <p className="text-pink-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Te gusta lo que ves? ¡Reserva tu cita y obtén tu look ideal!
          </p>
          <Button size="lg" className="bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600">
            Reservar Mi Cita
          </Button>
        </div>
      </div>
    </section>
  )
}
