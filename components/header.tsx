"use client"

import { useState } from "react"
import { Menu, X, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Nosotros", href: "#about" },
  { name: "Galería", href: "#gallery" },
  { name: "Contacto", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-pink-100 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-500">
            <Scissors className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Jhovana Hair Studio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-brand-accent-500 dark:hover:text-brand-secondary-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden lg:inline-flex bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600"
          >
            Reservar Cita
          </Button>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-brand-details dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-brand-accent-500 text-white border-0 hover:bg-brand-accent-600">
              Reservar Cita
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
