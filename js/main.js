// ============================================================================
// aiTi - Landing Page JavaScript
// ============================================================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Download form handling
var dlForm = document.getElementById('downloadForm');
if (dlForm) {
dlForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('dl_nombre').value.trim();
    const empresa = document.getElementById('dl_empresa').value.trim();
    const email = document.getElementById('dl_email').value.trim();
    const equipos = document.getElementById('dl_equipos').value;
    
    if (!nombre || !empresa || !email) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }
    
    // Guardar lead en Google Sheets (backend persistente)
    var params = new URLSearchParams(window.location.search);
    fetch('https://script.google.com/macros/s/AKfycbzXLTlfnKcYxPoB5_vB36pMuq0xPaCSq8IGvcwM0LaQ51ucFVJQ64Dzsx-7aF_cLV5GXA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nombre: nombre,
            empresa: empresa,
            email: email,
            equipos: equipos,
            pagina: window.location.pathname,
            utm_source: params.get('utm_source') || '(directo)',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            idioma: navigator.language || '',
            dispositivo: screen.width <= 768 ? 'Mobile' : 'Desktop',
            fecha_local: new Date().toLocaleString('es-AR')
        })
    }).catch(function() {}); // Silenciar errores (no bloquear la descarga)
    
    // Mostrar �xito y link de descarga
    document.getElementById('downloadForm').style.display = 'none';
    document.getElementById('downloadSuccess').style.display = '';
    
    // Registrar evento en Google Analytics
    if (typeof gtag === 'function') {
        gtag('event', 'download_trial', {
            'event_category': 'conversion',
            'event_label': empresa,
            'value': 1
        });
    }
    
    // Configurar link de descarga (GitHub Release público)
    var downloadUrl = 'https://github.com/sebastianbon-max/aiti-web/releases/download/v3.9.2/aiTi_Setup_v3.9.2.exe';
    document.getElementById('downloadLink').href = downloadUrl;
    
    // Iniciar descarga automática
    window.location.href = downloadUrl;
    
    console.log('Lead registrado:', { nombre, empresa, email, equipos });
});
}

