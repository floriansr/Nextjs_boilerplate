module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'import', 'react-hooks'], // Order of your import statements
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    react: {
      version: 'detect' // Automatically detect the react version
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: ['src']
      }
    }
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react-hooks/rules-of-hooks': ['warn'], // Vérifie les règles des Hooks
    'react-hooks/exhaustive-deps': ['warn'], // Vérifie les tableaux de dépendances
    'no-unused-vars': ['warn'],
    'no-underscore-dangle': ['off'],
    'no-console': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-unresolved': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-a11y/media-has-caption': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'nesting'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['^\\u0000'],
          ['^assets(/.*|$)'],
          ['^react'],
          ['^redux(/.*|$)'],
          ['^constants(/.*|$)'],
          ['^services(/.*|$)'],
          ['^tools(/.*|$)'],
          ['^components(/.*|$)'],
          ['^pages(/.*|$)'],
          ['^\\.']
        ]
      }
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/prop-types': ['off']
  }
};
