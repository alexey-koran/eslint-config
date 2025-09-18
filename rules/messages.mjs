export const rulesMessages = {
  JS: {
    RESTRICTED_SYNTAX: {
      NO_ACCESS_MODIFIER: 'There is no need to limit developer access to properties.',
      NO_PROPTYPES: 'No PropTypes. Use Typescript instead.',
      NO_REACT_CONTEXT:
        'No React Context. Use component composition instead (https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context), or a "Global State Management" solution.',
      NO_REFLECT_API:
        'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
      NO_FOR_IN_LOOP:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys, values, entries}, and iterate over the resulting array.',
      PREFER_OBJECT_HAS_OWN: 'Prefer Object.hasOwn().',
    },
  },
};