// Feature screenshots modal — hasta 10 imágenes por card + video opcional
// El sistema genera URLs del 1 al 10 y detecta cuáles existen
// Campo 'video' es opcional: ID de YouTube (ej: 'dQw4w9WgXcQ')
var featureData = {
    'dashboard': {
        title: 'Dashboard Inteligente',
        prefix: 'img/features/dashboard-',
        video: '',
        description: 'Panel con KPIs en tiempo real, graficos de distribucion por tipo/marca/estado, alertas y widgets personalizables.'
    },
    'inventario': {
        title: 'Inventario de Equipos',
        prefix: 'img/features/inventario-',
        video: '',
        description: 'Listado con filtros avanzados, columnas configurables, busqueda universal, exportacion PDF/Excel y codigos QR.'
    },
    'backups': {
        title: 'Backups Automaticos',
        prefix: 'img/features/backups-',
        video: '',
        description: 'Respaldo automatico via SSH/Telnet con deteccion de cambios: si alguien modifico la configuracion, el sistema lo detecta y alerta. Historial completo, comparacion visual, upload manual y programacion de backups.'
    },
    'terminal': {
        title: 'Terminal SSH/Telnet',
        prefix: 'img/features/terminal-',
        video: '',
        description: 'Conexion directa desde el navegador, multiples pestanas, multipaste, snippets y vista grilla.'
    },
    'sitios': {
        title: 'Gestion de Sitios y Mudanzas',
        prefix: 'img/features/sitios-',
        video: '',
        description: 'Organizacion por ubicacion, mapa geografico, mudanzas masivas con checklist y archivo historico.'
    },
    'stock': {
        title: 'Control de Stock y Asignacion',
        prefix: 'img/features/stock-',
        video: '',
        description: 'Estados de equipo, asignacion a personas responsables con trazabilidad completa.'
    },
    'vms': {
        title: 'Maquinas Virtuales',
        prefix: 'img/features/inventario-',
        video: '',
        description: 'Documente las VMs de cada servidor: CPU, RAM, disco, sistema operativo, estado y proposito. Barras de capacidad por host, vista global con filtros e integracion con el mapa de IPs.'
    },
    'diff': {
        title: 'Deteccion de Cambios en Configuraciones',
        prefix: 'img/features/diff-',
        video: '',
        description: 'Deteccion automatica de cambios: al hacer backup, el sistema compara con la version anterior y alerta si algo cambio sin registro. Historial de cambios con severidad, revision por responsables y diff visual lado a lado.'
    },
    'vpn': {
        title: 'VPN y Conectividad',
        prefix: 'img/features/vpn-',
        video: '',
        description: 'Tuneles VPN bidireccionales, vista de mapa con conexiones entre sitios.'
    },
    'tareas': {
        title: 'Tareas y Seguimiento',
        prefix: 'img/features/tareas-',
        video: '',
        description: 'Tareas generales y por sitio, asignacion, prioridades, comentarios y archivos adjuntos.'
    },
    'reportes': {
        title: 'Estadisticas y Reportes',
        prefix: 'img/features/reportes-',
        video: '',
        description: 'Reportes PDF/Excel, reportes programados por email, estadisticas de backups e inventario.'
    },
    'servicios': {
        title: 'Servicios de Internet',
        prefix: 'img/features/servicios-',
        video: '',
        description: 'Contratos ISP, proveedores, velocidades, pagos, vencimientos y dashboard analitico.'
    },
    'administrativo': {
        title: 'Gestion Administrativa',
        prefix: 'img/features/administrativo-',
        video: '',
        description: 'Ordenes de compra, licitaciones, proveedores y licencias de software.'
    },
    'auditoria': {
        title: 'Auditoria y Seguridad',
        prefix: 'img/features/auditoria-',
        video: '',
        description: 'Registro completo de acciones, roles y permisos, bloqueo por intentos fallidos.'
    },
    'credenciales': {
        title: 'Credenciales Seguras',
        prefix: 'img/features/credenciales-',
        video: '',
        description: 'Credenciales encriptadas con herencia en cascada Tipo, Marca, Modelo y Equipo.'
    },
    'importacion': {
        title: 'Importacion Masiva',
        prefix: 'img/features/importacion-',
        video: '',
        description: 'Importacion desde Excel con vista previa, validacion por fila y reporte de errores detallado.'
    },
    'email': {
        title: 'Notificaciones por Email',
        prefix: 'img/features/email-',
        video: '',
        description: 'Alertas automaticas de backups, vencimientos y reportes programados.'
    },
    'calendario': {
        title: 'Calendario',
        prefix: 'img/features/calendario-',
        video: '',
        description: 'Vista mensual de eventos, vencimientos de licencias, certificados y contratos.'
    },
    'biblioteca': {
        title: 'Biblioteca Tecnica',
        prefix: 'img/features/biblioteca-',
        video: '',
        description: 'Repositorio de documentacion tecnica, manuales y firmwares por equipo/modelo.'
    },
    'contactos': {
        title: 'Agenda de Contactos',
        prefix: 'img/features/contactos-',
        video: '',
        description: 'Agenda profesional con categorias, multiples telefonos, emails, sitios asociados, importacion masiva y busqueda avanzada.'
    },
    'multiarea': {
        title: 'Multi-Area (Grupos)',
        prefix: 'img/features/multiarea-',
        video: '',
        description: 'Aislamiento por areas organizativas. Cada grupo opera con sus propios equipos, usuarios, modulos habilitados y datos independientes.'
    },
    'firmware': {
        title: 'Firmware y Automatizaciones',
        prefix: 'img/features/firmware-',
        video: '',
        description: 'Control de versiones de firmware por modelo, reporte de equipos actualizados/desactualizados, ejecucion masiva de comandos programados.'
    },
    'mapa': {
        title: 'Mapa Interactivo',
        prefix: 'img/features/mapa-',
        video: '',
        description: 'Visualizacion geografica de sitios con mapa de calor de equipos, backups y conectividad. Geocodificacion automatica.'
    },
    'redes': {
        title: 'Direccionamiento IP (IPAM)',
        prefix: 'img/features/redes-',
        video: '',
        description: 'Mapa visual de IPs por subred, historial completo de ciclo de vida (asignada/liberada/reasignada), deteccion de conflictos por ping, escaneo de red, vista jerarquica, rangos DHCP, duplicados, notas por IP y alertas de ocupacion.'
    },
    'telefonia': {
        title: 'Telefonia',
        prefix: 'img/features/telefonia-',
        video: '',
        description: 'Gestion de centrales telefonicas, tramas (E1, SIP, analogica) e internos. Asignacion por persona y ubicacion.'
    },
    'monitoreo': {
        title: 'Monitoreo en Tiempo Real',
        prefix: 'img/features/monitoreo-',
        video: '',
        description: 'Supervision en vivo de equipos: CPU, memoria, disco, trafico de red, toner de impresoras, disponibilidad. Graficos interactivos con zoom, alertas configurables y polling automatico. Soporta equipos de red (SNMP) y servidores/PCs Windows (WMI) sin configuracion adicional en el equipo remoto.'
    }
};

