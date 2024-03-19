import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias:[
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, 'src/components/layout')
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname, 'src/components/partials')
      }
    ]
  }
})
