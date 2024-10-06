import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a la Fundación</h1>
      <p className="text-xl mb-8 text-center">
        Nuestra misión es apoyar a los pacientes y residentes a través de sus emprendimientos.
        <br /> Haz clic abajo para explorar sus increíbles productos.
      </p>
      <Link to="/emprendimientos">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Ver Emprendimientos
        </button>
      </Link>
    </div>
  );
};

export default Home;
