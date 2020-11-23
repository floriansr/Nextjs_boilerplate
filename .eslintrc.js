module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'import', 'react-hooks', '@typescript-eslint'],
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
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
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
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/display-name': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'react-hooks/rules-of-hooks': ['off'], // Vérifie les règles des Hooks
    'react-hooks/exhaustive-deps': ['off'], // Vérifie les tableaux de dépendances
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-unused-vars': ['off'],
    'no-underscore-dangle': ['off'],
    'no-console': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'import/no-unresolved': ['warn'],
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
          ['^react'],
          ['^@?\\w'],
          ['^\\u0000'],
          ['^assets(/.*|$)'],
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
    'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
  }
};
