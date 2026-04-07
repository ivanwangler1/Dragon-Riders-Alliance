import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente baseadas no modo atual (ex: .env.local, Vercel env vars)
  // Casting process to any to avoid TypeScript error about missing 'cwd' property on 'Process' type
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react(), cloudflare()],
    server: {
      proxy: {
        '/backend': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/backend/, '/backend')
        }
      }
    },
    define: {
      // Garante que o código client-side consiga acessar process.env.API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});