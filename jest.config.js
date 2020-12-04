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
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/ui/AppBox/*.tsx',
    'src/ui/Typography/Heading/*.tsx',
    'src/ui/Typography/Text/*.tsx',
    'src/ui/Typography/AppLink/*.tsx'
  ]
};
// 'src/ui/**/*.tsx';
module.exports = config;
