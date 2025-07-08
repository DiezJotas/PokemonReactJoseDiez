import React from "react";
import { pokemones } from "./Home";

// Colores por tipo
const colorPorTipo = {
  Fuego: "#F08030",
  Agua: "#6890F0",
  Planta: "#78C850",
  Veneno: "#A040A0",
  Eléctrico: "#F8D030",
  Normal: "#A8A878",
  Bicho: "#A8B820",
  Volador: "#A890F0",
  Tierra: "#E0C068",
  Hada: "#EE99AC",
};

export const BotonTipo = ({ tipo, onFilter }) => {
  const handleClick = () => {
    const filtrados = pokemones.filter(pokemon =>
      pokemon.tipo.includes(tipo)
    );
    onFilter(filtrados);
  };

  return (
    <button
      type="button"
      className="btn btn-sm me-2 mb-2"
      style={{
        backgroundColor: colorPorTipo[tipo] || "#ccc",
        color: "white",
        border: "none",
        fontWeight: "bold"
      }}
      onClick={handleClick}
    >
      {tipo}
    </button>
  );
};
