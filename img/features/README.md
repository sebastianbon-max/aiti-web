# Capturas de Pantalla — aiTi Web

Las capturas de pantalla de funcionalidades para la web comercial se almacenan en esta carpeta.

---

## Guía completa

Para instrucciones detalladas sobre cómo tomar, convertir y nombrar las capturas, ver:

👉 **[GUIA_CAPTURAS.md](GUIA_CAPTURAS.md)**

La guía incluye:
- Flujo paso a paso (preparar pantalla → capturar → convertir a WebP → subir)
- Tabla completa de nombres de archivo por card (24 cards × 3 capturas = 72 máximo)
- Qué capturar en cada card (sugerencias específicas)
- Herramientas recomendadas y configuración

---

## Resumen rápido

- **Formato:** WebP (convertir con [towebp.io](https://towebp.io) al 80% de calidad)
- **Resolución:** 1920x1080 (pantalla completa, sin barra de Chrome)
- **Nombres:** `{funcionalidad}-{n}.webp` (ej: `dashboard-1.webp`, `inventario-2.webp`)
- **Cards configuradas:** 24 en total (definidas en `js/main.js`)
- **Fallback:** si una captura no existe, la web muestra "Captura próximamente"

---

## Notas

- Usar datos ficticios (command: `python manage.py load_demo_data --reset`)
- Ocultar información sensible (IPs reales, nombres reales)
- Las capturas se cargan bajo demanda (lazy load al hacer clic en la card)
