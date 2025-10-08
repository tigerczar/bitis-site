// import { defineConfig } from 'vitest/config'
 

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
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
