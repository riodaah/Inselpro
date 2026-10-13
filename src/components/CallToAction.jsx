import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const CallToAction = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90"></div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Tienes un proyecto o una emergencia eléctrica?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
              Cuéntanos qué necesitas y coordinamos una visita técnica para evaluar tu caso.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(250, 204, 21, 0)',
                  '0 0 0 20px rgba(250, 204, 21, 0)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-bg px-10 py-5 rounded-lg font-bold text-xl hover:bg-accent/90 transition-colors duration-300 shadow-2xl inline-block"
            >
              Agenda tu visita técnica
            </motion.button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📞</span>
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✅</span>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💰</span>
                <span>Cotización gratuita</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CallToAction

