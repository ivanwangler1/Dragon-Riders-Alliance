import React, { useEffect, useState } from 'react';
import { BESTIARY_ENTRIES } from '../constants';

export const BestiaryPage: React.FC = () => {
  // Estado para o topo (Abas de Tutorial)
  const [activeTab, setActiveTab] = useState<'tutorial' | 'dicas' | 'classificacao' | 'pets'>('pets');
  
  // Estado para a parte inferior (Visualizador de Regiões)
  const [selectedRegionId, setSelectedRegionId] = useState<string>(BESTIARY_ENTRIES[0].id);
  
  // Estado para paginação de imagens do bestiário
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Resetar a imagem para a primeira quando mudar de região
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedRegionId]);

  const selectedRegion = BESTIARY_ENTRIES.find(r => r.id === selectedRegionId) || BESTIARY_ENTRIES[0];
  const bestiaryImages = selectedRegion.bestiaryImages || [selectedRegion.imageUrl];
  const totalImages = bestiaryImages.length;

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-36 pb-0 animate-fade-in-up selection:bg-gold-500 selection:text-black">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none"></div>

      {/* Header Minimalista */}
      <div className="container mx-auto px-6 mb-12 relative z-10 text-center">
         <span className="text-gold-500 font-serif font-bold text-xs tracking-[0.4em] uppercase mb-4 block">Compêndio Real</span>
         <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 drop-shadow-fire">
            ARQUIVO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">BESTAS</span>
         </h1>
         
         {/* Navigation Tabs - Estilo Premium */}
         <div className="flex justify-center">
            <div className="inline-flex bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 gap-1 shadow-2xl">
                {[
                  { id: 'pets', label: 'Catálogo Regional' },
                  { id: 'tutorial', label: 'Manual de Domesticação' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-8 py-3 rounded-full text-xs font-serif font-bold tracking-widest uppercase transition-all duration-500 ${
                      activeTab === tab.id 
                        ? 'bg-gold-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
            </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 pb-20 relative z-10">

        {/* =========================================================================
            ABA 1: CATÁLOGO POR REGIÃO (Redesign Cinematográfico)
           ========================================================================= */}
        {activeTab === 'pets' && (
          <div className="animate-fade-in-up">
            <div className="grid lg:grid-cols-12 gap-8 h-[800px] lg:h-[700px]">
              
              {/* Sidebar: Region List (Estilo Menu de Jogo) */}
              <div className="lg:col-span-3 bg-dark-900/60 backdrop-blur-sm border border-white/5 rounded-xl flex flex-col overflow-hidden shadow-2xl">
                <div className="p-5 border-b border-white/10 bg-black/20">
                    <h3 className="font-serif text-gold-500 font-bold uppercase tracking-widest text-xs">Selecionar Região</h3>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gold-900 scrollbar-track-transparent p-2 space-y-1">
                  {BESTIARY_ENTRIES.map(entry => (
                    <button
                      key={entry.id}
                      onClick={() => setSelectedRegionId(entry.id)}
                      className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                        selectedRegionId === entry.id 
                          ? 'bg-gradient-to-r from-gold-900/40 to-transparent text-white border-l-2 border-gold-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-gold-200 border-l-2 border-transparent'
                      }`}
                    >
                      <div className="relative z-10">
                          <span className={`font-serif text-sm block ${selectedRegionId === entry.id ? 'font-bold' : 'font-normal'}`}>{entry.regionName}</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider">{entry.levelRange}</span>
                      </div>
                      
                      {selectedRegionId === entry.id && (
                          <div className="absolute inset-0 bg-gold-500/5 z-0 pointer-events-none"></div>
                      )}
                      
                      {entry.isLocked && (
                        <span className="text-gray-600 relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Display: Gallery Viewer (Cinematográfico) */}
              <div className="lg:col-span-9 relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40 blur-3xl scale-125 transition-all duration-1000"
                      style={{ backgroundImage: `url(${bestiaryImages[currentImageIndex]})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80"></div>
                </div>

                {/* Main Content Layer */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12">
                    
                    {/* Top Info */}
                    <div className="flex justify-between items-start">
                        <div>
                             <div className="inline-flex items-center gap-2 mb-2">
                                <span className="h-[1px] w-8 bg-gold-500"></span>
                                <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">Região Ativa</span>
                             </div>
                             <h2 className="text-5xl md:text-6xl font-serif font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-none">
                                {selectedRegion.regionName}
                             </h2>
                        </div>
                        <div className="hidden md:block text-right">
                             <div className="text-4xl font-serif text-white/10 font-black">
                                {String(currentImageIndex + 1).padStart(2, '0')}
                             </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="flex-1 relative flex items-center justify-center py-4">
                        <img 
                          key={currentImageIndex}
                          src={bestiaryImages[currentImageIndex]} 
                          alt={`Bestiário de ${selectedRegion.regionName}`}
                          className="max-h-full max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-fade-in-up"
                        />

                        {/* Navigation Buttons (Floating) */}
                        {totalImages > 1 && (
                          <>
                            <button 
                              onClick={handlePrev}
                              className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-gold-500 hover:scale-110 transition-all"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button 
                              onClick={handleNext}
                              className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-gold-500 hover:scale-110 transition-all"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}
                    </div>

                    {/* Bottom Info */}
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-lg p-6 max-w-2xl">
                        <p className="text-gray-300 text-sm leading-relaxed font-light border-l-2 border-gold-500 pl-4">
                            {selectedRegion.description}
                        </p>
                        {totalImages > 1 && (
                           <div className="flex gap-2 mt-4 pl-4">
                              {bestiaryImages.map((_, idx) => (
                                 <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                       currentImageIndex === idx ? 'bg-gold-500 w-8 shadow-[0_0_10px_#eab308]' : 'bg-gray-700 w-4 hover:bg-gray-500'
                                    }`}
                                 />
                              ))}
                           </div>
                        )}
                    </div>

                </div>
              </div>
            </div>

            {/* Rodapé Decorativo Pets */}
            <div className="w-full relative flex justify-center overflow-hidden mt-12">
                 <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
                 <div className="relative z-0 w-full flex justify-center items-end">
                    <img 
                      src="https://i.postimg.cc/CxPcDRPQ/Rodapé.webp" 
                      alt="Personagem Bestiário" 
                      className="w-full max-w-4xl h-auto object-contain relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-700"
                    />
                 </div>
                 <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>
            </div>
          </div>
        )}

        {/* =========================================================================
            ABA 2: MANUAL DE DOMESTICAÇÃO (Redesign em Cards e Visual)
           ========================================================================= */}
        {activeTab === 'tutorial' && (
           <div className="max-w-7xl mx-auto space-y-24 animate-fade-in-up">
              
              {/* Seção Visual de Destaque (Substituindo Vídeo) */}
              <div className="relative w-full group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-gray-800">
                      {/* Imagem de fundo desfocada para preencher espaços */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-50 blur-xl scale-110"
                        style={{ backgroundImage: "url('https://i.postimg.cc/MT9vTMS2/Dragão.webp')" }}
                      ></div>
                      
                      {/* Imagem Principal */}
                      <img 
                        className="absolute inset-0 w-full h-full object-contain z-10 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        src="https://i.postimg.cc/MT9vTMS2/Dragão.webp" 
                        alt="Dragão de Domesticação" 
                      />

                      {/* Overlay para texto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-20"></div>
                      
                      <div className="absolute bottom-8 left-8 z-30">
                          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2 block">Criatura Lendária</span>
                          <h3 className="text-4xl font-serif font-black text-white drop-shadow-lg">Soberano dos Céus</h3>
                      </div>
                  </div>
              </div>

              {/* Seção 1: O Ritual (Processo Passo a Passo) */}
              <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-black text-white uppercase tracking-widest mb-2">O Ritual de Domínio</h2>
                    <div className="h-1 w-24 bg-gold-600 mx-auto"></div>
                 </div>
                 
                 <div className="grid md:grid-cols-3 gap-8">
                    {/* Passo 1 */}
                    <div className="bg-gradient-to-b from-dark-900 to-black p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-all group hover:-translate-y-2 duration-500">
                       <div className="text-6xl font-black text-white/5 absolute top-4 right-4 select-none group-hover:text-gold-500/10 transition-colors">01</div>
                       <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700 mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors">👁️</div>
                       <h3 className="text-xl font-serif font-bold text-white mb-3">Identificação</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">
                          Aproxime-se sorrateiramente. Use o cursor para verificar os <strong>requisitos</strong> da besta. Alguns exigem itens específicos ou redução de HP.
                       </p>
                    </div>

                    {/* Passo 2 */}
                    <div className="bg-gradient-to-b from-dark-900 to-black p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-all group hover:-translate-y-2 duration-500 delay-100">
                       <div className="text-6xl font-black text-white/5 absolute top-4 right-4 select-none group-hover:text-gold-500/10 transition-colors">02</div>
                       <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700 mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors">🐎</div>
                       <h3 className="text-xl font-serif font-bold text-white mb-3">A Montada</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">
                          Ative a habilidade de domesticação e pressione <kbd className="bg-gray-800 text-white px-1 py-0.5 rounded border border-gray-600 text-xs font-mono">ESPAÇO</kbd> quando estiver ao alcance. A surpresa é sua aliada.
                       </p>
                    </div>

                    {/* Passo 3 */}
                    <div className="bg-gradient-to-b from-dark-900 to-black p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-all group hover:-translate-y-2 duration-500 delay-200">
                       <div className="text-6xl font-black text-white/5 absolute top-4 right-4 select-none group-hover:text-gold-500/10 transition-colors">03</div>
                       <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700 mb-6 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors">🎮</div>
                       <h3 className="text-xl font-serif font-bold text-white mb-3">Conflito de Vontades</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">
                          Vença o minigame. Mantenha a barra de sucesso cheia respondendo aos comandos de direção antes que a criatura o derrube.
                       </p>
                    </div>
                 </div>

                 {/* Visualização do Minigame */}
                 <div className="mt-12 bg-black/40 border border-gold-900/30 rounded-2xl p-10 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <h3 className="text-gold-500 font-serif font-bold text-lg mb-8 uppercase tracking-widest z-10">Interface de Domínio</h3>
                    
                    <div className="flex gap-6 z-10 relative">
                       {['W', 'A', 'S', 'D'].map((key, i) => (
                          <div key={key} className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl font-black font-mono border-2 transition-all duration-1000 ${
                              i === 1 // Simulando o 'A' ativo
                              ? 'bg-gold-500 text-black border-gold-400 shadow-[0_0_30px_#eab308] scale-110' 
                              : 'bg-dark-800 text-gray-600 border-gray-700'
                          }`}>
                             {key}
                          </div>
                       ))}
                    </div>
                    <p className="mt-8 text-gray-400 text-sm max-w-lg text-center z-10">
                       Quando um ícone brilhar (como o 'A' acima), pressione a tecla correspondente imediatamente para garantir o sucesso.
                    </p>
                 </div>
              </section>

              {/* Seção 2: Hierarquia das Bestas (Cards Estilizados) */}
              <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-black text-white uppercase tracking-widest mb-2">Classificação de Raridade</h2>
                    <div className="h-1 w-24 bg-gold-600 mx-auto"></div>
                 </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* COMUM */}
                    <div className="group bg-dark-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-500 transition-all duration-300">
                        <div className="h-2 bg-gray-500 w-full shadow-[0_0_10px_gray]"></div>
                        <div className="p-6">
                            <h4 className="text-gray-400 font-black text-xl uppercase mb-4 tracking-wider">Comum</h4>
                            <ul className="text-sm text-gray-500 space-y-2 font-mono">
                                <li className="flex justify-between"><span>Vel. Solo</span> <span>~6.0</span></li>
                                <li className="flex justify-between"><span>Vel. Voo</span> <span>~8.0</span></li>
                                <li className="pt-2 border-t border-white/5 text-xs italic">Fáceis de encontrar e domar.</li>
                            </ul>
                        </div>
                    </div>

                    {/* ELITE */}
                    <div className="group bg-dark-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="h-2 bg-blue-500 w-full shadow-[0_0_15px_#3b82f6]"></div>
                        <div className="p-6">
                            <h4 className="text-blue-400 font-black text-xl uppercase mb-4 tracking-wider">Elite</h4>
                            <ul className="text-sm text-gray-400 space-y-2 font-mono">
                                <li className="flex justify-between"><span>Vel. Solo</span> <span>~7.0</span></li>
                                <li className="flex justify-between"><span>Vel. Voo</span> <span>~9.0</span></li>
                                <li className="pt-2 border-t border-white/5 text-xs italic">Possuem habilidades passivas úteis.</li>
                            </ul>
                        </div>
                    </div>

                    {/* HEROICO */}
                    <div className="group bg-dark-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gold-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
                        <div className="h-2 bg-gold-500 w-full shadow-[0_0_20px_#eab308]"></div>
                        <div className="p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 rounded-full blur-xl pointer-events-none"></div>
                            <h4 className="text-gold-500 font-black text-xl uppercase mb-4 tracking-wider">Heroico</h4>
                            <ul className="text-sm text-gray-300 space-y-2 font-mono">
                                <li className="flex justify-between"><span>Vel. Solo</span> <span>~8.0</span></li>
                                <li className="flex justify-between"><span>Vel. Voo</span> <span>10.0+</span></li>
                                <li className="pt-2 border-t border-white/5 text-xs italic text-gold-200">Requerem Marcas de Domesticação.</li>
                            </ul>
                        </div>
                    </div>

                    {/* LENDARIO */}
                    <div className="group bg-dark-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-3 shadow-2xl">
                        <div className="h-2 bg-purple-500 w-full shadow-[0_0_25px_#a855f7]"></div>
                        <div className="p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>
                            <h4 className="text-purple-400 font-black text-xl uppercase mb-4 tracking-wider">Lendário</h4>
                            <ul className="text-sm text-gray-200 space-y-2 font-mono">
                                <li className="flex justify-between"><span>Vel. Solo</span> <span>9.0+</span></li>
                                <li className="flex justify-between"><span>Vel. Voo</span> <span>12.0+</span></li>
                                <li className="pt-2 border-t border-white/5 text-xs italic text-purple-200">O auge do poder. Mitos vivos.</li>
                            </ul>
                        </div>
                    </div>
                 </div>
              </section>

              {/* Rodapé Decorativo */}
              <div className="w-full relative flex justify-center overflow-hidden mt-10">
                 <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
                 <div className="relative z-0 w-full flex justify-center items-end">
                    <img 
                      src="https://i.postimg.cc/Y2YPscxC/Launcher_Img.webp" 
                      alt="Riders Art" 
                      className="w-full max-w-5xl h-auto object-contain relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-700"
                    />
                 </div>
                 <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>
              </div>

           </div>
        )}

        {/* Placeholder for other tabs (only DICAS now, tutorial is implemented) */}
        {(activeTab === 'dicas') && (
           <div className="flex flex-col items-center justify-center py-20 bg-dark-900/30 rounded-lg border border-gray-800 border-dashed">
              <div className="w-16 h-16 text-gray-600 mb-4 animate-pulse">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-400">Conteúdo em Desenvolvimento</h3>
              <p className="text-gray-500">Mais segredos serão revelados em breve.</p>
           </div>
        )}

      </div>
    </div>
  );
};