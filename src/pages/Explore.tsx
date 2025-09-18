
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Map, Globe, Book, Users } from 'lucide-react';

const Explore: React.FC = () => {
  return (
    <div className="african-pattern-bg min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-africa-terracotta" />
              <h1 className="text-3xl font-bold text-africa-earth">Explorer l'Afrique</h1>
              <Map className="w-8 h-8 text-africa-gold" />
            </div>
            <p className="text-gray-600 text-lg">
              Partez à la découverte des richesses culinaires du continent africain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-africa-sand/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Map className="w-6 h-6 text-africa-terracotta" />
                <h3 className="text-xl font-semibold text-africa-earth">Carte Interactive</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Explorez les pays africains et découvrez leurs spécialités culinaires.
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                Bientôt disponible...
              </div>
            </div>
            
            <div className="bg-africa-terracotta/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Book className="w-6 h-6 text-africa-leaf" />
                <h3 className="text-xl font-semibold text-africa-earth">Encyclopédie</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Une base de données complète des plats et ingrédients africains.
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                En préparation...
              </div>
            </div>
            
            <div className="bg-africa-leaf/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-africa-gold" />
                <h3 className="text-xl font-semibold text-africa-earth">Communauté</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Partagez vos recettes et échangez avec d'autres passionnés.
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                Prochainement...
              </div>
            </div>
            
            <div className="bg-africa-gold/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-africa-sunset" />
                <h3 className="text-xl font-semibold text-africa-earth">Culture & Traditions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Plongez dans l'histoire et les traditions culinaires africaines.
              </p>
              <div className="text-sm text-africa-terracotta font-medium">
                À venir...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
