"use client";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="text-gray-900" style={{ backgroundColor: '#ffffff' }}>
        <nav className="border-b-2 shadow-sm" style={{ backgroundColor: '#ffffff', borderBottomColor: '#777c49' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold" style={{ color: '#3a110d' }}>
              Portafolio
            </div>
            <div className="space-x-6 text-sm">
              <a href="#inicio" className="transition" style={{ color: '#666' }}>Inicio</a>
              <a href="#habilidades" className="transition" style={{ color: '#666' }}>Habilidades</a>
              <a href="#proyectos" className="transition" style={{ color: '#666' }}>Proyectos</a>
              <a href="#contacto" className="transition" style={{ color: '#666' }}>Contacto</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
