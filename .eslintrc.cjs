module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    '*.config.ts',
    '*.d.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: ['eslint:recommended', 'google', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'require-jsdoc': 'off',
  },
};
