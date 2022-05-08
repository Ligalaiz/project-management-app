module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jest'],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    semi: ['warn', 'always'],
    'cypress/no-unnecessary-waiting': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@emotion/jsx-import': 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['warn', { code: 120 }],
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Restricted default export, prefer named exports!',
      },
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', '.js'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 0,
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'react/prefer-stateless-function': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-no-useless-fragment': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>),
      //  default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the
      // version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the
      // detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under
        // `<root>@types` directory even it
        // doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use
        // <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',
      },
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g.
      // `forbidExtraProps`. If this isn't set,
      //  any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg.
      // <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx', '*.d.ts'],
      rules: {
        'no-restricted-syntax': ['off'],
      },
    },
    {
      files: ['*.spec.js'],
      rules: {
        'jest/expect-expect': 0,
        'jest/valid-expect-in-promise': 0,
        'jest/valid-expect': 0,
        'no-unused-expressions': 0,
      },
    },
  ],
};
