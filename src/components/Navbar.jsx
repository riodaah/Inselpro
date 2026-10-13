import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          ? 'bg-bg/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/logo-sin-fondo.png" 
              alt="INSELPRO - Instalador Eléctrico Profesional" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-text-main hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-bg px-6 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              Agenda tu visita técnica
            </motion.button>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-bg px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

