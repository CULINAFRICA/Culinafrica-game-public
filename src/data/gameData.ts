
import { Question, FactCard, Ailment, Dish } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Quelle est la base de ce plat appelé 'Jollof Rice'?",
    options: ["Riz", "Millet", "Maïs"],
    correctAnswer: "Riz",
    image: "/images/Jollof_Rice.jpg"
  },
  {
    id: 2,
    text: "Quel ingrédient est essentiel dans la préparation du 'Bissap'?",
    options: ["Fleurs d'hibiscus", "Gingembre", "Menthe"],
    correctAnswer: "Fleurs d'hibiscus",
    image: "/images/Bissap.jpg",
    tags: ["herbal"] //  1/3 herbal
  },
  {
    id: 3,
    text: "Le 'Thieboudienne' est un plat originaire de quel pays?",
    options: ["Sénégal", "Nigeria", "Ghana"],
    correctAnswer: "Sénégal",
    image: "/images/Thieboudienne.jpg"
  },
  {
    id: 4,
    text: "Quel est l'ingrédient principal du 'Fufu'?",
    options: ["Manioc", "Patate douce", "Banane plantain"],
    correctAnswer: "Manioc",
    image: "/images/Fufu.jpg"
  },
  {
    id: 5,
    text: "Quelle épice donne sa couleur jaune au 'Doro Wat'?",
    options: ["Curcuma", "Safran", "Paprika"],
    correctAnswer: "Curcuma",
    image: "/images/Doro_Wat.jpg",
    tags: ["herbal"] //  2/3 herbal (épice/plante)
  },
  {
    id: 6,
    text: "Quel remède maison africain est souvent utilisé contre le rhume ?",
    options: ["Infusion de gingembre", "Jus d'orange", "Café noir"],
    correctAnswer: "Infusion de gingembre",
    image: "/images/ginger_tea.jpg",
    tags: ["herbal"] //  3/3 herbal atteints
  },
  {
    id: 7,
    text: "Quel aliment est une bonne source de fer pour lutter contre l’anémie ?",
    options: ["Lentilles", "Concombre", "Riz blanc"],
    correctAnswer: "Lentilles",
    image: "/images/lentils.jpg",
    tags: ["anemie"] //  1/5 anémie (on ajuste le seuil ci-dessous pour la démo)
  }
];

export const factCards: FactCard[] = [
  {
    id: 1,
    title: "Jollof Rice",
    description: "Un plat emblématique d'Afrique de l'Ouest, particulièrement populaire au Nigeria et au Ghana.",
    medicinalEffect: "Riche en lycopène grâce à la tomate, qui aide à réduire le risque de maladies cardiaques."
  },
  {
    id: 2,
    title: "Bissap",
    description: "Une boisson rafraîchissante préparée à partir de fleurs d'hibiscus séchées.",
    medicinalEffect: "Contient des antioxydants qui aident à réduire l'hypertension et à protéger le cœur."
  },
  {
    id: 3,
    title: "Thieboudienne",
    description: "Un plat national sénégalais à base de riz, de poisson et de légumes.",
    medicinalEffect: "Le poisson fournit des acides gras oméga-3 bénéfiques pour la santé cardiovasculaire."
  },
  {
    id: 4,
    title: "Fufu",
    description: "Une pâte à base de manioc, servie avec diverses sauces et ragoûts.",
    medicinalEffect: "Le manioc contient des résistants à l'amidon qui soutiennent une bonne santé intestinale."
  },
  {
    id: 5,
    title: "Doro Wat",
    description: "Un ragoût de poulet épicé, plat national de l'Éthiopie.",
    medicinalEffect: "Le curcuma a des propriétés anti-inflammatoires puissantes et aide à combattre l'inflammation."
  },
  {
    id: 6,
    title: "Infusion de gingembre",
    description: "Un remède maison traditionnel utilisé dans de nombreuses régions d’Afrique.",
    medicinalEffect: "Le gingembre aide à dégager les voies respiratoires et à soulager les symptômes du rhume."
  },
  {
    id: 7,
    title: "Lentilles",
    description: "Une légumineuse couramment utilisée dans la cuisine africaine et riche en nutriments.",
    medicinalEffect: "Excellente source de fer végétal, elles aident à prévenir et lutter contre l’anémie."
  }
];

