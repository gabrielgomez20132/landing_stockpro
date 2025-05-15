import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center py-6 mt-auto">
      <div>© {new Date().getFullYear()} StockPro. Todos los derechos reservados.</div>
      <div className="mt-2 text-sm">
        <a href="mailto:info@stockpro.com" className="underline">Contacto</a>
      </div>
    </footer>
  );
}
