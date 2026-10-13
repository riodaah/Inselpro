import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const Specialties = () => {
  const strengths = [
    'Experiencia en instalaciones domiciliarias, comerciales e industriales.',
    'Enfoque en seguridad eléctrica y prevención de riesgos.',
    'Trabajo alineado a normativa SEC y buenas prácticas del rubro.',
    'Diagnóstico claro antes de cualquier intervención.',
    'Presupuestos transparentes y sin letra chica.',
    'Comunicación directa con el técnico a cargo.'
  ]

  return (
    <section id="specialties" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
                  Nuestra especialidad:{' '}
                  <span className="text-gradient">seguridad, normativa y atención cercana</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  No solo reparamos cables. Analizamos cada caso con criterio profesional, 
                  pensando en la seguridad de las personas y la continuidad de tu negocio u hogar.
                </p>
              </div>

              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="mt-1.5">
                      <svg 
                        className="w-5 h-5 text-accent" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <p className="text-text-main">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Trust Card */}
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-2xl border border-primary/20 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">💡</div>
                <h3 className="text-2xl font-bold text-text-main mb-4">
                  Comunicación clara y transparente
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  En INSELPRO queremos que entiendas lo que está pasando en tu instalación. 
                  Te explicamos el problema y la solución en lenguaje simple.
                </p>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-primary rounded-full border-2 border-bg"></div>
                      <div className="w-10 h-10 bg-secondary rounded-full border-2 border-bg"></div>
                      <div className="w-10 h-10 bg-accent rounded-full border-2 border-bg"></div>
                    </div>
                    <p className="text-text-muted text-sm">
                      <span className="text-accent font-semibold">+500</span> clientes satisfechos
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Specialties

