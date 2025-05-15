import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Lo que dicen nuestros clientes</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-blue-50 rounded-xl p-6 shadow flex-1">
            <p className="mb-4">"StockPro nos simplificó la gestión de sucursales y el control de stock. ¡Muy recomendable!"</p>
            <div className="font-bold">Martina R., Gerenta de Tienda</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow flex-1">
            <p className="mb-4">"La interfaz es muy fácil y el soporte siempre responde rápido. Ahora tengo todo ordenado."</p>
            <div className="font-bold">Luis G., Dueño de Mayorista</div>
          </div>
        </div>
      </div>
    </section>
  );
}
