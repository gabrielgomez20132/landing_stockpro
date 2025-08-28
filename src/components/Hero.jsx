import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Gestioná tu inventario <span className="text-blue-700">de forma simple y profesional</span>
      </h1>
      <p className="text-lg sm:text-2xl mb-6">
        El sistema integral para controlar stock, ventas, compras y reportes desde cualquier lugar.
      </p>
      <a
        href="https://wa.me/5491112345678?text=Hola%2C%20quiero%20una%20demo%20de%StockProFlex"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
      >
        PEDI TU DEMO POR WHATSAPP YA MISMO
      </a>
      <div className="mt-12 flex justify-center">
        <img
          src={require("../assets/dashboard-ai.png")}
          alt="Dashboard de StockProFlex"
          className="rounded-2xl shadow-lg max-w-full w-[600px] border border-blue-100"
          loading="lazy"
        />
      </div>
    </section>
  );
}
