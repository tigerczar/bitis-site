import { vi } from 'vitest'

// Mock các phần Nuxt dùng trong component
vi.mock('#app', () => ({
  useNuxtApp: () => ({
    $logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
  }),
}))
