import React from "react";

export default function DemoCTA() {
  return (
    <section id="demo" className="max-w-3xl mx-auto text-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Solicitá una demo personalizada</h2>
      <p className="mb-8 text-lg">
        Comprobá cómo StockProFlex puede transformar la gestión de tu negocio.
      </p>
      <a
        href="https://wa.me/5493834269222?text=Hola%2C%20quiero%20una%20demo%20de%20StockPro"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
      >
        Quiero mi demo por WhatsApp
      </a>
    </section>
  );
}
