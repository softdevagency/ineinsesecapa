# INEIN – Proyecto completo actualizado

Esta carpeta es una copia completa del proyecto original `ineinsesecapa-main.zip` con los cambios solicitados en `actualizacion.pdf` (23 noviembre 2026).

## Cambios realizados

- Menú **Diplomados** en Inicio, Sobre Nosotros, Oferta Académica y Contacto.
- Página nueva `diplomados.html` con los **22 diplomados** proporcionados; cada ficha muestra objetivo, dirigido a, duración, valor curricular, modalidad y PDF original.
- Inicio y Oferta Académica ahora presentan diplomados destacados con enlaces funcionales al catálogo.
- Los cursos y módulos de informática en la página de Oferta Académica se mantuvieron sin cambios de contenido.
- Logotipos nuevos proporcionados por el cliente: color, blanco y emblema/fav-icon.
- Sección de evidencias en Inicio y Sobre Nosotros: **9 fotografías** provistas por la institución (6 en Inicio, 3 en Nosotros).
- Se sustituyeron testimonios de plantilla por **5 fragmentos reales, anonimizados**, tomados de capturas del cliente. Por privacidad, NO se distribuyeron ni publicaron las capturas originales de WhatsApp con números de teléfono.
- Nueva hoja `css/actualizacion-inein.css`, filtro y búsqueda `js/diplomados.js`, nueva URL en `sitemap.xml`.

## Archivos importantes

- `index.html`: Inicio actualizado.
- `cursos.html`: módulos de informática conservados y nuevos diplomados destacados.
- `diplomados.html`: catálogo completo con los 22 diplomados.
- `nosotros.html`: testimonios nuevos y evidencias.
- `images/diplomados/`: 20 carteles directamente relacionados con los PDF. Para los otros dos programas sin imagen suministrada se muestra tarjeta tipográfica (no se inventaron imágenes).
- `images/evidencias/`: capturas de clases proporcionadas.
- `documentos/diplomados/`: 22 PDFs originales, sin alteraciones.

## Publicación

1. Realiza primero una copia de seguridad de la versión publicada.
2. Sube el **contenido de esta carpeta** a la raíz del repositorio GitHub `softdevagency/ineinsesecapa` (mejor mediante una rama de revisión y Pull Request).
3. Comprueba en móvil y escritorio `index.html`, `cursos.html`, `diplomados.html`, `nosotros.html` y los enlaces a PDF antes de fusionar a `main`.
4. Si GitHub Pages está configurado en `main`, la publicación puede ocurrir automáticamente al fusionar los cambios.

## Observaciones

- La documentación adjunta afirma valores curriculares distintos entre programas. Se conservó **cada dato exactamente según su PDF**, sin generalizar.
- Dos programas (Desarrollo Humano e Inteligencia Emocional; Dirección y Asesoría de Tesis) no tenían carteles inequívocamente asociados en los materiales y se presentan sin fotografía.
- Los testimonios son extractos (no transcripciones integrales), sin atribuir identidades ni teléfonos.
- Se mantuvieron las bibliotecas, scripts, formularios y resto de los archivos originales sin sustituir su funcionamiento.
- La validez oficial y demás afirmaciones institucionales del proyecto original no fueron verificadas de manera independiente.
