import React from 'react';

export default function Informacion() {
  return (
    <div className="text-light p-5 rounded" style={{ backgroundColor: '#1a1a1a' }}>
      <h2 className="mb-4 text-warning">🎮 Curiosidades y detalles gamer</h2>

      <section className="mb-4">
        <h4 className="text-info">🌍 Albion Online</h4>
        <p>
          ⚔️ ¿Sabías que puedes usar diarios de trofeo en tus trabajadores para obtener recursos extra y estatuas decorativas?<br />
          🏝️ Además, si usas trabajadores en la isla de un amigo, ellos pueden beneficiarse de tus diarios si los configuraron correctamente.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-success">🌾 Stardew Valley</h4>
        <p>
          🐔 Puedes incubar huevos para tener pollos de colores especiales si has logrado cierto nivel de amistad con los aldeanos.<br />
          💖 El evento del mercado nocturno tiene secretos ocultos si lo visitas varios días seguidos.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-danger">☢ Fallout: New Vegas</h4>
        <p>
          🧠 Si tu inteligencia es muy baja al crear tu personaje, tu personaje literalmente no puede hablar bien y tiene opciones de diálogo graciosísimas.<br />
          💥 El Fat Man, una mini-nuke launcher, tiene una versión única llamada “Estallido Atómico” escondida en el juego.
        </p>
      </section>

      <p className="fst-italic mt-4" style={{ color: '#ffb17a' }}>
        Este espacio es para compartir lo que me parece genial, extraño o poco conocido sobre mis juegos favoritos.
      </p>
    </div>
  );
}
