import { baseConfig } from './configs/base.mjs';
import { javaScriptConfig } from './configs/js.mjs';
import { typeScriptConfig } from './configs/ts.mjs';
import { typeScriptBaseConfig } from './configs/tsBase.mjs';
import { supportedExtensions } from './utils/extensions.mjs';
import { supportedFileTypes } from './utils/fileTypes.mjs';

const config = [
  baseConfig,
  javaScriptConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  {
    name: 'local/javascript',
    files: [supportedFileTypes.js],
    settings: {
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
    name: 'local/typescript',
    files: [supportedFileTypes.ts],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          defaultProject: './tsconfig.json',
        },
      },
    },
  },
  {
    name: 'local/ignores',
    // The new config system no longer supports .eslintignore files
    // https://eslint.org/blog/2022/10/eslint-v8.25.0-released/#highlights
    ignores: ['build'],
  },
];

export default config;
