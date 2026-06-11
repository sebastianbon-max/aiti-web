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

---

## Qué capturar en cada card

Cada card acepta hasta 3 capturas. Si no existe el archivo, muestra "Captura próximamente".

**Tips generales para todas las capturas:**
- Zoom 90% si el contenido no entra en 1080px
- Expandir al menos una sección colapsable antes de capturar
- Que haya datos variados (badges de colores, estados distintos, gráficos con valores)
- Sidebar visible a la izquierda (muestra que es una app completa)
- No capturar con modales o dropdowns abiertos (salvo que sea el punto de la captura)

| # | Card | Captura 1 — Qué mostrar | Captura 2 — Qué mostrar | Captura 3 — Qué mostrar | Archivos |
|---|------|--------------------------|--------------------------|--------------------------|----------|
| 1 | Dashboard | **Vista inicial:** KPIs arriba (total equipos, sitios, backups, usuarios) + gráfico torta "Equipos por tipo" visible a la derecha. Que se vean números reales, no ceros. | **Widget expandido:** expandir "Resumen de Backups" o "Estado de Firmware" para que se vea la tabla con datos + badges de colores (exitoso/fallido/parcial). | **Tendencias:** scroll abajo, expandir "Tendencias y Evolución" mostrando gráficos de línea con datos de varias semanas. Que se vean las curvas, no líneas planas. | `dashboard-1.webp`, `dashboard-2.webp`, `dashboard-3.webp` |
| 2 | Inventario | **Listado completo:** tabla con filtros activos visibles arriba (tipo, marca, estado), columnas con hostname, IP, sitio, estado. Que se vean badges de colores (OPERATIVO verde, MANTENIMIENTO naranja). Al menos 8-10 filas visibles. | **Detalle de equipo:** ficha de un equipo con todos los campos llenos: hostname, IP, MAC, modelo, sitio, persona asignada, fecha compra. La sección de "Información de Red" visible. | **Selector columnas o vista con accesorios:** dropdown "Columnas" abierto mostrando checkboxes, o scroll abajo en el detalle mostrando la sección de accesorios asociados con 2-3 ítems. | `inventario-1.webp`, `inventario-2.webp`, `inventario-3.webp` |
| 3 | Backups | **Listado de equipos con backup:** tabla mostrando columna "Último backup" con fechas y badges (exitoso verde, fallido rojo, nunca gris). Filtros visibles arriba. Que se noten equipos con distintos estados. | **Historial de un equipo:** click en un equipo → vista de todos sus backups con fecha, tamaño, duración. Que se vean al menos 5-6 registros históricos con botón "Comparar". | **Reportes o tarea ejecutándose:** la vista de /backup/reports/ con gráficos de éxito/fallo, o una tarea de backup en progreso mostrando la barra y los equipos procesados. | `backups-1.webp`, `backups-2.webp`, `backups-3.webp` |
| 4 | Terminal | **Grilla multi-terminal:** 4 terminales abiertos simultáneamente (grilla 2x2). Cada uno conectado a un equipo distinto con texto de consola visible (prompts de Cisco/MikroTik/Linux). Pantalla completa sin sidebar. | **Terminal con panel lateral:** un terminal con el panel de snippets o guías abierto a la derecha. Que se vea el árbol de snippets con carpetas y el terminal activo a la izquierda. | **Árbol de equipos por sitio:** el panel lateral izquierdo con el tree view de sitios → equipos expandido. Click en un equipo y que se vea que se conectó. | `terminal-1.webp`, `terminal-2.webp`, `terminal-3.webp` |
| 5 | Sitios | **Listado de sitios:** tabla con columnas CD, dirección, provincia, localidad, cantidad de equipos (badge), estado. Filtros por zona/provincia visibles. Al menos 6-8 sitios con datos variados. | **Detalle de sitio:** vista de un sitio con dirección completa, mapa mini, y la tabla de equipos del sitio abajo (5+ equipos). Que se vean las tabs o secciones del detalle. | **Mudanzas:** un proyecto de mudanza con el checklist visible (items tachados y pendientes), equipo origen/destino, archivos adjuntos. Estado "En progreso". | `sitios-1.webp`, `sitios-2.webp`, `sitios-3.webp` |
| 6 | Stock | **Vista filtrada por estado STOCK:** inventario filtrado con estado="STOCK" mostrando equipos disponibles para asignación. Que se noten los badges "STOCK" en amarillo/naranja. | **Equipo con persona asignada:** detalle de un equipo que tiene campo "Persona asignada" lleno, mostrando nombre completo, área, legajo. Historial de asignaciones si existe. | **Operación masiva:** seleccionar múltiples equipos con checkboxes + el dropdown de "Acciones masivas" abierto mostrando opciones (cambiar estado, asignar sitio, etc.). | `stock-1.webp`, `stock-2.webp`, `stock-3.webp` |
| 7 | Diff | **Comparación lado a lado:** dos versiones de configuración de un equipo una al lado de la otra con diferencias resaltadas en verde (agregado) y rojo (eliminado). Que se vean líneas de config reales. | **Selector de versiones:** la vista donde se eligen dos fechas/versiones de backup para comparar. Que se vea el equipo seleccionado y las fechas disponibles. | **Detalle de cambios:** zoom en una sección del diff mostrando claramente líneas cambiadas. Idealmente config de red (IP, máscara, ruta) para que sea reconocible. | `diff-1.webp`, `diff-2.webp`, `diff-3.webp` |
| 8 | IPAM | **Dashboard:** KPIs arriba (total subredes, IPs asignadas, libres, % ocupación) + tabla de subredes con barras de progreso de ocupación en colores (verde/amarillo/rojo). Filtros por provincia. | **Mapa de IPs:** detalle de una subred /24 mostrando la grilla de 254 IPs con colores: verde=asignada, blanco=libre, naranja=reservada, azul=DHCP. Que se vea info al hover. | **Jerarquía o duplicados:** la vista jerárquica con 3 niveles expandidos (10.0.0.0/8 → /16 → /24), o la sección de IPs duplicadas mostrando conflictos detectados. | `redes-1.webp`, `redes-2.webp`, `redes-3.webp` |
| 9 | VPN | **Mapa con túneles:** el mapa interactivo mostrando sitios como puntos y líneas de conexión VPN entre ellos. Que se vean al menos 3-4 túneles cruzando el mapa con colores por estado. | **Listado de túneles:** tabla con columnas origen, destino, tipo (IPSEC/GRE), estado (activo/inactivo), IP local/remota. Badges de colores por estado. | **Detalle desde sitio:** la sección VPN dentro del detalle de un sitio, mostrando "Túneles de este sitio" con los destinos y el estado de cada uno. | `vpn-1.webp`, `vpn-2.webp`, `vpn-3.webp` |
| 10 | Tareas | **Listado con estadísticas:** KPIs arriba (pendientes, en progreso, completadas, vencidas) + tabla de tareas con prioridad (badges alta/media/baja), asignados, y fecha límite. Mezcla de estados. | **Detalle con comentarios:** una tarea abierta mostrando descripción, asignados, fecha límite, y la sección de comentarios con 2-3 mensajes de usuarios distintos (con avatar/nombre). | **Tareas por sitio:** la vista de tareas filtrada por un sitio específico, o la sección de tareas dentro del detalle de un sitio, mostrando tareas vinculadas. | `tareas-1.webp`, `tareas-2.webp`, `tareas-3.webp` |
| 11 | Reportes | **PDF generado:** un PDF abierto en el navegador mostrando encabezado con logo, título, tabla con datos, y gráficos. Que se vea profesional y con formato empresarial. | **Reportes programados:** la configuración de reportes automáticos mostrando frecuencia (diario/semanal/mensual), destinatarios, y próxima ejecución. | **Exportación Excel:** la pantalla de descarga o un Excel abierto mostrando las columnas con datos exportados. O el botón "Exportar" visible en algún listado. | `reportes-1.webp`, `reportes-2.webp`, `reportes-3.webp` |
| 12 | Servicios | **Dashboard servicios:** KPIs (total servicios, monto mensual, próximos vencimientos) + gráfico de distribución por proveedor o por sitio. Badges de estado (operativo/vencido). | **Listado completo:** tabla con proveedor, sitio, velocidad, monto, estado, vencimiento. Mezcla de estados: operativo (verde), por vencer (naranja), dado de baja (gris). | **Detalle con pagos:** ficha de un servicio mostrando datos del contrato + tabla de pagos mensuales con fecha, monto, comprobante. Que se vea historial de 4-5 pagos. | `servicios-1.webp`, `servicios-2.webp`, `servicios-3.webp` |
| 13 | Administrativo | **Órdenes de compra:** listado de OC con proveedor, monto, estado (aprobada/pendiente/recibida), fecha, equipos vinculados (badge con cantidad). | **Licitaciones:** listado o detalle de una licitación con expediente, organismo, fecha apertura, estado, documentos adjuntos. | **Licencias de software:** listado de licencias con producto, cantidad, vencimiento, proveedor. Badges de "por vencer" en naranja. | `administrativo-1.webp`, `administrativo-2.webp`, `administrativo-3.webp` |
| 14 | Auditoría | **Log con filtros:** tabla de auditoría con usuario, acción, modelo afectado, fecha/hora, IP. Filtros por usuario y acción visibles arriba. Al menos 10 registros variados. | **Sesiones activas:** listado de sesiones mostrando usuario, IP, navegador, inicio sesión, última actividad. Que se vean 3-4 sesiones con datos reales. | **Estadísticas:** gráficos o resumen de actividad: acciones por usuario, por módulo, por día. Que se vea que el sistema registra todo. | `auditoria-1.webp`, `auditoria-2.webp`, `auditoria-3.webp` |
| 15 | Credenciales | **Listado de plantillas:** tabla de credenciales SSH con tipo (SSH/Telnet), alcance (global/por tipo/por marca), usuario, puerto. Sin mostrar contraseñas (que se vean asteriscos). | **Formulario de edición:** formulario abierto mostrando campos: nombre, tipo conexión, usuario, puerto, timeout. Que se vea que es un formulario completo y profesional. | **Herencia cascada:** la vista que muestra la cascada de credenciales: Global → por Tipo → por Marca → por Modelo → por Equipo. Que se entienda la jerarquía. | `credenciales-1.webp`, `credenciales-2.webp`, `credenciales-3.webp` |
| 16 | Importación | **Carga de archivo:** la pantalla de upload mostrando el selector de archivo Excel, instrucciones de formato, y la plantilla descargable. Antes de importar. | **Preview con checkboxes:** la vista de previsualización post-carga mostrando las filas del Excel con checkboxes para seleccionar cuáles importar. Columnas mapeadas con colores (válido/error). | **Resultado:** la pantalla post-importación mostrando resumen: X creados, Y actualizados, Z errores. Con detalle de errores si los hay. Mensaje de éxito verde. | `importacion-1.webp`, `importacion-2.webp`, `importacion-3.webp` |
| 17 | Email | **Config SMTP:** formulario de configuración de servidor de correo con campos: servidor, puerto, usuario, seguridad (TLS/SSL). Que se vea profesional, no técnico. | **Reportes programados:** configuración de envíos automáticos: tipo de reporte, frecuencia, destinatarios (multi-select con emails). Próxima ejecución visible. | **Log de emails:** tabla de correos enviados con fecha, destinatario, asunto, estado (enviado/error). Badge verde "Enviado" en la mayoría. | `email-1.webp`, `email-2.webp`, `email-3.webp` |
| 18 | Calendario | **Vista mensual:** calendario completo con eventos de colores en distintos días. Que se vean al menos 5-6 eventos distribuidos en el mes. Leyenda de colores visible. | **Detalle de evento:** modal o vista de un evento con título, fecha, hora, descripción, categoría, recordatorio. Bien formateado. | **Vencimientos próximos:** panel lateral o listado mostrando vencimientos de licencias/contratos/certificados ordenados por fecha. Badges "próximo" en naranja. | `calendario-1.webp`, `calendario-2.webp`, `calendario-3.webp` |
| 19 | Contactos | **Listado con categorías:** tabla de contactos con nombre, organización, teléfono, email, categoría (badge coloreado: Proveedor, ISP, Soporte, etc.). Filtro por categoría visible. | **Detalle contacto:** ficha completa con todos los campos: nombre, cargo, organización, teléfonos, emails, notas, sitios vinculados. Foto o ícono de avatar. | **Importación masiva:** la pantalla de importación de contactos desde Excel con preview de datos y opción de marcar como "agenda institucional" (global). | `contactos-1.webp`, `contactos-2.webp`, `contactos-3.webp` |
| 20 | Biblioteca | **Listado documentos:** tabla con nombre, categoría (Manual, Procedimiento, Diagrama), equipo vinculado, fecha carga, usuario. Íconos por tipo de archivo (PDF, DOC, etc.). | **Firmware/versiones:** listado de versiones de firmware por modelo con "recomendada" marcada, fecha release, notas. Badge "desactualizado" en rojo para equipos viejos. | **Carga de archivo:** formulario de upload con campos: título, categoría, equipo vinculado, archivo. Drag & drop zone visible. | `biblioteca-1.webp`, `biblioteca-2.webp`, `biblioteca-3.webp` |
| 21 | Multi-Área | **Panel de grupos:** listado de grupos de área con nombre, miembros (count), features habilitados (badges), equipos/sitios. Vista de administración ROOT. | **Selector de grupo en navbar:** la barra superior mostrando el dropdown de "Grupo activo" abierto con las opciones: "Todos", "Redes", "Telefonía", "Soporte". | **Sidebar dinámico:** dos capturas comparadas (o una mostrando): sidebar con módulos específicos de un grupo. Que se note que cambia según el grupo seleccionado. | `multiarea-1.webp`, `multiarea-2.webp`, `multiarea-3.webp` |
| 22 | Firmware | **Versiones con recomendadas:** listado de modelos con columna "versión actual", "versión recomendada", cantidad de equipos, % actualizados. Badge verde/rojo. | **Reporte de actualización:** vista que muestra qué equipos necesitan update con modelo, versión actual, versión target, sitio. Botón "Generar plan de actualización". | **Comandos programados:** listado de automatizaciones/comandos configurados con frecuencia, último resultado, próxima ejecución. | `firmware-1.webp`, `firmware-2.webp`, `firmware-3.webp` |
| 23 | Mapa | **Mapa general:** mapa con pins de sitios distribuidos geográficamente. Zoom mostrando una provincia/región con 4-5 pins visibles. Que se vea el basemap y los markers. | **Heatmap:** el mapa con overlay de calor mostrando densidad de equipos o backups. Colores intensos en zonas con más equipos. Leyenda visible. | **Popup de sitio:** click en un pin mostrando el popup con nombre del sitio, dirección, cantidad de equipos, último backup. Link "Ver detalle". | `mapa-1.webp`, `mapa-2.webp`, `mapa-3.webp` |
| 24 | Telefonía | **Dashboard:** KPIs (centrales, tramas, internos) + tabla de centrales con modelo, sitio, tramas activas, internos count. Datos variados. | **Listado internos:** tabla de internos con extensión, nombre, sitio destino, tipo (físico/SIP/softphone), estado. Filtros activos. Al menos 10 filas. | **Detalle central con edición inline:** la ficha de una central mostrando las tramas e internos editables directamente (inline). Que se vean los campos editables. | `telefonia-1.webp`, `telefonia-2.webp`, `telefonia-3.webp` |

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


