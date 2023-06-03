import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
    '/api': 'http://localhost:3001',
    "/create-checkout-session":'http://localhost:3001',
    }
  },
  
})
