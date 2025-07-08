import React from "react";

// Cards.jsx
export const Cards = ({ nombre, tipo, nivel, habilidades, stats, imagen }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text"><strong>Tipo:</strong> {tipo.join(", ")}</p>
          <p className="card-text"><strong>Nivel:</strong> {nivel}</p>
          <p className="card-text">
            <strong>Habilidades:</strong> {habilidades.join(", ")}.
          </p>
          <p className="card-text">
            <strong>Stats:</strong><br />
            🩸 HP: {stats.hp} | 🗡 Ataque: {stats.ataque} | 🛡 Defensa: {stats.defensa} | ⚡️ Velocidad: {stats.velocidad}
          </p>
        </div>
      </div>
    </div>
  );
};