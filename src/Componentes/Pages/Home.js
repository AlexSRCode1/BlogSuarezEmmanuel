import React from 'react';

export default function Home() {
  return (
    <div className="text-center p-5 rounded" style={{ backgroundColor: '#121212', color: '#ff6700' }}>
      <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '0 0 10px #ff6700' }}>
        Sumérgete en el Mundo Gamer
      </h1>
      <p className="lead mb-4" style={{ color: '#ffb17a' }}>
        Noticias, reseñas y guías con la mejor calidad y estilo para que no te pierdas nada del universo de los videojuegos.
        Únete a la comunidad que vive y respira gaming.
      </p>
      <img
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80"
        alt="Videojuegos"
        className="img-fluid rounded shadow-lg"
        style={{ maxHeight: '400px', objectFit: 'cover', boxShadow: '0 0 20px #ff6700' }}
      />
    </div>
  );
}
