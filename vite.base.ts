// vite.base.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, strictPort: false },
  preview: { port: 5174 },
  build: { sourcemap: true },
});
