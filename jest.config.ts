module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup.jest.ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1", // Esto ayudará a Jest a resolver las rutas de importación desde src/
  },
};
