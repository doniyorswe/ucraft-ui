import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      dts({
        tsconfigPath: './tsconfig.lib.json',
        rollupTypes: true,
        insertTypesEntry: true,
        include: ['src/**/*'],
        exclude: ['src/**/*.test.*', 'src/docs/**/*', 'src/**/*.css'],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'UcraftUI',
        fileName: (format) => `index.${format === 'esm' ? 'esm.js' : 'js'}`,
      },
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/index.ts'),
        },
        external: ['react', 'react-dom'],
        output: [
          {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            format: 'esm',
            preserveModules: false,
          },
          {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            format: 'cjs',
            preserveModules: false,
          },
        ],
      },
      cssCodeSplit: false,
      outDir: './dist',
      emptyOutDir: true,
    },
  };
});
