const js = {
  default: 'js',
  commonJS: 'cjs',
  esm: 'mjs',
};

const jsx = {
  default: 'jsx',
  commonJS: 'cjsx',
  esm: 'mjsx',
};

const ts = {
  default: 'ts',
  commonJS: 'cts',
  esm: 'mts',
};

const tsx = {
  default: 'tsx',
  commonJS: 'ctsx',
  esm: 'mtsx',
};

const getExtensionsArr = ({ extObj, options: { startsWithDot = false } = {} }) => {
  const extensionsArr = Object.values(extObj);

  if (startsWithDot) {
    return extensionsArr.map((extension) => `.${extension}`);
  }

  return extensionsArr;
};

const jsExtArr = getExtensionsArr({
  extObj: js,
  options: { startsWithDot: true },
});

const jsxExtArr = getExtensionsArr({
  extObj: jsx,
  options: { startsWithDot: true },
});

const tsExtArr = getExtensionsArr({
  extObj: ts,
  options: { startsWithDot: true },
});

const tsxExtArr = getExtensionsArr({
  extObj: tsx,
  options: { startsWithDot: true },
});

const extensionsArr = [...jsExtArr, ...jsxExtArr, ...tsExtArr, ...tsxExtArr];

export const supportedExtensions = {
  all: extensionsArr,
  js: jsExtArr,
  jsx: jsxExtArr,
  ts: tsExtArr,
  tsx: tsxExtArr,
};

const getExtensionsStr = ({ extObj, options: { separator = ',' } = {} }) =>
  getExtensionsArr({ extObj }).join(separator);

export const jsExtStr = getExtensionsStr({
  extObj: js,
});

export const jsxExtStr = getExtensionsStr({
  extObj: jsx,
});

export const tsExtStr = getExtensionsStr({
  extObj: ts,
});

export const tsxExtStr = getExtensionsStr({
  extObj: tsx,
});

export const extensionsStr = `${jsExtStr},${jsxExtStr},${tsExtStr},${tsxExtStr}`;
