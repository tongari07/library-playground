import { essentials, react, typescript } from 'eslint-config-moneyforward/flat';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/*.config.{js,mjs,cjs,ts}'],
  },
  ...essentials,
  ...react,
  ...typescript,
  {
    rules: {
      // Allow JSX props to be spread
      // This is because some components need to accept html element attributes.
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
      'react/jsx-props-no-spreading': 'off',
    },
  },
  prettier,
];
