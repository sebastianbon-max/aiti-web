# Guía de Capturas de Pantalla — aiTi Web

---

## Flujo completo paso a paso

### Paso 1: Preparar la pantalla

1. Abrir Chrome y poner la ventana en **1920x1080** (si tu monitor es mayor, ajustá el tamaño de ventana)
2. Presionar **F11** para modo pantalla completa (sin barra de Chrome)
3. **Modo claro** (dark mode OFF)
4. Navegador limpio: sin extensiones visibles, sin barra de favoritos
5. Navegar a la sección que vas a capturar
6. Verificar que haya datos de demo cargados (badges, colores, gráficos visibles)

---

### Paso 2: Tomar la captura

**Recomendado: Win + Shift + S (Snipping Tool)**

1. Con la pantalla lista, presionar **Win + Shift + S**
2. Seleccionar **"Pantalla completa"** (tercer icono) o **"Ventana"**
3. La captura se copia al portapapeles y se abre en Snipping Tool
4. Guardar como PNG en una carpeta temporal (ej: `Desktop/capturas_temp/`)
5. Nombrar con el nombre final: `dashboard-1.png`, `inventario-2.png`, etc.

**Por que NO usar GoFullPage:**
GoFullPage captura la pagina completa con scroll, generando imagenes muy largas (3000-8000px de alto). Para la web necesitas exactamente 1920x1080 (lo visible en pantalla). Usar GoFullPage requiere recortar cada imagen despues, lo cual es tedioso con 70+ capturas.

**Tip:** Si necesitas mostrar una seccion que esta mas abajo en la pagina, simplemente hace scroll hasta esa seccion y despues toma la captura con Win+Shift+S. Asi capturas exactamente lo que se ve.

---

### Paso 2: Comprimir y convertir a WebP

