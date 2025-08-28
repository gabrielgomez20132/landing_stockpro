import React from "react";

export default function Benefits() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          ¿Por qué elegir StockProFlex?
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg">
          {[
            {
              title: "100% web",
              description: "accedé desde cualquier dispositivo.",
            },
            {
              title: "Automatizá",
              description: "tareas repetitivas y ahorrá tiempo.",
            },
            {
              title: "Soporte y actualizaciones",
              description: "continuas.",
            },
            {
              title: "Escalable",
              description: "para un solo local o una cadena completa.",
            },
            {
              title: "Adaptabilidad",
              description: "se adapta a cualquier rubro.",
            },
            {
              title: "Flexible",
              description: "se pueden agregar nuevos módulos desarrollados.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow px-6 py-4 w-72 flex flex-col justify-center min-h-[150px] text-left"
            >
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
