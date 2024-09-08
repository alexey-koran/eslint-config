import { baseConfig } from './configs/base.mjs';
import { javaScriptConfig } from './configs/js.mjs';
import { supportedExtensions } from './utils/extensions.mjs';
import { supportedFileTypes } from './utils/fileTypes.mjs';

const config = [
  baseConfig,
  javaScriptConfig,
  {
    files: [supportedFileTypes.js],
    settings: {
      'import/ignore': 'node_modules', // Temporary fix https://github.com/typescript-eslint/typescript-eslint/issues/9450
      'import/extensions': supportedExtensions.js,
      'import/parsers': {
        '@typescript-eslint/parser': [...supportedExtensions.ts, ...supportedExtensions.tsx],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          paths: ['src'],
          extensions: supportedExtensions.js,
        },
      },
    },
  },
  {
    // The new config system no longer supports .eslintignore files
    // https://eslint.org/blog/2022/10/eslint-v8.25.0-released/#highlights
    ignores: ['build'],
  },
];

export default config;
