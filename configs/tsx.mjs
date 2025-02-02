import typescriptEslint from 'typescript-eslint';

import { getTsNamingConventionRule } from '../rules/ts.mjs';
import { supportedFileTypes } from '../utils/fileTypes.mjs';

export const typeScriptReactConfig = {
  name: 'eslint-config/typescript-react',
  files: [supportedFileTypes.tsx],
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  rules: {
    ...getTsNamingConventionRule({ isTsx: true }),
  },
};
