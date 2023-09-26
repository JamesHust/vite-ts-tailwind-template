/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:security/recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-var': 'error',
    'quotes': ['error', 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'id-length': [2, { exceptions: ['i', 'j', '_'] }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'prettier/prettier': [
      'warn',
      {
        'arrowParens': 'always',
        'bracketSpacing': true,
        'bracketSameLine': false,
        'jsxSingleQuote': false,
        'printWidth': 120, // default: 80 --is too short
        'quoteProps': 'as-needed',
        'semi': false,
        'singleQuote': true,
        'tabWidth': 2,
        'trailingComma': 'es5',
        'useTabs': false,
        'singleAttributePerLine': false,
        'endOfLine': 'auto'
      }
    ]
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
