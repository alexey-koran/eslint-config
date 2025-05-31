import importPlugin from 'eslint-plugin-import';
import importConfig from 'eslint-plugin-import/config/recommended.js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

import { importRules } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const baseConfig = {
  name: 'eslint-config/base',
  files: [supportedFileTypes.all],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
    parser: typescriptEslint.parser,
    parserOptions: {
      jsxPragma: null, // @typescript/eslint-parser
    },
  },
  linterOptions: {
    noInlineConfig: true,
    reportUnusedDisableDirectives: 'error',
  },
  plugins: {
    import: importPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    ...prettierConfig.rules,
    ...importConfig.rules,
    ...importRules,
  },
};
