import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../config'

const Contact = () => {
  const items = [
    { icon: Phone, label: 'Teléfono / WhatsApp', value: PHONE_DISPLAY, href: WHATSAPP_URL, external: true },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: 'Áreas de servicio', value: 'Región Metropolitana, Chile' },
  ]

  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - WhatsApp */}
          <ScrollReveal>
            <div className="space-y-6">
              <span className="eyebrow">Contacto</span>
              <h2 className="text-4xl md:text-5xl font-bold text-text-main uppercase">
                Hablemos de tu <span className="text-accent">proyecto</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                Escríbenos por WhatsApp y te responderemos a la brevedad para coordinar
                una visita técnica o enviarte una cotización. Atendemos instalaciones
                domiciliarias, comerciales e industriales.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-200"
              >
                <MessageCircle className="w-6 h-6" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Info */}
          <ScrollReveal delay={0.2}>
            <ul className="divide-y divide-line border border-line rounded-lg bg-surface">
              {items.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="flex items-center justify-center w-12 h-12 rounded-md border border-line text-accent flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div className="flex-1">
                      <p className="text-text-muted text-sm uppercase tracking-wider">{label}</p>
                      <p className="text-text-main text-lg font-medium">{value}</p>
                    </div>
                    {href && (
                      <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                    )}
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-center gap-5 p-6 hover:bg-elevated transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 p-6">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
