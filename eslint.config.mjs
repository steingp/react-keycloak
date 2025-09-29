import js from '@eslint/js';
import { configs as nxConfigs } from '@nx/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const nxFlat = nxConfigs['flat/recommended'] ?? nxConfigs.recommended ?? [];

export default [
  // Ignorer genererte greier
  {
    ignores: [
      '**/dist/**',
      '**/coverage/**',
      '**/test-output/**',
      '**/node_modules/**',
      '**/.nx/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },

  js.configs.recommended,
  ...nxFlat,

  // --- TypeScript / TSX (kilde + config-filer) ---
  {
    files: ['**/*.{ts,tsx}'], // inkluderer *.ts, *.tsx
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
        project: false, // ikke type-aware linting
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      // legg evt. dine regler her
    },
  },

  // --- JS/JSX (vanlig espree) ---
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },

  {
    files: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
    languageOptions: {
      // behold ev. parser fra tidligere blokker; vi setter bare globals:
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.vitest, // <-- her kommer describe/it/expect/vi m.fl.
      },
    },
    rules: {
      // valgfritt: gjør det eksplisitt at disse ikke er 'undef'
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // noen bruker dette
        vi: true,
        describe: true,
        it: true,
        expect: true,
        beforeAll: true,
        beforeEach: true,
        afterAll: true,
        afterEach: true,
      },
    },
  },
];
