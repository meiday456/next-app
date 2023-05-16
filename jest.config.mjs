import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["jest-plugin-context/setup", "<rootDir>/jest.setup.js"],
  collectCoverageFrom :[
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "!./pages/api/**",
    "!./pages/_app.tsx",
    "!./pages/_document.tsx",
    "!./src/mocks/**",
    "!./src/types/**"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default createJestConfig(config);
