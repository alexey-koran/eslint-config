/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

export const stylisticRules = {
  js: {
    '@stylistic/js/spaced-comment': [
      2,
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+', '*'],
        },
        block: {
          balanced: true,
        },
      },
    ],
    '@stylistic/js/newline-per-chained-call': 2,
  },
  ts: {
    '@stylistic/ts/padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'case',
          'default',
          'block',
          'block-like',
          'multiline-block-like',
          'interface',
          'type',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type'],
      },
    ],
  },
  react: {
    '@stylistic/jsx/jsx-pascal-case': 2,
    '@stylistic/jsx/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        multiline: 'last',
        reservedFirst: false,
      },
    ],
  },
};
