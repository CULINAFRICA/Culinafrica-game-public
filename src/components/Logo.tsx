import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-40 h-40 flex items-center justify-center">
        <img 
          src="/culinafrica-logo.png"   
          alt="CulinAfrica Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-2 text-sm text-africa-earth">
        {t('logo.subtitle')}
      </div>
    </div>
  );
};

export default Logo;
