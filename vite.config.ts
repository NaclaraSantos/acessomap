import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/acessomap/', // Isso é necessário para o GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório de saída de build
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


