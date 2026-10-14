export const PHONE_DISPLAY = '+56 9 3087 6457'
export const EMAIL = 'info@inselpro.cl'
export const WHATSAPP_URL =
  'https://wa.me/56930876457?text=' +
  encodeURIComponent('Hola INSELPRO, quiero cotizar un servicio eléctrico.')

export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}