// Estado del carrusel de funcionalidades
var featureCarousel = {
    images: [],
    current: 0
};

function showFeature(key) {
    var feature = featureData[key];
    if (!feature) return;
    
    document.getElementById('featureModalTitle').textContent = feature.title;
    
    // Generar URLs del 1 al 10 y probar cuáles existen
    var possibleImages = [];
    for (var i = 1; i <= 10; i++) {
        possibleImages.push(feature.prefix + i + '.webp');
    }
    
    // Mostrar loading mientras detecta imágenes
    var body = document.getElementById('featureModalBody');
    body.innerHTML = '<div class="text-center py-5"><div class="spinner-border text-light" role="status"></div><p class="mt-2 text-light opacity-75">Cargando capturas...</p></div>';
    
    // Verificar cuáles existen con HEAD requests paralelos
    var checks = possibleImages.map(function(src) {
        return new Promise(function(resolve) {
            var img = new Image();
            img.onload = function() { resolve(src); };
            img.onerror = function() { resolve(null); };
            img.src = src;
        });
    });
    
    Promise.all(checks).then(function(results) {
        var validImages = results.filter(function(src) { return src !== null; });
        
        if (validImages.length === 0 && !feature.video) {
            body.innerHTML = '<div class="text-center py-5 border rounded" style="border-color: rgba(255,255,255,0.1) !important;"><i class="bi bi-image fs-1 d-block mb-2 text-light opacity-50"></i><p class="text-light opacity-75">Capturas proximamente</p><small class="text-light opacity-50">' + feature.description + '</small></div>';
            return;
        }
        
        featureCarousel.images = validImages;
        featureCarousel.current = 0;
        featureCarousel.video = feature.video || '';
        featureCarousel.showingVideo = false;
        _renderFeatureCarousel(feature.title);
    });
}

