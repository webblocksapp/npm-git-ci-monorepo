import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'DemoLib',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
