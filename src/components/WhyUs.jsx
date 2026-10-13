import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const WhyUs = () => {
  const advantages = [
    {
      icon: '🎯',
      title: '11 años de experiencia en el rubro eléctrico',
      description: 'Hemos trabajado con clientes residenciales, comercios y pequeñas industrias, resolviendo desde los problemas simples hasta los proyectos más exigentes.'
    },
    {
      icon: '✅',
      title: 'Técnicos eléctricos certificados',
      description: 'Profesionales que conocen la normativa y trabajan con equipamiento adecuado, priorizando la seguridad.'
    },
    {
      icon: '⚡',
      title: 'Respuesta rápida en emergencias',
      description: 'Sabemos lo crítico que puede ser quedarse sin energía o con una falla peligrosa. Buscamos darte una respuesta oportuna.'
    },
    {
      icon: '🛠️',
      title: 'Trabajo prolijo y ordenado',
      description: 'Cuidamos tu espacio, ordenamos y dejamos la instalación presentable. El servicio incluye también respeto por tu hogar o negocio.'
    },
    {
      icon: '🤝',
      title: 'Acompañamiento y asesoría',
      description: 'Te ayudamos a tomar decisiones hoy pensando en el futuro de tu instalación eléctrica.'
    }
  ]

  return (
    <section id="why-us" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
              ¿Por qué elegir{' '}
              <span className="text-gradient">INSELPRO</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-bg p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {advantage.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonial */}
        <ScrollReveal delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 md:p-12 rounded-2xl border border-primary/20 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-3xl">
                  ⭐
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-text-main text-lg md:text-xl italic mb-4 leading-relaxed">
                  "Muy buen servicio, puntuales y claros al explicar el problema. Quedamos tranquilos con la solución."
                </p>
                <p className="text-text-muted">
                  <span className="font-semibold text-accent">Cliente residencial</span>, Santiago
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default WhyUs

