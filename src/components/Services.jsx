import { motion } from 'framer-motion'
import { House, Building2, PencilRuler, Wrench, Gauge, ClipboardList } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Services = () => {
  const services = [
    {
      icon: House,
      title: 'Instalaciones eléctricas residenciales',
      description: 'Diseño e instalación de sistemas eléctricos seguros para casas, departamentos y condominios. Trabajamos cumpliendo la normativa SEC y priorizando la seguridad de tu familia.'
    },
    {
      icon: Building2,
      title: 'Instalaciones eléctricas comerciales',
      description: 'Soluciones para locales, oficinas y pequeños negocios. Dimensionamos tu instalación según la demanda real de tu operación, evitando sobrecargas y futuro riesgo eléctrico.'
    },
    {
      icon: PencilRuler,
      title: 'Proyectos eléctricos a medida',
      description: 'Desarrollo y ejecución de proyectos eléctricos personalizados para industrias, bodegas y empresas. Desde la planificación hasta la implementación en terreno.'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento y reparaciones eléctricas',
      description: 'Diagnóstico y reparación de fallas, recambio de tableros, protecciones y circuitos. Servicio ideal para prevenir cortes, chispas y daños en tus equipos.'
    },
    {
      icon: Gauge,
      title: 'Auditorías y eficiencia energética',
      description: 'Revisamos tu instalación para detectar pérdidas, consumos innecesarios y oportunidades de mejorar la eficiencia energética, ayudándote a ahorrar y proteger tus equipos.'
    },
    {
      icon: ClipboardList,
      title: 'Consultoría y asesoría técnica',
      description: 'Te acompañamos en la toma de decisiones técnicas: regularización, ampliaciones, permisos, y cumplimiento de normativa eléctrica.'
    }
  ]

  return (
    <section id="services" className="py-24 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <span className="eyebrow mb-4">Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-4 mb-4 uppercase">
              Servicios eléctricos que cubren{' '}
              <span className="text-accent">todas tus necesidades</span>
            </h2>
            <p className="text-text-muted text-lg">
              Desde la instalación inicial hasta las emergencias, somos tu aliado eléctrico de confianza.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-surface p-8 h-full hover:bg-elevated transition-colors duration-300"
              >
                {/* Línea superior que se enciende al pasar el mouse */}
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500"></span>

                <div className="flex items-start justify-between mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md border border-line text-accent group-hover:border-accent/60 transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm text-text-muted/60 tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-text-main mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
