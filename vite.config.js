import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  assetsInclude: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
