import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: '0.0.0.0',
      port: 5177,
  },
  build: {
    // 1. Increases the limit to 1000kb so the warning doesn't trigger as easily
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 2. Splitting vendor chunks (libraries in node_modules) 
        // into their own files to reduce index.js size
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
})
