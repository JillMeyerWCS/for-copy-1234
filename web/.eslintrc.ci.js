module.exports = {
  "extends": ["./.eslintrc.js"],
  "ignorePatterns": [
    "src/generated/.*",
    "src/**/*.test.*",
    "src/global.d.ts",
    "src/serviceWorker.ts"
  ],
  "rules": {
    "import/no-unused-modules": [1, { "unusedExports": true }],
    "import/order": "warn"
  }
}
