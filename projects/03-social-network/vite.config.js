/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

// https://vitejs.dev/config/#conditional-config

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      // para hacer un deploy, configura propiedad base con el nombre/url de tu
      // para fazer uma implantação, defina a propriedade base para o nome/url do seu repositório
      // https://vitejs.dev/guide/static-deploy.html#github-pages
      // ejemplo base: '/social-network/',
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './dist',
          },
        },
      },
    };
  }
  return {};
});
