import React from "react";

export default function Benefits() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">¿Por qué elegir StockProFlex?</h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg">
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>100% web</strong>: accedé desde cualquier dispositivo.
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>Automatizá</strong> tareas repetitivas y ahorrá tiempo.
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>Soporte y actualizaciones</strong> continuas.
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>Escalable</strong> para un solo local o una cadena completa.
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>Adaptable</strong> se adapta a cualquier rubro.
          </li>
          <li className="bg-white rounded-lg shadow px-6 py-4">
            <strong>Flexible</strong> se puede agregar nuevos modulos desarrollados.
          </li>
        </ul>
      </div>
    </section>
  );
}