---

## Video de Instalación (1-2 minutos)

Video corto que muestre lo fácil que es instalar el sistema. Se muestra en la web o se envía a clientes potenciales.

---

### Preparación

1. **VM limpia** con Windows Server o Windows 10/11 (sin aiTi instalado)
2. **Resolución 1920x1080** en la VM
3. **Escritorio limpio** — sin iconos innecesarios, wallpaper por defecto de Windows
4. **Tener el instalador** `aiTi_Setup_vX.X.X.exe` en el Escritorio de la VM
5. **OBS Studio** corriendo en la máquina HOST (captura la ventana de la VM)

---

### Guión paso a paso

| Paso | Qué mostrar | Duración |
|------|-------------|----------|
| 1 | Escritorio limpio con el instalador visible | 3 seg |
| 2 | Doble click en el instalador → se abre el wizard | 3 seg |
| 3 | Pantalla de bienvenida → click "Siguiente" | 3 seg |
| 4 | Selección de carpeta (dejar por defecto) → "Siguiente" | 3 seg |
| 5 | Opciones de instalación (servicios, shortcuts) → "Siguiente" | 5 seg |
| 6 | Progreso de instalación (barra avanzando) | 10-15 seg |
| 7 | Pantalla "Instalación completada" → "Finalizar" | 3 seg |
| 8 | El navegador se abre automáticamente con la pantalla de login | 5 seg |
| 9 | Login con usuario admin → Dashboard con datos | 10 seg |

