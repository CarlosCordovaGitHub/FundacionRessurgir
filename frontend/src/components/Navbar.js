import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Estado para controlar el menú desplegable
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className="w-full bg-white shadow-lg">
        <div className="flex justify-between items-center w-full px-8 py-4">
          {/* Logo de la Fundación */}
          <Link to="/" className="text-xl font-light tracking-wide text-gray-700">
            <span className="font-bold">FUNDACIÓN RESSURGIR</span>
          </Link>
  
          {/* Botón de menú en pantallas pequeñas */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            {/* Icono de menú (hamburguesa) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
  
          {/* Links de Navegación */}
          <div className={`hidden md:flex space-x-8 text-gray-600 font-semibold`}>
            <Link to="/" className="hover:text-gray-900">QUIÉNES SOMOS</Link>
            <Link to="/" className="hover:text-gray-900">QUÉ HACEMOS</Link>
            <Link to="./Testimonios" className="hover:text-gray-900">Testimonios</Link>
            <Link to="/" className="hover:text-gray-900">EQUIPO</Link>
            <Link to="/Contactanos" className="hover:text-gray-900">CONTÁCTANOS</Link>
          </div>
        </div>
  
        {/* Menú desplegable para pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden px-8 py-4 bg-white shadow-lg">
            <Link to="/" className="block text-gray-600 font-semibold hover:text-gray-900 py-2">QUIÉNES SOMOS</Link>
            <Link to="/" className="block text-gray-600 font-semibold hover:text-gray-900 py-2">QUÉ HACEMOS</Link>
            <Link to="./Testimonios" className="block text-gray-600 font-semibold hover:text-gray-900 py-2">Testimonios</Link>
            <Link to="/" className="block text-gray-600 font-semibold hover:text-gray-900 py-2">EQUIPO</Link>
            <Link to="/Contactanos" className="block text-gray-600 font-semibold hover:text-gray-900 py-2">CONTÁCTANOS</Link>
          </div>
        )}
      </nav>
    );
};

export default Navbar;
