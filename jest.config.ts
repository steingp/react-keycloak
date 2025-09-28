// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).(ts|tsx)'],
  collectCoverageFrom: [
    'libs/**/*.{ts,tsx}',
    '!**/index.{ts,tsx}',
    '!**/dist/**',
  ],
  // Nx monorepo: la Jest lete i src først
  moduleNameMapper: {
    '^@auth/(.*)$': '<rootDir>/libs/$1/src',
  },
};

export default config;
