import React, { useEffect, useState } from 'react';
import { GAME_CLASSES } from '../constants';

// Helper para gerar stats baseados na role (apenas visual)
const getClassStats = (role: string, difficulty: number) => {
  let attack = 50;
  let defense = 50;
  let control = 50;

  if (role.includes('Tank')) { defense = 90; attack = 40; control = 60; }
  if (role.includes('DPS')) { defense = 30; attack = 95; control = 40; }
  if (role.includes('Support') || role.includes('Healer')) { defense = 40; attack = 30; control = 90; }
  if (role.includes('Trickster') || role.includes('Feiticeiro')) { control = 85; attack = 70; }

  return { attack, defense, control, difficulty: difficulty * 20 };
};

export const ClassesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'Tank' | 'DPS' | 'Support'>('Todos');
  const [hoveredClass, setHoveredClass] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredClasses = activeFilter === 'Todos' 
    ? GAME_CLASSES 
    : GAME_CLASSES.filter(c => c.role.includes(activeFilter) || (activeFilter === 'Support' && c.role.includes('Healer')));

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-36 animate-fade-in-up selection:bg-gold-500 selection:text-black">
      
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>

      {/* Header Minimalista e Elegante */}
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <div className="inline-flex flex-col items-center">
            <span className="text-gold-500 font-serif font-bold text-xs tracking-[0.5em] uppercase mb-4">
                Arquétipos de Combate
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 drop-shadow-fire tracking-tight">
                ELITE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">MIDELLAS</span>
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>
        
        <p className="mt-8 text-gray-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Cada classe domina uma arte de guerra única. Escolha seu estilo, desde a força bruta inabalável até as artes arcanas proibidas.
        </p>
      </div>

      {/* Filtro de Categorias */}
      <div className="container mx-auto px-6 mb-16 relative z-10 flex justify-center">
        <div className="flex bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 gap-1">
            {['Todos', 'Tank', 'DPS', 'Support'].map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter as any)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                        activeFilter === filter 
                        ? 'bg-gold-600 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
      </div>

      {/* Grid de Classes - Layout Estilo Cartas de Tarô Premium */}
      <div className="container mx-auto px-6 md:px-12 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClasses.map((gameClass) => {
            const stats = getClassStats(gameClass.role, gameClass.difficulty);
            
            return (
                <div 
                  key={gameClass.id} 
                  className="group relative h-[600px] w-full bg-dark-900 overflow-hidden cursor-pointer border border-gray-800 hover:border-gold-500/50 transition-all duration-500 rounded-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                  onMouseEnter={() => setHoveredClass(gameClass.id)}
                  onMouseLeave={() => setHoveredClass(null)}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 bg-black">
                    <img 
                      src={gameClass.imageUrl} 
                      alt={gameClass.name}
                      className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Decorative Border Frame inside */}
                  <div className="absolute inset-4 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500 pointer-events-none z-20"></div>

                  {/* Content Layer */}
                  <div className="absolute inset-0 z-30 flex flex-col justify-end p-8">
                    
                    {/* Top Right: Difficulty Indicator (Always visible but subtle) */}
                    <div className="absolute top-8 right-8 flex flex-col items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="text-[9px] uppercase tracking-widest text-gray-400">Dificuldade</span>
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className={`w-1 h-3 rounded-sm ${i <= gameClass.difficulty ? 'bg-gold-500' : 'bg-gray-800'}`}></div>
                            ))}
                        </div>
                    </div>

                    {/* Main Title Area */}
                    <div className={`transition-all duration-500 transform ${hoveredClass === gameClass.id ? '-translate-y-4' : 'translate-y-0'}`}>
                        <div className="mb-2 flex items-center gap-2">
                             <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border rounded ${
                                gameClass.role.includes('Tank') ? 'border-blue-500/50 text-blue-400 bg-blue-900/20' :
                                gameClass.role.includes('DPS') ? 'border-red-500/50 text-red-400 bg-red-900/20' :
                                'border-green-500/50 text-green-400 bg-green-900/20'
                             }`}>
                                {gameClass.role}
                             </span>
                        </div>
                        <h2 className="text-4xl font-serif font-black text-white uppercase tracking-wide leading-none mb-2 drop-shadow-lg">
                            {gameClass.name}
                        </h2>
                        <div className="w-12 h-1 bg-gold-600 transition-all duration-500 group-hover:w-full"></div>
                    </div>

                    {/* Hidden/Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredClass === gameClass.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light border-l-2 border-gold-500 pl-3">
                            {gameClass.description}
                        </p>

                        {/* Stats Visualizer */}
                        <div className="space-y-3">
                            {[
                                { label: 'Ataque', val: stats.attack, color: 'bg-red-500' },
                                { label: 'Defesa', val: stats.defense, color: 'bg-blue-500' },
                                { label: 'Controle', val: stats.control, color: 'bg-purple-500' }
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div className="flex justify-between text-[10px] uppercase text-gray-500 font-bold mb-1">
                                        <span>{stat.label}</span>
                                        <span className="text-white">{stat.val}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${stat.color} shadow-[0_0_10px_currentColor]`} 
                                            style={{ width: `${hoveredClass === gameClass.id ? stat.val : 0}%`, transition: 'width 1s ease-out 0.2s' }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>

      {/* Footer Image Section - Mantendo a imagem solicitada */}
      <div className="w-full relative mt-0 flex justify-center bg-black overflow-hidden py-10">
         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
         
         <div className="relative z-0 max-w-6xl w-full flex justify-center items-center">
             {/* Efeito de brilho atrás da imagem */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gold-600/10 blur-[100px] rounded-full"></div>
            
            <img 
              src="https://i.postimg.cc/Jnfz4wyR/Guerreiros_01.webp" 
              alt="Guerreiros de Midellas" 
              className="w-auto h-auto max-h-[60vh] object-contain relative z-10 filter brightness-110 drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            />
         </div>
         
         <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>
      </div>

    </div>
  );
};