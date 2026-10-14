import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, scrollToSection } from '../config'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Servicios', target: 'services' },
    { label: 'Especialidades', target: 'specialties' },
    { label: 'Por qué elegirnos', target: 'why-us' },
    { label: 'Contacto', target: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo-sin-fondo.png"
              alt="INSELPRO - Instalador Eléctrico Profesional"
              className="h-12 w-auto"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-text-main/80 hover:text-accent transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Agenda tu visita técnica
            </a>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
