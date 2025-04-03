// Componente funcional que representa a un miembro del equipo
// Recibe tres props: name (nombre), role (cargo), image (ruta a la imagen)
export default function CrewMember({ name, role, image }) {
  return (
    // Contenedor principal de la card
    // Aplica margen superior alternado con Tailwind: 
    // - even:mt-8 => para imágenes pares
    // - md:[&:nth-child(3n+2)]:mt-8 => para el patrón correcto en desktop (columna 2)
    <div className="relative flex flex-col even:mt-8 md:[&:nth-child(3n+2)]:mt-8">

      {/* Contenedor de la imagen con posición relativa para ubicar el cargo encima */}
      <div className="relative">
        {/* Imagen del miembro del equipo */}
        <img
          src={image}          // Ruta de la imagen (desde /public/images)
          alt={name}           // Texto alternativo accesible
          className="w-full h-auto object-cover" // Imagen responsiva, sin deformación
        />

        {/* Cargo/Role ubicado de forma rotada y alineado al borde derecho */}
        <span className="absolute top-35 -right-6 rotate-90 origin-top-right text-[10px] tracking-[0.25em] font-light uppercase text-white">
          {role}
        </span>
      </div>

      {/* Nombre del miembro, debajo de la imagen */}
      <h3 className="mt-2 text-sm sm:text-base font-semibold text-white">
        {name}
      </h3>
    </div>
  );
}