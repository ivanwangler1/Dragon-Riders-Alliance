import { GameClass, NewsItem, GameRegion, BestiaryEntry, ProductItem } from './types';

export const NAV_LINKS = [
  { name: 'História', href: '#history' },
  { name: 'Classes', href: '#classes' },
  { name: 'Bestiário', href: '#taming' },
  { name: 'Mapas', href: '#maps' },
];

export const STORE_PRODUCTS: ProductItem[] = [
  // VIP / Premium
  {
    id: 'vip-30',
    name: 'Serviço Premium Ellora (30 Dias)',
    description: 'A ascensão definitiva. Concede +20% EXP, +15% Drop Rate, e o título exclusivo "Patrono de Hakanas". Essencial para Riders que buscam a glória absoluta.',
    price: 840,
    originalPrice: 990,
    discountLabel: '15% OFF - LANÇAMENTO',
    currency: 'Elluns',
    category: 'vip',
    imageUrl: 'https://i.postimg.cc/hjKHc9Zv/Trapaceiro.webp',
    rarity: 'legendary'
  },
  // Mounts (Pets)
  {
    id: 'mount-blackwind',
    name: 'Rédeas de Blackwind Rejuvenescido',
    description: 'O lendário corcel de guerra, purificado das trevas. Sua velocidade terrestre é inigualável, e sua presença inspira coragem nos aliados. Uma lenda que retorna aos campos de batalha.',
    price: 1275,
    originalPrice: 1500,
    discountLabel: '15% OFF',
    currency: 'Elluns',
    category: 'pet',
    imageUrl: 'https://i.postimg.cc/sfmNqxCf/06_Exarahn_Badlands.webp',
    rarity: 'heroic'
  },
  {
    id: 'mount-ruby-bloodwyrm',
    name: 'Ruby Bloodwyrm (Dragão de Sangue)',
    description: 'Nascido nas entranhas de Magmapora, este dragão alado domina os céus com chamas carmesins. Uma montaria de elite para os maiores conquistadores de Midellas.',
    price: 1600,
    originalPrice: 2000,
    discountLabel: '20% OFF - ÉPICO',
    currency: 'Elluns',
    category: 'pet',
    imageUrl: 'https://i.postimg.cc/MT9vTMS2/Dragão.webp',
    rarity: 'legendary'
  },
  {
    id: 'mount-golden-laiku',
    name: 'Golden Laiku Imperial',
    description: 'A personificação da nobreza de Hakain. Este felino alado banhado em ouro é a montaria oficial da guarda real. Elegância e poder combinados em uma única criatura.',
    price: 900,
    originalPrice: 1200,
    discountLabel: '25% OFF',
    currency: 'Elluns',
    category: 'pet',
    imageUrl: 'https://i.postimg.cc/W1hwh0S8/Priest.png', // Temporary placeholder for celestial feel
    rarity: 'heroic'
  },
  // Costumes
  {
    id: 'costume-void-knight',
    name: 'Armadura do Cavaleiro do Vazio (Conjunto)',
    description: 'Forjada com essência extraída da própria Fenda de Tritael. Esta armadura não apenas protege, mas consome a esperança de seus adversários. Estética sombria e imponente.',
    price: 1440,
    originalPrice: 1800,
    discountLabel: '20% OFF',
    currency: 'Elluns',
    category: 'costume',
    imageUrl: 'https://i.postimg.cc/fyVQJZfY/Assassina.png',
    rarity: 'heroic'
  },
  // Consumables / Utility
  {
    id: 'bundle-tame-pro',
    name: 'Pacote Mestre Domador',
    description: 'Contém 5 Elixires de Domesticação Ancestral e 3 Tomos de Shadowbind. Aumente drasticamente suas chances de selar o destino das bestas mais raras.',
    price: 450,
    originalPrice: 600,
    discountLabel: '25% OFF - STARTER',
    currency: 'Elluns',
    category: 'consumable',
    imageUrl: 'https://i.postimg.cc/sgq9S10W/Magician.png',
    rarity: 'elite'
  }
];

