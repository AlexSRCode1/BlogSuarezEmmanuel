import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Componentes/Navbar/Navbar';
import Home from './Componentes/Pages/Home';
import Blog from './Componentes/Blog/Blog';
import Contacto from './Componentes/Pages/Contacto';
import Ideas from './Componentes/Pages/Informacion';
import PostDetalle from './Componentes/Blog/PostDetalle'; // nueva importación

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetalle />} /> {/* nueva ruta */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informacion" element={<Ideas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
