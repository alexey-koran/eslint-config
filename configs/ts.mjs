import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from 'typescript-eslint';

import { tsRules, stylisticRules } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const typeScriptConfig = {
  name: 'eslint-config/typescript',
  files: [supportedFileTypes.ts, supportedFileTypes.tsx],
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      jsxPragma: null, // @typescript/eslint-parser
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
    '@stylistic': stylistic,
  },
  rules: {
    ...typescriptEslint.configs['strictTypeChecked'].rules,
    ...typescriptEslint.configs['stylisticTypeChecked'].rules,
    ...tsRules,
    ...stylisticRules.ts,
  },
};
