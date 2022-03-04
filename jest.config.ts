import { InitialOptionsTsJest, pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const config: InitialOptionsTsJest = {
  clearMocks: true,
  preset: "ts-jest",
  rootDir: "src",
  moduleNameMapper: pathsToModuleNameMapper(
    { ...compilerOptions.paths },
    {
      prefix: "<rootDir>/",
    }
  ),
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      isolatedModules: true,
      tsconfig: "tsconfig.test.json",
    },
  },
  maxWorkers: 1,
  setupFilesAfterEnv: ["<rootDir>/../jest.setup.ts"],
};
export default config;
