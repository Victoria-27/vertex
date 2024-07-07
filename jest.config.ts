const path = require('path');

module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [
    '/node_modules/(?!@testing-library/jest-dom)',
  ],
};
