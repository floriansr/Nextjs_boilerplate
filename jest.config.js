/* eslint-disable @typescript-eslint/no-var-requires */ // Require statement not part of import statement

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  testEnvironment: 'jsdom',
  rootDir: '.',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
  collectCoverage: false,
  collectCoverageFrom: ['src/ui/**/*.tsx']
};

module.exports = config;
