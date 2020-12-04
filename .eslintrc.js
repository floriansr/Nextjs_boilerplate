module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      },
      typescript: {
        project: ['src'],
        alwaysTryTypes: true
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
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
    'react/display-name': 1, // Component definition is missing display name
    'react/no-unescaped-entities': 1,
    'react/prop-types': [0, { ignore: ['children'] }], // 'something' is missing in props validation
    'react/react-in-jsx-scope': 1, // 'React' must be in scope when using JSX
    'react-hooks/rules-of-hooks': 1, // Vérifie les règles des Hooks
    'react-hooks/exhaustive-deps': 1, // Vérifie les tableaux de dépendances
    '@typescript-eslint/no-unused-vars': 1,
    'no-unused-vars': 1, // checks vars
    'no-underscore-dangle': 0, // check underscore
    'no-console': 1, // check if console.log
    '@typescript-eslint/no-var-requires': 1, // Require statement not part of import statement
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/member-delimiter-style': [
      2,
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
      2,
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 0, // Missing return type on function
    '@typescript-eslint/explicit-module-boundary-types': 0, // Missing return type on function / Argument 'req' should be typed
    '@typescript-eslint/explicit-member-accessibility': 0, // Missing accessibility modifier on method definition getInitialProps
    '@typescript-eslint/no-explicit-any': 0, // Unexpected any. Specify a different type
    '@typescript-eslint/ban-ts-comment': 0, // Do not use "@ts-ignore" because it alters compilation errors
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'nesting'
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'import/no-unresolved': 1, // turn on warnings for missing imports
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^react'],
          ['^next'],
          ['^@?\\w'],
          ['^\\u0000'],
          ['^styles(/.*|$)'],
          ['^ui(/.*|$)'],
          ['^services(/.*|$)'],
          ['^tools(/.*|$)'],
          ['^components(/.*|$)'],
          ['^\\.']
        ]
      }
    ],
    'prettier/prettier': [2, {}, { usePrettierrc: true }] // Use our .prettierrc file as source
  }
};
