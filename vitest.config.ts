
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app'),
      '#app': path.resolve(__dirname, './tests/setup/nuxt-app-stub.ts'),
    },
  },
  test: {
    globals: true,             
    environment: 'jsdom', 
    setupFiles: ['./tests/setup/test-setup.ts'],  
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules', '.nuxt'],
    },
  },
})
