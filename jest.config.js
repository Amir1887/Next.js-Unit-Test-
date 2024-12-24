//  integrate Jest with Next.js

const nextJest = require('next/jest') 

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  // automatically handling things like loading your next.config.js and .env files during testing.
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'], // setup.ts file is used to configure things like mock libraries or global settings for tests.
  testEnvironment: 'jest-environment-jsdom', // Defines the environment in which Jest tests will run (browser-like environment suitable for testing React components.)
  moduleNameMapper: { // Maps module paths to specific directories, simplifying imports during testing.
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  }
}

module.exports = createJestConfig(customJestConfig)