**Herramienta:** [towebp.io](https://towebp.io)

1. Ir a **towebp.io**
2. Arrastrar TODAS las capturas PNG juntas a la pantalla
3. En la barra de **Quality**, poner en **80%**
4. Click en **Convertir**
5. Descargar el ZIP con los archivos `.webp`
6. Extraer y verificar que los nombres sean correctos (ej: `dashboard-1.webp`)

**Resultado:** cada imagen pesa 80-200 KB (vs 500KB-2MB del PNG original)

---

### Paso 3: Subir a la web

1. Copiar los archivos `.webp` a la carpeta: `aiti-web/img/features/`
2. Verificar que los nombres coincidan con los de la tabla de abajo
3. Abrir `aiti-web/index.html` en el navegador local y probar que las capturas se vean al hacer click en cada card

---

## Nombres de archivo por card

Cada card acepta hasta 3 capturas. Si no existe el archivo, muestra "Captura próximamente".

| # | Card | Archivo 1 | Archivo 2 | Archivo 3 |
|---|------|-----------|-----------|-----------|
| 1 | Dashboard | `dashboard-1.webp` | `dashboard-2.webp` | `dashboard-3.webp` |
| 2 | Inventario | `inventario-1.webp` | `inventario-2.webp` | `inventario-3.webp` |
| 3 | Backups | `backups-1.webp` | `backups-2.webp` | `backups-3.webp` |
| 4 | Terminal | `terminal-1.webp` | `terminal-2.webp` | `terminal-3.webp` |
| 5 | Sitios/Mudanzas | `sitios-1.webp` | `sitios-2.webp` | `sitios-3.webp` |
| 6 | Stock/Asignación | `stock-1.webp` | `stock-2.webp` | `stock-3.webp` |
| 7 | Comparación Config | `diff-1.webp` | `diff-2.webp` | `diff-3.webp` |
| 8 | IPAM | `redes-1.webp` | `redes-2.webp` | `redes-3.webp` |
| 9 | VPN | `vpn-1.webp` | `vpn-2.webp` | `vpn-3.webp` |
| 10 | Tareas | `tareas-1.webp` | `tareas-2.webp` | `tareas-3.webp` |
| 11 | Reportes | `reportes-1.webp` | `reportes-2.webp` | `reportes-3.webp` |
| 12 | Servicios | `servicios-1.webp` | `servicios-2.webp` | `servicios-3.webp` |
| 13 | Administrativo | `administrativo-1.webp` | `administrativo-2.webp` | `administrativo-3.webp` |
| 14 | Auditoría | `auditoria-1.webp` | `auditoria-2.webp` | `auditoria-3.webp` |
| 15 | Credenciales | `credenciales-1.webp` | `credenciales-2.webp` | `credenciales-3.webp` |
| 16 | Importación | `importacion-1.webp` | `importacion-2.webp` | `importacion-3.webp` |
| 17 | Email | `email-1.webp` | `email-2.webp` | `email-3.webp` |
| 18 | Calendario | `calendario-1.webp` | `calendario-2.webp` | `calendario-3.webp` |
| 19 | Contactos | `contactos-1.webp` | `contactos-2.webp` | `contactos-3.webp` |
| 20 | Biblioteca | `biblioteca-1.webp` | `biblioteca-2.webp` | `biblioteca-3.webp` |
| 21 | Multi-Área | `multiarea-1.webp` | `multiarea-2.webp` | `multiarea-3.webp` |
| 22 | Firmware/Autom. | `firmware-1.webp` | `firmware-2.webp` | `firmware-3.webp` |
| 23 | Mapa | `mapa-1.webp` | `mapa-2.webp` | `mapa-3.webp` |
| 24 | Telefonía | `telefonia-1.webp` | `telefonia-2.webp` | `telefonia-3.webp` |

---

## Qué capturar en cada card

| # | Card | Captura 1 | Captura 2 | Captura 3 |
|---|------|-----------|-----------|-----------|
| 1 | Dashboard | KPIs + gráficos de torta | Widgets (backups, tareas, firmware) | Alertas o sección inferior |
| 2 | Inventario | Listado con filtros y badges | Detalle de equipo | Selector columnas o accesorios |
| 3 | Backups | Listado con indicador último backup | Historial de un equipo | Reportes de backup |
| 4 | Terminal | Grilla 4 terminales | Terminal con snippets/guías | Árbol de equipos por sitio |
| 5 | Sitios | Listado con badges por tipo | Detalle sitio con equipos | Mudanzas con checklist |
| 6 | Stock | Filtrado por STOCK | Equipo con persona asignada | Cambio masivo de estado |
| 7 | Diff | Comparación lado a lado | Selector de versiones | Cambios resaltados |
| 8 | IPAM | Dashboard KPIs + subredes | Mapa de IPs (colores) | Duplicados o reservadas |
| 9 | VPN | Mapa con túneles | Listado de túneles | Detalle desde sitio |
| 10 | Tareas | Listado con estadísticas | Detalle con comentarios | Tareas por sitio |
| 11 | Reportes | PDF generado | Reportes programados | Exportación Excel |
| 12 | Servicios | Dashboard KPIs + gráficos | Listado (operativo/vencido/baja) | Detalle con pagos |
| 13 | Administrativo | OC con equipos | Licitaciones | Licencias software |
| 14 | Auditoría | Log con filtros | Sesiones activas | Estadísticas |
| 15 | Credenciales | Listado plantillas | Formulario edición | Herencia cascada |
| 16 | Importación | Carga archivo Excel | Preview con checkboxes | Resultado importación |
| 17 | Email | Config SMTP | Reportes programados | Log emails enviados |
| 18 | Calendario | Vista mensual con eventos | Detalle evento | Vencimientos próximos |
| 19 | Contactos | Listado con categorías | Detalle contacto | Importación masiva |
| 20 | Biblioteca | Listado documentos | Firmware versiones | Carga de archivo |
| 21 | Multi-Área | Panel grupos con desglose | Selector grupo en navbar | Sidebar dinámico |
| 22 | Firmware | Versiones con recomendadas | Reporte actualización | Comandos programados |
| 23 | Mapa | Mapa general con pins | Heatmap equipos/backups | Popup sitio |
| 24 | Telefonía | Dashboard centrales/internos | Listado internos | Detalle central inline |

---

## Total: hasta 72 capturas (24 cards × 3)

Con 2 por card ya queda comercial. La tercera es bonus.


---

## Video Demo (3-5 minutos)

### Objetivo

Un screencast corto que muestre el sistema en funcionamiento. Más efectivo que 72 capturas para el visitante que quiere ver el producto "vivo" antes de descargarlo.

---

### Herramienta recomendada: OBS Studio (gratuito)

1. Descargar de [obsproject.com](https://obsproject.com)
2. Instalar y abrir
3. Configurar:
   - **Sources** → agregar "Display Capture" o "Window Capture" (solo Chrome)
   - **Settings → Output**: formato MP4, encoder x264, bitrate 2500-4000 kbps
   - **Settings → Video**: resolución 1920x1080, 30 FPS
   - **Settings → Audio**: desactivar micrófono si no vas a narrar

**Alternativa rápida sin instalar nada:** Xbox Game Bar (Win+G) → captura de pantalla integrada en Windows 10/11.

---

### Qué grabar (guión sugerido, 3-5 min)

| Tiempo | Qué mostrar |
|--------|-------------|
| 0:00-0:20 | Login → Dashboard con KPIs y gráficos |
| 0:20-0:50 | Inventario: filtros, columnas, detalle de equipo |
| 0:50-1:20 | Sitios: listado → detalle con equipos → mapa |
| 1:20-1:50 | IPAM: dashboard → detalle subred → jerarquía |
| 1:50-2:20 | Backup: listado → ejecutar → historial |
| 2:20-2:50 | Terminal SSH: conexión, snippets, grilla |
| 2:50-3:20 | Servicios + Telefonía (rápido) |
| 3:20-3:50 | Tareas, Calendario, Contactos (rápido) |
| 3:50-4:20 | Admin: OC, licencias, auditoría |
| 4:20-4:50 | Configuración: grupos de área, features, reporte ejecutivo |

---

### Tips para grabar

1. **Modo claro** (dark mode OFF)
2. **Datos de demo cargados** (`python manage.py load_demo_data --reset`)
3. **Movimientos lentos** — el espectador necesita tiempo para leer
4. **No narrar** en la primera versión (agregar subtítulos o texto superpuesto después)
5. **Navegador limpio** — sin extensiones, sin favoritos, sin notificaciones
6. **Pantalla completa** (F11) — sin barra de Chrome
7. **Mouse visible** — para que se vea dónde se hace click
8. **Cortar errores** — si te equivocás, seguí y editá después

---

### Post-producción (opcional)

**Herramienta:** [Clipchamp](https://clipchamp.com) (gratis, incluido en Windows 11) o [Kdenlive](https://kdenlive.org) (gratis, más avanzado)

1. Cortar partes lentas o errores
2. Agregar texto/títulos en las transiciones (ej: "Inventario de Equipos", "IPAM")
3. Agregar música de fondo suave (buscar "royalty free background music" en YouTube Audio Library)
4. Exportar a MP4, 1080p, bitrate ~5000 kbps

---

### Dónde publicar

| Plataforma | Uso |
|------------|-----|
| YouTube (unlisted o público) | Embed en la web con `<iframe>` |
| GitHub (como asset en release) | Link directo al MP4 |
| Directamente en el sitio | Archivo MP4 en `aiti-web/video/` (pesado, no recomendado) |

**Recomendado:** Subir a YouTube como "No listado" y embeber en la web. Peso 0 para el hosting, reproduce bien en móvil, y no indexa en búsquedas de YouTube.

---

### Embed en la web (cuando esté listo)

Agregar en `index.html` debajo del hero o en una sección propia:

```html
<section class="py-5 bg-light text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Véalo en acción</h2>
        <div class="ratio ratio-16x9 mx-auto" style="max-width: 900px;">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
        </div>
    </div>
</section>
```

Reemplazar `VIDEO_ID` con el ID del video de YouTube.
