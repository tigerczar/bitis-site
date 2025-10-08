// Minimal stub for '#app' to allow Vitest import resolution
// Tests will override this via vi.mock('#app', ...) in test-setup.ts
export const useNuxtApp = () => ({
  $logger: {
    trace: () => {},
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
    fatal: () => {},
    time: () => {},
    timeEnd: () => {},
    child: () => ({ trace: () => {}, debug: () => {}, info: () => {}, warn: () => {}, error: () => {}, fatal: () => {}, time: () => {}, timeEnd: () => {} }),
  },
})
