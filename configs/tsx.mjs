import typescriptEslint from 'typescript-eslint';

import { getTsNamingConventionSelectors } from '../rules/index.mjs';
import { supportedFileTypes } from '../utils/index.mjs';

export const typeScriptReactConfig = {
  name: 'eslint-config/typescript-react',
  files: [supportedFileTypes.tsx],
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  rules: {
    '@typescript-eslint/naming-convention': [2, ...getTsNamingConventionSelectors({ isTsx: true })],
  },
};
