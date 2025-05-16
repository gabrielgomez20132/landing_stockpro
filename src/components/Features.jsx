import React from "react";

const features = [
  {
    title: "Control Total de Inventario",
    description:
      "Gestioná tu stock en tiempo real, con alertas de mínimos, movimientos y auditoría por almacén.",
    icon: "📦",
  },
  {
    title: "Punto de Venta (POS) Rápido",
    description:
      "Registrá ventas, imprimí tickets y controlá la caja con interfaz ágil y amigable.",
    icon: "💸",
  },
  {
    title: "Reportes Interactivos",
    description:
      "Obtené reportes de stock, ventas, compras, clientes y ganancias. Exportá a Excel y PDF.",
    icon: "📊",
  },
  {
    title: "Usuarios y Roles",
    description:
      "Creá usuarios, asigná roles y permisos granulares para cada módulo del sistema.",
    icon: "🧑‍💼",
  },
  {
    title: "Multi-Almacén y Transferencias",
    description:
      "Gestioná múltiples almacenes, transferí stock y controlá existencias por sucursal.",
    icon: "🏪",
  },
  {
    title: "Multi-idioma y Seguridad",
    description:
      "Interfaz disponible en varios idiomas. Acceso seguro con autenticación y logs.",
    icon: "🌍",
  },
  {
    title: "Cotizaciones",
    description:
      "Módulo de cotizaciones que te permite generar, gestionar y enviar presupuestos personalizados de manera eficiente.",
    icon: "📝",
  },
  {
    title: "Gestión de Clientes",
    description: "Módulo de administración de clientes que te permite almacenar y gestionar los datos de contacto, así como consultar el historial de ventas asociadas a cada cliente para un mejor seguimiento y atención personalizada.",
    icon: "👥",
  },
  {
    title: "Gestión de Productos",
    description: "Módulo para el registro y administración de productos, donde podrás gestionar detalles como costo, precio, stock mínimo y recibir alertas de cantidad. Además, permite la clasificación de productos por categorías y marcas para una mejor organización.",
    icon: "📦",
  }


];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">Funcionalidades principales</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
