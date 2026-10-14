import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageMeta } from '../usePageMeta'

const PrivacyPolicy = () => {
  usePageMeta({
    title: 'Política de privacidad | INSELPRO',
    description: 'Política de privacidad de INSELPRO, servicios eléctricos en Santiago de Chile.',
    path: '/privacidad',
  })

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8"
        >
          <span className="mr-2">←</span> Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-surface rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">1. Introducción</h2>
              <p>
                En INSELPRO, nos comprometemos a proteger la privacidad de nuestros clientes y 
                visitantes. Esta Política de Privacidad describe cómo recopilamos, usamos y 
                protegemos su información personal cuando utiliza nuestro sitio web y servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                2. Datos que recopilamos
              </h2>
              <p className="mb-3">
                Recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre el servicio solicitado</li>
                <li>Mensajes y comunicaciones que nos envía</li>
              </ul>
              <p className="mt-3">
                También recopilamos automáticamente cierta información técnica cuando visita 
                nuestro sitio, como su dirección IP, tipo de navegador, páginas visitadas y 
                tiempo de navegación. Utilizamos cookies técnicas básicas para mejorar la 
                funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                3. Uso de la información
              </h2>
              <p className="mb-3">Utilizamos su información personal para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a sus consultas y solicitudes de servicio</li>
                <li>Coordinar visitas técnicas y presupuestos</li>
                <li>Proporcionar los servicios eléctricos solicitados</li>
                <li>Comunicarnos con usted sobre su proyecto o servicio</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
                <li>Cumplir con nuestras obligaciones legales y contractuales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                4. Compartición de datos
              </h2>
              <p>
                INSELPRO no vende, alquila ni comparte su información personal con terceros para 
                fines de marketing. Solo compartimos información cuando es necesario para 
                proporcionar nuestros servicios o cuando la ley lo requiere.
              </p>
              <p className="mt-3">
                Podemos compartir información con proveedores de servicios de confianza que nos 
                ayudan a operar nuestro negocio, siempre bajo estrictos acuerdos de 
                confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                5. Seguridad de la información
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
                proteger su información personal contra acceso no autorizado, alteración, 
                divulgación o destrucción. Sin embargo, ningún método de transmisión por 
                Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                6. Derechos del usuario
              </h2>
              <p className="mb-3">
                De acuerdo con la legislación chilena de protección de datos, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a sus datos personales que mantenemos</li>
                <li>Rectificar información inexacta o incompleta</li>
                <li>Solicitar la eliminación de sus datos personales</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Limitar el procesamiento de su información</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos, puede contactarnos a través de los medios indicados 
                en la sección de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                7. Contacto para temas de datos personales
              </h2>
              <p>
                Si tiene preguntas, inquietudes o desea ejercer sus derechos relacionados con 
                sus datos personales, puede contactarnos en:
              </p>
              <p className="mt-3">
                <strong className="text-text-main">Email:</strong>{' '}
                <a href="mailto:info@inselpro.cl" className="text-accent hover:text-accent/80">
                  info@inselpro.cl
                </a>
                <br />
                <strong className="text-text-main">Teléfono:</strong> +56 9 3087 6457
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                8. Modificaciones a esta política
              </h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier 
                momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio 
                web. Le recomendamos revisar periódicamente esta página para estar informado sobre 
                cómo protegemos su información.
              </p>
            </section>

            <section className="pt-6 border-t border-primary/10">
              <p className="text-sm text-text-muted italic">
                Última actualización: Diciembre 2025
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