**Total:** ~60-90 segundos

---

### Tips específicos para este video

1. **Empezar grabando el escritorio** con el mouse quieto 2-3 segundos (da aire al inicio)
2. **Doble click visible y pausado** — que se vea claramente que hacés doble click en el .exe
3. **No acelerar** la barra de progreso — mostrarla real (si es rápida, mejor)
4. **Si pide UAC** (Control de cuentas de usuario) → mostrar que se acepta (es normal)
5. **Al final mostrar el login funcionando** — eso cierra el ciclo "descargo → instalo → uso"
6. **No narrar** — agregar subtítulos después si hace falta

---

### Captura con OBS (desde el HOST)

1. En OBS, agregar source "Window Capture" → seleccionar la ventana de la VM (VMware/VirtualBox/Hyper-V)
2. Ajustar el crop para que solo se vea el contenido de la VM (sin bordes del virtualizador)
3. Presionar "Start Recording"
4. Hacer todo el flujo de instalación dentro de la VM
5. Presionar "Stop Recording"
6. El video queda en la carpeta de OBS (por defecto `C:\Users\{usuario}\Videos`)

**Alternativa:** Si la VM tiene acceso a OBS, podés grabar directamente dentro de la VM con Xbox Game Bar (Win+G → Start Recording).

---

### Post-producción

1. Cortar los primeros/últimos segundos muertos
2. (Opcional) Agregar texto superpuesto al inicio: "Instalación en menos de 2 minutos"
3. (Opcional) Acelerar x2 la parte de la barra de progreso si tarda mucho
4. Exportar a MP4, 1080p

---

### Dónde usar este video

- En la sección "Instalación" de la web (embed YouTube)
- Como adjunto en emails comerciales
- En la página de descarga (junto al formulario de trial)
- En presentaciones a clientes
