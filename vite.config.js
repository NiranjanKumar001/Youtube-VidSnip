import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx',
        background: 'src/background.js',
        content: 'src/content.js',
        popup: 'index.html'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});
