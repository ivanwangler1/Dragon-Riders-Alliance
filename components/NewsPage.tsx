import React, { useEffect } from 'react';
import { Button } from './Button';

// Sub-componente para compartilhamento social
const SocialShare: React.FC<{ title: string }> = ({ title }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '#';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`Dragon Riders Alliance - ${title}`);

  return (
    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mr-2">Compartilhar:</span>
      
      {/* Facebook */}
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
        title="Compartilhar no Facebook"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      </a>

      {/* Twitter / X */}
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
        title="Compartilhar no X"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Reddit */}
      <a 
        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-1.5 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
        title="Compartilhar no Reddit"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.051l.057-.051c.688 0 1.25.562 1.25.562zm-5.01 1.413c2.39 0 4.33 1.94 4.33 4.33 0 2.39-1.94 4.33-4.33 4.33-2.39 0-4.33-1.94-4.33-4.33 0-2.39 1.94-4.33 4.33-4.33zm-5.01-1.413c.688 0 1.25.562 1.25 1.25a1.25 1.25 0 0 1-2.5 0c0-.688.562-1.25 1.25-1.25zm5.01 11.13c-1.12 0-2.12-.44-2.86-1.14a.25.25 0 0 1 .36-.35c.64.61 1.48.99 2.5.99 1.02 0 1.86-.38 2.5-.99a.25.25 0 1 1 .36.35c-.74.7-1.74 1.14-2.86 1.14z"/>
        </svg>
      </a>
    </div>
  );
};

export const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-32 pb-20 animate-fade-in-up">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
         <div className="inline-block relative">
            <h2 className="text-gold-500 font-serif font-bold tracking-[0.4em] uppercase mb-4">Atualização de Conteúdo</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-white drop-shadow-fire mb-4">
              A ERA DO CAOS
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
         </div>
         <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light text-lg">
           Um vislumbre do que aguarda os corajosos. Enfrente novos horrores, dome bestas lendárias e vista-se com o poder dos caídos.
         </p>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 relative z-10 space-y-24">
        
        {/* Section 1: Monsters */}
        <section>
           <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-900"></div>
              <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                 <span className="text-red-600 text-4xl">☠</span> NOVOS MONSTROS
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-900"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                 { name: 'General da Legião', loc: 'Fenda de Tritael', diff: 'Raid Boss', img: 'https://i.postimg.cc/0j312TDs/07_Bestiário_da_Fenda_de_Tritael.webp' },
                 { name: 'Golem de Magma', loc: 'Magmapora', diff: 'Elite', img: 'https://i.postimg.cc/pr7MXwzj/Bestiário_Magmapora.webp' },
                 { name: 'Sombra Espreitadora', loc: 'Ruínas Antigas', diff: 'Comum', img: 'https://i.postimg.cc/MH4JKCVv/Bestiário_das_Terras_Áridas_de_Exarahn.webp' },
              ].map((mob, idx) => (
                 <div key={idx} className="bg-dark-900 border border-red-900/30 rounded-lg overflow-hidden group hover:border-red-600 transition-all duration-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                       <img src={mob.img} alt={mob.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale-[30%] group-hover:grayscale-0" />
                       <div className="absolute top-2 right-2 bg-red-900/80 text-white text-xs font-bold px-2 py-1 rounded border border-red-500">{mob.diff}</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <h3 className="text-xl font-serif font-bold text-white mb-2">{mob.name}</h3>
                       <p className="text-gray-500 text-sm flex items-center gap-2 mb-auto">
                          <span className="text-red-500">📍</span> {mob.loc}
                       </p>
                       <SocialShare title={`Novo Monstro: ${mob.name}`} />
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Section 2: Pets */}
        <section>
           <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-900"></div>
              <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                 <span className="text-blue-500 text-4xl">🦅</span> NOVOS FAMILIARES
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-900"></div>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: 'Guardião Celeste', type: 'Montaria Voadora • Heroico', img: 'https://i.postimg.cc/L57F6cLY/15_Bestiário_do_Santuário_de_Ellora.webp', color: 'text-blue-400' },
                { name: 'Pesadelo Incandescente', type: 'Montaria Voadora • Lendário', img: 'https://i.postimg.cc/7hcrYF02/14_Bestiário_Stygaea.webp', color: 'text-purple-400' }
              ].map((pet, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden h-96 border border-blue-900/30 flex flex-col">
                  <img src={pet.img} alt={pet.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                      <div className="flex flex-col gap-1 mb-4">
                          <h3 className={`text-2xl font-serif font-bold ${pet.color} mb-1 drop-shadow-lg`}>{pet.name}</h3>
                          <p className="text-gray-300 text-sm">{pet.type}</p>
                      </div>
                      <div className="flex items-center justify-between">
                         <Button variant="outline" className="text-xs border-blue-500 text-blue-400 hover:bg-blue-900/30">Ver Stats</Button>
                      </div>
                      <SocialShare title={`Novo Familiar: ${pet.name}`} />
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section 3: Costumes */}
        <section>
           <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-900"></div>
              <h2 className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                 <span className="text-gold-500 text-4xl">👘</span> NOVAS VESTIMENTAS
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-900"></div>
           </div>

           <div className="bg-dark-900 border border-gold-900/30 p-8 rounded-xl flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 aspect-[3/4] relative group">
                  <div className="absolute inset-0 bg-gold-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src="https://i.postimg.cc/fyVQJZfY/Assassina.png" alt="Costume" className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                 <span className="text-gold-500 text-xs font-bold uppercase tracking-widest border border-gold-600 px-3 py-1 rounded-full mb-4 inline-block">Coleção Sazonal</span>
                 <h3 className="text-4xl font-serif font-black text-white mb-6">Traje do Lorde do Abismo</h3>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Forjado com escamas de dragão negro e tecido nas profundezas do vazio. Este traje não apenas impõe respeito, mas emana uma aura sombria que intimida seus oponentes no campo de batalha.
                 </p>
                 <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0 mb-8">
                    <div className="bg-black p-3 rounded border border-gray-800 flex items-center gap-3">
                       <span className="text-gold-500 text-xl">✦</span>
                       <span className="text-sm text-gray-300">Skin de Arma Incluída</span>
                    </div>
                    <div className="bg-black p-3 rounded border border-gray-800 flex items-center gap-3">
                       <span className="text-gold-500 text-xl">✦</span>
                       <span className="text-sm text-gray-300">Efeito Visual Exclusivo</span>
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-center gap-6">
                    <Button variant="primary">Visualizar na Loja</Button>
                    <div className="w-full md:w-auto">
                        <SocialShare title="Traje do Lorde do Abismo" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};