import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageMeta } from '../usePageMeta'

const Terms = () => {
  usePageMeta({
    title: 'Términos y condiciones | INSELPRO',
    description: 'Términos y condiciones de los servicios eléctricos de INSELPRO en Santiago de Chile.',
    path: '/terminos',
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
            Términos y Condiciones
          </h1>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">1. Introducción</h2>
              <p>
                Bienvenido a INSELPRO. Al acceder y utilizar este sitio web, usted acepta estar 
                sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de 
                estos términos, le pedimos que no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                2. Uso del sitio web
              </h2>
              <p>
                Este sitio web tiene carácter informativo y está destinado a proporcionar 
                información sobre los servicios eléctricos que ofrecemos. La información 
                presentada aquí no constituye un contrato de obra ni una oferta vinculante.
              </p>
              <p className="mt-3">
                Los presupuestos, diagnósticos y acuerdos de servicio definitivos se establecerán 
                mediante comunicación directa y, cuando corresponda, documentos formales firmados 
                por ambas partes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                3. Limitación de responsabilidad
              </h2>
              <p className="mb-3">
                La información proporcionada en este sitio web está sujeta a cambios sin previo 
                aviso. INSELPRO se esfuerza por mantener la información actualizada y precisa, 
                sin embargo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  El diagnóstico final de cualquier problema eléctrico siempre requiere una 
                  evaluación presencial por parte de nuestros técnicos
                </li>
                <li>
                  Los precios indicados (si los hubiere) son referenciales y pueden variar según 
                  la complejidad de cada caso
                </li>
                <li>
                  No nos hacemos responsables de decisiones tomadas basándose únicamente en la 
                  información de este sitio sin una evaluación técnica profesional previa
                </li>
              </ul>
              <p className="mt-3">
                INSELPRO no será responsable por daños directos, indirectos, incidentales o 
                consecuentes que resulten del uso o la imposibilidad de usar este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                4. Propiedad intelectual
              </h2>
              <p>
                Todo el contenido de este sitio web, incluyendo pero no limitado a textos, 
                gráficos, logotipos, imágenes, iconos y diseños, es propiedad de INSELPRO o sus 
                licenciantes y está protegido por las leyes de propiedad intelectual de Chile.
              </p>
              <p className="mt-3">
                Queda prohibida la reproducción, distribución, modificación o uso comercial del 
                contenido sin autorización previa y por escrito de INSELPRO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                5. Enlaces a terceros
              </h2>
              <p>
                Este sitio web puede contener enlaces a sitios de terceros para su conveniencia 
                e información. INSELPRO no controla ni respalda el contenido de estos sitios 
                externos y no se hace responsable de su contenido, políticas de privacidad o 
                prácticas.
              </p>
              <p className="mt-3">
                El acceso a cualquier sitio web de terceros es bajo su propio riesgo y 
                responsabilidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                6. Servicios profesionales
              </h2>
              <p>
                Todos los servicios eléctricos proporcionados por INSELPRO se rigen por los 
                acuerdos específicos establecidos para cada proyecto o trabajo. Estos acuerdos 
                pueden incluir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Alcance del trabajo</li>
                <li>Plazos de ejecución</li>
                <li>Costos y forma de pago</li>
                <li>Garantías y responsabilidades</li>
                <li>Condiciones específicas del servicio</li>
              </ul>
              <p className="mt-3">
                Los servicios se realizarán cumpliendo con toda la normativa eléctrica vigente 
                en Chile, especialmente las regulaciones de la Superintendencia de Electricidad 
                y Combustibles (SEC).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                7. Modificaciones de los términos
              </h2>
              <p>
                INSELPRO se reserva el derecho de modificar estos Términos y Condiciones en 
                cualquier momento. Los cambios entrarán en vigor inmediatamente después de su 
                publicación en el sitio web.
              </p>
              <p className="mt-3">
                Es su responsabilidad revisar periódicamente estos términos. El uso continuado 
                del sitio web después de cualquier modificación constituye su aceptación de los 
                nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">
                8. Ley aplicable y jurisdicción
              </h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de la República de Chile. 
                Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción 
                exclusiva de los tribunales competentes de Santiago, Chile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-main mb-4">9. Contacto</h2>
              <p>
                Si tiene preguntas o inquietudes sobre estos Términos y Condiciones, puede 
                contactarnos en:
              </p>
              <p className="mt-3">
                <strong className="text-text-main">Email:</strong>{' '}
                <a href="mailto:info@inselpro.cl" className="text-accent hover:text-accent/80">
                  info@inselpro.cl
                </a>
                <br />
                <strong className="text-text-main">Teléfono:</strong> +56 9 3087 6457
                <br />
                <strong className="text-text-main">Región:</strong> Metropolitana, Chile
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

export default Terms

