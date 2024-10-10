import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const emprendimientos = [
  {
    name: 'Leslie Alexander',
    role: 'Escultor',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    review: 'Leslie es una persona apasionada por la naturaleza y los productos orgánicos. Con años de experiencia en la elaboración artesanal de cosméticos, ahora está ofreciendo su línea de jabones naturales.',
    products: [
      {
        id: 1,
        name: 'Retrato',
        description: 'Retrato de persona con angustia por la pérdida de su hijo',
        price: '$12.00',
        imageSrc: './images_empre/pintura2.jpg',
        imageAlt: 'Imagen de Retrato',
      },
      {
        id: 2,
        name: 'Velas Aromáticas',
        description: 'Velas aromáticas hechas a mano con cera 100% natural.',
        price: '$8.00',
        imageSrc: './images_empre/pintura.jpg',
        imageAlt: 'Imagen de Velas Aromáticas',
      },
    ],
  },
  {
    name: 'Michael Foster',
    role: 'Pintor',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    review: 'Michael ha dedicado su tiempo a apoyar el comercio justo y sostenible a través de productos artesanales de cuero de alta calidad.',
    products: [
      {
        id: 1,
        name: 'Cartera de Cuero',
        description: 'Cartera de cuero genuino, hecha a mano con los mejores materiales.',
        price: '$25.00',
        imageSrc: './images_empre/pintura.jpg',
        imageAlt: 'Imagen de Cartera de Cuero',
      },
      {
        id: 2,
        name: 'Velas Aromáticas',
        description: 'Velas aromáticas hechas a mano con cera 100% natural.',
        price: '$8.00',
        imageSrc: './images_empre/pintura.jpg',
        imageAlt: 'Imagen de Velas Aromáticas',
      },
    ],
  },
];

export default function Emprendimientos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold tracking-tight text-[#f08080] sm:text-6xl"style={{ fontFamily: 'Dancing Script, sans-serif' }}>Emprendimientos</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16">
        {emprendimientos.map((emprendimiento, index) => (
          <div 
            key={emprendimiento.name} 
            className={`bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            {/* Contenedor para la imagen de perfil */}
            <div className="lg:w-1/3 flex-shrink-0 flex justify-center lg:justify-start">
              <img
                alt={emprendimiento.name}
                src={emprendimiento.imageUrl}
                className="h-96 w-96 rounded-full mx-auto mb-4 lg:mx-0 lg:mb-0 lg:mr-4"
              />
            </div>
            
            {/* Contenedor para la información */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-xl font-bold text-gray-900">{emprendimiento.name}</h2>
              <p className="text-gray-600 mb-2">{emprendimiento.role}</p>
              <p className="text-gray-700">{emprendimiento.review}</p>

              {/* Productos */}
              <h3 className="text-lg font-medium text-gray-900 mt-4">Productos:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {emprendimiento.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mt-4">{product.name}</h4>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="mt-2 text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar el producto seleccionado */}
      {selectedProduct && (
        <Dialog open={selectedProduct !== null} onClose={() => setSelectedProduct(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <img
                src={selectedProduct.imageSrc}
                alt={selectedProduct.imageAlt}
                className="h-64 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-gray-900">{selectedProduct.name}</h4>
              <p className="text-gray-700 mb-2">{selectedProduct.description}</p>
              <p className="text-sm font-medium text-gray-900 mb-4">{selectedProduct.price}</p>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedProduct(null)}
              >
                Cerrar
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
