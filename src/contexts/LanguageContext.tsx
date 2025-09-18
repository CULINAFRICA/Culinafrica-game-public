
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Home page
    'home.play': 'Jouer',
    'home.foodAsMedicine': 'Alimentation & Santé',
    'home.explore': 'Explorer',
    'logo.subtitle': 'Cuisine & Guérison',
    
    // Game instructions
    'instructions.title': 'Découvre les bienfaits des plats africains',
    'instructions.description': 'Réponds aux questions, découvre les ingrédients, et deviens un·e cuisinier·ère-guérisseur·se !',
    'instructions.start': 'Commencer',
    
    // Quiz
    'quiz.question': 'Question',
    'quiz.goodAnswer': 'Bonne réponse!',
    'quiz.wrongAnswer': 'Pas tout à fait...',
    'quiz.tryAgain': 'Essaie encore!',
    'quiz.points': 'points',
    
    // Fact cards
    'factCard.didYouKnow': 'Le savais-tu ?',
    'factCard.medicinalBenefit': 'Bienfait médicinal :',
    'factCard.next': 'Suivant',
    
    // Healer mode
    'healer.title': 'Mode Cuisinier-Guérisseur',
    'healer.clientSick': 'Un client est malade...',
    'healer.chooseDish': 'Choisis un plat pour soulager son mal !',
    'healer.wellDone': 'Bien joué!',
    'healer.effective': 'est efficace contre',
    'healer.notBest': 'n\'est pas le meilleur choix pour',
    
    // Results
    'results.score': 'Score',
    'results.correctAnswers': 'Réponses correctes:',
    'results.factsRead': 'Fiches informatives lues:',
    'results.timeBonus': 'Bonus de temps:',
    'results.replay': 'Rejouer',
    'results.share': 'Partager',
    'results.shareToast': 'Fonctionnalité de partage à venir!',
    'results.rank.master': 'Maître Guérisseur',
    'results.rank.experienced': 'Guérisseur Expérimenté',
    'results.rank.apprentice': 'Apprenti Guérisseur',
    'results.rank.beginner': 'Débutant Culinaire',
    'results.rankPrefix': 'Tu es un·e',
    
    // Food as Medicine page
    'foodMedicine.title': 'Alimentation & Santé',
    'foodMedicine.subtitle': 'Découvrez les bienfaits thérapeutiques de la cuisine africaine',
    'foodMedicine.backHome': 'Retour à l\'accueil',
    'foodMedicine.medicinalPlants': 'Plantes Médicinales',
    'foodMedicine.medicinalPlantsDesc': 'Explorez les propriétés curatives des ingrédients traditionnels africains.',
    'foodMedicine.therapeuticRecipes': 'Recettes Thérapeutiques',
    'foodMedicine.therapeuticRecipesDesc': 'Apprenez à préparer des plats aux vertus médicinales reconnues.',
    'foodMedicine.healerGuide': 'Guide du Guérisseur',
    'foodMedicine.healerGuideDesc': 'Devenez expert en associations d\'aliments et de remèdes naturels.',
    'foodMedicine.consultations': 'Consultations',
    'foodMedicine.consultationsDesc': 'Simulez des consultations et prescrivez les bons aliments-remèdes.',
    'foodMedicine.comingSoon': 'Contenu à venir...',
    
    // Splash screen
    'splash.play': 'PLAY'
  },
  en: {
    // Home page
    'home.play': 'Play',
    'home.foodAsMedicine': 'Food & Health',
    'home.explore': 'Explore',
    'logo.subtitle': 'Cuisine & Healing',
    
    // Game instructions
    'instructions.title': 'Discover the benefits of African dishes',
    'instructions.description': 'Answer questions, discover ingredients, and become a chef-healer!',
    'instructions.start': 'Start',
    
    // Quiz
    'quiz.question': 'Question',
    'quiz.goodAnswer': 'Correct answer!',
    'quiz.wrongAnswer': 'Not quite...',
    'quiz.tryAgain': 'Try again!',
    'quiz.points': 'points',
    
    // Fact cards
    'factCard.didYouKnow': 'Did you know?',
    'factCard.medicinalBenefit': 'Medicinal benefit:',
    'factCard.next': 'Next',
    
    // Healer mode
    'healer.title': 'Chef-Healer Mode',
    'healer.clientSick': 'A client is sick...',
    'healer.chooseDish': 'Choose a dish to ease their pain!',
    'healer.wellDone': 'Well done!',
    'healer.effective': 'is effective against',
    'healer.notBest': 'is not the best choice for',
    
    // Results
    'results.score': 'Score',
    'results.correctAnswers': 'Correct answers:',
    'results.factsRead': 'Info cards read:',
    'results.timeBonus': 'Time bonus:',
    'results.replay': 'Play Again',
    'results.share': 'Share',
    'results.shareToast': 'Share feature coming soon!',
    'results.rank.master': 'Master Healer',
    'results.rank.experienced': 'Experienced Healer',
    'results.rank.apprentice': 'Apprentice Healer',
    'results.rank.beginner': 'Culinary Beginner',
    'results.rankPrefix': 'You are a',
    
    // Food as Medicine page
    'foodMedicine.title': 'Food & Health',
    'foodMedicine.subtitle': 'Discover the therapeutic benefits of African cuisine',
    'foodMedicine.backHome': 'Back to Home',
    'foodMedicine.medicinalPlants': 'Medicinal Plants',
    'foodMedicine.medicinalPlantsDesc': 'Explore the healing properties of traditional African ingredients.',
    'foodMedicine.therapeuticRecipes': 'Therapeutic Recipes',
    'foodMedicine.therapeuticRecipesDesc': 'Learn to prepare dishes with recognized medicinal virtues.',
    'foodMedicine.healerGuide': 'Healer\'s Guide',
    'foodMedicine.healerGuideDesc': 'Become an expert in food and natural remedy combinations.',
    'foodMedicine.consultations': 'Consultations',
    'foodMedicine.consultationsDesc': 'Simulate consultations and prescribe the right food-remedies.',
    'foodMedicine.comingSoon': 'Content coming soon...',
    
    // Splash screen
    'splash.play': 'PLAY'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