export const BESTIARY_ENTRIES: BestiaryEntry[] = [
  {
    id: 'brakarr',
    regionName: 'Floresta de Brakarr',
    levelRange: 'Nível 1 - 10',
    description: 'O berço dos primeiros companheiros. Aqui residem bestas selvagens, mas leais.',
    imageUrl: 'https://i.postimg.cc/j29YdpPK/Bestiário_da_Floresta_de_Brakarr.webp',
    bestiaryImages: [
      'https://i.postimg.cc/j29YdpPK/01_Bestiário_da_Floresta_de_Brakarr.webp'
    ]
  },
  {
    id: 'hakain',
    regionName: 'Travessia de Hakain',
    levelRange: 'Nível 10 - 15',
    description: 'Nas proximidades da capital, criaturas nobres e montarias de guarda são comuns.',
    imageUrl: 'https://i.postimg.cc/L57F6cLH/Bestiário_da_Travessia_de_Hakain.webp',
    bestiaryImages: [
      'https://i.postimg.cc/L57F6cLH/02_Bestiário_da_Travessia_de_Hakain.webp'
    ]
  },
  {
    id: 'highlands',
    regionName: 'Terras Altas de Hakanas',
    levelRange: 'Nível 15 - 20',
    description: 'Onde o domínio dos céus começa. Águias gigantes e wyverns menores habitam os picos.',
    imageUrl: 'https://i.postimg.cc/pr7MXwzT/Bestiário_das_Terras_Altas_de_Hakanas.webp',
    bestiaryImages: [
      'https://i.postimg.cc/pr7MXwzT/03_Bestiário_das_Terras_Altas_de_Hakanas.webp',
      'https://i.postimg.cc/vTjwHJfH/04_Bestiário_das_Terras_Altas_Hakanas.webp'
    ]
  },
  {
    id: 'sea',
    regionName: 'Mar de Hakanas',
    levelRange: 'Nível 20 - 25',
    description: 'Neste oceano suspenso, criaturas híbridas de escamas e asas dominam.',
    imageUrl: 'https://i.postimg.cc/nr5fcyBX/Bestiário_do_Mar_de_Hakanas.webp',
    bestiaryImages: [
      'https://i.postimg.cc/nr5fcyBX/05_Bestiário_do_Mar_de_Hakanas.webp'
    ]
  },
  {
    id: 'parna',
    regionName: 'Costa de Parna',
    levelRange: 'Nível 25 - 30',
    description: 'Sob nevascas eternas, apenas os mais fortes sobrevivem.',
    imageUrl: 'https://i.postimg.cc/2yJN8shR/Bestiário_da_Costa_de_Parna.webp',
    bestiaryImages: [
      'https://i.postimg.cc/2yJN8shR/05_Bestiário_da_Costa_de_Parna.webp',
      'https://i.postimg.cc/gj5bkC8p/06_Bestiário_da_Costa_Parna.webp'
    ]
  },
  {
    id: 'tritael',
    regionName: 'Fenda de Tritael',
    levelRange: 'Nível 30 - 35',
    description: 'Uma região distorcida pelo vazio. Criaturas corrompidas e dragões do caos vagam por aqui.',
    imageUrl: 'https://i.postimg.cc/0j312TDs/Bestiário_da_Fenda_de_Tritael.webp',
    bestiaryImages: [
      'https://i.postimg.cc/0j312TDs/07_Bestiário_da_Fenda_de_Tritael.webp',
      'https://i.postimg.cc/rsb2FBxq/08_Bestiário_da_Fenda_Tritael.webp'
    ]
  },
  {
    id: 'exarahn',
    regionName: 'Terras Áridas de Exarahn',
    levelRange: 'Nível 35+ (PvP)',
    description: 'Um cemitério de impérios antigos. Pesadelos mortos-vivos e cavalos espectrais.',
    imageUrl: 'https://i.postimg.cc/MH4JKCVv/Bestiário_das_Terras_Áridas_de_Exarahn.webp',
    bestiaryImages: [
      'https://i.postimg.cc/MH4JKCVv/09_Bestiário_das_Terras_Áridas_de_Exarahn.webp'
    ]
  },
  {
    id: 'cloying',
    regionName: 'Deserto de Areias',
    levelRange: 'Nível 35 - 40',
    description: 'O calor escaldante esconde predadores subterrâneos.',
    imageUrl: 'https://i.postimg.cc/fyFQTGmS/Bestiário_dos_Desertos_de_Pegajosos.webp',
    bestiaryImages: [
      'https://i.postimg.cc/fyFQTGmS/10_Bestiário_dos_Desertos_de_Pegajosos.webp',
      'https://i.postimg.cc/zvMYXsKR/11_Bestiário_dos_Desertos_Pegajosos.webp'
    ]
  },
  {
    id: 'stygaea',
    regionName: 'Stygaea',
    levelRange: 'Nível 40 - 50',
    description: 'O próprio inferno. Cães infernais, dragões de magma e demônios alados.',
    imageUrl: 'https://i.postimg.cc/2yJN8shj/Bestiário_de_Stygaea.webp',
    bestiaryImages: [
      'https://i.postimg.cc/2yJN8shj/13_Bestiário_de_Stygaea.webp',
      'https://i.postimg.cc/7hcrYF02/14_Bestiário_Stygaea.webp'
    ]
  },
  {
    id: 'ellora',
    regionName: 'Santuário de Ellora',
    levelRange: 'Nível 50 - 55',
    description: 'Bestas banhadas em luz divina. Unicórnios, grifos sagrados e dragões celestiais.',
    imageUrl: 'https://i.postimg.cc/L57F6cLY/Bestiário_do_Santuário_de_Ellora.webp',
    bestiaryImages: [
      'https://i.postimg.cc/L57F6cLY/15_Bestiário_do_Santuário_de_Ellora.webp'
    ]
  },
  {
    id: 'akrat',
    regionName: 'Planícies de Akrat',
    levelRange: 'Nível 55 - 60',
    description: 'Terras selvagens onde bestas pré-históricas vagam livres.',
    imageUrl: 'https://i.postimg.cc/7hcrYF0H/Bestiário_das_Planícies_de_Akrat.webp',
    bestiaryImages: [
      'https://i.postimg.cc/7hcrYF0H/16_Bestiário_das_Planícies_de_Akrat.webp'
    ]
  },
  {
    id: 'turimnan',
    regionName: 'Vale de Turimnan',
    levelRange: 'Nível 60 - 65',
    description: 'Uma selva proibida repleta de insetos gigantes e horrores biológicos.',
    imageUrl: 'https://i.postimg.cc/FzqXsM3f/Bestiário_do_Vale_de_Turimnan.webp',
    bestiaryImages: [
      'https://i.postimg.cc/FzqXsM3f/17_Bestiário_do_Vale_de_Turimnan.webp'
    ]
  },
  {
    id: 'magmapora',
    regionName: 'Magmapora',
    levelRange: 'Nível ???',
    description: 'As profundezas vulcânicas onde dormem os dragões primordiais. Acesso Restrito.',
    imageUrl: 'https://i.postimg.cc/pr7MXwzj/Bestiário_Magmapora.webp',
    bestiaryImages: [
        'https://i.postimg.cc/pr7MXwzj/18_Bestiário_Magmapora.webp'
    ],
    isLocked: true
  }
];

