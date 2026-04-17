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
          tsconfigPath: './tsconfig.app.json',
          insertTypesEntry: true,
        }),
    ].filter(Boolean),
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
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
              },
            },
          },
        },
  };
});
