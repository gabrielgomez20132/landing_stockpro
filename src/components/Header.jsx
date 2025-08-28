import React from "react";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <span role="img" aria-label="logo">📦</span>
          StockProFlex
        </div>
        <a
          href="https://wa.me/5491112345678?text=Hola%2C%20quiero%20una%20demo%20de%20StockPro"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition font-medium flex items-center gap-2"
        >
          <span role="img" aria-label="wsp">💬</span> Solicitar Demo
        </a>
      </nav>
    </header>
  );
}
