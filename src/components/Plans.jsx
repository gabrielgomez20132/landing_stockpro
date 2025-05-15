import React from "react";

const plans = [
  {
    name: "Plan Básico",
    price: "$19.999/mes",
    features: [
      "Hasta 1 sucursal",
      "Usuarios ilimitados",
      "Gestión de stock y ventas",
      "Reportes estándar",
      "Soporte por email",
    ],
    color: "border-blue-500",
    btn: "Contratar Básico",
  },
  {
    name: "Plan Plus",
    price: "$25.000/mes",
    features: [
      "Hasta 5 sucursales",
      "Usuarios ilimitados",
      "Todas las funciones del Básico",
      "Reportes avanzados y exportación",
      "Soporte prioritario y WhatsApp",
      "Facturación con ARCA",
    ],
    color: "border-green-500",
    btn: "Contratar Plus",
    highlighted: true,
  },
];

export default function Plans() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">Nuestros Planes</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-blue-50 rounded-2xl shadow-lg p-8 border-2 ${plan.color} flex-1 max-w-sm ${plan.highlighted ? "scale-105 shadow-xl border-4" : ""}`}
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-800">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4 text-blue-900">{plan.price}</div>
            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5491112345678?text=Hola%2C%20quiero%20contratar%20el%20plan%20de%20StockPro"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center px-6 py-3 rounded-xl font-semibold shadow transition ${
                plan.highlighted
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.btn}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
