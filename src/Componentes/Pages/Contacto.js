import React, { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost/miapp/guardar_mensaje.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const data = await res.json();

      if (res.ok) {
        setRespuesta('Mensaje enviado correctamente');
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        setRespuesta('Error: ' + (data.error || 'Algo salió mal'));
      }
    } catch (error) {
      setRespuesta('Error: no se pudo conectar al servidor');
    }
  };

  return (
    <div className="p-4 rounded shadow-lg mx-auto" style={{ maxWidth: '600px', backgroundColor: '#121212', color: '#ff6700' }}>
      <h2 className="mb-4 text-center">Contacto</h2>
      <p className="mb-4 text-center" style={{ color: '#ffb17a' }}>
        ¿Tienes dudas o sugerencias? Enviame un mensaje.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Tu nombre"
            className="form-control bg-dark border-warning"
            style={{ color: 'black' }}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="form-control bg-dark border-warning"
            style={{ color: 'black' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            rows="5"
            placeholder="Tu mensaje"
            className="form-control bg-dark border-warning"
            style={{ color: 'black' }}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-warning w-100 fw-bold"
          style={{ boxShadow: '0 0 0px #ff6700' }}
        >
          Enviar Mensaje
        </button>
      </form>
      {respuesta && (
        <p className="mt-3 text-center" style={{ color: '#ffb17a' }}>
          {respuesta}
        </p>
      )}
    </div>
  );
}
