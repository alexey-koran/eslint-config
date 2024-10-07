import stylisticTSPlugin from '@stylistic/eslint-plugin-ts';
import typescriptEslint from 'typescript-eslint';

import { stylisticRules } from '../rules/stylistic.mjs';
import { tsRules } from '../rules/ts.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const typeScriptConfig = {
  files: [supportedFileTypes.ts, supportedFileTypes.tsx],
  settings: {
    'import/ignore': 'node_modules', // Temporary fix https://github.com/typescript-eslint/typescript-eslint/issues/9450
  },
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      jsxPragma: null, // @typescript/eslint-parser
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
    '@stylistic/ts': stylisticTSPlugin,
  },
  rules: {
    ...typescriptEslint.configs['strictTypeChecked'].rules,
    ...typescriptEslint.configs['stylisticTypeChecked'].rules,
    ...tsRules,
    ...stylisticRules.ts,
  },
};
