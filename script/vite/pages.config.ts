import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'

export default defineConfig({
  plugins: [
    react()
  ],
  base: '/pages',
  server: {
    port: 17000,
    strictPort: true
  },
  build: {
    rollupOptions: {
      input: ['options.html', 'popup.html'],
      output: {
        dir: 'extension/pages',
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('src/lib'),
    },
  },
})
