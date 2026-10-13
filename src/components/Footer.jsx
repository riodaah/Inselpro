import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigationLinks = [
    { label: 'Servicios', target: 'services' },
    { label: 'Especialidades', target: 'specialties' },
    { label: 'Por qué elegirnos', target: 'why-us' },
    { label: 'Contacto', target: 'contact' },
  ]

  return (
    <footer className="bg-[#020617] text-text-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div>
              <img 
                src="/logo-sin-fondo.png" 
                alt="INSELPRO - Instalador Eléctrico Profesional" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Empresa de servicios eléctricos enfocada en proyectos, instalaciones y 
              reparaciones seguras para hogares, comercios e industrias.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-text-main font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal & Contact */}
          <div>
            <h3 className="text-text-main font-semibold mb-4">Legal y Contacto</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  to="/privacidad"
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
            <a
              href="mailto:info@inselpro.cl"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              info@inselpro.cl
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-sm">
            © {currentYear} INSELPRO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

