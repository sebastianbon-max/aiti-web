# Guía de Capturas de Pantalla — aiTi Web

---

<details>
<summary><strong>📋 Flujo completo paso a paso</strong></summary>

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

### Paso 3: Comprimir y convertir a WebP

**Herramienta:** [towebp.io](https://towebp.io)

1. Ir a **towebp.io**
2. Arrastrar TODAS las capturas PNG juntas a la pantalla
3. En la barra de **Quality**, poner en **80%**
4. Click en **Convertir**
5. Descargar el ZIP con los archivos `.webp`
6. Extraer y verificar que los nombres sean correctos (ej: `dashboard-1.webp`)

**Resultado:** cada imagen pesa 80-200 KB (vs 500KB-2MB del PNG original)

---

### Paso 4: Subir a la web

1. Copiar los archivos `.webp` a la carpeta: `aiti-web/img/features/`
2. Verificar que los nombres coincidan con los de la tabla de abajo
3. Abrir `aiti-web/index.html` en el navegador local y probar que las capturas se vean al hacer click en cada card

</details>

---

<details>
<summary><strong>🖼️ Qué capturar en cada card</strong></summary>

Cada card acepta hasta 3 capturas. Si no existe el archivo, muestra "Captura próximamente".

**Tips generales para todas las capturas:**
- Zoom 90% si el contenido no entra en 1080px
- Expandir al menos una sección colapsable antes de capturar
- Que haya datos variados (badges de colores, estados distintos, gráficos con valores)
- Sidebar visible a la izquierda (muestra que es una app completa)
- No capturar con modales o dropdowns abiertos (salvo que sea el punto de la captura)

---

<details>
<summary>1. Dashboard</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Vista inicial:** KPIs arriba (total equipos, sitios, backups, usuarios) + gráfico torta "Equipos por tipo" visible a la derecha. Que se vean números reales, no ceros. | `dashboard-1.webp` |
| 2 | **Widget expandido:** expandir "Resumen de Backups" o "Estado de Firmware" para que se vea la tabla con datos + badges de colores (exitoso/fallido/parcial). | `dashboard-2.webp` |
| 3 | **Tendencias:** scroll abajo, expandir "Tendencias y Evolución" mostrando gráficos de línea con datos de varias semanas. Que se vean las curvas, no líneas planas. | `dashboard-3.webp` |

</details>

<details>
<summary>2. Inventario</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado completo:** tabla con filtros activos visibles arriba (tipo, marca, estado), columnas con hostname, IP, sitio, estado. Que se vean badges de colores (OPERATIVO verde, MANTENIMIENTO naranja). Al menos 8-10 filas visibles. | `inventario-1.webp` |
| 2 | **Detalle de equipo:** ficha de un equipo con todos los campos llenos: hostname, IP, MAC, modelo, sitio, persona asignada, fecha compra. La sección de "Información de Red" visible. | `inventario-2.webp` |
| 3 | **Selector columnas o vista con accesorios:** dropdown "Columnas" abierto mostrando checkboxes, o scroll abajo en el detalle mostrando la sección de accesorios asociados con 2-3 ítems. | `inventario-3.webp` |

</details>

<details>
<summary>3. Backups</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado de equipos con backup:** tabla mostrando columna "Último backup" con fechas y badges (exitoso verde, fallido rojo, nunca gris). Filtros visibles arriba. Que se noten equipos con distintos estados. | `backups-1.webp` |
| 2 | **Historial de un equipo:** click en un equipo → vista de todos sus backups con fecha, tamaño, duración. Que se vean al menos 5-6 registros históricos con botón "Comparar". | `backups-2.webp` |
| 3 | **Reportes o tarea ejecutándose:** la vista de /backup/reports/ con gráficos de éxito/fallo, o una tarea de backup en progreso mostrando la barra y los equipos procesados. | `backups-3.webp` |

</details>

<details>
<summary>4. Terminal</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Grilla multi-terminal:** 4 terminales abiertos simultáneamente (grilla 2x2). Cada uno conectado a un equipo distinto con texto de consola visible (prompts de Cisco/MikroTik/Linux). Pantalla completa sin sidebar. | `terminal-1.webp` |
| 2 | **Terminal con panel lateral:** un terminal con el panel de snippets o guías abierto a la derecha. Que se vea el árbol de snippets con carpetas y el terminal activo a la izquierda. | `terminal-2.webp` |
| 3 | **Árbol de equipos por sitio:** el panel lateral izquierdo con el tree view de sitios → equipos expandido. Click en un equipo y que se vea que se conectó. | `terminal-3.webp` |

</details>

<details>
<summary>5. Sitios</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado de sitios:** tabla con columnas CD, dirección, provincia, localidad, cantidad de equipos (badge), estado. Filtros por zona/provincia visibles. Al menos 6-8 sitios con datos variados. | `sitios-1.webp` |
| 2 | **Detalle de sitio:** vista de un sitio con dirección completa, mapa mini, y la tabla de equipos del sitio abajo (5+ equipos). Que se vean las tabs o secciones del detalle. | `sitios-2.webp` |
| 3 | **Mudanzas:** un proyecto de mudanza con el checklist visible (items tachados y pendientes), equipo origen/destino, archivos adjuntos. Estado "En progreso". | `sitios-3.webp` |

</details>

<details>
<summary>6. Stock</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Vista filtrada por estado STOCK:** inventario filtrado con estado="STOCK" mostrando equipos disponibles para asignación. Que se noten los badges "STOCK" en amarillo/naranja. | `stock-1.webp` |
| 2 | **Equipo con persona asignada:** detalle de un equipo que tiene campo "Persona asignada" lleno, mostrando nombre completo, área, legajo. Historial de asignaciones si existe. | `stock-2.webp` |
| 3 | **Operación masiva:** seleccionar múltiples equipos con checkboxes + el dropdown de "Acciones masivas" abierto mostrando opciones (cambiar estado, asignar sitio, etc.). | `stock-3.webp` |

</details>

<details>
<summary>7. Diff</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Comparación lado a lado:** dos versiones de configuración de un equipo una al lado de la otra con diferencias resaltadas en verde (agregado) y rojo (eliminado). Que se vean líneas de config reales. | `diff-1.webp` |
| 2 | **Selector de versiones:** la vista donde se eligen dos fechas/versiones de backup para comparar. Que se vea el equipo seleccionado y las fechas disponibles. | `diff-2.webp` |
| 3 | **Detalle de cambios:** zoom en una sección del diff mostrando claramente líneas cambiadas. Idealmente config de red (IP, máscara, ruta) para que sea reconocible. | `diff-3.webp` |

</details>

<details>
<summary>8. IPAM</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Dashboard:** KPIs arriba (total subredes, IPs asignadas, libres, % ocupación) + tabla de subredes con barras de progreso de ocupación en colores (verde/amarillo/rojo). Botones "Ciclo de Vida" y "Conflictos" visibles. | `redes-1.webp` |
| 2 | **Mapa de IPs:** detalle de una subred /24 mostrando la grilla de 254 IPs con colores: azul=asignada, verde=libre, naranja=reservada, borde naranja=DHCP. Botones "Próxima IP Libre" y "Verificar IP" visibles. | `redes-2.webp` |
| 3 | **Historial + Conflictos:** la vista de historial completo mostrando eventos (badges: Asignada verde, Liberada rojo, Reasignada naranja) con timestamps, o la lista de conflictos detectados con MAC/hostname. | `redes-3.webp` |

Archivos: `redes-1.webp` a `redes-8.webp` (ya subidos)

</details>

<details>
<summary>9. VPN</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Mapa con túneles:** el mapa interactivo mostrando sitios como puntos y líneas de conexión VPN entre ellos. Que se vean al menos 3-4 túneles cruzando el mapa con colores por estado. | `vpn-1.webp` |
| 2 | **Listado de túneles:** tabla con columnas origen, destino, tipo (IPSEC/GRE), estado (activo/inactivo), IP local/remota. Badges de colores por estado. | `vpn-2.webp` |
| 3 | **Detalle desde sitio:** la sección VPN dentro del detalle de un sitio, mostrando "Túneles de este sitio" con los destinos y el estado de cada uno. | `vpn-3.webp` |

</details>

<details>
<summary>10. Tareas</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado con estadísticas:** KPIs arriba (pendientes, en progreso, completadas, vencidas) + tabla de tareas con prioridad (badges alta/media/baja), asignados, y fecha límite. Mezcla de estados. | `tareas-1.webp` |
| 2 | **Detalle con comentarios:** una tarea abierta mostrando descripción, asignados, fecha límite, y la sección de comentarios con 2-3 mensajes de usuarios distintos (con avatar/nombre). | `tareas-2.webp` |
| 3 | **Tareas por sitio:** la vista de tareas filtrada por un sitio específico, o la sección de tareas dentro del detalle de un sitio, mostrando tareas vinculadas. | `tareas-3.webp` |

</details>

<details>
<summary>11. Reportes</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **PDF generado:** un PDF abierto en el navegador mostrando encabezado con logo, título, tabla con datos, y gráficos. Que se vea profesional y con formato empresarial. | `reportes-1.webp` |
| 2 | **Reportes programados:** la configuración de reportes automáticos mostrando frecuencia (diario/semanal/mensual), destinatarios, y próxima ejecución. | `reportes-2.webp` |
| 3 | **Exportación Excel:** la pantalla de descarga o un Excel abierto mostrando las columnas con datos exportados. O el botón "Exportar" visible en algún listado. | `reportes-3.webp` |

</details>

<details>
<summary>12. Servicios</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Dashboard servicios:** KPIs (total servicios, monto mensual, próximos vencimientos) + gráficos donut de distribución por proveedor y por estado. Badges de estado (operativo/vencido). | `servicios-1.webp` |
| 2 | **Listado completo:** tabla con proveedor, sitio, velocidad, monto, estado, vencimiento. Mezcla de estados: operativo (verde), por vencer (naranja), dado de baja (gris). | `servicios-2.webp` |
| 3 | **Detalle con pagos:** ficha de un servicio mostrando datos del contrato + tabla de pagos mensuales con fecha, monto, comprobante. Que se vea historial de 4-5 pagos. | `servicios-3.webp` |

</details>

<details>
<summary>13. Administrativo</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Órdenes de compra:** listado de OC con proveedor, monto, estado (aprobada/pendiente/recibida), fecha, equipos vinculados (badge con cantidad). | `administrativo-1.webp` |
| 2 | **Licitaciones:** listado o detalle de una licitación con expediente, organismo, fecha apertura, estado, documentos adjuntos. | `administrativo-2.webp` |
| 3 | **Licencias de software:** listado de licencias con producto, cantidad, vencimiento, proveedor. Badges de "por vencer" en naranja. | `administrativo-3.webp` |

</details>

<details>
<summary>14. Auditoría</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Log con filtros:** tabla de auditoría con usuario, acción, modelo afectado, fecha/hora, IP. Filtros por usuario y acción visibles arriba. Al menos 10 registros variados. | `auditoria-1.webp` |
| 2 | **Sesiones activas:** listado de sesiones mostrando usuario, IP, navegador, inicio sesión, última actividad. Que se vean 3-4 sesiones con datos reales. | `auditoria-2.webp` |
| 3 | **Estadísticas:** gráficos o resumen de actividad: acciones por usuario, por módulo, por día. Que se vea que el sistema registra todo. | `auditoria-3.webp` |

</details>

<details>
<summary>15. Credenciales</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado por nivel:** tabla de credenciales SSH organizadas por tipo, marca y modelo (herencia en cascada). Que se vean las 3 secciones con usuario y puerto por cada nivel. | `credenciales-1.webp` |
| 2 | **Formulario de creación/edición:** formulario abierto mostrando campos: nivel (tipo/marca/modelo), usuario, contraseña (oculta), puerto, y selector del catálogo correspondiente. | `credenciales-2.webp` |
| 3 | **Test de conexión o detalle de equipo:** la vista de "Probar" credencial con resultado (OK/error), o el detalle de un equipo mostrando qué credencial hereda y de qué nivel. | `credenciales-3.webp` |

</details>

<details>
<summary>16. Importación</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Carga de archivo:** la pantalla de upload mostrando el selector de archivo Excel, instrucciones de formato, y la plantilla descargable. Antes de importar. | `importacion-1.webp` |
| 2 | **Preview con checkboxes:** la vista de previsualización post-carga mostrando las filas del Excel con checkboxes para seleccionar cuáles importar. Columnas mapeadas con colores (válido/error). | `importacion-2.webp` |
| 3 | **Resultado:** la pantalla post-importación mostrando resumen: X creados, Y actualizados, Z errores. Con detalle de errores si los hay. Mensaje de éxito verde. | `importacion-3.webp` |

</details>

<details>
<summary>17. Email</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Config SMTP:** formulario de configuración de servidor de correo con campos: servidor, puerto, usuario, seguridad (TLS/SSL). Que se vea profesional, no técnico. | `email-1.webp` |
| 2 | **Reportes programados:** configuración de envíos automáticos: tipo de reporte, frecuencia, destinatarios (multi-select con emails). Próxima ejecución visible. | `email-2.webp` |
| 3 | **Log de emails:** tabla de correos enviados con fecha, destinatario, asunto, estado (enviado/error). Badge verde "Enviado" en la mayoría. | `email-3.webp` |

</details>

<details>
<summary>18. Calendario</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Vista mensual:** calendario completo con eventos de colores en distintos días. Que se vean al menos 5-6 eventos distribuidos en el mes. Leyenda de colores visible. | `calendario-1.webp` |
| 2 | **Detalle de evento:** modal o vista de un evento con título, fecha, hora, descripción, categoría, recordatorio. Bien formateado. | `calendario-2.webp` |
| 3 | **Vencimientos próximos:** panel lateral o listado mostrando vencimientos de licencias/contratos/certificados ordenados por fecha. Badges "próximo" en naranja. | `calendario-3.webp` |

</details>

<details>
<summary>19. Contactos</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado con categorías:** tabla de contactos con nombre, organización, teléfono, email, categoría (badge coloreado: Proveedor, ISP, Soporte, etc.). Filtro por categoría visible. | `contactos-1.webp` |
| 2 | **Detalle contacto:** ficha completa con todos los campos: nombre, cargo, organización, teléfonos, emails, notas, sitios vinculados. Foto o ícono de avatar. | `contactos-2.webp` |
| 3 | **Importación masiva:** la pantalla de importación de contactos desde Excel con preview de datos y opción de marcar como "agenda institucional" (global). | `contactos-3.webp` |

</details>

<details>
<summary>20. Biblioteca</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Listado documentos:** tabla con nombre, categoría (Manual, Procedimiento, Diagrama), equipo vinculado, fecha carga, usuario. Íconos por tipo de archivo (PDF, DOC, etc.). | `biblioteca-1.webp` |
| 2 | **Firmware/versiones:** listado de versiones de firmware por modelo con "recomendada" marcada, fecha release, notas. Badge "desactualizado" en rojo para equipos viejos. | `biblioteca-2.webp` |
| 3 | **Carga de archivo:** formulario de upload con campos: título, categoría, equipo vinculado, archivo. Drag & drop zone visible. | `biblioteca-3.webp` |

</details>

<details>
<summary>21. Multi-Área</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Panel de grupos:** listado de grupos de área con nombre, miembros (count), features habilitados (badges), equipos/sitios. Vista de administración ROOT. | `multiarea-1.webp` |
| 2 | **Selector de grupo en navbar:** la barra superior mostrando el dropdown de "Grupo activo" abierto con las opciones: "Todos", "Redes", "Telefonía", "Soporte". | `multiarea-2.webp` |
| 3 | **Sidebar dinámico:** dos capturas comparadas (o una mostrando): sidebar con módulos específicos de un grupo. Que se note que cambia según el grupo seleccionado. | `multiarea-3.webp` |

</details>

<details>
<summary>22. Firmware</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Versiones con recomendadas:** listado de versiones de firmware/SO por modelo con fecha, archivo adjunto, y badge "recomendada". Acceder desde `/firmware/`. | `firmware-1.webp` |
| 2 | **Reporte de actualizaciones:** vista `/firmware/reporte/` que muestra equipos con firmware distinto al recomendado, agrupados por modelo. Export PDF/Excel. | `firmware-2.webp` |
| 3 | **Automatizaciones:** listado de comandos programados `/automatizaciones/` con equipo, comando, frecuencia, último resultado y próxima ejecución. | `firmware-3.webp` |

</details>

<details>
<summary>23. Mapa</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Mapa general:** mapa con pins de sitios distribuidos geográficamente. Zoom mostrando una provincia/región con 4-5 pins visibles. Que se vea el basemap y los markers. | `mapa-1.webp` |
| 2 | **Heatmap:** el mapa con overlay de calor mostrando densidad de equipos o backups. Colores intensos en zonas con más equipos. Leyenda visible. | `mapa-2.webp` |
| 3 | **Popup de sitio:** click en un pin mostrando el popup con nombre del sitio, dirección, cantidad de equipos, último backup. Link "Ver detalle". | `mapa-3.webp` |

</details>

<details>
<summary>24. Telefonía</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Dashboard:** KPIs (centrales, tramas, internos) + tabla de centrales con modelo, sitio, tramas activas, internos count. Datos variados. | `telefonia-1.webp` |
| 2 | **Listado internos:** tabla de internos con extensión, nombre, sitio destino, tipo (físico/SIP/softphone), estado. Filtros activos. Al menos 10 filas. | `telefonia-2.webp` |
| 3 | **Detalle central con edición inline:** la ficha de una central mostrando las tramas e internos editables directamente (inline). Que se vean los campos editables. | `telefonia-3.webp` |

</details>

<details>
<summary>25. Monitoreo</summary>

| Captura | Qué mostrar | Archivo |
|---------|-------------|---------|
| 1 | **Árbol con sensores:** panel izquierdo mostrando el árbol por área/sitio/equipo con sensores debajo de cada equipo. Indicadores de estado (verde/amarillo/rojo) y último valor visible. Badge "23/100 equipos monitoreados". Al menos 3 equipos con 3-5 sensores cada uno. | `monitoreo-1.webp` |
| 2 | **Gráfico temporal:** panel derecho con gráfico de línea de un sensor (ej: CPU o tráfico de red). Que se vean los botones de rango (2h/12h/24h/2d/15d/30d), el zoom activo, la línea de umbral en rojo, y datos reales con variación. Eje X con fechas, eje Y con unidad. | `monitoreo-2.webp` |
| 3 | **Escaneo SNMP:** panel de resultados del Walk mostrando métricas descubiertas agrupadas por categoría (CPU, Disco, Red, Sistema). Checkboxes para seleccionar, campos de intervalo y unidad configurables. Que se vean al menos 3 categorías con 2-3 métricas cada una. | `monitoreo-3.webp` |

</details>

</details>

---

**Total: hasta 75 capturas (25 cards × 3)**

Con 2 por card ya queda comercial. La tercera es bonus.

---

<details>
<summary><strong>🎬 Video Demo (3-5 minutos)</strong></summary>

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

</details>

---

<details>
<summary><strong>🎬 Video de Instalación (1-2 minutos)</strong></summary>

### Preparación

1. **Misma PC de trabajo** — se graba directamente en la máquina local (no se usa VM por requerimiento de resolución)
2. **Resolución 1920x1080** en el monitor
3. **Escritorio limpio** — ocultar iconos innecesarios, wallpaper neutro
4. **Tener el instalador** `aiTi_Setup_vX.X.X.exe` visible en el Escritorio
5. **OBS Studio** corriendo en la misma PC (captura de pantalla o ventana)
6. **Cerrar aplicaciones innecesarias** — solo dejar el explorador y el navegador
7. **Desactivar Focus Assist** (notificaciones) antes de grabar

**Nota:** Al grabar en la misma PC (no en VM), se obtiene la resolución nativa completa del monitor sin pérdida de calidad por virtualización.

---

### Guión paso a paso

| Paso | Qué mostrar | Duración | Subtítulo / Texto superpuesto |
|------|-------------|----------|-------------------------------|
| 1 | Escritorio limpio con el instalador visible | 3 seg | — |
| 2 | Doble click en el instalador → se abre el wizard | 3 seg | — |
| 3 | Pantalla de bienvenida → click "Siguiente" | 3 seg | — |
| 4 | Selección de carpeta (dejar por defecto) → "Siguiente" | 3 seg | — |
| 5 | Opciones de instalación (servicios, shortcuts) → "Siguiente" | 5 seg | — |
| 6 | Progreso de instalación (barra avanzando) | 10-15 seg | "Instalando servicios y dependencias..." |
| 7 | Pantalla "Instalación completada" → "Finalizar" | 3 seg | "✓ Instalación completada" |
| 8 | El navegador se abre → aviso de certificado SSL → click "Avanzado" → "Continuar" | 5 seg | "Certificado autofirmado — normal en instalaciones locales" |
| 9 | Pantalla de login → ingresar usuario admin y contraseña | 5 seg | "Primer inicio de sesión con usuario administrador" |
| 10 | Asistente de configuración inicial (ver detalle abajo) | 20-30 seg | "Configuración inicial del sistema" |
| 11 | Dashboard con los datos mínimos creados visibles | 5 seg | "Sistema operativo y listo para usar" |

**Total:** ~80-90 segundos

---

### Detalle del Asistente de Configuración (Paso 10)

Al ser una instalación nueva, el sistema muestra el asistente de configuración inicial en lugar del dashboard. Para el video, completar con datos mínimos:

| Paso del asistente | Qué hacer | Texto superpuesto |
|--------------------|-----------|-------------------|
| Datos de la organización | Completar nombre y logo rápido | "Datos de la organización" |
| Crear grupo de área | Crear 1 solo (ej: "Redes") | "Creando primer grupo de trabajo" |
| Crear sitio / domicilio | Crear 1 solo (ej: "Casa Central", dirección breve) | "Registrando la primera ubicación" |
| Catálogos (tipos, marcas) | Saltear o crear 1 tipo + 1 marca rápido | "Catálogos — se pueden completar después" |
| Usuarios adicionales | Saltear (ya se tiene el admin) | "Usuarios — se pueden agregar después" |
| Finalizar asistente | Click en "Finalizar" o "Ir al Dashboard" | "¡Listo! Sistema configurado" |

**Criterio:** Crear lo mínimo para que el dashboard no quede vacío y se entienda que el sistema está funcional. No detenerse en cada campo — movimientos fluidos y rápidos.

---

### Tips específicos para este video

1. **Empezar grabando el escritorio** con el mouse quieto 2-3 segundos (da aire al inicio)
2. **Doble click visible y pausado** — que se vea claramente que hacés doble click en el .exe
3. **No acelerar** la barra de progreso — mostrarla real (si es rápida, mejor)
4. **Si pide UAC** (Control de cuentas de usuario) → mostrar que se acepta (es normal)
5. **Certificado SSL** — mostrarlo y aceptarlo normalmente, el usuario real va a pasar por lo mismo
6. **Asistente rápido** — no llenar todos los campos perfectos, solo lo mínimo para que se vea funcional
7. **Al final mostrar el dashboard** — eso cierra el ciclo "descargo → instalo → configuro → uso"
8. **No narrar** — los subtítulos cumplen esa función

---

### Subtítulos / Textos sugeridos para post-producción

Agregar como texto superpuesto (lower third o centro) en cada transición:

| Momento | Texto |
|---------|-------|
| Inicio (seg 0) | "Instalación completa en menos de 2 minutos" |
| Al abrir el instalador | "Ejecutar el instalador como administrador" |
| Barra de progreso | "Instalando servicios y dependencias..." |
| Certificado del navegador | "Certificado autofirmado — normal en instalaciones locales" |
| Login | "Primer inicio de sesión con usuario administrador" |
| Asistente | "Configuración inicial — solo la primera vez" |
| Dashboard final | "Sistema operativo y listo para usar" |

---

### Captura con OBS (en la misma PC)

1. En OBS, agregar source "Captura de pantalla" (monitor completo) o "Captura de ventana" (solo una app)
2. Si usás "Captura de pantalla", asegurarte de que la resolución de salida sea 1920x1080
3. Presionar "Start Recording" (o atajo F9)
4. Hacer todo el flujo de instalación
5. Presionar "Stop Recording"
6. El video queda en `C:\Users\Seba\Videos`

**Tip:** Para el video de instalación, usar "Captura de pantalla" completa es mejor porque se ve el escritorio con el instalador, el UAC, y después el navegador. Todo fluye naturalmente.

---

### Post-producción

1. Cortar los primeros/últimos segundos muertos
2. Agregar texto superpuesto al inicio: "Instalación completa en menos de 2 minutos"
3. Agregar los subtítulos de la tabla de arriba en cada transición
4. (Opcional) Acelerar x2 la parte de la barra de progreso si tarda mucho
5. Exportar a MP4, 1080p

---

### Dónde usar este video

- En la sección "Instalación" de la web (embed YouTube)
- Como adjunto en emails comerciales
- En la página de descarga (junto al formulario de trial)
- En presentaciones a clientes

</details>


---

<details>
<summary><strong>🎥 Configuración de OBS Studio — Guía completa para grabar</strong></summary>

### Configuración inicial

Cuando abrís OBS por primera vez, te ofrece un **Asistente de configuración automática**. Elegí "Optimizar solo para grabación" (no streaming).

---

### Conceptos clave

**Escenas**: Son como "presets" de lo que querés grabar. Podés tener una escena para "Pantalla completa", otra para "Solo una ventana", etc.

**Fuentes**: Son los elementos dentro de cada escena. Las más comunes:

- **Captura de pantalla** → Graba todo el monitor
- **Captura de ventana** → Graba solo una app específica (ideal para mostrar aiTi sin que se vea el escritorio)
- **Captura de audio** → El sonido del sistema o del micrófono
- **Imagen** → Para poner un logo o watermark

---

### Pasos mínimos para grabar

1. **Crear una escena**: Click en el "+" de la caja "Escenas" (abajo izquierda)
2. **Agregar fuente**: Click en el "+" de la caja "Fuentes" → elegí "Captura de pantalla" o "Captura de ventana"
3. **Verificar audio**: En el mezclador de audio (abajo centro) revisá que "Audio del escritorio" tenga actividad cuando suena algo, y "Mic/Aux" si querés grabar tu voz
4. **Iniciar grabación**: Botón "Iniciar grabación" (abajo derecha)
5. **Detener**: Mismo botón, ahora dice "Detener grabación"

Los videos se guardan por defecto en `C:\Users\Seba\Videos`.

---

### Configuración recomendada para demos de software

#### Salida (Archivo → Configuración → Salida)

| Opción | Valor recomendado |
|--------|-------------------|
| Modo de salida | Simple |
| Calidad de grabación | Alta calidad, tamaño de archivo mediano |
| Formato de grabación | mp4 (o mkv si querés seguridad contra cortes) |
| Codificador | Dejar por defecto (usa GPU si tenés) |

#### Video (Archivo → Configuración → Video)

| Opción | Valor recomendado |
|--------|-------------------|
| Resolución base | La de tu monitor (1920x1080 ideal) |
| Resolución de salida | 1920x1080 (no bajarla, se necesita leer texto) |
| FPS | 30 (suficiente para demos de software) |

---

### Escenas sugeridas para los videos de aiTi

| Escena | Fuentes | Uso |
|--------|---------|-----|
| Pantalla completa | Captura de pantalla + Audio escritorio | Video de demo general e instalación |
| Solo navegador | Captura de ventana (Chrome) + Audio escritorio | Demo de funcionalidades |
| Navegador + Logo | Captura de ventana + Imagen (logo aiTi en esquina) | Video comercial |

---

### Tips específicos para grabar demos de aiTi

- Usá **Captura de ventana** apuntando al navegador con aiTi abierto, así no se filtra nada del escritorio
- Si necesitás mostrar varias cosas (navegador + terminal + instalador), usá **Captura de pantalla** completa
- Poné el navegador en pantalla completa (F11) para que se vea más limpio
- Para agregar el logo de aiTi como watermark: agregá una fuente "Imagen", redimensionala chica y ponela en una esquina
- Cerrá notificaciones de Windows antes de grabar (Modo concentración / Focus Assist)
- Desactivá actualizaciones automáticas para evitar popups durante la grabación
- **Se graba todo en la misma PC** — no se usa VM. La resolución nativa del monitor da mejor calidad

---

### Atajos de teclado (configurar en Archivo → Configuración → Atajos de teclado)

| Acción | Atajo sugerido |
|--------|----------------|
| Iniciar/Detener grabación | F9 |
| Pausar/Reanudar grabación | F10 |

---

### Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| Pantalla negra en "Captura de pantalla" | Configuración → Avanzado → cambiar "Renderizador", o ejecutar OBS como administrador |
| Ventana negra | Probar "Captura de juego" en vez de "Captura de ventana", o usar captura de pantalla completa |
| Audio no se graba | Verificar que "Audio del escritorio" esté activo en el mezclador (no en mute) |
| Video entrecortado | Bajar resolución de salida a 1280x720, o cerrar programas pesados de fondo |
| Archivo MP4 corrupto (se cortó la luz) | Usar formato MKV en vez de MP4 (MKV es más resistente a cortes). Después convertir a MP4 con "Remux Recordings" en OBS (Archivo → Remux) |

---

### Flujo de trabajo completo

```
1. Abrir OBS → verificar escena y fuentes
2. Preparar la demo (datos cargados, navegador limpio, F11)
3. Cerrar notificaciones (Focus Assist ON)
4. F9 para iniciar grabación
5. Esperar 2-3 segundos quieto (aire de edición)
6. Hacer la demo siguiendo el guión
7. Esperar 2-3 segundos quieto al final
8. F9 para detener grabación
9. Verificar el archivo en C:\Users\Seba\Videos
10. Post-producción en Clipchamp/Kdenlive si hace falta
```

</details>
