import { rulesMessages } from './messages.mjs';

/*
  https://eslint.org/docs/latest/use/configure/rules
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*/

export const jsRules = {
  'no-await-in-loop': 0,
  // eslint rules that not disabled by default via any config
  // use typescript-eslint version
  'no-shadow': 0,
  'no-return-await': 0, // @typescript-eslint/return-await
  'no-use-before-define': 0,
  'no-unused-expressions': 0,
  'padding-line-between-statements': 0,
  'prettier/prettier': 2, // eslint-plugin-prettier
  radix: 2,
  curly: 2,
  eqeqeq: 2,
  'default-case': 2,
  'default-case-last': 2,
  'object-shorthand': 2,
  'require-atomic-updates': 2,

  complexity: [2, 13],
  'max-depth': [2, 4],
  'max-nested-callbacks': [2, 5],

  'id-match': 2,
  'id-denylist': 2,

  'no-eval': 2,
  'no-alert': 2,
  'no-proto': 2,
  'no-labels': 2,
  'no-plusplus': 2,
  'no-lonely-if': 2,
  'no-multi-str': 2,
  'no-extra-bind': 2,
  'no-lone-blocks': 2,
  'no-self-compare': 2,
  'no-useless-call': 2,
  'no-useless-assignment': 2,
  'no-multi-assign': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 2,
  'no-extend-native': 2,
  'no-nested-ternary': 2,
  'no-unreachable-loop': 2,
  'no-negated-condition': 2,
  'no-implicit-coercion': 2,
  'no-constructor-return': 2,
  'no-object-constructor': 2,
  'no-promise-executor-return': 2,
  'no-new-native-nonconstructor': 2,
  'no-unmodified-loop-condition': 2,
  'no-constant-binary-expression': 2,

  'arrow-body-style': 2,
  'prefer-template': 2,
  'prefer-object-spread': 2,
  'prefer-object-has-own': 2,
  'prefer-numeric-literals': 2,
  'prefer-exponentiation-operator': 2,

  'no-return-assign': [2, 'always'],

  'no-void': [
    2,
    {
      allowAsStatement: true,
    },
  ],
  'no-param-reassign': [
    2,
    {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    },
  ],
  'no-console': [
    2,
    {
      allow: ['warn', 'error', 'debug'],
    },
  ],
  'no-sequences': [
    2,
    {
      allowInParentheses: false,
    },
  ],
  'no-else-return': [
    2,
    {
      allowElseIf: false,
    },
  ],
  'no-unused-vars': [
    2,
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  'no-unneeded-ternary': [
    2,
    {
      defaultAssignment: false,
    },
  ],
  'no-duplicate-imports': [
    2,
    {
      includeExports: true,
    },
  ],
  'no-restricted-syntax': [
    2,
    {
      selector: 'ForInStatement',
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_FOR_IN_LOOP,
    },
    {
      selector: "Identifier[name='Reflect']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_REFLECT_API,
    },
    {
      selector: "BinaryExpression[operator='in']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.PREFER_HAS_OWN,
    },
    {
      selector: "PropertyDefinition[accessibility='public']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='protected']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_ACCESS_MODIFIER,
    },
    {
      selector: "PropertyDefinition[accessibility='private']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_ACCESS_MODIFIER,
    },
    {
      selector: "Identifier[name='PropTypes']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_PROPTYPES,
    },
    {
      selector: "Identifier[name='propTypes']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_PROPTYPES,
    },
    {
      selector: "Identifier[name='createContext']",
      message: rulesMessages.JS.RESTRICTED_SYNTAX.NO_REACT_CONTEXT,
    },
  ],
  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'func-style': [
    2,
    'expression',
    {
      allowArrowFunctions: true,
    },
  ],
  'array-callback-return': [
    2,
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
};
