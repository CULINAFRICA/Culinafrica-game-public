import React from "react";
import Game from "@/components/Game";
import BackButton from "@/components/BackButton";

const Play: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Bouton retour en haut à gauche */}
      <div className="fixed left-4 top-4 z-50">
        <BackButton to="/" /> 
        {/* si tu veux revenir à la page précédente seulement, mets <BackButton /> */}
      </div>

      {/* Contenu du jeu */}
      <Game />
    </div>
  );
};

export default Play;