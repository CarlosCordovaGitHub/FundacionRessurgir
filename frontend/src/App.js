import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Emprendimientos from './pages/Emprendimientos';
import Testimonios from './pages/Testimonios';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <div>
        {/* Coloca el Navbar aquí para que se vea en todas las páginas */}
        <Navbar />

        {/* Las rutas de tu aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emprendimientos" element={<Emprendimientos />} />
          <Route path="/testimonios" element={<Testimonios />} />
          {/* Otras rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
