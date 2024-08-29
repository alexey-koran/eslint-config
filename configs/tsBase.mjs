import typescriptEslint from 'typescript-eslint';

import { getTsNamingConventionRule } from '../rules/ts.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const typeScriptBaseConfig = {
  files: [supportedFileTypes.ts],
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  rules: {
    ...getTsNamingConventionRule(),
  },
};
