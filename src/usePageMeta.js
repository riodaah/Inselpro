import { useEffect } from 'react'

const SITE_URL = 'https://www.inselpro.cl'

// Ajusta título, descripción y URL canónica de cada página
export const usePageMeta = ({ title, description, path }) => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    const descTag = document.querySelector('meta[name="description"]')
    const canonicalTag = document.querySelector('link[rel="canonical"]')
    const previousDesc = descTag?.getAttribute('content')
    const previousCanonical = canonicalTag?.getAttribute('href')
    if (description) descTag?.setAttribute('content', description)
    canonicalTag?.setAttribute('href', `${SITE_URL}${path}`)
    return () => {
      document.title = previousTitle
      if (previousDesc) descTag?.setAttribute('content', previousDesc)
      if (previousCanonical) canonicalTag?.setAttribute('href', previousCanonical)
    }
  }, [title, description, path])
}
