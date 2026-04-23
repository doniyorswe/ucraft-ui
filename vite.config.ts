import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(() => {
  const isDocs = process.env.BUILD_MODE === 'docs';

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
      : {
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'UcraftUI',
            fileName: (format) => `index.${format === 'es' ? 'es.js' : 'cjs'}`,
            formats: ['es', 'cjs'],
          },
          rollupOptions: {
            external: [
              'react',
              'react-dom',
              'next-intl',
              'next',
              'next/navigation',
              'next-intl/server',
              'tailwindcss',
              'react-query',
              'src/outof-build',
              'react-hot-toast',
              'react-redux',
              'reselect',
              'ucraft-ui',
              // "jquery"
            ],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
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
