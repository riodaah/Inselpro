import { motion } from 'framer-motion'
import { CircleCheck, MessagesSquare } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

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
    <section id="specialties" className="py-24 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <span className="eyebrow">Especialidades</span>
                <h2 className="text-4xl md:text-5xl font-bold text-text-main mt-4 mb-6 uppercase">
                  Nuestra especialidad:{' '}
                  <span className="text-accent">seguridad, normativa y atención cercana</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  No solo reparamos cables. Analizamos cada caso con criterio profesional,
                  pensando en la seguridad de las personas y la continuidad de tu negocio u hogar.
                </p>
              </div>

              <ul className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CircleCheck className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" strokeWidth={2} />
                    <p className="text-text-main">{strength}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column - Trust Card */}
          <ScrollReveal delay={0.3}>
            <div className="relative bg-bg p-10 rounded-lg border border-line overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-0.5 bg-accent"></span>
              <MessagesSquare className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-text-main mb-4 uppercase">
                Comunicación clara y transparente
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                En INSELPRO queremos que entiendas lo que está pasando en tu instalación.
                Te explicamos el problema y la solución en lenguaje simple.
              </p>

              <div className="mt-8 pt-6 border-t border-line flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-accent">+500</span>
                <span className="text-text-muted uppercase tracking-wider text-sm">clientes satisfechos</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Specialties
