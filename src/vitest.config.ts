// vitest.config.ts
import { defineConfig } from "vitest/config";
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: "v8",
      reporter: ['text', 'json', 'html'],
      reportsDirectory: '../src/tests/unit/coverage'
    },
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
});


