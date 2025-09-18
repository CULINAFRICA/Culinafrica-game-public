
import React from 'react';
import { FactCard } from '@/types';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface FactCardScreenProps {
  factCard: FactCard;
  onContinue: () => void;
}

const FactCardScreen: React.FC<FactCardScreenProps> = ({ factCard, onContinue }) => {
  const { t } = useLanguage();
  
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="text-xl font-bold text-africa-terracotta mb-2">
          {t('factCard.didYouKnow')}
        </h2>
        
        <h3 className="text-lg font-semibold mb-4">
          {factCard.title}
        </h3>
        
        <div className="mb-6 text-gray-700">
          <p className="mb-3">{factCard.description}</p>
          <p className="p-3 bg-africa-sand bg-opacity-30 rounded-lg border-l-4 border-africa-ochre">
            <span className="font-semibold">{t('factCard.medicinalBenefit')}</span> {factCard.medicinalEffect}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button onClick={onContinue} className="btn-primary">
            {t('factCard.next')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FactCardScreen;
