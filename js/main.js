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
document.getElementById('downloadForm').addEventListener('submit', function(e) {
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
    
    // Configurar link de descarga
    // TODO: Reemplazar con la URL real del instalador cuando est� disponible
    var downloadUrl = 'aiTi_Setup_v1.0.0.exe';
    document.getElementById('downloadLink').href = downloadUrl;
    
    // Iniciar descarga autom�tica
    // window.location.href = downloadUrl;
    
    console.log('Lead registrado:', { nombre, empresa, email, equipos });
});

// Feature screenshots modal
var featureData = {
    'dashboard': {
        title: 'Dashboard Inteligente',
        images: ['img/features/dashboard-1.webp', 'img/features/dashboard-2.webp', 'img/features/dashboard-3.webp'],
        description: 'Panel con KPIs en tiempo real, graficos de distribucion por tipo/marca/estado, alertas y widgets personalizables.'
    },
    'inventario': {
        title: 'Inventario de Equipos',
        images: ['img/features/inventario-1.webp', 'img/features/inventario-2.webp', 'img/features/inventario-3.webp'],
        description: 'Listado con filtros avanzados, columnas configurables, busqueda universal, exportacion PDF/Excel y codigos QR.'
    },
    'backups': {
        title: 'Backups Automaticos',
        images: ['img/features/backups-1.webp', 'img/features/backups-2.webp', 'img/features/backups-3.webp'],
        description: 'Respaldo automatico via SSH/Telnet, mapa de calor de backups, historial y comparacion visual de cambios.'
    },
    'terminal': {
        title: 'Terminal SSH/Telnet',
        images: ['img/features/terminal-1.webp', 'img/features/terminal-2.webp', 'img/features/terminal-3.webp'],
        description: 'Conexion directa desde el navegador, multiples pestanas, multipaste, snippets y vista grilla.'
    },
    'sitios': {
        title: 'Gestion de Sitios y Mudanzas',
        images: ['img/features/sitios-1.webp', 'img/features/sitios-2.webp', 'img/features/sitios-3.webp'],
        description: 'Organizacion por ubicacion, mapa geografico, mudanzas masivas con checklist y archivo historico.'
    },
    'stock': {
        title: 'Control de Stock y Asignacion',
        images: ['img/features/stock-1.webp', 'img/features/stock-2.webp', 'img/features/stock-3.webp'],
        description: 'Estados de equipo, asignacion a personas responsables con trazabilidad completa.'
    },
    'diff': {
        title: 'Comparacion de Configuraciones',
        images: ['img/features/diff-1.webp', 'img/features/diff-2.webp', 'img/features/diff-3.webp'],
        description: 'Diff visual lado a lado entre versiones de backup. Detecte cambios al instante.'
    },
    'vpn': {
        title: 'VPN y Conectividad',
        images: ['img/features/vpn-1.webp', 'img/features/vpn-2.webp', 'img/features/vpn-3.webp'],
        description: 'Tuneles VPN bidireccionales, vista de mapa con conexiones entre sitios.'
    },
    'tareas': {
        title: 'Tareas y Seguimiento',
        images: ['img/features/tareas-1.webp', 'img/features/tareas-2.webp', 'img/features/tareas-3.webp'],
        description: 'Tareas generales y por sitio, asignacion, prioridades, comentarios y archivos adjuntos.'
    },
    'reportes': {
        title: 'Estadisticas y Reportes',
        images: ['img/features/reportes-1.webp', 'img/features/reportes-2.webp', 'img/features/reportes-3.webp'],
        description: 'Reportes PDF/Excel, reportes programados por email, estadisticas de backups e inventario.'
    },
    'servicios': {
        title: 'Servicios de Internet',
        images: ['img/features/servicios-1.webp', 'img/features/servicios-2.webp', 'img/features/servicios-3.webp'],
        description: 'Contratos ISP, proveedores, velocidades, pagos, vencimientos y dashboard analitico.'
    },
    'administrativo': {
        title: 'Gestion Administrativa',
        images: ['img/features/administrativo-1.webp', 'img/features/administrativo-2.webp', 'img/features/administrativo-3.webp'],
        description: 'Ordenes de compra, licitaciones, proveedores y licencias de software.'
    },
    'auditoria': {
        title: 'Auditoria y Seguridad',
        images: ['img/features/auditoria-1.webp', 'img/features/auditoria-2.webp', 'img/features/auditoria-3.webp'],
        description: 'Registro completo de acciones, roles y permisos, bloqueo por intentos fallidos.'
    },
    'credenciales': {
        title: 'Credenciales Seguras',
        images: ['img/features/credenciales-1.webp', 'img/features/credenciales-2.webp', 'img/features/credenciales-3.webp'],
        description: 'Credenciales encriptadas con herencia en cascada Tipo, Marca, Modelo y Equipo.'
    },
    'importacion': {
        title: 'Importacion Masiva',
        images: ['img/features/importacion-1.webp', 'img/features/importacion-2.webp', 'img/features/importacion-3.webp'],
        description: 'Importacion desde Excel con vista previa, validacion por fila y reporte de errores detallado.'
    },
    'email': {
        title: 'Notificaciones por Email',
        images: ['img/features/email-1.webp', 'img/features/email-2.webp', 'img/features/email-3.webp'],
        description: 'Alertas automaticas de backups, vencimientos y reportes programados.'
    },
    'calendario': {
        title: 'Calendario',
        images: ['img/features/calendario-1.webp', 'img/features/calendario-2.webp', 'img/features/calendario-3.webp'],
        description: 'Vista mensual de eventos, vencimientos de licencias, certificados y contratos.'
    },
    'biblioteca': {
        title: 'Biblioteca Tecnica',
        images: ['img/features/biblioteca-1.webp', 'img/features/biblioteca-2.webp', 'img/features/biblioteca-3.webp'],
        description: 'Repositorio de documentacion tecnica, manuales y firmwares por equipo/modelo.'
    },
    'contactos': {
        title: 'Agenda de Contactos',
        images: ['img/features/contactos-1.webp', 'img/features/contactos-2.webp', 'img/features/contactos-3.webp'],
        description: 'Agenda profesional con categorias, multiples telefonos, emails, sitios asociados, importacion masiva y busqueda avanzada.'
    },
    'multiarea': {
        title: 'Multi-Area (Grupos)',
        images: ['img/features/multiarea-1.webp', 'img/features/multiarea-2.webp', 'img/features/multiarea-3.webp'],
        description: 'Aislamiento por areas organizativas. Cada grupo opera con sus propios equipos, usuarios, modulos habilitados y datos independientes.'
    },
    'firmware': {
        title: 'Firmware y Automatizaciones',
        images: ['img/features/firmware-1.webp', 'img/features/firmware-2.webp', 'img/features/firmware-3.webp'],
        description: 'Control de versiones de firmware por modelo, reporte de equipos actualizados/desactualizados, ejecucion masiva de comandos programados.'
    },
    'mapa': {
        title: 'Mapa Interactivo',
        images: ['img/features/mapa-1.webp', 'img/features/mapa-2.webp', 'img/features/mapa-3.webp'],
        description: 'Visualizacion geografica de sitios con mapa de calor de equipos, backups y conectividad. Geocodificacion automatica.'
    },
    'redes': {
        title: 'Direccionamiento IP (IPAM)',
        images: ['img/features/redes-1.webp', 'img/features/redes-2.webp', 'img/features/redes-3.webp'],
        description: 'Mapa visual de IPs por subred, deteccion automatica de redes, duplicados, ocupacion, alertas y reserva de IPs.'
    },
    'telefonia': {
        title: 'Telefonia',
        images: ['img/features/telefonia-1.webp', 'img/features/telefonia-2.webp', 'img/features/telefonia-3.webp'],
        description: 'Gestion de centrales telefonicas, tramas (E1, SIP, analogica) e internos. Asignacion por persona y ubicacion.'
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
    
    // Guardar im�genes en el estado del carrusel
    featureCarousel.images = feature.images;
    featureCarousel.current = 0;
    
    var body = document.getElementById('featureModalBody');
    var html = '<p class="text-muted mb-3">' + feature.description + '</p>';
    
    // Contenedor de imagen �nica con navegaci�n
    html += '<div class="position-relative">';
    
    // Bot�n anterior
    html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle" id="featurePrev" onclick="featureNav(-1)" style="z-index:10; width:40px; height:40px; opacity:0.7;">';
    html += '<i class="bi bi-chevron-left"></i></button>';
    
    // Imagen principal
    html += '<div class="text-center" id="featureImageContainer">';
    html += '<img src="' + feature.images[0] + '" class="img-fluid rounded shadow" id="featureCurrentImg" alt="' + feature.title + '" style="max-height: 70vh; cursor: pointer;" onclick="featureNav(1)" onerror="this.outerHTML=\'<div class=\\\'text-center text-muted py-5 border rounded\\\'><i class=\\\'bi bi-image fs-1 d-block mb-2\\\'></i><small>Captura pr�ximamente</small></div>\'">';
    html += '</div>';
    
    // Bot�n siguiente
    html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle" id="featureNext" onclick="featureNav(1)" style="z-index:10; width:40px; height:40px; opacity:0.7;">';
    html += '<i class="bi bi-chevron-right"></i></button>';
    
    html += '</div>';
    
    // Indicador de posici�n
    html += '<div class="text-center mt-2">';
    html += '<small class="text-muted" id="featureCounter">Imagen 1 de ' + feature.images.length + '</small>';
    html += '</div>';
    
    body.innerHTML = html;
    updateFeatureNav();
}

function featureNav(direction) {
    var total = featureCarousel.images.length;
    if (total <= 1) return;
    
    featureCarousel.current += direction;
    
    // Wrap around
    if (featureCarousel.current >= total) featureCarousel.current = 0;
    if (featureCarousel.current < 0) featureCarousel.current = total - 1;
    
    var img = document.getElementById('featureCurrentImg');
    if (img) {
        img.style.opacity = '0.3';
        setTimeout(function() {
            img.src = featureCarousel.images[featureCarousel.current];
            img.style.opacity = '1';
        }, 150);
    }
    
    var counter = document.getElementById('featureCounter');
    if (counter) {
        counter.textContent = 'Imagen ' + (featureCarousel.current + 1) + ' de ' + total;
    }
    
    updateFeatureNav();
}

function updateFeatureNav() {
    var total = featureCarousel.images.length;
    var prev = document.getElementById('featurePrev');
    var next = document.getElementById('featureNext');
    
    // Ocultar botones si hay una sola imagen
    if (total <= 1) {
        if (prev) prev.style.display = 'none';
        if (next) next.style.display = 'none';
    } else {
        if (prev) prev.style.display = '';
        if (next) next.style.display = '';
    }
}

// Navegaci�n con teclado dentro del modal
document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('featureModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    if (e.key === 'ArrowLeft') {
        featureNav(-1);
    } else if (e.key === 'ArrowRight') {
        featureNav(1);
    }
});

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
