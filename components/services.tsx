import { Scissors, Palette, Sparkles, Heart, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scissors,
    title: "Cortes de Cabello",
    description: "Cortes modernos y clásicos adaptados a tu estilo y forma de rostro.",
    price: "Desde $25",
    features: ["Consulta personalizada", "Lavado incluido", "Peinado final"],
  },
  {
    icon: Palette,
    title: "Coloración",
    description: "Técnicas avanzadas de color, mechas, balayage y tratamientos de brillo.",
    price: "Desde $45",
    features: ["Análisis de color", "Productos premium", "Cuidado post-color"],
  },
  {
    icon: Sparkles,
    title: "Tratamientos",
    description: "Hidratación profunda, keratina y tratamientos reparadores.",
    price: "Desde $35",
    features: ["Diagnóstico capilar", "Productos naturales", "Resultados duraderos"],
  },
  {
    icon: Heart,
    title: "Peinados Especiales",
    description: "Peinados para bodas, eventos y ocasiones especiales.",
    price: "Desde $40",
    features: ["Prueba previa", "Accesorios incluidos", "Duración garantizada"],
  },
  {
    icon: Crown,
    title: "Extensiones",
    description: "Extensiones de cabello natural y sintético de alta calidad.",
    price: "Desde $80",
    features: ["Cabello premium", "Colocación profesional", "Mantenimiento incluido"],
  },
  {
    icon: Zap,
    title: "Alisados",
    description: "Alisado brasileño, keratina y tratamientos anti-frizz.",
    price: "Desde $60",
    features: ["Duración 3-6 meses", "Sin formol", "Cabello sedoso"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza con los mejores productos y técnicas más avanzadas del
            mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-brand-details dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 bg-brand-accent-500 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-brand-secondary-600 dark:text-brand-secondary-400 font-semibold">
                      {service.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-brand-accent-500 rounded-full" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600">
                  Reservar
                </Button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-brand-accent-500 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-brand-accent-100 mb-6 max-w-2xl mx-auto">
              Contáctanos para servicios personalizados y paquetes especiales. Estamos aquí para hacer realidad tu look
              ideal.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-brand-accent-600 border-white hover:bg-brand-details"
            >
              Consulta Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
