import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PORT } from './config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: parseInt(PORT) },
  resolve: { alias: { src: '/src' } }
})
