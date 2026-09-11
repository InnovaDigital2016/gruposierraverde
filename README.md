sierra-verde/
│
├── index.html                  ← landing page principal
│
├── assets/
│   ├── img/
│   │   ├── logo/                ← logo.svg, logo-blanco.svg (para fondos oscuros), favicon
│   │   ├── hero/                 ← fotos grandes de portada (vans, Granja Porcón, ruta)
│   │   ├── galeria/               ← fotos de unidades, choferes, rutas
│   │   └── iconos/                 ← iconos sueltos (whatsapp, ubicación, horario)
│   │
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css       ← colores, tipografía, espaciados (todo centralizado aquí)
│   │   │   ├── reset.css            ← normalize/reset
│   │   │   └── tipografia.css
│   │   ├── componentes/
│   │   │   ├── navbar.css
│   │   │   ├── botones.css
│   │   │   ├── cards.css
│   │   │   ├── footer.css
│   │   │   └── formularios.css
│   │   ├── secciones/
│   │   │   ├── hero.css
│   │   │   ├── rutas.css
│   │   │   ├── nosotros.css
│   │   │   └── contacto.css
│   │   └── main.css               ← importa todo lo anterior (@import), es el único que enlazas en el HTML
│   │
│   ├── js/
│   │   ├── modules/
│   │   │   ├── navbar.js          ← menú responsive, scroll
│   │   │   ├── whatsapp.js        ← botón flotante / redirección con mensaje prellenado
│   │   │   └── slider.js          ← si usas carrusel de fotos
│   │   └── main.js                ← importa/inicializa los módulos
│   │
│   └── fonts/                     ← si usas fuente descargada (no Google Fonts CDN)
│
└── docs/                          ← (opcional) tus notas, paleta, textos aprobados por el cliente
