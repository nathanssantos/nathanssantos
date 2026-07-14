import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default eslintConfig;
