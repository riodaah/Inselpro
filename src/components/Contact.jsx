import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos obligatorios')
      return
    }

    // Aquí se podría integrar con una API real
    // Por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      })
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <ScrollReveal>
            <div className="bg-surface p-8 md:p-10 rounded-2xl border border-primary/10">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
                Contáctanos
              </h2>
              <p className="text-text-muted mb-8">
                Completa el formulario y te responderemos a la brevedad para coordinar una visita o cotización.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/30 p-6 rounded-lg text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-accent mb-2">¡Gracias!</h3>
                  <p className="text-text-main">
                    Hemos recibido tu mensaje y te contactaremos pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-main font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-main focus:outline-none focus:border-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-main font-medium mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-main focus:outline-none focus:border-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-text-main font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-main focus:outline-none focus:border-primary transition-colors"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-text-main font-medium mb-2">
                      Tipo de servicio
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-main focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="instalacion">Instalación</option>
                      <option value="mantenimiento">Mantenimiento / Reparación</option>
                      <option value="proyecto">Proyecto nuevo</option>
                      <option value="emergencia">Emergencia</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-main font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Cuéntanos qué necesitas..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-bg py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors duration-300"
                  >
                    Enviar mensaje
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-text-main mb-6">
                  También puedes escribirnos directamente
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-surface rounded-xl border border-primary/10"
                >
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="text-text-main font-semibold mb-1">Teléfono</h4>
                    <a 
                      href="https://wa.me/56930876457"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors text-lg cursor-pointer"
                    >
                      +56 9 3087 6457
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-surface rounded-xl border border-primary/10"
                >
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h4 className="text-text-main font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:info@inselpro.cl"
                      className="text-accent hover:text-accent/80 transition-colors text-lg"
                    >
                      info@inselpro.cl
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-surface rounded-xl border border-primary/10"
                >
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="text-text-main font-semibold mb-1">Áreas de servicio</h4>
                    <p className="text-text-muted">Región Metropolitana, Chile</p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-text-main mb-3">
                  Atención profesional
                </h4>
                <p className="text-text-muted leading-relaxed">
                  Atendemos instalaciones domiciliarias, comerciales e industriales con 
                  el más alto estándar de calidad y seguridad.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact

