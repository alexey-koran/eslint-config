import { baseConfig } from './configs/base.mjs';
import { javaScriptConfig } from './configs/js.mjs';
import { reactConfig } from './configs/react.mjs';
import { typeScriptConfig } from './configs/ts.mjs';
import { typeScriptBaseConfig } from './configs/tsBase.mjs';
import { typeScriptReactConfig } from './configs/tsx.mjs';

export const shareableConfig = [
  baseConfig,
  javaScriptConfig,
  reactConfig,
  typeScriptConfig,
  typeScriptBaseConfig,
  typeScriptReactConfig,
];
