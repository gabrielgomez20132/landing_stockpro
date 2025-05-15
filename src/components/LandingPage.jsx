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
];

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center gap-2 text-xl font-bold text-blue-700">
            <span role="img" aria-label="logo">📦</span>
            StockPro
          </div>
          <a
            href="#demo"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
          >
            Solicitar Demo
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Gestioná tu inventario <span className="text-blue-700">de forma simple y profesional</span>
        </h1>
        <p className="text-lg sm:text-2xl mb-6">
          El sistema integral para controlar stock, ventas, compras y reportes desde cualquier lugar.
        </p>
        <a
          href="#features"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          Ver funcionalidades
        </a>
        <div className="mt-12 flex justify-center">
          <img
            src={require("../assets/dashboard.png")}
            alt="Dashboard de StockPro"
            className="rounded-2xl shadow-lg max-w-full w-[600px] border border-blue-100"
            loading="lazy"
          />
        </div>
      </section>

      {/* Funcionalidades */}
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

      {/* Beneficios */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">¿Por qué elegir StockPro?</h2>
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
          </ul>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="max-w-3xl mx-auto text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Solicitá una demo personalizada</h2>
        <p className="mb-8 text-lg">
          Comprobá cómo StockPro puede transformar la gestión de tu negocio.
        </p>
        <a
          href="mailto:ventas@stockpro.com?subject=Solicito Demo StockPro"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          Quiero mi demo
        </a>
      </section>

      {/* Testimonios */}
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

      {/* FAQ */}
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

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-auto">
        <div>© {new Date().getFullYear()} StockPro. Todos los derechos reservados.</div>
        <div className="mt-2 text-sm">
          <a href="mailto:info@stockpro.com" className="underline">Contacto</a>
        </div>
      </footer>
    </div>
  );
}
