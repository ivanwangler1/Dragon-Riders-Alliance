import React, { useEffect, useState, useRef } from 'react';
import { GAME_REGIONS } from '../constants';
import { GameRegion } from '../types';

export const RegionsPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<GameRegion | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bloquear rolagem do corpo quando o visualizador está aberto
  useEffect(() => {
    if (selectedRegion) {
      document.body.style.overflow = 'hidden';
      // Resetar estados ao abrir
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedRegion]);

  const regionsWithMaps = GAME_REGIONS.filter(region => region.detailedMapUrl && !region.locked);

  // Controle de Zoom
  const handleZoom = (delta: number) => {
    setZoomLevel(prev => {
      const newZoom = Math.max(1, Math.min(prev + delta, 4)); // Limite entre 1x e 4x
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  // Lógica de Arrastar (Pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    // REDUZIDO DE pt-80 PARA pt-28/pt-32
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-32 pb-0 relative">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none fixed"></div>

      {/* Header */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="border-l-4 border-gold-500 pl-6">
          <h2 className="text-gold-500 font-serif font-bold text-sm tracking-[0.4em] uppercase mb-2">
            Sala de Cartografia
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white drop-shadow-lg">
            Mapas de <span className="text-gold-500">Midellas</span>
          </h1>
        </div>
        <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light border-t border-gray-800 pt-6">
          Selecione uma região para acessar os dados topográficos detalhados. Use o visualizador tático para identificar rotas, locais de caça e pontos de interesse.
        </p>
      </div>

      {/* Gallery Grid (REVERTIDO PARA CARDS CÊNICOS) */}
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {regionsWithMaps.map((region) => (
            <div 
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className="group relative h-64 bg-dark-900 rounded-lg overflow-hidden border border-dark-800 hover:border-gold-500 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_rgba(234,179,8,0.2)]"
            >
              {/* Background Image: Usando region.imageUrl (ARTE) em vez do mapa */}
              <div className="absolute inset-0">
                <img 
                  src={region.imageUrl} 
                  alt={region.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                      {region.name}
                    </h3>
                    <span className="text-xs font-mono text-gold-600 border border-gold-600/30 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                      MAPA DISPONÍVEL
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {region.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>Inspecionar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Grid Overlay Effect */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-0 group-hover:opacity-1 pointer-events-none transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Image Decoration */}
      <div className="w-full relative flex justify-center overflow-hidden">
         {/* Top Gradient blend */}
         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
         
         {/* Image Container */}
         <div className="relative z-0 max-w-7xl w-full flex justify-center items-end">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <img 
              src="https://i.postimg.cc/vHcr4CHh/006.png" 
              alt="Character Art" 
              className="w-auto h-auto max-h-[70vh] object-contain relative z-10 filter contrast-110 brightness-110 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            />
         </div>
         
         {/* Bottom Gradient blend to Global Footer */}
         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
      </div>

      {/* FULL SCREEN MAP VIEWER (Mantido o robusto com Zoom/Pan) */}
      {selectedRegion && selectedRegion.detailedMapUrl && (
        <div className="fixed inset-0 z-[60] bg-dark-950 flex flex-col animate-fade-in-up">
          
          {/* Top Toolbar */}
          <div className="h-16 md:h-20 bg-dark-900 border-b border-gold-900/30 flex items-center justify-between px-4 md:px-8 shadow-lg z-20 shrink-0">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedRegion(null)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div>
                <h2 className="text-gold-500 text-xs tracking-widest uppercase font-serif">Visualizando</h2>
                <h3 className="text-white font-bold text-lg md:text-xl font-serif">{selectedRegion.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center bg-black/50 rounded-lg border border-gray-700 overflow-hidden">
                <button 
                  onClick={() => handleZoom(-0.5)}
                  disabled={zoomLevel <= 1}
                  className="p-2 hover:bg-gold-600/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="w-12 text-center text-xs font-mono text-gold-400">{Math.round(zoomLevel * 100)}%</span>
                <button 
                  onClick={() => handleZoom(0.5)}
                  disabled={zoomLevel >= 4}
                  className="p-2 hover:bg-gold-600/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Map Viewport */}
          <div 
            className={`flex-1 relative bg-[#050505] overflow-hidden flex items-center justify-center select-none ${zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Background Grid */}
            <div 
              className="fixed inset-0 pointer-events-none opacity-20"
              style={{ 
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            ></div>

            {/* The Map Image */}
            <div 
              className="relative transition-transform duration-200 ease-out will-change-transform z-10"
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
              }}
            >
              <img 
                src={selectedRegion.detailedMapUrl}
                alt={`Mapa tático de ${selectedRegion.name}`}
                draggable={false}
                className="max-w-[90vw] max-h-[80vh] object-contain shadow-2xl bg-[#080808]" 
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-dark-900 border-t border-gray-800 p-2 md:px-6 flex justify-between items-center text-[10px] md:text-xs text-gray-500 font-mono z-20 shrink-0">
             <div>COORDS: {Math.floor(Math.random() * 900)}.{Math.floor(Math.random() * 90)}</div>
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               ONLINE
             </div>
          </div>

        </div>
      )}
    </div>
  );
};