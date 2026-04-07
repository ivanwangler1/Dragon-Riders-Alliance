import React from 'react';

interface GameStartModalProps {
  user: any;
  onClose: () => void;
}

export const GameStartModal: React.FC<GameStartModalProps> = ({ user, onClose }) => {
  const launchCommand = `start Bin64/Launcher.exe /i:${user.uuid} /r:${user.cerpass} /O /u:${user.username} /m:p`;

  const downloadBat = () => {
    const element = document.createElement("a");
    const file = new Blob([launchCommand], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Iniciar_Icarus.bat";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-dark-900 border border-gold-900/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="bg-gradient-to-r from-gold-900/20 via-transparent to-transparent p-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-gold-500 font-serif font-bold uppercase tracking-widest text-xs mb-1">Elite Wings Alliance</h2>
            <h1 className="text-2xl font-serif font-black text-white tracking-widest">PREPARAR PARA VOO</h1>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8 p-6 bg-black/40 border border-white/5 rounded-xl">
            <h3 className="text-gold-500/80 font-serif text-[10px] uppercase tracking-[0.3em] mb-4">Comando de Inicialização Técnico</h3>
            <code className="block bg-[#050505] p-4 text-xs font-mono text-gray-300 break-all border-l-2 border-gold-600 leading-relaxed">
              {launchCommand}
            </code>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-white font-serif font-bold text-sm uppercase tracking-wider">Acesso Direto</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Baixe o script de inicialização para abrir o jogo instantaneamente usando suas credenciais vinculadas.
              </p>
              <button 
                onClick={downloadBat}
                className="w-full py-3 bg-gold-600 hover:bg-gold-500 text-black font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] rounded"
              >
                Baixar Arquivo .BAT
              </button>
            </div>
            
            <div className="space-y-4 border-l border-white/5 pl-6 hidden md:block">
              <h3 className="text-white font-serif font-bold text-sm uppercase tracking-wider">Instruções</h3>
              <ul className="text-[10px] text-gray-500 space-y-2 uppercase tracking-widest list-disc ml-4">
                <li>Coloque o arquivo na pasta raiz do jogo</li>
                <li>Execute como administrador</li>
                <li>Bom jogo, Cavaleiro!</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/40 p-4 border-t border-white/5 text-center">
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.4em]">Midellas Needs You • Ellora's Sanctum</p>
        </div>
      </div>
    </div>
  );
};
