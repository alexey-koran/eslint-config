import { jsExtObj, jsxExtObj, tsExtObj, tsxExtObj, getExtensionsStr } from './extensions.mjs';

const jsExtStr = getExtensionsStr({
  extObj: jsExtObj,
  options: { separator: ',' },
});

const jsxExtStr = getExtensionsStr({
  extObj: jsxExtObj,
  options: { separator: ',' },
});

const tsExtStr = getExtensionsStr({
  extObj: tsExtObj,
  options: { separator: ',' },
});

const tsxExtStr = getExtensionsStr({
  extObj: tsxExtObj,
  options: { separator: ',' },
});

const allExtStr = `${jsExtStr},${jsxExtStr},${tsExtStr},${tsxExtStr}`;

export const supportedFileTypes = {
  all: `**/*.{${allExtStr}}`,
  js: `**/*.{${jsExtStr}}`,
  jsx: `**/*.{${jsxExtStr}}`,
  ts: `**/*.{${tsExtStr}}`,
  tsx: `**/*.{${tsxExtStr}}`,
};
