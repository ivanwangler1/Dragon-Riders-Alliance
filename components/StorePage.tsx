import React, { useState, useEffect } from 'react';
import { STORE_PRODUCTS } from '../constants';
import { Button } from './Button';
import { ProductItem } from '../types';

export const StorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'consumable' | 'costume' | 'pet' | 'vip'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? STORE_PRODUCTS 
    : STORE_PRODUCTS.filter(p => p.category === activeCategory);

  const getRarityStyles = (rarity: ProductItem['rarity']) => {
    switch (rarity) {
      case 'common': return 'border-gray-600 shadow-none';
      case 'elite': return 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
      case 'heroic': return 'border-gold-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]';
      case 'legendary': return 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]';
      default: return 'border-gray-600';
    }
  };

  const getRarityLabelColor = (rarity: ProductItem['rarity']) => {
    switch (rarity) {
       case 'common': return 'text-gray-400';
       case 'elite': return 'text-blue-400';
       case 'heroic': return 'text-gold-400';
       case 'legendary': return 'text-purple-400';
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-36 pb-20 animate-fade-in-up">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col items-center mb-16 relative z-10">
         <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-2 tracking-wide">LOJA MIDELLAS</h1>
         <p className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Itens Premium & Exclusivos</p>

         {/* Filter Tabs - Minimalist */}
         <div className="flex flex-wrap justify-center gap-2 p-1 bg-black/50 backdrop-blur rounded-lg border border-white/10">
          {[
            { id: 'all', label: 'Tudo' },
            { id: 'vip', label: 'VIP' },
            { id: 'pet', label: 'Pets' },
            { id: 'costume', label: 'Skins' },
            { id: 'consumable', label: 'Itens' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === tab.id 
                  ? 'bg-gold-600 text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id}
              className={`bg-[#0a0a0a] border hover:bg-dark-900 transition-all duration-300 group relative flex flex-col p-4 rounded-xl ${getRarityStyles(product.rarity)}`}
            >
              {/* Image Area */}
              <div className="relative aspect-square bg-black/50 rounded-lg mb-4 overflow-hidden border border-white/5 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-tr opacity-20 ${product.rarity === 'legendary' ? 'from-purple-900 to-transparent' : product.rarity === 'heroic' ? 'from-gold-900 to-transparent' : 'from-transparent to-transparent'}`}></div>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 ${getRarityLabelColor(product.rarity)}`}>
                      {product.rarity}
                   </span>
                </div>
                
                <h3 className="font-serif font-bold text-base text-gray-100 mb-2 leading-tight group-hover:text-gold-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-500 text-xs mb-4 flex-1 line-clamp-2">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <div>
                      <p className="text-[10px] text-gray-500 uppercase">Preço</p>
                      <p className="text-white font-bold">{product.price} <span className="text-gold-500 text-[10px]">ELLUNS</span></p>
                   </div>
                   <button className="bg-white/10 hover:bg-gold-600 hover:text-black text-white p-2 rounded transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};