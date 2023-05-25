import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
  transform:{}
});

const config = {
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/src/$1",
    "swiper/react": "<rootDir>/node_modules/swiper/react/swiper-react.js",
  },
  setupFilesAfterEnv: ["jest-plugin-context/setup", "<rootDir>/jest.setup.js"],
  extensionsToTreatAsEsm: [".ts",".tsx"],
  collectCoverageFrom :[
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "!./pages/api/**",
    "!./pages/_app.tsx",
    "!./pages/_document.tsx",
    "!./src/mocks/**",
    "!./src/types/**",
    "!./src/constants/**"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
  ],
  transformIgnorePatterns: ["<rootdir>/node_modules/(?!(swiper|ssr-window|dom7))"],
};

export default createJestConfig(config);
