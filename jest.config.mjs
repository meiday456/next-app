import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: 'jest-environment-jsdom',
  preset : 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

export default createJestConfig(config)