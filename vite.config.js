import { defineConfig } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const {
  FIREBASE_PROJECT,
  FIREBASE_API_KEY,
  LABORATORIA_CORE_API_URL,
  SENTRY_DSN,
  npm_package_version,
} = process.env;

export default defineConfig(() => {
  return {
    server: {
      host: 'localhost',
      port: 3000,
    },
    define: {
      'process.env': {
        FIREBASE_PROJECT,
        FIREBASE_API_KEY,
        LABORATORIA_CORE_API_URL,
        SENTRY_DSN,
        VERSION: npm_package_version,
      },
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    plugins: [
      react(),
      sentryVitePlugin({
        org: 'laboratoria',
        project: 'curriculum',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.js'],
    },
  };
});
