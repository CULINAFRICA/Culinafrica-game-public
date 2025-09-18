
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface SplashScreenProps {
  onStart: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="african-pattern-bg min-h-screen flex flex-col items-center justify-center p-6">
      <div className="animate-fade-in flex flex-col items-center">
        <Logo />
        
        <div className="mt-12">
          <Button 
            onClick={onStart}
            className="btn-primary w-36 flex items-center justify-center"
          >
            {t('splash.play')}
          </Button>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <button 
            className={`text-sm transition-colors ${
              language === 'fr' 
                ? 'text-africa-terracotta font-semibold' 
                : 'text-africa-earth hover:text-africa-terracotta'
            }`}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
          <div className="text-africa-earth">|</div>
          <button 
            className={`text-sm transition-colors ${
              language === 'en' 
                ? 'text-africa-terracotta font-semibold' 
                : 'text-africa-earth hover:text-africa-terracotta'
            }`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
