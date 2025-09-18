
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface InstructionsScreenProps {
  onStart: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onStart }) => {
  const { t } = useLanguage();
  
  return (
    <div className="african-pattern-bg min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-2xl font-bold text-center text-africa-earth mb-6">
          {t('instructions.title')}
        </h1>
        
        <p className="text-center mb-8 text-gray-700">
          {t('instructions.description')}
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={onStart} 
            className="btn-primary"
          >
            {t('instructions.start')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
