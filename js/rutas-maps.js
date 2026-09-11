// Coordenadas de las ciudades en Cajamarca
const rutasData = {
    'ruta-80t': {
        nombre: 'Ruta 80 - Tual',
        salida: {
            nombre: 'Terminal Jr. Marañón 827',
            lat: -7.1540,
            lng: -78.5020
        },
        destino: {
            nombre: 'Centro Poblado Tual',
            lat: -7.3000,
            lng: -78.5200
        },
        color: '#2d7a4d'
    },
    'ruta-70': {
        nombre: 'Ruta 70 - Llullapuquio',
        salida: {
            nombre: 'Terminal Jr. Marañón 827',
            lat: -7.1540,
            lng: -78.5020
        },
        destino: {
            nombre: 'Centro Poblado Llullapuquio',
            lat: -7.2500,
            lng: -78.4800
        },
        color: '#2d7a4d'
    },
    'ruta-39': {
        nombre: 'Ruta 39 - Porcón Alto',
        salida: {
            nombre: 'Terminal Jr. Marañón 827',
            lat: -7.1540,
            lng: -78.5020
        },
        destino: {
            nombre: 'Centro Poblado Porcón Alto',
            lat: -7.0650,
            lng: -78.4400
        },
        color: '#2d7a4d'
    },
    'ruta-p08-alt': {
        nombre: 'Ruta P08 - Hospital Regional',
        salida: {
            nombre: 'Porcón Bajo',
            lat: -7.0800,
            lng: -78.4500
        },
        destino: {
            nombre: 'Hospital Regional de Cajamarca',
            lat: -7.1400,
            lng: -78.5100
        },
        color: '#2d7a4d'
    }
};

// Objeto para almacenar los mapas
const mapas = {};

// Esperar a que Google Maps esté cargado
function initMaps() {
    // Inicializar cada mapa
    Object.keys(rutasData).forEach(rutaId => {
        const rutaElement = document.getElementById(`map-${rutaId}`);
        if (rutaElement) {
            crearMapa(rutaId, rutaElement);
        }
    });
}

// Función para crear un mapa específico
function crearMapa(rutaId, elemento) {
    const ruta = rutasData[rutaId];
    
    // Calcular el centro del mapa (punto medio entre salida y destino)
    const centerLat = (ruta.salida.lat + ruta.destino.lat) / 2;
    const centerLng = (ruta.salida.lng + ruta.destino.lng) / 2;
    
    const mapa = new google.maps.Map(elemento, {
        zoom: 13,
        center: { lat: centerLat, lng: centerLng },
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: false,
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9c9c9' }],
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#f3f3f3' }],
            }
        ]
    });
    
    // Marcador de salida (punto verde)
    const markerSalida = new google.maps.Marker({
        position: { lat: ruta.salida.lat, lng: ruta.salida.lng },
        map: mapa,
        title: ruta.salida.nombre,
        icon: crearIcono('#27ae60') // Verde
    });
    
    // InfoWindow para la salida
    const infoWindowSalida = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; font-family: Arial;">
                <h4 style="margin: 0 0 5px 0; color: #1a472a;">📍 SALIDA</h4>
                <p style="margin: 0; font-weight: bold;">${ruta.salida.nombre}</p>
            </div>
        `,
        maxWidth: 300
    });
    
    markerSalida.addListener('click', () => {
        infoWindowSalida.open(mapa, markerSalida);
    });
    
    // Marcador de destino (punto rojo)
    const markerDestino = new google.maps.Marker({
        position: { lat: ruta.destino.lat, lng: ruta.destino.lng },
        map: mapa,
        title: ruta.destino.nombre,
        icon: crearIcono('#e74c3c') // Rojo
    });
    
    // InfoWindow para el destino
    const infoWindowDestino = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; font-family: Arial;">
                <h4 style="margin: 0 0 5px 0; color: #1a472a;">📍 DESTINO</h4>
                <p style="margin: 0; font-weight: bold;">${ruta.destino.nombre}</p>
            </div>
        `,
        maxWidth: 300
    });
    
    markerDestino.addListener('click', () => {
        infoWindowDestino.open(mapa, markerDestino);
    });
    
    // Dibujar línea entre salida y destino
    const linea = new google.maps.Polyline({
        path: [
            { lat: ruta.salida.lat, lng: ruta.salida.lng },
            { lat: ruta.destino.lat, lng: ruta.destino.lng }
        ],
        geodesic: true,
        strokeColor: ruta.color,
        strokeOpacity: 0.7,
        strokeWeight: 3,
        map: mapa
    });
    
    // Guardar referencia del mapa
    mapas[rutaId] = mapa;
    
    // Trigger resize cuando el mapa es mostrado
    setTimeout(() => {
        google.maps.event.trigger(mapa, 'resize');
    }, 100);
}

// Función para crear icono personalizado
function crearIcono(color) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2
    };
}

// Inicializar mapas cuando cambie de ruta
document.querySelectorAll('.route-btn').forEach(button => {
    button.addEventListener('click', function() {
        setTimeout(() => {
            const routeId = this.getAttribute('data-route');
            if (mapas[routeId]) {
                google.maps.event.trigger(mapas[routeId], 'resize');
            }
        }, 150);
    });
});

// Inicializar mapas cuando la página carga
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMaps);
} else {
    initMaps();
}
