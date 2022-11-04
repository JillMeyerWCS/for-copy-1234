module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "prettier"
  ],
  "ignorePatterns": [
    ".eslintrc.js",
    ".eslintrc.ci.js",
    "env_vars.js",
    "src/generated/*",
    "src/**/*.test.*",
    "src/global.d.ts",
    "reportWebVitals.ts",
    "src/serviceWorkerRegistration.ts",
    "service-worker.js",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json",

    "sourceType": "module",
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-import",
    "import",
    "prefer-arrow",
    "react",
    "react-hooks"
  ],
  "rules": {
    "prettier/prettier": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
		"@typescript-eslint/no-unsafe-assignment": ["warn"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "arrow-parens": ["error", "as-needed"],
    "prefer-arrow/prefer-arrow-functions": "error",
    "no-console": "off",
    "sort-keys": ["warn", "asc", { "natural": true }],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "import/no-unresolved": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function"
      }
    ],
    "import/no-unused-modules": [1, { "unusedExports": true }],
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/no-cycle": [2, { "maxDepth": 1 }],
    "no-underscore-dangle": ["error", { "allow": ["__typename"] }],
    "quotes": ["error", "double"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "radix": "off",
    "no-plusplus": "off",
    "react/jsx-props-no-spreading": "off",
    "default-param-last": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-no-useless-fragment": [1, { "allowExpressions": true }],
    "@typescript-eslint/ban-ts-comment": "off",
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "arguments": false,
          "attributes": false
        }
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}
