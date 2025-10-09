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