function _renderFeatureCarousel(title) {
    var body = document.getElementById('featureModalBody');
    var images = featureCarousel.images;
    var hasVideo = !!featureCarousel.video;
    var totalItems = images.length + (hasVideo ? 1 : 0);
    var html = '';
    
    // Contenedor principal (imagen o video)
    html += '<div class="position-relative" id="featureMainContainer">';
    
    // Boton anterior
    if (totalItems > 1) {
        html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle" id="featurePrev" onclick="featureNav(-1)" style="z-index:10; width:44px; height:44px; opacity:0.8;">';
        html += '<i class="bi bi-chevron-left fs-5"></i></button>';
    }
    
    // Imagen principal (click abre lightbox fullscreen)
    html += '<div class="text-center" id="featureImageContainer">';
    if (images.length > 0) {
        html += '<img src="' + images[0] + '" class="img-fluid rounded shadow-lg" id="featureCurrentImg" alt="' + title + '" style="max-height: 80vh; width: 100%; object-fit: contain; cursor: zoom-in; transition: opacity 0.15s;" onclick="openLightbox(this.src)">';
    } else if (hasVideo) {
        // Solo video, sin imágenes
        html += '<div class="ratio ratio-16x9 rounded shadow-lg overflow-hidden" id="featureVideoPlayer">'
            + '<iframe src="https://www.youtube.com/embed/' + featureCarousel.video + '?rel=0&modestbranding=1" allowfullscreen style="border:none;"></iframe>'
            + '</div>';
        featureCarousel.showingVideo = true;
    }
    html += '</div>';
    
    // Video container (oculto inicialmente si hay imágenes)
    if (hasVideo && images.length > 0) {
        html += '<div class="text-center" id="featureVideoContainer" style="display:none;">';
        html += '<div class="ratio ratio-16x9 rounded shadow-lg overflow-hidden">'
            + '<iframe id="featureVideoIframe" src="" allowfullscreen style="border:none;"></iframe>'
            + '</div>';
        html += '</div>';
    }
    
    // Boton siguiente
    if (totalItems > 1) {
        html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle" id="featureNext" onclick="featureNav(1)" style="z-index:10; width:44px; height:44px; opacity:0.8;">';
        html += '<i class="bi bi-chevron-right fs-5"></i></button>';
    }
    
    html += '</div>';
    
    // Indicador de posicion + hint
    html += '<div class="d-flex justify-content-between align-items-center mt-2 px-1">';
    if (!featureCarousel.showingVideo) {
        html += '<small class="text-light opacity-75" id="featureHint"><i class="bi bi-zoom-in me-1"></i>Click en la imagen para ampliar</small>';
    } else {
        html += '<small class="text-light opacity-75" id="featureHint"><i class="bi bi-play-circle me-1"></i>Video demostrativo</small>';
    }
    html += '<small class="text-light opacity-75" id="featureCounter">' + (images.length > 0 ? 'Imagen 1 de ' + images.length : 'Video') + (hasVideo ? ' + video' : '') + '</small>';
    html += '</div>';
    
    // Thumbnails (imágenes + video al final)
    if (totalItems > 1) {
        html += '<div class="d-flex gap-2 mt-2 overflow-auto pb-1" id="featureThumbs" style="scrollbar-width: thin;">';
        for (var i = 0; i < images.length; i++) {
            var activeClass = i === 0 ? 'border-primary opacity-100' : 'border-secondary opacity-50';
            html += '<img src="' + images[i] + '" class="rounded border-2 border feature-thumb ' + activeClass + '" '
                + 'style="width:80px; height:45px; object-fit:cover; cursor:pointer; transition: opacity 0.2s, border-color 0.2s;" '
                + 'onclick="featureGoTo(' + i + ')">';
        }
        // Thumbnail del video al final
        if (hasVideo) {
            var videoThumbClass = (images.length === 0) ? 'border-primary opacity-100' : 'border-secondary opacity-50';
            html += '<div class="rounded border-2 border feature-thumb feature-thumb-video ' + videoThumbClass + '" '
                + 'style="width:80px; height:45px; cursor:pointer; transition: opacity 0.2s, border-color 0.2s; background: linear-gradient(135deg, #1a1a2e, #16213e); display:flex; align-items:center; justify-content:center; flex-shrink:0;" '
                + 'onclick="featureShowVideo()">'
                + '<i class="bi bi-play-fill text-white" style="font-size:1.5rem;"></i>'
                + '</div>';
        }
        html += '</div>';
    }
    
    body.innerHTML = html;
    updateFeatureNav();
}

function featureNav(direction) {
    var total = featureCarousel.images.length;
    var hasVideo = !!featureCarousel.video;
    var totalItems = total + (hasVideo ? 1 : 0);
    if (totalItems <= 1) return;
    
    // Si estamos en video y vamos atrás, ir a última imagen
    if (featureCarousel.showingVideo && direction === -1) {
        featureCarousel.showingVideo = false;
        featureCarousel.current = total - 1;
        _switchToImage();
        return;
    }
    
    // Si estamos en última imagen y vamos adelante, ir a video
    if (!featureCarousel.showingVideo && direction === 1 && featureCarousel.current === total - 1 && hasVideo) {
        featureShowVideo();
        return;
    }
    
    // Navegación normal entre imágenes
    if (featureCarousel.showingVideo) return;
    
    featureCarousel.current += direction;
    if (featureCarousel.current >= total) featureCarousel.current = 0;
    if (featureCarousel.current < 0) {
        if (hasVideo) {
            featureShowVideo();
            return;
        }
        featureCarousel.current = total - 1;
    }
    
    _updateFeatureImage();
}

function featureGoTo(index) {
    if (featureCarousel.showingVideo) {
        featureCarousel.showingVideo = false;
        _switchToImage();
    }
    featureCarousel.current = index;
    _updateFeatureImage();
}

