import { Scissors, Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  services: ["Cortes de Cabello", "Coloración", "Tratamientos", "Peinados Especiales", "Extensiones", "Alisados"],
  company: ["Sobre Nosotros", "Nuestro Equipo", "Certificaciones", "Testimonios", "Blog", "Carreras"],
  support: [
    "Contacto",
    "Reservar Cita",
    "Política de Cancelación",
    "Cuidado Post-Servicio",
    "Preguntas Frecuentes",
    "Términos y Condiciones",
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: MessageCircle, href: "#", name: "WhatsApp" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-500">
                  <Scissors className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Jhovana Hair Studio</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                Transformando tu belleza natural con más de 8 años de experiencia en el mundo de la estilística capilar.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-brand-secondary-400" />
                  <span className="text-sm text-gray-300">Calle Principal #123, Centro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-brand-secondary-400" />
                  <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-brand-secondary-400" />
                  <span className="text-sm text-gray-300">info@jhovanahairstudio.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-brand-secondary-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-brand-secondary-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Soporte</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-brand-secondary-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Mantente al día con nuestras novedades</h3>
              <p className="text-gray-300">Recibe tips de belleza, promociones exclusivas y las últimas tendencias.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-6 py-2 bg-brand-accent-500 text-white rounded-lg hover:bg-brand-accent-600 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jhovana Hair Studio. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-brand-secondary-400 hover:bg-gray-700 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
