import eslint from '@eslint/js';

import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const javaScriptConfig = {
  files: [supportedFileTypes.js],
  rules: {
    ...eslint.configs.recommended.rules,
  },
};
