import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Calle Principal #123", "Centro, Ciudad"],
    link: "#",
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+1 (555) 123-4567", "WhatsApp disponible"],
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@jhovanahairstudio.com", "Respuesta en 24h"],
    link: "mailto:info@jhovanahairstudio.com",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 9:00 AM - 7:00 PM", "Sáb: 9:00 AM - 6:00 PM"],
    link: "#",
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-500" },
  { icon: Facebook, name: "Facebook", href: "#", color: "hover:text-blue-500" },
  { icon: MessageCircle, name: "WhatsApp", href: "#", color: "hover:text-green-500" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Contáctanos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Reserva tu cita o contáctanos para cualquier consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      className="border-brand-secondary-300 focus:border-brand-accent-500 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="Tu teléfono"
                      className="border-brand-secondary-300 focus:border-brand-accent-500 dark:border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="border-brand-secondary-300 focus:border-brand-accent-500 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Servicio de Interés
                  </label>
                  <select className="w-full px-3 py-2 border border-brand-secondary-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent-500 dark:bg-gray-800 dark:text-white">
                    <option>Selecciona un servicio</option>
                    <option>Corte de Cabello</option>
                    <option>Coloración</option>
                    <option>Tratamientos</option>
                    <option>Peinados Especiales</option>
                    <option>Extensiones</option>
                    <option>Alisados</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                  <Textarea
                    placeholder="Cuéntanos sobre el look que deseas..."
                    rows={4}
                    className="border-brand-secondary-300 focus:border-brand-accent-500 dark:border-gray-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="h-12 w-12 bg-brand-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">Mapa de Ubicación</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Integra aquí tu mapa de Google Maps</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-brand-accent-500 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-2">¿Necesitas una Cita Urgente?</h4>
              <p className="mb-4 text-brand-accent-100">Llámanos directamente y te atenderemos lo antes posible.</p>
              <Button variant="outline" className="bg-white text-brand-accent-600 border-white hover:bg-brand-details">
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
