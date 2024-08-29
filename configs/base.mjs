import { fixupPluginRules } from '@eslint/compat';
import stylisticJS from '@stylistic/eslint-plugin-js';
import pluginImport from 'eslint-plugin-import';
import pluginImportConfig from 'eslint-plugin-import/config/recommended.js';
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
    // TODO: Remove after eslint-plugin-import update
    // fixupPluginRules wraps each rule in the given plugin using fixupRule()
    // and returns a new object that represents the plugin with the fixed-up rules
    import: fixupPluginRules(pluginImport),
    prettier: prettierPlugin,
    '@stylistic/js': stylisticJS,
  },
  rules: {
    ...prettierConfig.rules,
    ...pluginImportConfig.rules,
    ...jsRules,
    ...importRules,
    ...stylisticRules.js,
  },
};
