# React + TypeScript + Vite

## Prettier configuration :

```TypeScript
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true
}
```

## ESLint configuration

```TypeScript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules", "*.config.ts", "*.d.ts"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: ["eslint:recommended", "google", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "require-jsdoc": "off",
  },
};
```

## Commit message format

This project use `commitlint` to check if your commit messages meet the [conventional commit format] (https://conventionalcommits.org)
Commit messages must follow this pattern:

```sh
type(scope?):subject #scope is optional
```

### Type

The type of change being made in the commit.

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- `ci`: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs).
- `chore`: add something without touching production code (Eg: update npm dependencies).
- `docs`: Documentation only changes.
- `feat`: A new feature.
- `fix`: A bug fix.
- `perf`: A code change that improves performance.
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `revert`: Reverts a previous commit.
- `style`: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.
