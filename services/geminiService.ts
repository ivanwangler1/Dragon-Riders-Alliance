import { GoogleGenAI } from "@google/genai";

// Inicialização Lazy do cliente API para evitar crashes imediatos se a env var não estiver carregada
let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    // Note: process.env.API_KEY is assumed to be available in the environment
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Você é o "Oráculo de Hakanas", uma entidade antiga e sábia do universo do jogo MMORPG 'Dragon Riders Alliance'.
Seu objetivo é ajudar os 'Riders' (jogadores) com informações sobre o jogo, mas sempre mantendo um tom místico, épico e levemente arcaico.
Você sabe tudo sobre:
1. As classes do jogo (Berserker, Guardian, Priest, Magician, Assassin, Ranger, Trickster, Feiticeiro).
2. O sistema de 'Taming' (domar) familiares e montarias.
3. As regiões como Hakanas Highlands, Sea of Hakanas, Ellora's Sanctuary.
4. Dungeons e Raids.

Responda de forma concisa, útil, mas imersiva. Se o jogador perguntar algo fora do contexto do jogo, responda educadamente que sua visão está nublada para assuntos de outros mundos.
`;

export const askOracle = async (question: string): Promise<string> => {
  try {
    const client = getAIClient();
    
    // Verificação de segurança básica
    if (!process.env.API_KEY) {
      return "Minha conexão com o éter está interrompida. (API Key não configurada)";
    }

    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    return response.text || "O Oráculo permanece em silêncio... (Erro ao processar resposta)";
  } catch (error) {
    console.error("Erro ao consultar o Oráculo:", error);
    return "As brumas do caos obscurecem minha visão no momento. Tente novamente mais tarde.";
  }
};