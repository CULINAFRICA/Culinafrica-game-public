
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FoodAsMedicine: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="african-pattern-bg min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('foodMedicine.backHome')}
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-africa-terracotta" />
              <h1 className="text-3xl font-bold text-africa-earth">{t('foodMedicine.title')}</h1>
              <Leaf className="w-8 h-8 text-africa-leaf" />
            </div>
            <p className="text-gray-600 text-lg">
              {t('foodMedicine.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-africa-sand/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-africa-earth mb-3">{t('foodMedicine.medicinalPlants')}</h3>
              <p className="text-gray-700 mb-4">
                {t('foodMedicine.medicinalPlantsDesc')}
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                {t('foodMedicine.comingSoon')}
              </div>
            </div>
            
            <div className="bg-africa-terracotta/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-africa-earth mb-3">{t('foodMedicine.therapeuticRecipes')}</h3>
              <p className="text-gray-700 mb-4">
                {t('foodMedicine.therapeuticRecipesDesc')}
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                {t('foodMedicine.comingSoon')}
              </div>
            </div>
            
            <div className="bg-africa-leaf/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-africa-earth mb-3">{t('foodMedicine.healerGuide')}</h3>
              <p className="text-gray-700 mb-4">
                {t('foodMedicine.healerGuideDesc')}
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                {t('foodMedicine.comingSoon')}
              </div>
            </div>
            
            <div className="bg-africa-gold/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-africa-earth mb-3">{t('foodMedicine.consultations')}</h3>
              <p className="text-gray-700 mb-4">
                {t('foodMedicine.consultationsDesc')}
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                {t('foodMedicine.comingSoon')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAsMedicine;
