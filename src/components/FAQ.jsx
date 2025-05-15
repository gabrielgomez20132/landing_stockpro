import React from "react";

const faqs = [
  {
    q: "¿Necesito instalar algo en mi PC?",
    a: "No, StockPro es 100% web. Solo accedés desde cualquier navegador.",
  },
  {
    q: "¿Puedo importar mi inventario actual?",
    a: "Sí, podés importar productos desde archivos Excel o CSV fácilmente.",
  },
  {
    q: "¿Funciona para varios locales o sucursales?",
    a: "Sí, soporta múltiples almacenes y usuarios por sucursal.",
  },
  {
    q: "¿Qué tan seguro es el sistema?",
    a: "Cuenta con autenticación avanzada y control de accesos por permisos.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">Preguntas Frecuentes</h2>
      <ul className="space-y-6">
        {faqs.map((item) => (
          <li key={item.q} className="bg-white rounded-xl shadow p-6">
            <span className="font-semibold text-gray-900">{item.q}</span>
            <div className="mt-2 text-gray-600">{item.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
