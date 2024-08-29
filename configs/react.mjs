import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import stylisticJSX from '@stylistic/eslint-plugin-jsx';
import reactAccessibility from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

import { reactRules } from '../rules/react.mjs';
import { stylisticRules } from '../rules/stylistic.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const reactConfig = {
  files: [supportedFileTypes.jsx, supportedFileTypes.tsx],
  settings: {
    react: {
      version: 'detect',
    },
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
      JSX: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // eslint-plugin-react
      },
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
    'jsx-a11y': reactAccessibility,
    react: reactPlugin,
    'react-hooks': reactHooks,
    '@stylistic/jsx': stylisticJSX,
  },
  rules: {
    ...reactAccessibility.configs.recommended.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...reactRules,
    ...stylisticRules.react,
  },
};
