import React, { useEffect } from 'react';

export const HistoryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-300 font-sans pt-28 md:pt-32 animate-fade-in-up">
      
      {/* Hero Section da História */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/9F91gD1L/Riders_of_Icarus.webp" 
            alt="Dragon Riders Alliance Art" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-dark-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050402_100%)]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-4 flex justify-center">
            <div className="h-[2px] w-20 bg-gold-500 shadow-[0_0_15px_#FFD700]"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 drop-shadow-fire mb-6">
            A Lenda de Midellas
          </h1>
          <p className="text-xl md:text-2xl font-serif text-gold-200 italic font-light">
            "Das cinzas de Zelnaris ao despertar dos novos heróis."
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 max-w-7xl relative">
        
        {/* Decorative Vertical Line */}
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-800/30 to-transparent hidden md:block"></div>

        {/* Capítulo 1: A Guerra Antiga */}
        <section className="mb-24 pl-0 md:pl-12 relative">
          <span className="absolute -left-[5px] top-0 w-3 h-3 bg-gold-600 rotate-45 hidden md:block shadow-[0_0_10px_#FFA000]"></span>
          <h2 className="text-3xl font-serif font-bold text-gold-500 mb-8 flex items-center gap-4">
            <span className="text-gold-800 text-5xl opacity-50">I.</span> A Aliança da Luz
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed text-justify">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-gold-400 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              Há muito tempo, quando Zelnaris se materializou nesta dimensão para causar estragos no continente de Midellas, as quatro raças mais prósperas: humanos, elfos, crokhoons e merumis, concordaram em forjar a Aliança da Luz contra esse antigo mal que ansiava transformar o mundo inteiro em caos.
            </p>
            <p className="mt-6">
              Junto com os poderosos poderes da Deusa Ellora, colidiram em uma longa e feroz batalha contra o Deus da Ruína e seu exército da Legião Caída. Muitos camaradas que lutaram na Guerra da Luz foram perdidos e tantos quantos foram corrompidos pelo grande confronto, mas no fim as forças unidas do bem selaram Zelnaris vitoriosamente e restauraram o equilíbrio universal.
            </p>
            
            <div className="my-12 p-8 bg-black/40 border-y border-gold-900/50 backdrop-blur-sm relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-gold-600/50"></div>
               <p className="italic text-gold-200 font-serif text-lg relative z-10">
                 "Até que um descendente do Deus da Ruína fez de sua missão despertar os restos de Zelnaris do sono profundo..."
               </p>
               <p className="mt-4">
                 Salant nasceu e foi criado com um ódio profundo pelos seres humanos, ansioso para destruir o mundo e determinado a libertar Zelnaris. Para isso, ele precisava encontrar um sujeito que herdasse a linhagem de um grande rei e possuísse aptidões mágicas iguais às da feiticeira que criou a pedra demoníaca.
               </p>
            </div>
          </div>
        </section>

        {/* Capítulo 2: A Princesa Lania (Com Imagem Flutuante) */}
        <section className="mb-24 pl-0 md:pl-12 relative">
           <span className="absolute -left-[5px] top-0 w-3 h-3 bg-gold-600 rotate-45 hidden md:block shadow-[0_0_10px_#FFA000]"></span>
           <h2 className="text-3xl font-serif font-bold text-gold-500 mb-8 flex items-center gap-4">
            <span className="text-gold-800 text-5xl opacity-50">II.</span> A Profecia da Princesa
          </h2>

           <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 text-lg text-gray-300 leading-relaxed text-justify">
                <p>
                  A descendente que Salant procurava era a Princesa do Reino de Hakanas, nascida com uma profecia sombria. Curiosa sobre suas habilidades misteriosas e desejando aprender uma forma de controlar a relíquia de Ellora que lhe foi confiada, a Princesa Lania seguiu em direção às Planícies de Akrat para encontrar o profeta Chimer.
                </p>
                <p className="mt-4">
                  No entanto, a jornada real estava fadada à tragédia. A tripulação que escoltava a Princesa foi emboscada na floresta a caminho do deserto, um ataque calculado pelas forças das sombras que aguardavam o momento perfeito.
                </p>
              </div>
              
              {/* Moldura da Imagem da Princesa */}
              <div className="w-full lg:w-1/3 flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <img 
                  src="https://i.postimg.cc/Yqyf67N5/Princesa_Lania.png" 
                  alt="Princesa Lania" 
                  className="relative z-10 w-full h-auto rounded-lg border border-gold-800/50 shadow-2xl sepia-[20%] hover:sepia-0 transition-all duration-700"
                />
                <p className="text-center text-xs font-serif text-gold-600 mt-2 tracking-widest uppercase">Princesa Lania de Hakanas</p>
              </div>
           </div>
        </section>

        {/* Capítulo 3: A Emboscada (Imagem Full Width) */}
        <section className="mb-24 pl-0 md:pl-12 relative">
          <span className="absolute -left-[5px] top-0 w-3 h-3 bg-gold-600 rotate-45 hidden md:block shadow-[0_0_10px_#FFA000]"></span>
          <h2 className="text-3xl font-serif font-bold text-gold-500 mb-8 flex items-center gap-4">
            <span className="text-gold-800 text-5xl opacity-50">III.</span> O Sequestro Real
          </h2>
          
          <div className="relative mb-10 group overflow-hidden rounded-xl border border-gold-900/30">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <img 
              src="https://i.postimg.cc/Z5K2RJYk/Escolta_da_Princesa.png" 
              alt="A Escolta da Princesa" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-80"
            />
            <div className="absolute bottom-4 left-6 z-20">
              <p className="text-gold-100 font-serif italic text-sm">"Os cavaleiros lutaram bravamente, mas a escuridão era avassaladora."</p>
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed text-justify">
            <p>
              Os cavaleiros de proteção fizeram o possível para proteger Lania, mas infelizmente ela foi capturada por <span className="text-red-500 font-bold">Rondo Terramunce</span>, ninguém menos que o líder dos Guardas do Gelo. Estávamos todos presos e não conseguimos escapar da prisão de Salant sem a ajuda de Crow, comandante da Ordem Ônix.
            </p>
            <p className="mt-4 text-gold-100 font-serif text-xl border-l-2 border-red-800 pl-4 py-2">
              "Mas já era tarde demais. Rondo conseguiu escapar com a Princesa e assim começa nossa jornada de resgate."
            </p>
          </div>
        </section>

        {/* Capítulo 4: Dias Atuais */}
        <section className="mb-12 pl-0 md:pl-12 relative">
          <span className="absolute -left-[5px] top-0 w-3 h-3 bg-gold-600 rotate-45 hidden md:block shadow-[0_0_10px_#FFA000]"></span>
          <h2 className="text-3xl font-serif font-bold text-gold-500 mb-8 flex items-center gap-4">
            <span className="text-gold-800 text-5xl opacity-50">IV.</span> O Chamado aos Cavaleiros
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-dark-900 p-8 border border-dark-800 rounded-lg shadow-lg">
               <h3 className="text-gold-400 font-serif font-bold text-xl mb-4">O Mundo em Caos</h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-4">
                 Sua ausência nos deixou vulneráveis, pois a presença do Deus da Ruína se fortalece. Os ventos do caos e do mal caíram sobre nós, consumindo nossas cidades e destruindo nossos lares. Vivemos em um mundo majestoso cercado pelo bem e pelo mal, com forças destrutivas que buscam acabar com nosso modo de vida.
               </p>
            </div>

            <div className="bg-gradient-to-br from-gold-900/20 to-black p-8 border border-gold-800/30 rounded-lg shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 rounded-full blur-2xl"></div>
               <h3 className="text-gold-400 font-serif font-bold text-xl mb-4">A Última Esperança</h3>
               <p className="text-gray-300 text-sm leading-relaxed font-medium">
                 Só os Cavaleiros têm chance de deter aqueles que buscam nossa aniquilação. Heróis de Midellas que conquistaram o medo daquelas criaturas ferozes do reino e reconheceram que poderiam se tornar nossos aliados mais poderosos e a chave para a vitória.
               </p>
            </div>
          </div>
        </section>

      </div>

      {/* Imagem de Rodapé: Trapaceiro (Atualizada) */}
      <div className="w-full relative mt-0 flex justify-center bg-black overflow-hidden py-10">
         {/* Gradiente superior para mesclar com o fundo */}
         <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-dark-950 to-transparent z-10"></div>
         
         <div className="relative z-0 max-w-6xl w-full flex justify-center items-end">
            {/* Efeito de brilho de fundo */}
            <div className="absolute bottom-0 w-full h-1/2 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <img 
              src="https://i.postimg.cc/hjKHc9Zv/Trapaceiro.webp" 
              alt="Personagem Trapaceiro" 
              className="w-auto h-auto max-h-[70vh] object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-95 hover:brightness-110 transition-all duration-700"
            />
         </div>
         
         {/* Gradiente inferior para mesclar com o footer real */}
         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      </div>

    </div>
  );
};