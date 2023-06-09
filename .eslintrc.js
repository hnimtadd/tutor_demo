// eslint-disable-next-line no-undef
module.exports = {
  'plugins': [
    'react'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'ignorePatterns': ['temp.jsx', '**/vendor/*.jsx','public/*.jsx'],
  'rules': {
    'react/prop-types': 0,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    'curly': [
      2,
      'all'
    ],
    'camelcase': [
      2,
      {
        'properties': 'always'
      }
    ],
    'eqeqeq': [
      2,
      'smart'
    ],
    'one-var-declaration-per-line': [
      2,
      'always'
    ],
    'new-cap': 2,
    'no-case-declarations': 0
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'arguments': true
  }
};
