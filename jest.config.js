module.exports = {
  
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    "modulePaths": ["node_modules","<rootDir>/src"],

    moduleNameMapper: {
      /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  
      /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
      '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@stories/(.*)$': '<rootDir>/src/stories/$1',
    },

    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/__tests__/fixtures/'],
    testEnvironment: 'jsdom',
    transform: {
      /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ]
  }