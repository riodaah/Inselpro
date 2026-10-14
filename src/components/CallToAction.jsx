import { Clock, CircleCheck, FileText, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { WHATSAPP_URL } from '../config'

const CallToAction = () => {
  const perks = [
    { icon: Clock, label: 'Respuesta rápida' },
    { icon: CircleCheck, label: 'Sin compromiso' },
    { icon: FileText, label: 'Cotización gratuita' },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-accent text-bg">
      {/* Franjas de seguridad sutiles */}
      <div className="absolute inset-0 opacity-[0.035] bg-[repeating-linear-gradient(-45deg,#000_0,#000_14px,transparent_14px,transparent_28px)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none">
              ¿Tienes un proyecto o una emergencia eléctrica?
            </h2>
            <p className="text-bg/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Cuéntanos qué necesitas y coordinamos una visita técnica para evaluar tu caso.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bg text-text-main px-10 py-5 rounded-md font-semibold text-xl hover:bg-elevated transition-colors duration-200"
            >
              <MessageCircle className="w-6 h-6 text-accent" />
              Agenda tu visita técnica
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 font-semibold">
                  <Icon className="w-5 h-5" strokeWidth={2.25} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CallToAction
