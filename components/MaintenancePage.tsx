import React, { useEffect } from 'react';
import { Button } from './Button';

const MAINTENANCE_HISTORY = [
  { date: '08 Out 2023', duration: '4h 00m', type: 'Programada', desc: 'Otimização de Banco de Dados e Rotação de Loja.' },
  { date: '01 Out 2023', duration: '2h 30m', type: 'Emergência', desc: 'Correção de exploit na Fenda de Tritael.' },
  { date: '25 Set 2023', duration: '6h 00m', type: 'Update', desc: 'Implementação do Patch v2.4: "Ascensão dos Dragões".' },
  { date: '18 Set 2023', duration: '3h 00m', type: 'Programada', desc: 'Manutenção de rotina e reset de Ranking PvP.' },
  { date: '10 Set 2023', duration: '1h 00m', type: 'Hotfix', desc: 'Correção de desconexões no servidor SA.' },
];

export const MaintenancePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans pt-28 md:pt-32 pb-20 animate-fade-in-up">
      {/* Background Texture */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      {/* Hero Header */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-6 border-b border-gray-800 pb-8">
           <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden border border-gold-900/50 shadow-2xl group">
              <div className="absolute inset-0 bg-gold-600/10 z-10"></div>
              <img 
                src="https://i.postimg.cc/4yyGvpT1/012.webp" 
                alt="Maintenance" 
                className="w-full h-full object-cover object-top grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                 <div className="bg-black/80 backdrop-blur border border-gold-600 px-6 py-2 rounded text-gold-500 font-bold uppercase tracking-widest flex items-center gap-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></span>
                    Status: Offline
                 </div>
              </div>
           </div>

           <div className="flex-1">
              <h2 className="text-gold-500 font-serif font-bold text-sm tracking-[0.4em] uppercase mb-2">
                Central de Operações
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif font-black text-white drop-shadow-fire mb-4">
                MANUTENÇÃO DO SERVIDOR
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Nossos engenheiros arcanos estão trabalhando para fortalecer as barreiras de Midellas. 
                Servidores indisponíveis temporariamente para garantir a estabilidade do reino.
              </p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
           
           {/* Left: Current Details */}
           <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-dark-900 border border-gold-900/30 p-8 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                 </div>

                 <h3 className="text-2xl font-serif font-bold text-white mb-6 border-l-4 border-gold-500 pl-4">Detalhes da Manutenção</h3>
                 
                 <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                       <span className="text-gray-500 text-xs uppercase font-bold block mb-1">Início</span>
                       <span className="text-white font-mono text-lg">08 Out, 08:00 UTC</span>
                    </div>
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                       <span className="text-gray-500 text-xs uppercase font-bold block mb-1">Previsão de Término</span>
                       <span className="text-white font-mono text-lg">08 Out, 12:00 UTC</span>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h4 className="text-gold-400 font-bold uppercase text-sm tracking-wider">Notas de Atualização</h4>
                    <ul className="space-y-3 text-gray-300">
                       <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✦</span>
                          <span><strong>Otimização de Banco de Dados:</strong> Melhoria na latência para jogadores da região SA.</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✦</span>
                          <span><strong>Rotação da Loja de Ellora:</strong> Adicionado o pacote "Cavaleiro do Vazio" e removido o pacote "Verão Eterno".</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✦</span>
                          <span><strong>Correção de Bug:</strong> O chefe "Attaius" não reiniciava o aggro corretamente após limpar a raid.</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✦</span>
                          <span><strong>Segurança:</strong> Atualização dos protocolos anti-cheat.</span>
                       </li>
                    </ul>
                 </div>
              </div>

              {/* Compensation Block */}
              <div className="bg-gradient-to-r from-dark-900 to-black p-6 rounded border border-gray-800 flex items-center justify-between">
                 <div>
                    <h4 className="text-white font-bold mb-1">Compensação por Indisponibilidade</h4>
                    <p className="text-xs text-gray-400">Enviada para o inventário "Ellora's Storage" após o retorno.</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dark-800 rounded border border-gold-700 flex items-center justify-center text-xl" title="Poção XP">🧪</div>
                    <div className="w-10 h-10 bg-dark-800 rounded border border-gold-700 flex items-center justify-center text-xl" title="Moeda Ellun">🪙</div>
                 </div>
              </div>
           </div>

           {/* Right: History */}
           <div>
              <div className="bg-dark-900 border border-gray-800 rounded-lg overflow-hidden">
                 <div className="bg-black p-4 border-b border-gray-800">
                    <h3 className="text-gold-500 font-serif font-bold uppercase tracking-widest text-sm">Histórico de Operações</h3>
                 </div>
                 <div className="divide-y divide-gray-800">
                    {MAINTENANCE_HISTORY.map((log, idx) => (
                       <div key={idx} className="p-4 hover:bg-white/5 transition-colors group">
                          <div className="flex justify-between items-start mb-2">
                             <span className="text-white font-bold text-sm">{log.date}</span>
                             <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                                log.type === 'Emergência' ? 'bg-red-900/50 text-red-400 border border-red-900' :
                                log.type === 'Update' ? 'bg-blue-900/50 text-blue-400 border border-blue-900' :
                                'bg-gray-800 text-gray-400'
                             }`}>
                                {log.type}
                             </span>
                          </div>
                          <p className="text-gray-400 text-xs mb-2 line-clamp-2 group-hover:line-clamp-none transition-all">{log.desc}</p>
                          <div className="flex items-center gap-2 text-[10px] text-gray-600 font-mono">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             Duração: {log.duration}
                          </div>
                       </div>
                    ))}
                 </div>
                 <div className="p-4 border-t border-gray-800 bg-black/20 text-center">
                    <Button variant="outline" className="text-xs py-2 w-full">Ver Arquivo Completo</Button>
                 </div>
              </div>

              {/* Support CTA */}
              <div className="mt-8 p-6 rounded border border-gold-600/30 bg-gold-900/10 text-center">
                 <h4 className="text-gold-400 font-bold mb-2">Problemas após a manutenção?</h4>
                 <p className="text-xs text-gray-400 mb-4">Se você encontrar erros ao conectar após o servidor retornar, verifique a integridade dos arquivos.</p>
                 <a href="#" className="text-white text-xs font-bold uppercase tracking-widest border-b border-white hover:text-gold-500 hover:border-gold-500 transition-colors">
                    Contatar Suporte
                 </a>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};