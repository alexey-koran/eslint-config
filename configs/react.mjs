import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import stylistic from '@stylistic/eslint-plugin';
import reactAccessibility from 'eslint-plugin-jsx-a11y';

import { reactRules, stylisticRules } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const reactConfig = {
  name: 'eslint-config/react',
  files: [supportedFileTypes.jsx, supportedFileTypes.tsx],
  settings: {
    react: {
      version: 'detect',
    },
  },
  languageOptions: {
    globals: {
      JSX: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // eslint-plugin-react
      },
    },
  },
  plugins: {
    'jsx-a11y': reactAccessibility,
    react: reactPlugin,
    'react-hooks': reactHooks,
    '@stylistic': stylistic,
  },
  rules: {
    ...reactAccessibility.configs.recommended.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...reactRules,
    ...stylisticRules.react,
  },
};
