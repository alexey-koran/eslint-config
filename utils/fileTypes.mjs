import { jsExtStr, jsxExtStr, tsExtStr, tsxExtStr, extensionsStr } from './extensions.mjs';

export const supportedFileTypes = {
  all: `**/*.{${extensionsStr}}`,
  js: `**/*.{${jsExtStr}}`,
  jsx: `**/*.{${jsxExtStr}}`,
  ts: `**/*.{${tsExtStr}}`,
  tsx: `**/*.{${tsxExtStr}}`,
};
