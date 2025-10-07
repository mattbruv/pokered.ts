const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules", "\\.d\\.ts$", "/dist"],
  transform: {
    ...tsJestTransformCfg
  }
};
