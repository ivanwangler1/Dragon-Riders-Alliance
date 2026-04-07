import React, { useState } from 'react';
import { Button } from './Button';

interface AuthPageProps {
  initialMode: 'login' | 'register';
  onBack: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode, onBack }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    age: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar senhas iguais no registro
    if (mode === 'register' && formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const backendUrl = 'http://25.49.15.11:5000/backend';
    const endpoint = mode === 'login' ? `${backendUrl}/login.php` : `${backendUrl}/register.php`;
    const body = new FormData();
    body.append('username', formData.username);
    body.append('password', formData.password);
    if (mode === 'register') {
      body.append('email', formData.email);
      body.append('age', formData.age);
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: body,
      });
      const data = await response.json();
      
      if (data.status === 'success') {
        alert(data.message);
        if (mode === 'login') {
           // Salvar dados importantes extraídos do sistema (Token e CERPass)
           localStorage.setItem('user', JSON.stringify(data.user));
           localStorage.setItem('authKey', data.user.token);
           localStorage.setItem('CERPass', data.user.cerpass);
           
           window.location.reload();
        } else {
           setMode('login');
        }
      } else {
        alert("Erro: " + data.message);
      }
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert("Falha ao comunicar com o servidor.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Helper para renderizar os campos com estilo premium e sem sobreposição
  const renderInput = (name: string, label: string, type: string = 'text', required: boolean = true) => (
    <div className="w-full mb-5 group">
      <label className="block text-gold-500/60 font-serif text-[11px] uppercase tracking-[0.2em] mb-1.5 group-focus-within:text-gold-500 transition-all">
        {label}
      </label>
      <div className="relative">
        <input 
          type={type}
          name={name}
          value={formData[name as keyof typeof formData]}
          onChange={handleChange}
          required={required}
          className="w-full bg-black/60 border-b border-gray-800 text-gold-500 px-0 py-1.5 focus:outline-none focus:border-gold-500 transition-all font-sans text-base
                     autofill:shadow-[0_0_0px_1000px_black_inset] autofill:text-gold-500"
        />
        {/* Linha de borda animada */}
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-focus-within:w-full"></div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex bg-black font-sans animate-fade-in-up overflow-hidden">
      
      {/* LADO ESQUERDO: IMAGEM DESTAQUE */}
      <div className="hidden lg:block relative w-[60%] h-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/9FKGZ1rg/007.png" 
            alt="Hero Character" 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[10s] ease-linear"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        <div className="absolute bottom-12 left-12 max-w-lg z-10">
           <div className="h-1 w-20 bg-gold-500 mb-6 shadow-[0_0_10px_#eab308]"></div>
           <h2 className="text-5xl font-serif font-black text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,1)] mb-4">
             Torne-se uma <br/> <span className="text-gold-500 uppercase tracking-tighter">Lenda Viva</span>
           </h2>
           <p className="text-gray-300 font-serif italic text-lg opacity-90 drop-shadow-md">
             "Os céus de Hakanas aguardam seu comando. Domine bestas lendárias e lute pela glória da Aliança."
           </p>
        </div>
      </div>

      {/* LADO DIREITO: FORMULÁRIO */}
      <div className="w-full lg:w-[40%] h-full bg-[#0a0a0a] flex flex-col justify-center items-center relative border-l border-gold-900/30 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        {/* Botão Voltar */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 z-50 flex items-center gap-2 text-gray-500 hover:text-gold-400 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold group"
        >
          <div className="p-1.5 border border-gray-800 rounded-full group-hover:border-gold-500 transition-all group-hover:shadow-[0_0_10px_rgba(234,179,8,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
          Retornar ao Início
        </button>

        {/* Container do Formulário */}
        <div className="w-full max-w-[310px] px-7 relative z-10 py-8 bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          <div className="text-center mb-6">
            <div className="relative inline-block mb-4">
               <img src="https://i.postimg.cc/R04LQYSL/icowebp.webp" alt="Logo" className="h-14 mx-auto relative z-10 scale-150 drop-shadow-glow" />
               <div className="absolute inset-0 blur-2xl bg-gold-500/20 scale-150 rounded-full"></div>
            </div>
            <h2 className="text-gold-500 font-serif font-bold tracking-[0.4em] text-[10px] uppercase mb-1 opacity-80">
              Dragon Riders Alliance
            </h2>
            <h1 className="text-[38px] font-serif font-black text-white tracking-widest drop-shadow-glow leading-none">
              {mode === 'login' ? 'LOGIN' : 'CADASTRO'}
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            
            {mode === 'register' ? (
              <>
                {renderInput('username', 'Nome de Cavaleiro')}
                {renderInput('password', 'Senha Segura', 'password')}
                {renderInput('confirmPassword', 'Confirmar Senha', 'password')}
                {renderInput('email', 'Endereço de E-mail', 'email')}
                {renderInput('age', 'Sua Idade', 'number')}
              </>
            ) : (
              <>
                {renderInput('username', 'Nome de Usuário')}
                {renderInput('password', 'Senha de Acesso', 'password')}
              </>
            )}

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full group relative py-3 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 text-black font-black uppercase tracking-[0.2em] text-[13px] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,179,0,0.4)] active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {mode === 'login' ? 'Conectar' : 'Acessar'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          <div className="mt-2 text-center pt-6 border-t border-white/5">
            <p className="text-gray-500 text-xs font-serif tracking-wider">
              {mode === 'login' ? 'Ainda não possui uma jornada?' : 'Já possui uma conta ativa?'}
              <button 
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="ml-3 text-gold-500 font-bold hover:text-white uppercase tracking-widest transition-all border-b border-transparent hover:border-gold-500 pb-0.5"
              >
                {mode === 'login' ? 'Criar sua Conta' : 'Fazer Login'}
              </button>
            </p>
          </div>

        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-6 text-[10px] text-gray-700 font-bold tracking-[0.3em] uppercase opacity-40">
           Power by Ellora's Sanctum
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 5px rgba(255, 179, 0, 0.3));
        }
        /* Forçar cores no autofill do navegador */
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #eab308 !important; /* gold-500 */
          -webkit-box-shadow: 0 0 0px 1000px black inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}} />
    </div>
  );
};