# INSELPRO 2.0 🔌⚡

Sitio web moderno y profesional para INSELPRO - Servicios Eléctricos en Santiago de Chile.

## 🎨 Características

- **React + Vite**: Desarrollo rápido y optimizado
- **TailwindCSS**: Diseño moderno y responsive
- **Framer Motion**: Animaciones suaves y profesionales
- **React Router**: Navegación entre páginas
- **Mobile First**: Diseño optimizado para dispositivos móviles

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para instalar

1. **Navegar al directorio del proyecto**
   ```bash
   cd inselpro-2.0
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El sitio estará disponible en: `http://localhost:3000`

### Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción

## 📁 Estructura del Proyecto

```
inselpro-2.0/
├── src/
│   ├── assets/          # Imágenes e íconos (se pueden agregar)
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Specialties.jsx
│   │   ├── WhyUs.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollReveal.jsx
│   ├── pages/           # Páginas del sitio
│   │   ├── Home.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── Terms.jsx
│   ├── styles/          # Estilos globales
│   │   └── globals.css
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html           # HTML base
├── tailwind.config.js   # Configuración de Tailwind
└── package.json         # Dependencias
```

## 🎨 Paleta de Colores

El sitio utiliza una paleta de colores moderna y eléctrica:

- **Background**: `#050816` - Fondo oscuro principal
- **Surface**: `#0B1220` - Cards y secciones
- **Primary**: `#2563EB` - Azul eléctrico
- **Secondary**: `#38BDF8` - Celeste técnico
- **Accent**: `#FACC15` - Amarillo eléctrico
- **Text Main**: `#E5E7EB` - Texto principal
- **Text Muted**: `#9CA3AF` - Texto secundario

## 📱 Secciones del Sitio

### Página Principal (/)
1. **Navbar** - Navegación fija con scroll suave
2. **Hero** - Sección de bienvenida con CTAs
3. **Services** - 6 servicios principales
4. **Specialties** - Especialidades y enfoque
5. **Why Us** - 5 ventajas competitivas
6. **Call to Action** - Llamado a la acción destacado
7. **Contact** - Formulario de contacto
8. **Footer** - Información de contacto y legal

### Páginas Legales
- **/privacidad** - Política de Privacidad
- **/terminos** - Términos y Condiciones

## 🔧 Características Técnicas

### Animaciones
- Scroll reveal en todas las secciones
- Animaciones de hover en cards y botones
- Elementos flotantes en el Hero
- Transiciones suaves entre estados

### Formulario de Contacto
- Validación de campos requeridos
- Mensaje de éxito simulado
- Listo para integrar con backend
- Campos: nombre, email, teléfono, tipo de servicio, mensaje

### Responsive Design
- Mobile first approach
- Breakpoints optimizados
- Menú adaptable
- Grid responsivo

## 🚀 Próximos Pasos

### Para Producción
1. Agregar imágenes reales en `/src/assets/`
2. Integrar formulario de contacto con backend
3. Optimizar imágenes y assets
4. Configurar SEO y meta tags
5. Integrar Google Analytics (opcional)
6. Probar en diferentes dispositivos y navegadores

### Integración de Backend
El formulario de contacto está preparado para conectarse a un backend. En el archivo `src/components/Contact.jsx`, línea ~30, encontrarás el comentario donde integrar la API:

```javascript
// Aquí se podría integrar con una API real
// Por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
```

## 📞 Información de Contacto

- **Teléfono**: +56 9 3087 6457
- **Email**: info@inselpro.cl
- **Región**: Metropolitana, Chile

## 📄 Licencia

© 2025 INSELPRO. Todos los derechos reservados.

---

Desarrollado con ❤️ para INSELPRO - Servicios Eléctricos Profesionales

