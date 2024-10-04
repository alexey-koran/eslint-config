import stylisticJSPlugin from '@stylistic/eslint-plugin-js';
import importPlugin from 'eslint-plugin-import';
import importConfig from 'eslint-plugin-import/config/recommended.js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import typescriptEslint from 'typescript-eslint';

import { importRules } from '../rules/import.mjs';
import { jsRules } from '../rules/js.mjs';
import { stylisticRules } from '../rules/stylistic.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const baseConfig = {
  files: [supportedFileTypes.all],
  languageOptions: {
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
    '@stylistic/js': stylisticJSPlugin,
  },
  rules: {
    ...prettierConfig.rules,
    ...importConfig.rules,
    ...jsRules,
    ...importRules,
    ...stylisticRules.js,
  },
};
