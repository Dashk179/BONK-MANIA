// WHACK 3D - Configuración central del juego.
// Cambia DEBUG_MODE a false para jugar con niveles de 60 segundos.
export const GAME_CONFIG = Object.freeze({
  DEBUG_MODE: false,             // true: pruebas; false: juego normal
  LEVEL_DURATION: 60,           // segundos por nivel en modo normal
  DEBUG_LEVEL_DURATION: 10,     // segundos por nivel en pruebas
  START_LEVEL: 1,               // nivel inicial (1, 2, 3...)
  SPEED_MULTIPLIER: 1,          // 1 = normal, 1.5 = más rápido
  SHOW_LEVEL_SUMMARY: false      // reservado para configurar el resumen
});
