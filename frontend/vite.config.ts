import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: parseInt(process.env.PORT!) },
  resolve: {
    alias: {
      components: resolve(__dirname, 'src', 'components'),
      config: resolve(__dirname, 'src', 'config')
    }
  }
})
