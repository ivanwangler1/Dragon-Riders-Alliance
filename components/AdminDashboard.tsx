import React, { useState, useMemo } from 'react';
import { 
  Users, Activity, ShieldAlert, Search, Shield, Server, FileText, UserCog, UserCheck, Droplet, Zap, Fingerprint,
  Ban, MessageSquareOff, Gavel, PackagePlus, AlertTriangle, CheckCircle2,
  MoreVertical, X, PackageMinus, LogOut, ArrowLeft, Heart
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// --- MOCK DATA ---
const PERFORMANCE_DATA = [
  { time: '00:00', ccu: 1200, ping: 35 },
  { time: '04:00', ccu: 850, ping: 32 },
  { time: '08:00', ccu: 2100, ping: 45 },
  { time: '12:00', ccu: 4500, ping: 68 },
  { time: '16:00', ccu: 5200, ping: 75 },
  { time: '20:00', ccu: 6800, ping: 92 },
  { time: '24:00', ccu: 3400, ping: 50 },
];

const MOCK_PLAYERS = [
  { id: 'DRA-001', name: 'Ivanilson', email: 'ivan@valofe.com', ip: '192.168.1.1', status: 'online', level: 60, class: 'Berserker', gold: 54200, hp: 14500, mp: 3200 },
  { id: 'DRA-042', name: 'ShadowRealm', email: 'user7@gmail.com', ip: '172.16.0.4', status: 'offline', level: 32, class: 'Assassin', gold: 1200, hp: 4200, mp: 2100 },
  { id: 'DRA-155', name: 'HealerPro', email: 'healer@mail.com', ip: '10.0.0.9', status: 'online', level: 55, class: 'Priest', gold: 8500, hp: 8000, mp: 12000 },
  { id: 'DRA-666', name: 'TrollMaster', email: 'troll@hotmail.com', ip: '192.168.1.99', status: 'banned', level: 15, class: 'Trickster', gold: 0, hp: 1200, mp: 800 },
  { id: 'DRA-888', name: 'ElloraLight', email: 'light@ellora.org', ip: '192.168.1.5', status: 'online', level: 60, class: 'Guardian', gold: 99999, hp: 22000, mp: 1500 },
  { id: 'DRA-902', name: 'GamerX', email: 'gamer@x.com', ip: '10.1.1.2', status: 'muted', level: 41, class: 'Magician', gold: 430, hp: 3500, mp: 7800 },
];

const MOCK_LOGS = [
  { id: 'L-01', type: 'CHAT_WARNING', user: 'DRA-666 (TrollMaster)', content: 'Spam detectado no canal "Global". Filtro ativado automático.', time: '14:32:05', risk: 'low' },
  { id: 'L-02', type: 'SUSPICIOUS_TRADE', user: 'DRA-042 (ShadowRealm)', content: 'Transação repentina de 999,999 Ouro com IP listado em botnet (172.16.0.4).', time: '14:05:12', risk: 'high' },
  { id: 'L-03', type: 'SYSTEM_ALERT', user: 'SYSTEM_CORE', content: 'Database de leilões atingiu 90% da capacidade I/O. Escalando container.', time: '13:50:00', risk: 'medium' },
  { id: 'L-04', type: 'ITEM_INJECTION', user: 'DRA-001 (Ivanilson)', content: 'Admin WX invocou [Espada Larga de Ellora] x1 via painel', time: '10:15:22', risk: 'medium' },
  { id: 'L-05', type: 'IP_BLOCK', user: 'ANONYMOUS', content: 'Bloqueio preventivo no IP 105.43.12.99 por excesso de requisições de login.', time: '08:00:14', risk: 'high' },
];

export const AdminDashboard: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'logs'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [actionPanel, setActionPanel] = useState<'none' | 'ban' | 'edit'>('none');

  const filteredPlayers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return MOCK_PLAYERS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.email.toLowerCase().includes(q) || 
      p.id.toLowerCase().includes(q) ||
      p.ip.includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#070709] text-gray-300 font-sans flex relative z-[100]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0a0a0f] border-r border-white/5 flex flex-col z-20 shadow-2xl">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <ShieldAlert className="text-red-500 w-8 h-8" />
          <div>
            <h1 className="text-white font-serif font-bold uppercase tracking-widest text-sm">Painel Admin</h1>
            <span className="text-[10px] text-red-500 font-mono tracking-widest uppercase">Acesso Restrito</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-all ${
              activeTab === 'overview' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" /> Visão Geral
          </button>
          <button 
            onClick={() => setActiveTab('players')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-all ${
              activeTab === 'players' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" /> Jogadores
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-all ${
              activeTab === 'logs' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" /> Registros / Logs
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={onExit} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sair do Painel
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto relative bg-[#070709]">
        <header className="bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 p-6 sticky top-0 z-10 flex justify-between items-center">
          <h2 className="text-xl font-serif font-black text-white uppercase tracking-widest">
            {activeTab === 'overview' ? 'Métricas do Jogo' : activeTab === 'players' ? 'Gerenciamento de Jogadores' : 'Auditoria de Sistema'}
          </h2>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-3 py-1 rounded border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Sistema Online
            </span>
          </div>
        </header>

        <div className="p-8 pb-32">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Stat Cards */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Jogadores Online (CCU)', value: '6,842', trend: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                  { label: 'Contas Banidas Hoje', value: '14', trend: '-2%', icon: Ban, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
                  { label: 'Estabilidade do Servidor', value: '99.9%', trend: 'Estável', icon: Shield, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                ].map((stat, i) => (
                  <div key={i} className={`p-6 rounded-xl border ${stat.border} bg-[#0a0a0f] flex items-center justify-between`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">{stat.label}</span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black font-mono text-white">{stat.value}</span>
                        <span className={`text-[10px] font-bold ${stat.color}`}>{stat.trend}</span>
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#0a0a0f] p-6 rounded-xl border border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" /> Tráfego de Jogadores (24h)
                  </h3>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={PERFORMANCE_DATA}>
                        <defs>
                          <linearGradient id="colorCcu" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis dataKey="time" stroke="#ffffff50" fontSize={12} tickMargin={10} />
                        <YAxis stroke="#ffffff50" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#0a0a0f', borderColor: '#ffffff20', color: '#fff' }} />
                        <Area type="monotone" dataKey="ccu" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCcu)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-[#0a0a0f] p-6 rounded-xl border border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Server className="w-4 h-4 text-orange-500" /> Latência do Servidor (Ping)
                  </h3>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={PERFORMANCE_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis dataKey="time" stroke="#ffffff50" fontSize={12} tickMargin={10} />
                        <YAxis stroke="#ffffff50" fontSize={12} />
                        <Tooltip contentStyle={{ backgroundColor: '#0a0a0f', borderColor: '#ffffff20', color: '#fff' }} />
                        <Line type="monotone" dataKey="ping" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#f97316', strokeWidth: 0 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PLAYERS TAB */}
          {activeTab === 'players' && (
            <div className="space-y-6 animate-fade-in-up">
              
              {/* Search Bar */}
              <div className="bg-[#0a0a0f] border border-white/10 rounded-xl p-2 pl-4 flex items-center shadow-lg focus-within:border-red-500/50 transition-colors">
                <Search className="w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Buscar por ID, Nome, Email ou IP..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-gray-600 font-mono text-sm"
                />
              </div>

              {/* Data Table */}
              <div className="bg-[#0a0a0f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-black/50 border-b border-white/5 uppercase text-[10px] tracking-widest font-bold text-gray-500">
                    <tr>
                      <th className="px-6 py-4">Account ID</th>
                      <th className="px-6 py-4">Jogador</th>
                      <th className="px-6 py-4">IP Address</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Ações de Moderação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredPlayers.map((player) => (
                      <tr key={player.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4 font-mono text-gray-400 text-xs">{player.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-bold text-white text-base">{player.name}</span>
                            <span className="text-xs text-gray-500 font-serif">Nv. {player.level} • {player.class}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-gray-500 text-xs">{player.ip}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest border
                            ${player.status === 'online' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                              player.status === 'banned' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                              player.status === 'muted' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 
                              'bg-gray-500/10 text-gray-400 border-gray-500/20'}
                          `}>
                            {player.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => { setSelectedPlayer(player); setActionPanel('edit'); }}
                              className="p-2 rounded bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                              title="Editar Atributos e Inventário"
                            >
                              <UserCog className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => { setSelectedPlayer(player); setActionPanel('ban'); }}
                              className="p-2 rounded bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                              title="Controle de Punição"
                            >
                              <Gavel className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredPlayers.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                          Nenhum jogador encontrado com os termos da busca.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* LOGS TAB */}
          {activeTab === 'logs' && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-400 font-mono">Últimas 50 entradas de transações suspeitas e relatórios do sistema.</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest border border-red-500/20 rounded">Apenas Críticos</button>
                  <button className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/20 rounded">Exportar CSV</button>
                </div>
              </div>

              {MOCK_LOGS.map(log => (
                <div key={log.id} className="bg-[#0a0a0f] border border-white/5 rounded-lg p-4 flex gap-4 items-start hover:bg-white/5 transition-colors">
                  <div className="pt-1">
                    {log.risk === 'high' ? <AlertTriangle className="w-5 h-5 text-red-500" /> :
                     log.risk === 'medium' ? <Fingerprint className="w-5 h-5 text-orange-500" /> :
                     <FileText className="w-5 h-5 text-gray-500" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-widest">{log.type}</span>
                      <span className="text-[10px] text-gray-500 font-mono">{log.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{log.content}</p>
                    <div className="mt-2 text-xs font-mono text-gray-500">Envolvido: <span className="text-gold-500">{log.user}</span></div>
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-600">ID: {log.id}</div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* MODAL / SLIDE OVER PANEL FOR ACTIONS */}
        {actionPanel !== 'none' && selectedPlayer && (
          <div className="fixed top-0 right-0 h-full w-[400px] bg-[#0a0a0f] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[200] flex flex-col transform translate-x-0 transition-transform animate-fade-in-left">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
              <h3 className="font-serif font-black uppercase text-white tracking-widest flex items-center gap-2">
                {actionPanel === 'ban' ? <><Gavel className="text-red-500 w-5 h-5"/> Punições</> : <><UserCog className="text-blue-500 w-5 h-5"/> Gestão de Conta</>}
              </h3>
              <button onClick={() => setActionPanel('none')} className="text-gray-500 hover:text-white p-1 bg-white/5 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="mb-8 p-4 bg-black/60 rounded-lg border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  {actionPanel === 'ban' ? <Gavel className="w-24 h-24" /> : <UserCog className="w-24 h-24" />}
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest block mb-1">Cadeia de Alvo</span>
                <span className="text-2xl font-black text-white block font-serif tracking-wide">{selectedPlayer.name}</span>
                <span className="text-xs font-mono text-gray-400">ID: {selectedPlayer.id} | IP: {selectedPlayer.ip}</span>
              </div>

              {actionPanel === 'ban' && (
                <div className="space-y-4">
                  {selectedPlayer.status === 'banned' || selectedPlayer.status === 'muted' ? (
                    <button className="w-full text-left p-4 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <UserCheck className="w-5 h-5 text-green-500" />
                        <span className="font-bold text-green-500 uppercase tracking-widest text-sm">Desbanir / Remover Penalidades</span>
                      </div>
                      <p className="text-xs text-gray-400">Restaura o acesso total do jogador à plataforma e remove flags locais.</p>
                    </button>
                  ) : (
                    <>
                      <button className="w-full text-left p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <MessageSquareOff className="w-5 h-5 text-orange-500" />
                          <span className="font-bold text-orange-400 uppercase tracking-widest text-sm">Silenciar Chat</span>
                        </div>
                        <p className="text-xs text-gray-400">Bloqueia o uso do chat global e sussurros por 24 horas.</p>
                      </button>

                      <button className="w-full text-left p-4 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                          <span className="font-bold text-red-500 uppercase tracking-widest text-sm">Banimento Temporário</span>
                        </div>
                        <p className="text-xs text-gray-400">Suspende a conta por 7 dias. Adiciona flag preventiva no IP.</p>
                      </button>

                      <button className="w-full text-left p-4 rounded-lg bg-red-900/40 border border-red-500 hover:bg-red-900/80 transition-colors mt-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Ban className="w-5 h-5 text-red-400" />
                          <span className="font-bold text-red-400 uppercase tracking-widest text-sm">Ban Hammer (Permanente)</span>
                        </div>
                        <p className="text-xs text-red-300 opacity-80">Exclui conta permanentemente e bloqueia HWID/IP da rede do jogo.</p>
                      </button>
                    </>
                  )}
                </div>
              )}

              {actionPanel === 'edit' && (
                <div className="space-y-8 animate-fade-in-up">
                  
                  {/* ATRÍBUTOS SECTION */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                      <Activity className="w-4 h-4" /> Atributos de Personagem
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Nível</label>
                        <input type="number" defaultValue={selectedPlayer.level} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Experiência</label>
                        <input type="number" defaultValue={45000} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1"><Heart className="w-3 h-3 text-red-500"/> Max HP</label>
                        <input type="number" defaultValue={selectedPlayer.hp} className="w-full bg-black/50 border border-red-500/30 rounded px-3 py-2 text-red-400 font-mono text-sm focus:border-red-500 focus:outline-none" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1"><Droplet className="w-3 h-3 text-blue-500"/> Max MP</label>
                        <input type="number" defaultValue={selectedPlayer.mp} className="w-full bg-black/50 border border-blue-500/30 rounded px-3 py-2 text-blue-400 font-mono text-sm focus:border-blue-500 focus:outline-none" />
                      </div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded font-bold text-white text-[10px] uppercase tracking-widest transition-colors">Salvar Atributos</button>
                  </div>

                  {/* ECONOMIA SECTION */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                       Economia e Cofre
                    </h4>
                    
                    <div className="mb-4">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Bolsa de Ouro</label>
                      <div className="flex gap-2">
                        <input type="number" defaultValue={selectedPlayer.gold} className="flex-1 bg-black/50 border border-gold-500/30 rounded px-3 py-2 text-gold-400 font-mono font-bold focus:border-gold-500 focus:outline-none" />
                        <button className="px-4 bg-gold-500/10 text-gold-500 hover:bg-gold-500 hover:text-black border border-gold-500/30 rounded font-bold text-[10px] uppercase tracking-widest transition-colors">Alterar</button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Injetar Novo Item (ID)</label>
                      <input type="text" placeholder="Ex: ITEM_MOUNT_LION_01" className="w-full mb-2 bg-black/50 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:border-blue-500 focus:outline-none" />
                      <div className="flex gap-2">
                        <input type="number" defaultValue={1} min={1} className="w-20 bg-black/50 border border-white/10 rounded px-3 py-2 text-white font-mono text-sm focus:border-blue-500 focus:outline-none" />
                        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 rounded font-bold text-white text-xs uppercase tracking-widest transition-colors">
                          <PackagePlus className="w-4 h-4" /> Adicionar
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
