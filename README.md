# `@alexey-koran/eslint-config`

ESLint [shareable config](https://eslint.org/docs/latest/extend/shareable-configs)

### Installation

```bash
pnpm i -D @alexey-koran/eslint-config
```

### Usage [example](https://github.com/alexey-koran/react-template/blob/main/eslint.config.js)

# Scripts

> [!NOTE]
>
> `allJsTsExtensions` = js, cjs, mjs, jsx, cjsx, mjsx, ts, cts, mts, tsx, ctsx, mtsx
>
> For the more details check [scripts section in package.json](./package.json#L9)

<details open>

<summary><h3>Scripts table</h3></summary>

| Command                   | Description                                            | Path                            |
| ------------------------- | ------------------------------------------------------ | ------------------------------- |
|                           |                                                        |                                 |
|                           | `Code linting & formatting`                            |                                 |
| `pnpm prettier`           | code format check                                      | `**/*.{allJsTsExtensions,pcss}` |
| `pnpm prettier:fix`       | code format autofix                                    | `**/*.{allJsTsExtensions,pcss}` |
| `pnpm lint`               | eslint check                                           | `**/*.{allJsTsExtensions}`      |
| `pnpm lint:fix`           | eslint autofix                                         | `**/*.{allJsTsExtensions}`      |
|                           |                                                        |                                 |
|                           | `Analyzation & config check`                           |                                 |
| `pnpm test:eslint-config` | eslint config inspector, displays flat configs & rules |                                 |
|                           |                                                        |                                 |

</details>

# Dependencies

> [!NOTE]
>
> For the more details check [dev & prod dependencies in package.json](./package.json#L27)

<details open>

<summary><h3>Dependencies</h3></summary>

| Package name                      | Description                                                                                                                             | Version                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| typescript-eslint                 | enables ESLint and Prettier to support [TypeScript](https://www.typescriptlang.org/)                                                    | [v8.22.\*](https://typescript-eslint.io/)                                 |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Configs`                                                                                                                               |                                                                           |
| eslint-config-prettier            | turns off all rules that are unnecessary or might conflict with [Prettier](https://github.com/prettier/prettier)                        | [v10.0.\*](https://github.com/prettier/eslint-config-prettier)            |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Plugins`                                                                                                                               |                                                                           |
| eslint-plugin-import              | intends to support linting of ES2015+ (ES6+) import/export syntax, prevent issues with misspelling of file paths and import names       | [v2.31.\*](https://github.com/import-js/eslint-plugin-import)             |
| eslint-import-resolver-typescript | adds [TypeScript](https://www.typescriptlang.org/) support to [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) | [v3.7.\*](https://github.com/import-js/eslint-import-resolver-typescript) |
| eslint-import-resolver-webpack    | webpack-literate module resolution plugin for [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)                | [v0.13.\*](https://www.npmjs.com/package/eslint-import-resolver-webpack)  |
| eslint-plugin-jsx-a11y            | static AST checker for accessibility rules on JSX elements                                                                              | [v6.10.\*](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)          |
| eslint-plugin-prettier            | runs [Prettier](https://github.com/prettier/prettier) as an ESLint rule and reports differences as individual ESLint issues             | [v5.2.\*](https://github.com/prettier/eslint-plugin-prettier)             |
| eslint-plugin-react               | React specific linting rules for ESLint                                                                                                 | [v7.37.\*](https://github.com/jsx-eslint/eslint-plugin-react)             |
| eslint-plugin-react-hooks         | enforces the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)                                                         | [v5.1.\*](https://www.npmjs.com/package/eslint-plugin-react-hooks)        |
| @stylistic/eslint-plugin-js       | JavaScript stylistic rules for ESLint                                                                                                   | [v3.0.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-js)      |
| @stylistic/eslint-plugin-jsx      | [JSX](https://react.dev/learn/writing-markup-with-jsx) stylistic rules for ESLint                                                       | [v3.0.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-jsx)     |
| @stylistic/eslint-plugin-ts       | [TypeScript](https://www.typescriptlang.org/) stylistic rules for ESLint                                                                | [v3.0.\*](https://www.npmjs.com/package/@stylistic/eslint-plugin-ts)      |
|                                   |                                                                                                                                         |                                                                           |
|                                   | `Other`                                                                                                                                 |                                                                           |
| globals                           | global identifiers from different JavaScript environments                                                                               | [v15.14.\*](https://github.com/sindresorhus/globals)                      |
|                                   |                                                                                                                                         |                                                                           |

</details>

<details open>

<summary><h3>Development dependencies</h3></summary>

| Package name                  | Description                                                                                             | Version                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| eslint                        | configurable JavaScript linter                                                                          | [v9.19.\*](https://eslint.org/)                           |
| prettier                      | opinionated code formatter                                                                              | [v3.4.\*](https://prettier.io/)                           |
|                               |                                                                                                         |                                                           |
|                               | `Plugins`                                                                                               |                                                           |
| @eslint/js                    | ESLint JavaScript plugin Separating out JavaScript-specific functionality from ESLint                   | [v9.19.\*](https://www.npmjs.com/package/@eslint/js)      |
|                               |                                                                                                         |                                                           |
|                               | `Other`                                                                                                 |                                                           |
| @eslint/config-inspector      | ESLint config inspector                                                                                 | [v1.0.\*](https://github.com/eslint/config-inspector)     |
| @alexey-koran/prettier-config | Prettier [sharing configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations) | [v0.1\*](https://npmjs.com/@alexey-koran/prettier-config) |
|                               |                                                                                                         |                                                           |

</details>
