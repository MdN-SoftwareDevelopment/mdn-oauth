module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier',
    'standard-jsx'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['warn'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/prop-types': 'off',
    'max-len': [1, { code: 80 }],
    'comma-dangle': ['warn'],
    'space-before-function-paren': 0,
    'multiline-ternary': 0,
    'react/jsx-curly-newline': 0,
    camelcase: 0,
    semi: 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': 0,
    'no-multi-str': 0
  }
};