export const ailments: Ailment[] = [
  {
    id: 1,
    name: "Rhume",
    description: "Symptômes de congestion nasale, toux et mal de gorge"
  },
  {
    id: 2,
    name: "Fatigue",
    description: "Sensation de manque d'énergie et d'épuisement"
  },
  {
    id: 3,
    name: "Hypertension",
    description: "Tension artérielle élevée"
  },
  {
    id: 4,
    name: "Digestion lente",
    description: "Difficulté à digérer les aliments, sensation de lourdeur"
  },
  {
    id: 5,
    name: "Anémie",
    description: "Fatigue et faiblesse dues à un manque de fer"
  },
  {
    id: 6,
    name: "Récupération du paludisme",
    description: "Fatigue et faiblesse après le paludisme"
  },
  {
    id: 7,
    name: "Diabète",
    description: "Besoin de contrôler le sucre dans le sang"
  },
  {
    id: 8,
    name: "Immunité faible",
    description: "Besoin de renforcer les défenses naturelles (vitamines, antioxydants)."
  },
  {
    id: 9,
    name: "Surpoids / Obésité",
    description: "Gestion du poids : privilégier fibres, protéines maigres et modes de cuisson sains."
  }
];

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Bissap",
    image: "/images/Bissap.jpg",
    treatsAilments: [2, 3],
    description: "Boisson à base de fleurs d'hibiscus",
    medicinalEffect: "Contient des antioxydants qui aident à réduire l’hypertension et à protéger le cœur."
  },
  {
    id: 2,
    name: "Soupe au Gingembre",
    image: "/images/Soupe_au_Gingembre.jpg",
    treatsAilments: [1, 4],
    description: "Soupe épicée avec du gingembre frais",
    medicinalEffect: "Le gingembre peut aider la digestion et soulager nausées et inconforts."
  },
  {
    id: 3,
    name: "Attieke au Poisson",
    image: "/images/Attieke_au_Poisson.jpg",
    treatsAilments: [2, 6],
    description: "Couscous de manioc servi avec du poisson",
    medicinalEffect: "Oméga‑3 du poisson + fibres du manioc (selon accompagnements)."
  },
  {
    id: 4,
    name: "Maafe",
    description: "Ragoût d'arachide ou de pâte de cacahuète",
    treatsAilments: [2, 6],
    image: "/images/Maafe.jpg",
    medicinalEffect: "Arachide source de protéines et bons lipides; portion et sel à modérer."
  },
  {
    id: 5,
    name: "Egusi Soup",
    description: "Soupe aux graines de melon avec légumes",
    treatsAilments: [5, 8],
    image: "/images/egusi_soup.jpeg",
    medicinalEffect: "Graines riches en fer et zinc; utile contre la fatigue liée à l’anémie."
  },
  {
    id: 6,
    name: "Kedjenou Poulet",
    description: "Poulet mijoté avec légumes et épices",
    treatsAilments: [6, 2],
    image: "/images/Kedjenou-P.png",
    medicinalEffect: "Cuisson douce qui préserve nutriments; protéines maigres pour l’énergie."
  },
  {
    id: 7,
    name: "Fonio aux Légumes",
    description: "Ancienne céréale riche en fibres",
    treatsAilments: [7, 4],
    image: "/images/Fonio .jpg",
    medicinalEffect: "Index glycémique bas et fibres utiles pour glycémie et satiété."
  },
  {
    id: 8,
    name: "Akara",
    description: "Beignets de niébé (pois à œil noir)",
    treatsAilments: [5],
    image: "/images/Akara.jpeg",
    medicinalEffect: "Protéines végétales et fer non héminique; privilégier cuisson peu grasse."
  },
  {
    id: 9,
    name: "Githeri",
    description: "Ragoût de maïs et haricots du Kenya",
    treatsAilments: [7, 9],
    image: "/images/Gither.jpeg",
    medicinalEffect: "Association céréales-légumineuses: fibres et satiété pour gestion du poids."
  },
  {
    id: 10,
    name: "Shiro Wat",
    description: "Ragoût éthiopien de farine de pois chiche",
    treatsAilments: [7, 4],
    image: "/images/Shiro_wat.jpeg",
    medicinalEffect: "Riche en fibres et protéines; favorable à la glycémie stable."
  },
  {
    id: 11,
    name: "Ndolé",
    description: "Plat camerounais aux feuilles amères",
    treatsAilments: [4, 8],
    image: "/images/Ndole.jpg",
    medicinalEffect: "Feuilles amères: composés bioactifs pour la digestion; graisses à modérer."
  },
  {
    id: 12,
    name: "Soupe de Lentilles (Harira-style)",
    description: "Soupe marocaine aux lentilles et pois chiches",
    treatsAilments: [5, 2],
    image: "/images/Harira.jpg",
    medicinalEffect: "Fer et protéines; bon pour énergie et récupération."
  },
  {
    id: 13,
    name: "Pap & Chakalaka",
    description: "Bouillie de maïs avec relish épicée",
    treatsAilments: [4, 9],
    image: "/images/Pap_chakalaka.jpg",
    medicinalEffect: "Légumes et fibres pour satiété; préférez versions peu sucrées/peu grasses."
  },
];