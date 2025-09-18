
import React, { useState } from 'react';
import { Ailment, Dish } from '@/types';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface HealerModeScreenProps {
  ailment: Ailment;
  dishes: Dish[];
  onSelection: (isCorrect: boolean, selectedDish: Dish) => void;
}

const HealerModeScreen: React.FC<HealerModeScreenProps> = ({ 
  ailment, 
  dishes, 
  onSelection 
}) => {
  const { t } = useLanguage();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleSelection = (dish: Dish) => {
    setSelectedDish(dish);
    const isCorrect = dish.treatsAilments.includes(ailment.id);
    setTimeout(() => {
      onSelection(isCorrect, dish);
    }, 1000);
  };

  const getDishClass = (dish: Dish) => {
    if (!selectedDish) return "border border-gray-300 p-4 rounded-lg mb-4 cursor-pointer hover:bg-gray-50";
    
    if (selectedDish.id === dish.id) {
      return "border-2 border-africa-terracotta p-4 rounded-lg mb-4 bg-africa-sand bg-opacity-20";
    }
    
    return "border border-gray-300 p-4 rounded-lg mb-4 opacity-50";
  };

  return (
    <div className="african-pattern-bg min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full animate-fade-in">
        <h2 className="text-xl font-bold mb-2 text-africa-earth">
          {t('healer.title')}
        </h2>
        
        <div className="mb-6 p-4 bg-africa-sand bg-opacity-20 rounded-lg">
          <h3 className="font-semibold mb-2">{t('healer.clientSick')}</h3>
          <p className="text-gray-700">{ailment.name}: {ailment.description}</p>
          <p className="mt-2 font-medium">{t('healer.chooseDish')}</p>
        </div>
        
        <div className="space-y-3">
          {dishes.map((dish) => (
            <div 
              key={dish.id} 
              className={getDishClass(dish)}
              onClick={() => !selectedDish && handleSelection(dish)}
            >
              <div className="flex items-center">
                {dish.image && (
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-16 h-16 rounded-md mr-4 object-cover" 
                  />
                )}
                <div>
                  <h4 className="font-semibold">{dish.name}</h4>
                  <p className="text-sm text-gray-600">{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealerModeScreen;
