Esta Aplicación se maquetó y se hicieron los estilos de acuerdo a las capturas alcanzadas.

La estructura del programa es la siguiente:

creative-crew-app/
├── public/
│ └── images/
│ ├── photo1.png
│ ├── photo2.png
│ ├── photo3.png
│ ├── photo4.png
│ ├── photo5.png
│ └── photo6.png
│
├── src/
│ ├── components/
│ │ ├── Header.jsx <-- Título + Iconos + Sección Who we are
│ │ └── CrewMember.jsx <-- Card individual con nombre, imagen, cargo
│ │
│ ├── App.jsx <-- Composición general de la app
│ ├── main.jsx <-- Punto donde cargamos para el React
│ └── index.css <-- Tailwind y los estilos para todo el programa
│
├── index.html <-- Archivo principal y el #root
├── tailwind.config.js
├── vite.config.js
├── package.json
└── ...otros archivos de config (README, etc.)

Diseño de la Página:

La página se implemento en React y muestra la información de un equipo de trabajo (nombre, foto y cargo) tal como en las capturas del diseño proporcionado.

Mantuve una estructura ordenada, donde cada miembro del equipo esté representado con una card o sección individual.

Utilizce TailwindCSS para aplicar estilos a la página.

La página es responsive, ajustándose correctamente a distintos tamaños de pantalla.

Se hizo uso de los Props para pasar información entre los componentes. Esto me ayudó a mantener el código modular y reutilizable.

Se hizo uso de Componentes, 2 (Header y CrewMember)
Se hizo un componente para las cards de los miembros del equipo.
#   P r a c t 1 - N 2  
 