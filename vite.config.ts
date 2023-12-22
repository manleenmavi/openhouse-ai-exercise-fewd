import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adding proxy to avoid CORS error
  server:{
    proxy:{
      "/api/googleapis-storage":{
        target:"https://storage.googleapis.com",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api\/googleapis-storage/, '')
      }
    }
  },
})
