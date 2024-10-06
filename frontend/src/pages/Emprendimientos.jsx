import React, { useState, useEffect } from 'react';

const Emprendimientos = () => {
  const [productos, setProductos] = useState([]);
  const [autor, setAutor] = useState({
    nombre: "Juan Pérez",
    reseña: "Soy un artista apasionado por la pintura y la escultura. A través de mis obras, busco transmitir emociones y contar historias. Cada pieza que creo es única y está hecha con mucho amor."
  });

  useEffect(() => {
    const productosEjemplo = [
      { id: 1, nombre: 'Pintura Abstracta', precio: 50, imagen: '/images_empre/pintura.jpg' },
      { id: 2, nombre: 'Figura de Arcilla', precio: 30, imagen: '/images_empre/pintura.jpg' },
    ];

    setProductos(productosEjemplo);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Emprendimientos</h1>

      {/* Sección de reseña del autor */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">{autor.nombre}</h2>
        <p className="mt-2 italic text-gray-700">"{autor.reseña}"</p>
      </div>

      {/* Sección de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <div key={producto.id} className="border bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="text-lg mt-2 text-gray-800">${producto.precio}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emprendimientos;
