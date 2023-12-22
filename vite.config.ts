import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [react()],
});
