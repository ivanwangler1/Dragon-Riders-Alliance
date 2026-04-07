import React, { useEffect } from 'react';
import { Button } from './Button';

export const EventsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-32 pb-20 animate-fade-in-up">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] mb-16 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/Cxz8rXFn/Hakain_Daily_Deals_Banner.webp" 
            alt="Event Background" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950"></div>
        </div>

        <div className="relative z-10 text-center px-4">
           <div className="inline-block border border-gold-500/50 bg-black/50 backdrop-blur-md px-4 py-1 rounded mb-4">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.3em]">Evento Global</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white drop-shadow-fire mb-4">
             INVASÃO DA LEGIÃO
           </h1>
           <p className="text-xl md:text-2xl text-gold-200 font-serif italic mb-8">
             "As fendas de Tritael se abriram. Proteja Hakanas ou veja o mundo arder."
           </p>
           
           <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
              <div className="flex flex-col items-center">
                 <span className="text-gold-600 text-lg">Início</span>
                 <span>12 OUT</span>
              </div>
              <div className="w-px h-10 bg-gray-700"></div>
              <div className="flex flex-col items-center">
                 <span className="text-gold-600 text-lg">Fim</span>
                 <span>30 OUT</span>
              </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Info (Left - 2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Lore Block */}
            <section className="bg-dark-900 border border-gold-900/20 p-8 rounded-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-gold-600"></div>
               <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                 <span className="text-gold-500">✦</span> Detalhes da Missão
               </h2>
               <div className="prose prose-invert text-gray-300 leading-relaxed">
                 <p className="text-lg mb-4">
                   Detectamos oscilações massivas de energia caótica vindas da Fenda de Tritael. Batedores relatam que comandantes da Legião Caída estão tentando invocar um <strong>Dragão do Vazio</strong> para nossa dimensão.
                 </p>
                 <p>
                   Todos os Riders de nível 30 ou superior são convocados para a linha de frente. Sua missão é impedir o ritual de invocação, derrotar os generais da legião e coletar <strong>Fragmentos do Caos</strong>.
                 </p>
               </div>
            </section>

            {/* Mechanics / Objectives */}
            <section>
               <h3 className="text-2xl font-serif font-bold text-gold-500 mb-6 uppercase tracking-wider">Objetivos Diários</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Caçada nas Fendas', desc: 'Derrote 50 monstros na Fenda de Tritael.', icon: '⚔️', reward: '10x Fragmentos' },
                    { title: 'Defesa da Capital', desc: 'Participe da Raid Global em Hakain às 20:00.', icon: '🛡️', reward: 'Caixa de Equipamento Lendário' },
                    { title: 'Patrulha Aérea', desc: 'Complete a corrida aérea sem cair da montaria.', icon: '🦅', reward: '50 Elluns' },
                    { title: 'Coleta de Mana', desc: 'Encontre 10 cristais corrompidos.', icon: '💎', reward: 'Poção de XP 100%' },
                  ].map((task, idx) => (
                    <div key={idx} className="bg-dark-900/50 p-6 rounded border border-gray-800 hover:border-gold-600 transition-colors flex gap-4">
                       <div className="text-3xl bg-black w-12 h-12 flex items-center justify-center rounded-full border border-gray-700">{task.icon}</div>
                       <div>
                          <h4 className="font-bold text-white mb-1">{task.title}</h4>
                          <p className="text-xs text-gray-400 mb-2">{task.desc}</p>
                          <span className="text-xs text-gold-400 font-bold uppercase bg-gold-900/20 px-2 py-1 rounded border border-gold-900/50">Recompensa: {task.reward}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

          </div>

          {/* Sidebar (Right - 1 Col) */}
          <div className="space-y-8">
            
            {/* Featured Reward */}
            <div className="bg-gradient-to-b from-dark-900 to-black border border-gold-600 rounded-lg p-6 text-center relative overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.1)]">
               <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase">Exclusivo</div>
               <h3 className="text-gold-500 font-serif font-bold text-lg mb-4 uppercase tracking-widest">Recompensa Máxima</h3>
               
               <div className="w-full aspect-square bg-black rounded border border-gray-800 mb-4 overflow-hidden group cursor-pointer relative">
                  <img src="https://i.postimg.cc/kMspzGPD/08_Stygaea.webp" alt="Mount" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                     <span className="text-white font-black text-xl drop-shadow-md">Pesadelo de Zelnaris</span>
                  </div>
               </div>
               
               <p className="text-gray-400 text-xs mb-6">
                 Uma montaria lendária com velocidade de voo 12.0 e habilidade passiva "Aura do Medo". Obtenha coletando 500 Fragmentos.
               </p>
               <Button fullWidth>Ver na Loja</Button>
            </div>

            {/* Schedule Table */}
            <div className="bg-dark-900 border border-gray-800 p-6 rounded-lg">
               <h3 className="text-white font-serif font-bold mb-4 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 Horários de Raid
               </h3>
               <ul className="space-y-3 text-sm">
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span className="text-gray-400">Servidor NA</span>
                   <span className="text-white font-mono">18:00 UTC</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span className="text-gray-400">Servidor SA</span>
                   <span className="text-white font-mono">20:00 UTC</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-800 pb-2">
                   <span className="text-gray-400">Servidor EU</span>
                   <span className="text-white font-mono">14:00 UTC</span>
                 </li>
               </ul>
            </div>

          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center border-t border-gray-800 pt-12">
           <h2 className="text-3xl font-serif text-white mb-6">Pronto para a Batalha?</h2>
           <div className="flex justify-center gap-4">
              <Button variant="primary">Logar no Jogo</Button>
              <Button variant="secondary">Ler Patch Notes</Button>
           </div>
        </div>

      </div>
    </div>
  );
};