function featureShowVideo() {
    if (!featureCarousel.video) return;
    featureCarousel.showingVideo = true;
    
    var imgContainer = document.getElementById('featureImageContainer');
    var videoContainer = document.getElementById('featureVideoContainer');
    var iframe = document.getElementById('featureVideoIframe');
    
    if (imgContainer) imgContainer.style.display = 'none';
    if (videoContainer) {
        videoContainer.style.display = '';
        if (iframe) iframe.src = 'https://www.youtube.com/embed/' + featureCarousel.video + '?rel=0&modestbranding=1&autoplay=1';
    }
    
    // Actualizar hint
    var hint = document.getElementById('featureHint');
    if (hint) hint.innerHTML = '<i class="bi bi-play-circle me-1"></i>Video demostrativo';
    
    // Actualizar counter
    var counter = document.getElementById('featureCounter');
    if (counter) counter.textContent = 'Video';
    
    // Actualizar thumbnails
    var thumbs = document.querySelectorAll('.feature-thumb');
    thumbs.forEach(function(thumb) {
        thumb.classList.remove('border-primary', 'opacity-100');
        thumb.classList.add('border-secondary', 'opacity-50');
    });
    var videoThumb = document.querySelector('.feature-thumb-video');
    if (videoThumb) {
        videoThumb.classList.remove('border-secondary', 'opacity-50');
        videoThumb.classList.add('border-primary', 'opacity-100');
    }
}

function _switchToImage() {
    var imgContainer = document.getElementById('featureImageContainer');
    var videoContainer = document.getElementById('featureVideoContainer');
    var iframe = document.getElementById('featureVideoIframe');
    
    if (videoContainer) videoContainer.style.display = 'none';
    if (iframe) iframe.src = ''; // Detener video
    if (imgContainer) imgContainer.style.display = '';
    
    // Actualizar hint
    var hint = document.getElementById('featureHint');
    if (hint) hint.innerHTML = '<i class="bi bi-zoom-in me-1"></i>Click en la imagen para ampliar';
}

