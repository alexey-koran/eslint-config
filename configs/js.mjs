import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

import { jsRules, stylisticRules } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const javaScriptConfig = {
  name: 'eslint-config/javascript',
  files: [supportedFileTypes.js],
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...eslint.configs.recommended.rules,
    ...stylisticRules.js,
    ...jsRules,
  },
};
