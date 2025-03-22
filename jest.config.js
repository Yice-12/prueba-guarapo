/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { isolatedModules: true }],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.svg$": "jest-transform-stub",
  },
  coveragePathIgnorePatterns: ["<rootDir>/src/store/", "<rootDir>/src/const/"],
};