function _updateFeatureImage() {
    var img = document.getElementById('featureCurrentImg');
    if (img) {
        img.style.opacity = '0.3';
        var newSrc = featureCarousel.images[featureCarousel.current];
        setTimeout(function() {
            img.src = newSrc;
            img.style.opacity = '1';
        }, 150);
    }
    
    var counter = document.getElementById('featureCounter');
    if (counter) {
        var hasVideo = !!featureCarousel.video;
        counter.textContent = 'Imagen ' + (featureCarousel.current + 1) + ' de ' + featureCarousel.images.length + (hasVideo ? ' + video' : '');
    }
    
    // Actualizar thumbnails
    var thumbs = document.querySelectorAll('.feature-thumb');
    thumbs.forEach(function(thumb, i) {
        if (i === featureCarousel.current) {
            thumb.classList.remove('border-secondary', 'opacity-50');
            thumb.classList.add('border-primary', 'opacity-100');
        } else {
            thumb.classList.remove('border-primary', 'opacity-100');
            thumb.classList.add('border-secondary', 'opacity-50');
        }
    });
    
    // Scroll thumbnail into view
    if (thumbs[featureCarousel.current]) {
        thumbs[featureCarousel.current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    
    updateFeatureNav();
}

function updateFeatureNav() {
    var total = featureCarousel.images.length;
    var hasVideo = !!featureCarousel.video;
    var totalItems = total + (hasVideo ? 1 : 0);
    var prev = document.getElementById('featurePrev');
    var next = document.getElementById('featureNext');
    
    if (totalItems <= 1) {
        if (prev) prev.style.display = 'none';
        if (next) next.style.display = 'none';
    } else {
        if (prev) prev.style.display = '';
        if (next) next.style.display = '';
    }
}

// Navegaci�n con teclado dentro del modal
document.addEventListener('keydown', function(e) {
    // Lightbox abierto: Escape cierra, flechas navegan
    var lightbox = document.getElementById('imageLightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
            return;
        }
        if (e.key === 'ArrowLeft') {
            featureNav(-1);
            // Actualizar imagen del lightbox
            var lbImg = document.getElementById('lightboxImg');
            if (lbImg) lbImg.src = featureCarousel.images[featureCarousel.current];
            return;
        }
        if (e.key === 'ArrowRight') {
            featureNav(1);
            var lbImg = document.getElementById('lightboxImg');
            if (lbImg) lbImg.src = featureCarousel.images[featureCarousel.current];
            return;
        }
        return;
    }
    
    // Modal de feature abierto: flechas navegan
    var modal = document.getElementById('featureModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    if (e.key === 'ArrowLeft') {
        featureNav(-1);
    } else if (e.key === 'ArrowRight') {
        featureNav(1);
    }
});

// Lightbox fullscreen (overlay dentro de la misma pestaña)
function openLightbox(src) {
    var lightbox = document.getElementById('imageLightbox');
    if (!lightbox) {
        // Crear el lightbox overlay
        lightbox = document.createElement('div');
        lightbox.id = 'imageLightbox';
        lightbox.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); z-index:99999; align-items:center; justify-content:center; flex-direction:column;';
        lightbox.innerHTML = ''
            + '<button onclick="closeLightbox()" style="position:absolute; top:20px; right:20px; background:none; border:none; color:#fff; font-size:2.5rem; cursor:pointer; z-index:100000; line-height:1; padding:5px 12px; border-radius:50%; transition:background 0.2s;" onmouseover="this.style.background=\'rgba(255,255,255,0.15)\'" onmouseout="this.style.background=\'none\'">&times;</button>'
            + '<button onclick="lightboxNav(-1)" style="position:absolute; top:50%; left:20px; transform:translateY(-50%); background:rgba(255,255,255,0.15); border:none; color:#fff; font-size:2rem; cursor:pointer; border-radius:50%; width:50px; height:50px; display:flex; align-items:center; justify-content:center;" id="lightboxPrev">&#8249;</button>'
            + '<img id="lightboxImg" src="" style="max-width:95%; max-height:90vh; object-fit:contain; border-radius:8px; box-shadow:0 0 40px rgba(0,0,0,0.5);" onclick="event.stopPropagation()">'
            + '<button onclick="lightboxNav(1)" style="position:absolute; top:50%; right:20px; transform:translateY(-50%); background:rgba(255,255,255,0.15); border:none; color:#fff; font-size:2rem; cursor:pointer; border-radius:50%; width:50px; height:50px; display:flex; align-items:center; justify-content:center;" id="lightboxNext">&#8250;</button>'
            + '<div style="position:absolute; bottom:20px; color:#fff; font-size:0.85rem; opacity:0.7;" id="lightboxHint">ESC para cerrar &bull; ← → para navegar</div>';
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.body.appendChild(lightbox);
    }
    
    var lbImg = document.getElementById('lightboxImg');
    lbImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Ocultar flechas si hay una sola imagen
    var prevBtn = document.getElementById('lightboxPrev');
    var nextBtn = document.getElementById('lightboxNext');
    if (featureCarousel.images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

function closeLightbox() {
    var lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function lightboxNav(direction) {
    featureNav(direction);
    var lbImg = document.getElementById('lightboxImg');
    if (lbImg) {
        lbImg.style.opacity = '0.3';
        setTimeout(function() {
            lbImg.src = featureCarousel.images[featureCarousel.current];
            lbImg.style.opacity = '1';
        }, 100);
    }
}

// Smooth scroll for anchor links + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Cerrar menu mobile si est� abierto
            const navCollapse = document.getElementById('navbarNav');
            if (navCollapse && navCollapse.classList.contains('show')) {
                var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ============================================================================
// Cotización form handling
// ============================================================================
var cotForm = document.getElementById('cotizacionForm');
if (cotForm) {
cotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nombre = document.getElementById('cot_nombre').value.trim();
    var empresa = document.getElementById('cot_empresa').value.trim();
    var email = document.getElementById('cot_email').value.trim();
    var telefono = document.getElementById('cot_telefono').value.trim();
    var equipos = document.getElementById('cot_equipos').value;
    var comentario = document.getElementById('cot_comentario').value.trim();
    
    if (!nombre || !empresa || !email) {
        alert('Por favor complete nombre, empresa y email.');
        return;
    }
    
    // Enviar a Google Sheets
    var params = new URLSearchParams(window.location.search);
    fetch('https://script.google.com/macros/s/AKfycbzXLTlfnKcYxPoB5_vB36pMuq0xPaCSq8IGvcwM0LaQ51ucFVJQ64Dzsx-7aF_cLV5GXA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tipo: 'COTIZACION',
            nombre: nombre,
            empresa: empresa,
            email: email,
            telefono: telefono,
            equipos: equipos,
            comentario: comentario,
            pagina: window.location.pathname,
            utm_source: params.get('utm_source') || '(directo)',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            fecha_local: new Date().toLocaleString('es-AR')
        })
    }).catch(function() {});
    
    // Mostrar éxito
    document.getElementById('cotizacionForm').style.display = 'none';
    document.getElementById('cotizacionSuccess').style.display = '';
    
    // Analytics event
    if (typeof gtag === 'function') {
        gtag('event', 'solicitud_cotizacion', {
            event_category: 'conversion',
            event_label: empresa
        });
    }
});
}


