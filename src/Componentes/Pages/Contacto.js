import React from 'react';

export default function Contacto() {
  return (
    <div className="p-4 rounded shadow-lg mx-auto" style={{ maxWidth: '600px', backgroundColor: '#121212', color: '#ff6700' }}>
      <h2 className="mb-4 text-center" style={{ textShadow: '0 0 12px #ff6700' }}>Contacto</h2>
      <p className="mb-4 text-center" style={{ color: '#ffb17a' }}>
        ¿Tienes dudas o sugerencias? Envíanos un mensaje y te responderemos pronto.
      </p>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Tu nombre"
            className="form-control bg-dark text-warning border-warning"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="form-control bg-dark text-warning border-warning"
          />
        </div>
        <div className="mb-3">
          <textarea
            rows="5"
            placeholder="Tu mensaje"
            className="form-control bg-dark text-warning border-warning"
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning w-100 fw-bold"
          style={{ boxShadow: '0 0 15px #ff6700' }}
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
