export const jsExtObj = {
  default: 'js',
  commonJS: 'cjs',
  esm: 'mjs',
};

export const jsxExtObj = {
  default: 'jsx',
  commonJS: 'cjsx',
  esm: 'mjsx',
};

export const tsExtObj = {
  default: 'ts',
  commonJS: 'cts',
  esm: 'mts',
};

export const tsxExtObj = {
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

export const getExtensionsStr = ({ extObj, options: { separator = '' } }) =>
  getExtensionsArr({ extObj }).join(separator);

const jsExtArr = getExtensionsArr({
  extObj: jsExtObj,
  options: { startsWithDot: true },
});

const jsxExtArr = getExtensionsArr({
  extObj: jsxExtObj,
  options: { startsWithDot: true },
});

const tsExtArr = getExtensionsArr({
  extObj: tsExtObj,
  options: { startsWithDot: true },
});

const tsxExtArr = getExtensionsArr({
  extObj: tsxExtObj,
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
