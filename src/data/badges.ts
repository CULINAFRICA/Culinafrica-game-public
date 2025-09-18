// src/data/badges.ts

export interface Badge {
  id: string;
  title: string;
  description: string;
  requirement: string;
  icon: string;
}

export const BADGES: Badge[] = [
  {
    id: "nutrition-novice",
    title: "Nutrition Novice",
    description: "Bravo, tu as complété ton premier quiz !",
    requirement: "Complète ton premier quiz",
    icon: "/images/badges/nutrition_novice.png",
  },
  {
    id: "herbal-apprentice",
    title: "Herbal Apprentice",
    description: "Tu as bien répondu à 3 questions sur les plantes médicinales.",
    requirement: "Réponds correctement à 3 questions liées aux plantes",
    icon: "/images/badges/herbal_apprentice.png",
  },
  {
    id: "anemia-fighter",
    title: "Anemia Fighter",
    description: "Tu as appris à identifier 5 aliments bons contre l’anémie.",
    requirement: "Réponds correctement à 5 questions sur l’anémie",
    icon: "/images/badges/anemia_fighter.png",
  },
];
