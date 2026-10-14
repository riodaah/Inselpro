import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, scrollToSection } from '../config'

const Hero = () => {
  const benefits = [
    'Instalaciones residenciales y comerciales',
    'Atención de emergencias eléctricas',
    'Asesoría y proyectos a medida'
  ]

  return (
    <section className="relative min-h-[80vh] pt-32 pb-20 overflow-hidden">
      {/* Fondo técnico */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"></div>
      <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="eyebrow">Instalador eléctrico profesional</span>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-accent">Proyectos, instalaciones</span>
                <br />
                <span className="text-text-main">y reparaciones eléctricas</span>
              </motion.h1>

              <motion.p
                className="text-text-muted text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                En INSELPRO entregamos soluciones eléctricas completas para hogares,
                comercios e industrias en la Región Metropolitana, con enfoque en
                seguridad, normativa vigente y atención cercana.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-accent/15 text-accent">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-text-main">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero cotizar mi proyecto
              </a>

              <button
                onClick={() => scrollToSection('services')}
                className="btn-outline text-lg"
              >
                Ver servicios
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="relative rounded-xl overflow-hidden border border-line shadow-[0_0_80px_-20px_rgba(245,164,0,0.35)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover aspect-[4/5]"
              >
                <source src="/hero-inselpro.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none"></div>
            </div>
            {/* Esquinas tipo visor */}
            <span className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-accent"></span>
            <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-accent"></span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