// ============================================================================
// Cotizacion form handling
// ============================================================================
var cotForm = document.getElementById('cotizacionForm');
if (cotForm) {
cotForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('cot_nombre').value.trim();
    var empresa = document.getElementById('cot_empresa').value.trim();
    var email = document.getElementById('cot_email').value.trim();
    var telefono = document.getElementById('cot_telefono').value.trim();
    var equipos = document.getElementById('cot_equipos').value;
    var comentarios = document.getElementById('cot_comentarios').value.trim();

    // Modulos seleccionados
    var modulos = [];
    document.querySelectorAll('#cotizacionForm .form-check-input:checked').forEach(function(cb) {
        modulos.push(cb.value);
    });

    if (!nombre || !empresa || !email) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }

    // Deshabilitar boton
    var btn = document.getElementById('cotBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

    // Enviar a Google Sheets (mismo endpoint que descarga, con tipo=cotizacion)
    fetch('https://script.google.com/macros/s/AKfycbzXLTlfnKcYxPoB5_vB36pMuq0xPaCSq8IGvcwM0LaQ51ucFVJQ64Dzsx-7aF_cLV5GXA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tipo: 'COTIZACION',
            nombre: nombre,
            empresa: empresa,
            email: email,
            telefono: telefono,
            equipos: equipos,
            modulos: modulos.join(', '),
            comentarios: comentarios,
            pagina: window.location.pathname + '#cotizacion',
            dispositivo: screen.width <= 768 ? 'Mobile' : 'Desktop',
            fecha_local: new Date().toLocaleString('es-AR')
        })
    }).then(function() {
        document.getElementById('cotizacionForm').style.display = 'none';
        document.getElementById('cotSuccess').style.display = '';
    }).catch(function() {
        document.getElementById('cotizacionForm').style.display = 'none';
        document.getElementById('cotSuccess').style.display = '';
    });
});
}

// ============================================================================
// Demo form handling
// ============================================================================
var demoForm = document.getElementById('demoForm');
if (demoForm) {
demoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nombre = document.getElementById('demo_nombre').value.trim();
    var empresa = document.getElementById('demo_empresa').value.trim();
    var email = document.getElementById('demo_email').value.trim();
    var telefono = document.getElementById('demo_telefono').value.trim();
    var comentario = document.getElementById('demo_comentario').value.trim();
    
    // Modulos seleccionados
    var modulosSelect = document.getElementById('demo_modulos');
    var modulos = [];
    for (var i = 0; i < modulosSelect.selectedOptions.length; i++) {
        modulos.push(modulosSelect.selectedOptions[i].value);
    }
    
    if (!nombre || !empresa || !email) {
        alert('Por favor complete nombre, empresa y email.');
        return;
    }
    
    // Deshabilitar boton
    var btn = document.getElementById('demoBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';
    
    // Enviar a Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbzXLTlfnKcYxPoB5_vB36pMuq0xPaCSq8IGvcwM0LaQ51ucFVJQ64Dzsx-7aF_cLV5GXA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            tipo: 'DEMO',
            nombre: nombre,
            empresa: empresa,
            email: email,
            telefono: telefono,
            modulos: modulos.join(', '),
            comentario: comentario,
            pagina: window.location.pathname + '#demo',
            dispositivo: screen.width <= 768 ? 'Mobile' : 'Desktop',
            fecha_local: new Date().toLocaleString('es-AR')
        })
    }).then(function() {
        document.getElementById('demoForm').style.display = 'none';
        document.getElementById('demoSuccess').style.display = '';
    }).catch(function() {
        document.getElementById('demoForm').style.display = 'none';
        document.getElementById('demoSuccess').style.display = '';
    });
    
    // Analytics event
    if (typeof gtag === 'function') {
        gtag('event', 'solicitud_demo', {
            event_category: 'conversion',
            event_label: empresa
        });
    }
});
}
