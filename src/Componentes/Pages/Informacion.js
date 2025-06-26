import React from 'react';

export default function Informacion() {
  return (
    <div
      className="text-light p-5 rounded"
      style={{
        backgroundColor: '#1a1a1a',
        fontSize: '1.15rem', // AUMENTAMOS EL TAMAÑO DEL TEXTO
        lineHeight: '1.8',
      }}
    >
      <h2 className="mb-4 text-warning">🎮 Curiosidades y detalles</h2>

      <section className="mb-4">
        <h4 style={{ color: '#d4af37', fontWeight: 'bold' }}>🛡️ World of Warcraft</h4>
        <p>
          🐉 El primer jefe del juego, **Hogger**, se volvió tan infame que Blizzard lo convirtió en una leyenda meme dentro de la comunidad.<br />
          🌍 Hay un lugar secreto llamado **La Habitación de GM**, accesible solo por administradores, que contiene objetos imposibles para los jugadores normales.<br />
          🎺 Durante eventos especiales como Halloween o Navidad, los NPCs cambian de vestimenta y los mapas se decoran por completo.<br />
          🧙‍♂️ En una de las misiones más raras del juego, un gnomo te convierte temporalmente en pollo para espiar sin ser detectado.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-info">🌍 Albion Online</h4>
        <p>
          ⚔️ ¿Sabías que puedes usar diarios de trofeo en tus trabajadores para obtener recursos extra y estatuas decorativas?<br />
          🏝️ Además, si usas trabajadores en la isla de un amigo, ellos pueden beneficiarse de tus diarios si los configuraron correctamente.<br />
          🛡️ Todo el equipo y objetos del juego son creados por los jugadores. ¡No existen drops automáticos de espadas legendarias!
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-success">🌾 Stardew Valley</h4>
        <p>
          🐔 Puedes incubar huevos para tener pollos de colores especiales si has logrado cierto nivel de amistad con los aldeanos.<br />
          💖 El evento del mercado nocturno tiene secretos ocultos si lo visitas varios días seguidos, incluyendo un misterioso submarino de pesca.<br />
          🎁 Algunos aldeanos tienen reacciones inesperadas si les das regalos "raros" como basura o piedras... ¡y a veces hasta les gusta!
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-danger">☢ Fallout: New Vegas</h4>
        <p>
          🧠 Si tu inteligencia es muy baja al crear tu personaje, literalmente no puedes hablar bien y tus diálogos se vuelven graciosísimos, como "yo ir" o "tú dar cosa".<br />
          💥 El Fat Man, un lanzador de mini-bombas nucleares, tiene una versión única llamada “Estallido Atómico”, escondida en el mapa.<br />
          🎰 Si ganas demasiado en los casinos del juego, ¡te expulsan por ser demasiado bueno apostando!
        </p>
      </section>

      <section className="mb-4">
        <h4 style={{ color: '#A9BCD0', fontWeight: 'bold'}} >🌌 Hollow Knight</h4>
        <p>
          🐞 Si te quedás quieto por un rato, el personaje se duerme... ¡y hasta ronca!<br />
          🗺️ El juego no te da el mapa automáticamente, tenés que encontrar a Cornifer, un cartógrafo que tararea si estás cerca.<br />
          🎵 La música cambia dinámicamente según el área y el estado emocional del juego.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-info">🧠 Celeste</h4>
        <p>
          ⛰️ El nombre del juego hace referencia tanto a la montaña como a la protagonista, Madeline.<br />
          🌟 Tiene niveles ocultos llamados “Corazones de Cristal” que desbloquean finales secretos.<br />
          🎶 La banda sonora fue compuesta por Lena Raine y tiene versiones remixadas por otros artistas indie.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-warning">👁️ Little Nightmares</h4>
        <p>
          🕯️ El nombre de la protagonista, Six, representa su lugar como el sexto "experimento".<br />
          🧥 El abrigo amarillo es una referencia visual a películas clásicas de suspenso.<br />
          💡 No hay diálogos, pero el juego transmite emociones intensas solo con el entorno.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-secondary">🪐 Outer Wilds</h4>
        <p>
          ⏳ El universo se reinicia cada 22 minutos, pero conservás lo que aprendiste.<br />
          🚀 Todos los planetas están en movimiento en tiempo real. ¡El tiempo lo cambia todo!<br />
          🧠 No hay mejoras ni habilidades. Solo tu ingenio, observación y memoria son claves para avanzar.
        </p>
      </section>

      <p className="fst-italic mt-4" style={{ color: '#ffb17a' }}>
        Este espacio es para compartir lo que me parece genial, extraño o poco conocido sobre mis juegos favoritos. Si tú también tienes un dato curioso o algo que te voló la cabeza, ¡me encantaría leerlo!
      </p>
    </div>
  );
}
