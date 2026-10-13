import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Instalaciones eléctricas residenciales',
      description: 'Diseño e instalación de sistemas eléctricos seguros para casas, departamentos y condominios. Trabajamos cumpliendo la normativa SEC y priorizando la seguridad de tu familia.'
    },
    {
      icon: '🏢',
      title: 'Instalaciones eléctricas comerciales',
      description: 'Soluciones para locales, oficinas y pequeños negocios. Dimensionamos tu instalación según la demanda real de tu operación, evitando sobrecargas y futuro riesgo eléctrico.'
    },
    {
      icon: '📐',
      title: 'Proyectos eléctricos a medida',
      description: 'Desarrollo y ejecución de proyectos eléctricos personalizados para industrias, bodegas y empresas. Desde la planificación hasta la implementación en terreno.'
    },
    {
      icon: '🔧',
      title: 'Mantenimiento y reparaciones eléctricas',
      description: 'Diagnóstico y reparación de fallas, recambio de tableros, protecciones y circuitos. Servicio ideal para prevenir cortes, chispas y daños en tus equipos.'
    },
    {
      icon: '📊',
      title: 'Auditorías y eficiencia energética',
      description: 'Revisamos tu instalación para detectar pérdidas, consumos innecesarios y oportunidades de mejorar la eficiencia energética, ayudándote a ahorrar y proteger tus equipos.'
    },
    {
      icon: '💼',
      title: 'Consultoría y asesoría técnica',
      description: 'Te acompañamos en la toma de decisiones técnicas: regularización, ampliaciones, permisos, y cumplimiento de normativa eléctrica.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
              Servicios eléctricos que cubren{' '}
              <span className="text-gradient">todas tus necesidades</span>
            </h2>
            <p className="text-text-muted text-lg max-w-3xl mx-auto">
              Desde la instalación inicial hasta las emergencias, somos tu aliado eléctrico de confianza.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-bg p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

