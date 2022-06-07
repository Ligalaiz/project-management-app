module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist', 'cypress'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],
  collectCoverageFrom: [
    'src/components/**/*',
    'src/modules/**/*',
    'src/screens/**/*',
    'src/utils/**/*',
    '!**/node_modules/**',
    '!src/stories/**',
    '!src/modules/Form/Form.handlers.tsx',
    '!src/components/GitLink/**/*',
    '!src/**/index.ts',
    '!src/screens/Layout/*',
    '!src/utils/renderApp.utils.tsx',
    '!src/**/*.style.ts',
  ],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/internals/mocks/FileTransformer.js',
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/internals/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/internals/mocks/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -12,
    },
  },
};
