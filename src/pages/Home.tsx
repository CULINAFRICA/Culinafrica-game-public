
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Heart, Compass } from 'lucide-react';
import Logo from '@/components/Logo';
import { useLanguage } from '@/contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="african-pattern-bg min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full animate-fade-in">
        <div className="mb-8">
          <Logo />
        </div>
        
        <div className="space-y-4">
          <Link to="/play" className="block">
            <Button className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4">
              <Play className="w-6 h-6" />
              {t('home.play')}
            </Button>
          </Link>
          
          <Link to="/foodasmedicine" className="block">
            <Button className="w-full bg-africa-leaf hover:bg-africa-earth text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all duration-300 ease-in-out flex items-center justify-center gap-3 text-lg">
              <Heart className="w-6 h-6" />
              {t('home.foodAsMedicine')}
            </Button>
          </Link>
          
          <Link to="/explore" className="block">
            <Button className="w-full bg-africa-gold hover:bg-africa-sunset text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all duration-300 ease-in-out flex items-center justify-center gap-3 text-lg">
              <Compass className="w-6 h-6" />
              {t('home.explore')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
