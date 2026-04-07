import React, { useState, useEffect } from 'react';
import { NAV_LINKS, GAME_CLASSES, LATEST_NEWS, STORE_PRODUCTS } from './constants';
import { Button } from './components/Button';
import { HistoryPage } from './components/HistoryPage';
import { ClassesPage } from './components/ClassesPage';
import { RegionsPage } from './components/RegionsPage';
import { BestiaryPage } from './components/BestiaryPage';
import { StorePage } from './components/StorePage';
import { EventsPage } from './components/EventsPage';
import { MaintenancePage } from './components/MaintenancePage';
import { NewsPage } from './components/NewsPage';
import { OracleChat } from './components/OracleChat';
import { AuthPage } from './components/AuthPage';
import { GameStartModal } from './components/GameStartModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [showGameModal, setShowGameModal] = useState(false);
  
  const [currentView, setCurrentView] = useState<'home' | 'history' | 'classes' | 'maps' | 'bestiary' | 'store' | 'events' | 'maintenance' | 'news' | 'auth_login' | 'auth_register'>('home');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Erro ao alternar tela cheia:", err);
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Feedback visual imediato
    setClickedLink(href);
    setTimeout(() => setClickedLink(null), 400);

    if (href === '#history') {
      setCurrentView('history');
      window.scrollTo(0, 0);
    } else if (href === '#classes') {
      setCurrentView('classes');
      window.scrollTo(0, 0);
    } else if (href === '#maps') {
      setCurrentView('maps');
      window.scrollTo(0, 0);
    } else if (href === '#taming') {
      setCurrentView('bestiary');
      window.scrollTo(0, 0);
    } else if (href === '#store') {
      setCurrentView('store');
      window.scrollTo(0, 0);
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
        if (href !== '#') {
          setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
           window.scrollTo(0, 0);
        }
      } else {
        if (href !== '#') {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
      }
    }
  };

  const goHome = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setMobileMenuOpen(false);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authKey');
    localStorage.removeItem('CERPass');
    setUser(null);
    setCurrentView('home');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'history': return <HistoryPage />;
      case 'classes': return <ClassesPage />;
      case 'maps': return <RegionsPage />;
      case 'bestiary': return <BestiaryPage />;
      case 'store': return <StorePage />;
      case 'events': return <EventsPage />;
      case 'maintenance': return <MaintenancePage />;
      case 'news': return <NewsPage />;
      case 'auth_login': return <AuthPage initialMode="login" onBack={() => goHome()} />;
      case 'auth_register': return <AuthPage initialMode="register" onBack={() => goHome()} />;
      default:
        return (
          <>
            {/* HERO SECTION */}
            <header id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center lg:justify-start">
              {/* Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.postimg.cc/3x3JyRfM/01.webp" 
                  alt="Hero Background" 
                  className="w-full h-full object-cover animate-float scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-dark-950"></div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 w-full container mx-auto px-6 md:px-12 flex items-center h-full">
                <div className="max-w-3xl mt-4 md:mt-8">
                  
                  {/* Decorative Line */}
                  <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="w-12 h-[1px] bg-gold-500"></div>
                    <span className="text-gold-400 font-serif font-bold uppercase tracking-[0.4em] text-xs md:text-sm drop-shadow-glow">
                      MMORPG DE AÇÃO AÉREA
                    </span>
                  </div>

                  {/* Main Title - Utilizando Cinzel Decorative e tamanho ajustado */}
                  <h1 className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <span className="block text-5xl md:text-7xl lg:text-8xl icarus-title leading-[1.2] tracking-wider">
                      A DEFESA
                    </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl icarus-title leading-[1.2] ml-4 md:ml-8 tracking-wider">
                      DE ELLORA
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-gray-300 text-sm md:text-base font-serif italic font-light leading-relaxed max-w-md mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    "Quando os colossos despertam, apenas os Cavaleiros Alados podem restaurar o equilíbrio de Midellas."
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <Button 
                      onClick={() => user ? setShowGameModal(true) : setCurrentView('auth_register')} 
                      className="transition-all duration-500 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:animate-glow-pulse hover:scale-105 active:scale-95"
                    >
                      {user ? 'Iniciar Jornada' : 'Jogue Agora'}
                    </Button>
                    <button onClick={() => setCurrentView('classes')} className="px-8 py-3 font-serif font-bold uppercase tracking-widest text-white border border-white/30 hover:bg-white/10 hover:border-white transition-all text-xs md:text-sm">
                      Ver Classes
                    </button>
                  </div>

                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-[10px] text-gold-400 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"></div>
              </div>
            </header>

            {/* TAMING SECTION (Updated with Autoplay Video) */}
            <section className="py-32 bg-dark-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  
                  {/* Video Showcase (YouTube) */}
                  <div className="order-2 md:order-1 relative group">
                    <div className="absolute inset-0 bg-gold-500/10 blur-[60px] rounded-full transform group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10 border border-gold-900/30 bg-black/40 backdrop-blur-sm p-2 rounded-lg transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                      <div className="aspect-video overflow-hidden rounded bg-black relative shadow-2xl">
                         <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dIskU879APw?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&loop=1&playlist=dIskU879APw&playsinline=1&enablejsapi=1&showinfo=0" 
                            title="Dragon Riders Alliance Taming" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                         ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="order-1 md:order-2">
                    <h2 className="text-gold-500 font-serif font-bold text-sm tracking-[0.3em] uppercase mb-4 flex items-center gap-4">
                      <span className="w-12 h-[1px] bg-gold-500"></span>
                      Sistema de Domesticação
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 leading-tight">
                      Dome o <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-300 to-gold-600">Impossível</span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                      Em Dragon Riders Alliance, você não apenas enfrenta monstros — você os torna seus. De ursos ferozes a dragões antigos, domine os céus e a terra.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      {[
                        { num: '500+', label: 'Familiares' },
                        { num: '360°', label: 'Combate Aéreo' },
                      ].map((stat, idx) => (
                        <div key={idx} className="border-l border-gold-800/50 pl-4">
                          <span className="block text-3xl font-serif font-bold text-white">{stat.num}</span>
                          <span className="text-xs text-gold-500 uppercase tracking-wider">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="secondary" onClick={() => setCurrentView('bestiary')}>Explorar Bestiário</Button>
                  </div>
                </div>
              </div>
            </section>

            {/* NEWS GRID */}
            <section className="py-24 bg-[#080808] border-b border-white/5">
              <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                  <h2 className="text-3xl font-serif font-bold text-white">Últimas Notícias</h2>
                  <a href="#" className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Ver Arquivo</a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {LATEST_NEWS.map((news) => (
                    <article 
                      key={news.id} 
                      className="group bg-dark-900 border border-white/5 hover:border-gold-600/50 transition-all duration-500 cursor-pointer overflow-hidden relative"
                      onClick={() => {
                        if (news.category === 'Event') setCurrentView('events');
                        else if (news.category === 'Maintenance') setCurrentView('maintenance');
                        else setCurrentView('news');
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="aspect-[16/9] overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors"></div>
                        <img 
                          src={news.imageUrl} 
                          alt={news.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className={`absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/20 ${
                           news.category === 'Maintenance' ? 'bg-red-900/80' : 'bg-black/60'
                        }`}>
                          {news.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <span className="text-gold-600 text-[10px] font-bold uppercase tracking-wider mb-2 block">{news.date}</span>
                        <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{news.title}</h3>
                        <p className="text-gray-500 text-sm line-clamp-2 font-light">{news.summary}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* STORE PREVIEW */}
            <section className="py-24 bg-dark-950 relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20 pointer-events-none"></div>
               <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/50 to-transparent"></div>

               <div className="container mx-auto px-6 relative z-10">
                  {/* Header */}
                  <div className="flex flex-col items-center text-center mb-16">
                     <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                        <span className="w-8 h-px bg-gold-500"></span>
                        Itens Premium & Exclusivos
                        <span className="w-8 h-px bg-gold-500"></span>
                     </span>
                     <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 drop-shadow-fire">
                        LOJA DE ELLORA
                     </h2>
                     <p className="text-gray-400 font-light max-w-xl mx-auto">
                        Equipe-se com o melhor que Midellas tem a oferecer. Montarias raras, trajes da nobreza e pacotes de aventureiro.
                     </p>
                  </div>

                  {/* Featured Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                     {STORE_PRODUCTS.slice(0, 4).map((product, idx) => (
                        <div key={product.id} className="group relative bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] flex flex-col">
                           
                            {/* Rarity Stripe */}
                            <div className={`absolute top-0 left-0 w-full h-1 z-20 ${
                               product.rarity === 'legendary' ? 'bg-purple-500' :
                               product.rarity === 'heroic' ? 'bg-gold-500' :
                               product.rarity === 'elite' ? 'bg-blue-500' : 'bg-gray-500'
                            }`}></div>

                            {/* Discount Label */}
                            {product.discountLabel && (
                               <div className="absolute top-4 right-0 z-30 bg-red-600 text-white text-[9px] font-black px-3 py-1 skew-x-[-15deg] shadow-lg animate-pulse">
                                  <span className="block skew-x-[15deg]">{product.discountLabel}</span>
                               </div>
                            )}

                            {/* Image Container */}
                            <div className="relative h-48 bg-black/40 p-4 flex items-center justify-center overflow-hidden">
                               <div className={`absolute inset-0 bg-gradient-to-t opacity-20 ${
                                  product.rarity === 'legendary' ? 'from-purple-900' :
                                  product.rarity === 'heroic' ? 'from-gold-900' :
                                  'from-gray-900'
                               } to-transparent`}></div>
                               <img 
                                  src={product.imageUrl} 
                                  alt={product.name} 
                                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                               />
                            </div>

                            {/* Content Info */}
                            <div className="p-5 flex-1 flex flex-col">
                               <div className="mb-2 flex justify-between items-start">
                                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5 ${
                                     product.rarity === 'legendary' ? 'text-purple-400' :
                                     product.rarity === 'heroic' ? 'text-gold-400' :
                                     product.rarity === 'elite' ? 'text-blue-400' : 'text-gray-400'
                                  }`}>
                                     {product.rarity}
                                  </span>
                                  <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter self-center">{product.category}</span>
                               </div>
                               <h3 className="text-white font-serif font-bold text-sm leading-tight mb-2 group-hover:text-gold-400 transition-colors">
                                  {product.name}
                                </h3>
                               <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-4 italic group-hover:text-gray-300 transition-colors">
                                  "{product.description}"
                               </p>
                               <div className="mt-auto pt-4 border-t border-white/5 flex items-end justify-between">
                                  <div>
                                     {product.originalPrice && (
                                        <span className="block text-[10px] text-gray-600 line-through mb-[-4px]">
                                           {product.originalPrice} {product.currency}
                                        </span>
                                     )}
                                     <span className="text-gold-500 font-bold font-mono text-lg">
                                        {product.price} <span className="text-[10px]">{product.currency}</span>
                                     </span>
                                  </div>
                                  <div className="text-right">
                                     <span className="block text-[10px] text-gray-600 uppercase font-bold tracking-tighter">Entrega Imediata</span>
                                  </div>
                               </div>
                            </div>
                           
                           {/* Hover Overlay Button */}
                           <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30 pointer-events-none group-hover:pointer-events-auto">
                              <button onClick={() => setCurrentView('store')} className="px-6 py-2 border border-gold-500 text-gold-500 uppercase text-xs font-bold tracking-widest hover:bg-gold-500 hover:text-black transition-colors">
                                 Ver Detalhes
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="text-center">
                     <Button variant="primary" onClick={() => setCurrentView('store')} className="px-10 py-4">
                        Acessar Loja Completa
                     </Button>
                  </div>
               </div>
            </section>

            {/* Footer Image Decoration for Home */}
            <div className="w-full relative flex justify-center bg-dark-950 overflow-hidden">
                {/* Gradient Top */}
                <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
                
                {/* Image */}
                <div className="relative z-0 w-full flex justify-center items-end">
                    <img 
                      src="https://i.postimg.cc/hjx26xTQ/1024.webp" 
                      alt="Dragon Riders Alliance Characters" 
                      className="w-full max-w-[1400px] h-auto object-contain relative z-10 opacity-100"
                    />
                </div>

                {/* Gradient Bottom (Blending into footer) */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent z-20"></div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 font-sans selection:bg-gold-600 selection:text-black">
      
      {/* NAVBAR: Glassmorphism & Clean */}
      {!currentView.startsWith('auth') && (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-gradient-to-b from-black/90 to-transparent py-6 border-b border-transparent'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" onClick={goHome} className="block group">
                <img 
                  src="https://i.postimg.cc/R04LQYSL/icowebp.webp" 
                  alt="Dragon Riders Alliance" 
                  className={`object-contain transition-all duration-500 scale-125 ${scrolled ? 'h-10' : 'h-14 md:h-16'}`}
                />
              </a>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(link => {
                 const isActive = (currentView === 'history' && link.href === '#history') || 
                                (currentView === 'classes' && link.href === '#classes') || 
                                (currentView === 'maps' && link.href === '#maps') ||
                                (currentView === 'bestiary' && link.href === '#taming') ||
                                (currentView === 'store' && link.href === '#store');
                 
                 const isClicked = clickedLink === link.href;
                 
                 return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs font-serif font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 
                      ${isActive ? 'text-gold-400' : 'text-gray-300 hover:text-white'}
                      ${isClicked ? 'scale-110 drop-shadow-glow text-white' : 'scale-100'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                 );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {user ? (
                <>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gold-500 font-serif uppercase tracking-widest opacity-70">Logado como</span>
                    <span className="text-sm font-serif font-bold text-white uppercase tracking-widest">{user.username}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="text-xs font-serif font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors border border-red-500/30 px-3 py-1 rounded hover:bg-red-500/10"
                  >
                    Sair
                  </button>
                  <Button onClick={() => setShowGameModal(true)} className="!px-6 !py-2 !text-[10px] animate-glow-pulse">
                    Iniciar Jornada
                  </Button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setCurrentView('auth_login')}
                    className="text-xs font-serif font-bold uppercase tracking-widest text-gold-500 hover:text-white transition-colors"
                  >
                    Entrar
                  </button>
                  <Button onClick={() => setCurrentView('auth_register')} className="!px-6 !py-2 !text-[10px]">
                    Jogar Agora
                  </Button>
                </>
              )}
              <div className="w-[1px] h-6 bg-white/10"></div>
              <button onClick={toggleFullscreen} className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   {isFullscreen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />}
                </svg>
              </button>
            </div>
            
            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gold-500 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gold-900/50 animate-fade-in-up">
              <div className="flex flex-col p-8 gap-6">
                 {NAV_LINKS.map(link => (
                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-white font-serif text-lg uppercase tracking-widest">
                      {link.name}
                    </a>
                 ))}
                 <div className="h-[1px] bg-white/10 w-full"></div>
                 <div className="flex flex-col gap-4">
                    {user ? (
                      <>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gold-500 font-serif uppercase tracking-widest opacity-70">Logado como</span>
                          <span className="text-lg font-serif font-bold text-white uppercase tracking-widest">{user.username}</span>
                        </div>
                        <button onClick={handleLogout} className="text-red-500 text-sm uppercase tracking-widest text-left font-bold">Encerrar Sessão</button>
                        <Button onClick={() => { setMobileMenuOpen(false); setShowGameModal(true); }} fullWidth>Iniciar Jornada</Button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => setCurrentView('auth_login')} className="text-gray-300 text-sm uppercase tracking-widest text-left">Login</button>
                        <Button onClick={() => setCurrentView('auth_register')} fullWidth>Jogar Agora</Button>
                      </>
                    )}
                 </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Main Content Render */}
      {renderContent()}
      
      {showGameModal && user && <GameStartModal user={user} onClose={() => setShowGameModal(false)} />}
      
      {!currentView.startsWith('auth') && <OracleChat />}

      {/* Footer */}
      {!currentView.startsWith('auth') && (
        <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <img src="https://i.postimg.cc/R04LQYSL/icowebp.webp" alt="Logo" className="h-10 opacity-70 grayscale-0 mb-6" />
                <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
                  Dragon Riders Alliance é um MMORPG de ação onde você doma e monta bestas lendárias. Junte-se à batalha pelos céus hoje mesmo.
                </p>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold uppercase tracking-widest text-xs mb-6">Jogo</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-gold-500 transition-colors">Download</a></li>
                  <li><a href="#" className="hover:text-gold-500 transition-colors">Guia de Classes</a></li>
                  <li><a href="#" className="hover:text-gold-500 transition-colors">Status do Servidor</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-serif font-bold uppercase tracking-widest text-xs mb-6">Social</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-gold-500 transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-gold-500 transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-gold-500 transition-colors">YouTube</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700">
              <p>&copy; 2023 Valofe Global Ltd. Fã Site não oficial.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-500">Privacidade</a>
                <a href="#" className="hover:text-gray-500">Termos</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;