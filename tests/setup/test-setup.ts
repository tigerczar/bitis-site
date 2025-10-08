import { vi } from 'vitest'
import { config } from '@vue/test-utils'

vi.mock('#app', () => ({
  useNuxtApp: () => ({
    $logger: { 
      trace: vi.fn(),
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      fatal: vi.fn(),
      time: vi.fn(),
      timeEnd: vi.fn(),
      child: vi.fn(() => ({ trace: vi.fn(), debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn(), fatal: vi.fn(), time: vi.fn(), timeEnd: vi.fn() })),
    },
  }),
}))

// Global stubs to stabilize tests and avoid external module dependencies
config.global.stubs = {
  NuxtLink: {
    name: 'NuxtLink',
    props: ['to'],
    template: '<a :href="to"><slot /></a>',
  },
  NuxtImg: {
    name: 'NuxtImg',
    inheritAttrs: false,
    props: ['src', 'alt'],
    template: '<img :src="src" :alt="alt" />',
  },
  transition: false as any,
}
