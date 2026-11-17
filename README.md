# BONK MANIA v1.1 — YouTube Playables Release Candidate

## Cambios
- SDK oficial de YouTube antes de cualquier código del juego; `firstFrameReady`, `gameReady`, `IN_PLAYABLES_ENV`, audio, pausa, reanudación, `loadData`, `saveData`, `sendScore`.
- Bombas sobre animales: 1 corazón completo; erizo con dos bombas: 2 corazones; minas: 3 corazones completos. Internamente cada corazón equivale a dos unidades.
- Conserva las minas desde el nivel 10, tutorial y desactivación eléctrica.
- DEBUG_MODE=false, 60 segundos por nivel.
- Protecciones adicionales de audio silenciado y de puntaje.

## BLOQUEADOR PARA SUBIR A YOUTUBE
Este paquete NO está listo para subir: `index.html` importa Three.js 0.160.0 desde CDN. El entorno de creación no tiene acceso al paquete externo para incluirlo. Antes de enviar:
1. Descargar legalmente `three.module.js` v0.160.0 de https://www.npmjs.com/package/three (licencia MIT) o desde npm (`npm pack three@0.160.0`).
2. Copiar `package/build/three.module.js` a `vendor/three.module.js` y cambiar en `index.html` el import CDN por `./vendor/three.module.js`.
3. Revisar que ninguna otra petición externa ocurra salvo el SDK autorizado de YouTube.
4. Ejecutar la suite oficial de YouTube y probar el juego real en móvil y escritorio.
5. Obtener acceso al portal de desarrolladores de YouTube Playables y enviar el ZIP validado.

## Notas de QA
- Integridad del ZIP y sintaxis del JavaScript comprobadas; NO se realizó prueba funcional de navegador ni suite oficial.
- No incluye recursos para anuncios ni anuncios obligatorios.
- No afirma aprobación ni certificación de YouTube.
- Iniciar un servidor local, p. ej. `python -m http.server 8000`, en la carpeta y visitar http://localhost:8000.
