module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    'eslint: recommended',
    'plugin:jest/all',
  ],
  rules: {
    'no-unused-vars': ['error', { 'args': 'none' }]
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
