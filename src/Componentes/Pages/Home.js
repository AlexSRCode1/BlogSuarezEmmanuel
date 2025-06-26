import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center p-5 rounded" style={{ backgroundColor: '#121212', color: '#ff6700' }}>
      <h1 className="display-4 fw-bold mb-3">
        🎮 Bienvenido a mi rincón gamer
      </h1>

      <p className="lead mb-4" style={{ color: '#ffb17a' }}>
        Soy un apasionado de los videojuegos y este blog es donde comparto mis ideas, descubrimientos, curiosidades y más.
        Si tú también respiras gaming... estás en el lugar correcto.
      </p>

      <img
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80"
        alt="Gaming vibes"
        className="img-fluid rounded shadow-lg mb-4"
        style={{ maxHeight: '400px', objectFit: 'cover', boxShadow: '0 0 20px #ff6700' }}
      />

      <p className="fst-italic mb-5" style={{ color: '#ffa94d' }}>
        “Aquí no solo se juega... también se piensa, se analiza y se disfruta cada historia.” 🕹️✨
      </p>

      <div className="row text-start text-light mb-5">
        <div className="col-md-4 mb-3">
          <h4>📚 Curiosidades</h4>
          <p style={{ color: '#ffdab3' }}>Detalles, secretos y datos curiosos que tal vez no sabías de tus juegos favoritos.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h4>🧠 Opiniones</h4>
          <p style={{ color: '#ffdab3' }}>Mis análisis personales sobre mecánicas, historias y diseño de juegos.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h4>🔥 Recomendaciones</h4>
          <p style={{ color: '#ffdab3' }}>Juegos que merecen ser jugados... y por qué deberías darles una oportunidad.</p>
        </div>
      </div>

      <Link to="/blog" className="btn btn-warning btn-lg shadow-sm">
        Entra al blog
      </Link>
    </div>
  );
}
