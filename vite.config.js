import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LAB3_my-portfolio/', // path ที่ต้องการ
  plugins: [react()],
});