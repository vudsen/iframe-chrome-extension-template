import renameHtmlPlugin from '../vite/rename-html-plugin'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/pages',
  plugins: [
    renameHtmlPlugin([
      {
        oldName: 'options-dev.html',
        newName: 'options.html'
      },
      {
        oldName: 'popup-dev.html',
        newName: 'popup.html'
      }
    ])
  ],
  build: {
    rollupOptions: {
      input: ['options-dev.html', 'popup-dev.html'],
      output: {
        dir: 'extension/pages',
      }
    },
  },
})