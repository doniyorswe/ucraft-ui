import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isDocs = mode === 'docs';
  const isLib = mode === 'lib';

  return {
    plugins: [
      react(),
      tailwindcss(),
      !isDocs &&
        dts({
          insertTypesEntry: true,
          include: ['src/**/*'],
          exclude: ['src/**/*.test.*', 'src/docs/**/*', 'src/**/*.css'],
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: isDocs
      ? {
          outDir: 'dist-docs',
        }
      : isLib
        ? {
            lib: {
              entry: resolve(__dirname, 'src/index.ts'),
              name: 'UcraftUI',
              fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
              formats: ['es', 'cjs'],
            },
            rollupOptions: {
              external: ['react', 'react-dom'],
              output: {
                globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                },
                format: 'es',
                preserveModules: false,
              },
            },
            cssCodeSplit: false,
            outDir: './dist',
            emptyOutDir: true,
          }
        : {
            lib: {
              entry: resolve(__dirname, 'src/index.ts'),
              name: 'UcraftUI',
              fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
              formats: ['es', 'cjs'],
            },
            rollupOptions: {
              external: ['react', 'react-dom'],
              output: {
                globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                },
                format: 'es',
                preserveModules: false,
              },
            },
            cssCodeSplit: true,
            outDir: './dist',
            emptyOutDir: true,
          },
  };
});
