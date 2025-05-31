import typescriptEslint from 'typescript-eslint';

import { getTsNamingConventionSelectors } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const typeScriptBaseConfig = {
  name: 'eslint-config/typescript-base',
  files: [supportedFileTypes.ts],
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  rules: {
    '@typescript-eslint/naming-convention': [2, ...getTsNamingConventionSelectors()],
  },
};
