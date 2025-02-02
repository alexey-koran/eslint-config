import eslint from '@eslint/js';
import stylisticJSPlugin from '@stylistic/eslint-plugin-js';

import { jsRules } from '../rules/js.mjs';
import { stylisticRules } from '../rules/stylistic.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

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
