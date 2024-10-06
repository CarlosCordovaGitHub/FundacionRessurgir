import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Emprendimientos from './pages/Emprendimientos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emprendimientos" element={<Emprendimientos />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;

