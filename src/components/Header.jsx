export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start w-full">
      {/* Título */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">The creative crew</h1>
      </div>

      {/* Iconos + Descripción */}
      <div className="flex flex-col items-end gap-2 mt-4 md:mt-0 text-white">
        {/* Iconos */}
        <div className="flex items-center gap-3">
          {/* Sol */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="5" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>

          {/* Luna */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        </div>

        {/* Descripción */}
        <div className="text-right">
          <h2 className="text-lg font-semibold">Who we are</h2>
          <p className="text-sm mt-2 text-gray-300 max-w-xs">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
    </header>
  );
}
