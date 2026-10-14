import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Award, BadgeCheck, Zap, ClipboardCheck, Handshake } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const advantages = [
  {
    icon: Award,
    stat: '11 años',
    title: 'de experiencia en el rubro eléctrico',
    description: 'Hemos trabajado con clientes residenciales, comercios y pequeñas industrias, resolviendo desde los problemas simples hasta los proyectos más exigentes.'
  },
  {
    icon: BadgeCheck,
    title: 'Técnicos eléctricos certificados',
    description: 'Profesionales que conocen la normativa y trabajan con equipamiento adecuado, priorizando la seguridad.'
  },
  {
    icon: Zap,
    title: 'Respuesta rápida en emergencias',
    description: 'Sabemos lo crítico que puede ser quedarse sin energía o con una falla peligrosa. Buscamos darte una respuesta oportuna.'
  },
  {
    icon: ClipboardCheck,
    title: 'Trabajo prolijo y ordenado',
    description: 'Cuidamos tu espacio, ordenamos y dejamos la instalación presentable. El servicio incluye también respeto por tu hogar o negocio.'
  },
  {
    icon: Handshake,
    title: 'Acompañamiento y asesoría',
    description: 'Te ayudamos a tomar decisiones hoy pensando en el futuro de tu instalación eléctrica.'
  }
]

// Rayo quebrado que sale del nodo hacia la tarjeta
const BOLT_PATH = 'M0 12 L14 5 L20 16 L32 7 L40 12'

const Branch = ({ active, flip, className = '' }) => (
  <svg
    viewBox="0 0 40 24"
    className={`absolute top-1/2 -translate-y-1/2 w-10 h-6 pointer-events-none ${
      flip ? 'right-full -scale-x-100' : 'left-full'
    } ${className}`}
    fill="none"
  >
    <motion.path
      d={BOLT_PATH}
      stroke="#FFC233"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={active ? { pathLength: 1, opacity: [0, 1, 0.35] } : {}}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{ filter: 'drop-shadow(0 0 4px rgba(245,164,0,0.9))' }}
    />
  </svg>
)

const Step = ({ item, index, reduceMotion }) => {
  const ref = useRef(null)
  // Se activa cuando la punta de la línea (al 75% de la pantalla) llega al nodo
  const inView = useInView(ref, { once: true, margin: '0px 0px -25% 0px' })
  const active = reduceMotion || inView
  const isLeft = index % 2 === 1
  const Icon = item.icon

  return (
    <div className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] gap-x-10 items-center">
      {/* Nodo */}
      <div ref={ref} className="relative row-start-1 col-start-1 md:col-start-2 flex justify-center">
        <motion.div
          animate={active ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.4 }}
          className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 transition-colors duration-300 ${
            active
              ? 'bg-accent border-accent text-bg shadow-[0_0_30px_rgba(245,164,0,0.6)]'
              : 'bg-bg border-line text-text-muted'
          }`}
        >
          <Icon className="w-6 h-6" strokeWidth={2} />
          {active && !reduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-accent"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          )}
        </motion.div>
        <Branch active={active} flip={false} className={isLeft ? 'md:hidden' : ''} />
        <Branch active={active} flip className={`hidden ${isLeft ? 'md:block' : ''}`} />
      </div>

      {/* Tarjeta */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
        animate={active ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`row-start-1 col-start-2 ${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-3'} py-6`}
      >
        <div
          className={`p-6 md:p-7 rounded-lg border bg-surface transition-colors duration-500 ${
            active ? 'border-accent/40' : 'border-line'
          }`}
        >
          <span className="font-display text-sm tracking-widest text-text-muted/70">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-text-main mt-1 mb-3 uppercase leading-tight">
            {item.stat && <span className="text-accent">{item.stat} </span>}
            {item.title}
          </h3>
          <p className="text-text-muted leading-relaxed">{item.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

const WhyUs = () => {
  const timelineRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 75%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const tipTop = useTransform(progress, (v) => `${v * 100}%`)

  return (
    <section id="why-us" className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="eyebrow justify-center">Nuestro respaldo</span>
            <h2 className="text-4xl md:text-6xl font-bold text-text-main mt-4 uppercase">
              ¿Por qué elegir <span className="text-accent">INSELPRO</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative">
          {/* Línea de energía */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 -translate-x-1/2 w-0.5 bg-line" />
          <motion.div
            className="absolute top-0 bottom-0 left-[28px] md:left-1/2 -translate-x-1/2 w-0.5 origin-top bg-gradient-to-b from-accent to-accent-light shadow-[0_0_12px_rgba(245,164,0,0.8)]"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />
          {/* Chispa en la punta */}
          {!reduceMotion && (
            <motion.div
              className="absolute left-[28px] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_4px_rgba(255,194,51,0.9),0_0_30px_10px_rgba(245,164,0,0.5)]"
              style={{ top: tipTop }}
              animate={{ opacity: [1, 0.6, 1, 0.8, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}

          <div className="space-y-4 md:space-y-2">
            {advantages.map((item, index) => (
              <Step key={index} item={item} index={index} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