export const GAME_REGIONS: GameRegion[] = [
  {
    id: 'brakarr',
    name: 'Brakarr Forest',
    levelRange: 'Lv. 1-10',
    description: 'O ponto de partida para todos os novos Riders. Uma floresta densa e mística onde os primeiros familiares podem ser encontrados.',
    imageUrl: 'https://i.postimg.cc/Wp8HCzcP/00_Brakarr_Forest.webp',
    detailedMapUrl: 'https://i.postimg.cc/BbYtfh70/Mapa_da_Floresta_de_Brakarr.webp'
  },
  {
    id: 'hakain',
    name: "Hakain's Crossing",
    levelRange: 'Capital',
    description: 'A joia da coroa de Hakanas. Uma metrópole movimentada onde cavaleiros negociam, formam guildas e preparam-se para a guerra.',
    imageUrl: 'https://i.postimg.cc/bYgBWrfP/01_Hakain_Crossing.webp',
    detailedMapUrl: 'https://i.postimg.cc/6qjTxHbN/Mapa_da_Travessia_de_Hakain.webp'
  },
  {
    id: 'highlands',
    name: 'Hakanas Highlands',
    levelRange: 'Lv. 10-20',
    description: 'Colinas verdejantes e ruínas antigas. Aqui, os Riders aprendem a verdadeira arte do voo e combate aéreo.',
    imageUrl: 'https://i.postimg.cc/QNmywCZh/02_Hakanas_Highlands.webp',
    detailedMapUrl: 'https://i.postimg.cc/L5ChFyQm/Mapa_das_Terras_Altas_de_Hakanas.webp'
  },
  {
    id: 'sea',
    name: 'Sea of Hakanas',
    levelRange: 'Lv. 20-25',
    description: 'Um vasto oceano celestial onde ilhas flutuam no céu. O lar de gigantescas criaturas marinhas voadoras.',
    imageUrl: 'https://i.postimg.cc/8k409cgS/03_Sea_of_Hakanas.webp',
    detailedMapUrl: 'https://i.postimg.cc/L5ChFyQs/Mapa_do_Mar_de_Hakanas.webp'
  },
  {
    id: 'parna',
    name: "Parna's Coast",
    levelRange: 'Lv. 25-30',
    description: 'Uma tundra implacável coberta de neve e gelo. Somente os familiares mais resistentes sobrevivem ao frio mordaz.',
    imageUrl: 'https://i.postimg.cc/J7x2v0Cr/04_Parna_Coast.webp',
    detailedMapUrl: 'https://i.postimg.cc/nrRMfdSf/Mapa_da_Costa_de_Parna.webp'
  },
  {
    id: 'tritael',
    name: 'Tritael Rift',
    levelRange: 'Lv. 30-35',
    description: 'Uma fenda dimensional onde o tecido da realidade é fraco. Criaturas do vazio e energias caóticas dominam os céus.',
    imageUrl: 'https://i.postimg.cc/66cmgqxQ/05_Tritael_Rift.webp',
    detailedMapUrl: 'https://i.postimg.cc/2yc3NH9p/Mapa_da_Fenda_de_Tritael.webp'
  },
  {
    id: 'exarahn',
    name: 'Exarahn Badlands',
    levelRange: 'PvP Zone',
    description: 'Uma terra sem lei devastada pela guerra. Aqui, Riders lutam entre si pela glória e recursos escassos.',
    imageUrl: 'https://i.postimg.cc/sfmNqxCf/06_Exarahn_Badlands.webp',
    detailedMapUrl: 'https://i.postimg.cc/nrRMfdSH/Mapa_das_Terras_Áridas_de_Exarahn.webp'
  },
  {
    id: 'cloying',
    name: 'Cloying Wastes',
    levelRange: 'Lv. 35-40',
    description: 'Um deserto árido e venenoso. As areias escondem segredos antigos e perigos que devoram os despreparados.',
    imageUrl: 'https://i.postimg.cc/pVC64rMr/07_Cloying_Wastes.webp',
    detailedMapUrl: 'https://i.postimg.cc/yxQWCfp1/Mapa_das_Terras_Enjoativas.webp'
  },
  {
    id: 'stygaea',
    name: 'Stygaea',
    levelRange: 'Lv. 40-50',
    description: 'O submundo em chamas. Uma dimensão infernal controlada pelas forças da Legião Caída.',
    imageUrl: 'https://i.postimg.cc/kMspzGPD/08_Stygaea.webp',
    detailedMapUrl: 'https://i.postimg.cc/5y7jWPK2/Mapa_de_Stygaea.webp'
  },
  {
    id: 'ellora',
    name: "Ellora's Sanctuary",
    levelRange: 'Lv. 50-55',
    description: 'Um santuário divino banhado em luz, agora ameaçado pela corrupção que tenta manchar sua pureza.',
    imageUrl: 'https://i.postimg.cc/CM7QX5pz/09_Ellora_Sanctuary.webp',
    detailedMapUrl: 'https://i.postimg.cc/3NSWQLfR/Mapa_do_Santuário_de_Ellora.webp'
  },
  {
    id: 'windhome',
    name: 'Windhome Canyon',
    levelRange: 'Lv. 45-55',
    description: 'Desfiladeiros ventosos habitados por bestas rochosas e dragões das tempestades. O vento aqui corta como navalha.',
    imageUrl: 'https://i.postimg.cc/Gt79nMgt/Mapa_do_Cânion_Windhome.webp', 
    detailedMapUrl: 'https://i.postimg.cc/Gt79nMgt/Mapa_do_Cânion_Windhome.webp'
  },
  {
    id: 'akrat',
    name: 'Akrat Plains',
    levelRange: 'Lv. 55-60',
    description: 'Planícies vastas e selvagens, lar de tribos guerreiras e bestas colossais que vagam livres.',
    imageUrl: 'https://i.postimg.cc/QNmywCZF/10_Akrat_Plains.webp',
    detailedMapUrl: 'https://i.postimg.cc/Kjq4h9pF/Mapa_das_Planícies_de_Akrat.webp'
  },
  {
    id: 'turimnan',
    name: 'Turimnan Valley',
    levelRange: 'Lv. 60-65',
    description: 'Uma selva proibida repleta de insetos gigantes e horrores biológicos.',
    imageUrl: 'https://i.postimg.cc/L4Dbw5FY/11_Turimnan_Valley.webp',
    detailedMapUrl: 'https://i.postimg.cc/J06tCTYG/Mapa_do_Vale_de_Turimnan.webp'
  },
  {
    id: 'magmapora',
    name: 'Magmapora',
    levelRange: '???',
    description: 'Uma região vulcânica instável. O calor é tão intenso que derrete armaduras comuns. O acesso está atualmente selado.',
    imageUrl: 'https://i.postimg.cc/zD7c6vYH/12_Magmapora.webp',
    locked: true
  }
];

