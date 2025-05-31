import eslint from '@eslint/js';
import stylisticJSPlugin from '@stylistic/eslint-plugin-js';

import { jsRules, stylisticRules } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const javaScriptConfig = {
  name: 'eslint-config/javascript',
  files: [supportedFileTypes.js],
  plugins: {
    '@stylistic/js': stylisticJSPlugin,
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...stylisticRules.js,
    ...jsRules,
  },
};