export const GAME_CLASSES: GameClass[] = [
  {
    id: 'berserker',
    name: 'Berserker',
    role: 'Tank / DPS',
    description: 'Um guerreiro selvagem que usa a raiva para dizimar inimigos com ataques devastadores de curta distância. Sua força bruta é temida em todo o continente.',
    difficulty: 3,
    imageUrl: 'https://i.postimg.cc/y8tX9WrS/Berserk.png'
  },
  {
    id: 'guardian',
    name: 'Guardian',
    role: 'Tank',
    description: 'O protetor inabalável. Usa escudo e espada para defender aliados e controlar o campo de batalha com defesa impenetrável e fé divina.',
    difficulty: 2,
    imageUrl: 'https://i.postimg.cc/0yb0b7Zf/Guardian.png'
  },
  {
    id: 'assassin',
    name: 'Assassin',
    role: 'DPS',
    description: 'Mestre da furtividade e agilidade. Ataca das sombras com adagas duplas causando dano crítico massivo antes de desaparecer na escuridão.',
    difficulty: 5,
    imageUrl: 'https://i.postimg.cc/fyVQJZfY/Assassina.png'
  },
  {
    id: 'priest',
    name: 'Priest',
    role: 'Support / Healer',
    description: 'A luz sagrada que mantém o grupo vivo. Possui poderosas curas e buffs para fortalecer os aliados contra as forças das trevas.',
    difficulty: 2,
    imageUrl: 'https://i.postimg.cc/W1hwh0S8/Priest.png'
  },
  {
    id: 'magician',
    name: 'Magician', 
    role: 'Ranged DPS',
    description: 'Comanda os elementos primordiais. Lança bolas de fogo e gelo para destruir grupos de inimigos à distância com magia destrutiva.',
    difficulty: 4,
    imageUrl: 'https://i.postimg.cc/sgq9S10W/Magician.png'
  },
  {
    id: 'ranger',
    name: 'Ranger',
    role: 'Ranged DPS',
    description: 'Um atirador de elite que usa o arco e o caos do campo de batalha a seu favor. Combina ataques à distância com manobras corpo a corpo.',
    difficulty: 3,
    imageUrl: 'https://i.postimg.cc/YCZfgjy8/Ranger.png'
  },
  {
    id: 'trickster',
    name: 'Trickster',
    role: 'Support / DPS',
    description: 'Uma classe adorável mas mortal. Usa bonecos mágicos e truques para confundir inimigos e apoiar aliados com buffs únicos.',
    difficulty: 4,
    imageUrl: 'https://i.postimg.cc/sgq9S100/Trickster.png'
  },
  {
    id: 'feiticeiro',
    name: 'Feiticeiro',
    role: 'Ranged DPS / Debuff',
    description: 'Um manipulador das artes proibidas. Diferente dos Magos, o Feiticeiro canaliza energia caótica para lançar maldições debilitantes e explosões de magia negra, controlando o campo de batalha com poder avassalador.',
    difficulty: 4,
    imageUrl: 'https://i.postimg.cc/fLjx6CWc/W04.png'
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Visual: A Ira dos Magmas',
    date: '15 Out 2023',
    category: 'Novidades',
    summary: 'Testemunhe os novos monstros colossais de Magmapora, os companheiros de fogo que aguardam domação e as novas vestimentas forjadas em lava.',
    imageUrl: 'https://i.postimg.cc/hjKHc9Zv/Trapaceiro.webp'
  },
  {
    id: '2',
    title: 'Evento de XP em Dobro',
    date: '10 Out 2023',
    category: 'Event',
    summary: 'Aproveite este fim de semana para evoluir seus personagens e familiares com o dobro de experiência.',
    imageUrl: 'https://i.postimg.cc/Cxz8rXFn/Hakain_Daily_Deals_Banner.webp'
  },
  {
    id: '3',
    title: 'Manutenção Programada',
    date: '08 Out 2023',
    category: 'Maintenance',
    summary: 'Servidores ficarão indisponíveis por 4 horas para aplicação de correções e melhorias de estabilidade.',
    imageUrl: 'https://i.postimg.cc/4yyGvpT1/012.webp'
  }
];