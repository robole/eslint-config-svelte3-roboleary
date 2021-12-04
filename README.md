# eslint-config-svelte3-roboleary

My ESLint config for linting Svelte 3 apps.

It includes the following:
- My base config [eslint-config-roboleary-base](https://www.npmjs.com/package/eslint-config-roboleary-base) that is based on `eslint-airbnb-config-base`.
- The [eslint-plugin-svelte3](https://www.npmjs.com/package/eslint-plugin-svelte3) config to provide rules specific to Svelte.

## Rules

Most of the custom rules I added are to avoid conflict between `eslint-plugin-svelte3` and `eslint-plugin-import` (which is used in `eslint-airbnb-config-base`).

## Usage

1. Install this package and ESLint as *devDependencies* with the command `npm i -D eslint eslint-config-svelte3-roboleary`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc.json_. Add the following:

   ```json
   {
     "extends": ["eslint-config-svelte3-roboleary"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line.

	```json
	{
		"scripts": {
			"lint-js": "npx eslint .",
			"lint-js:fix": "npm run lint -- --fix"
		},
	}
	```

## VS Code configuration

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Add the following to your user settings (*settings.json*), so that svelte files are linted:

```json
"eslint.probe": [
	"javascript",
	"javascriptreact",
	"typescript",
	"vue",
	"svelte"
],
"eslint.validate": [
	"javascript",
	"javascriptreact",
	"typescript",
	"vue",
	"svelte"
]
```

I use the [Svelte for VS Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) for formatting code. It uses Prettier under the hood. This config ensures that Eslint's rules and Prettier's default rules don't interfere when formatting the code.

I prefer to run linting and formatting as code actions. This way it is possible to run linting and formatting as a series of actions: lint first, then format. To be able to run formatting as a code action you need to install the [Format Code Action extension](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

To lint and format your svelte code on save, you can update your user settings with the following:

```json
  "editor.formatOnSave": false,
  "[svelte]": {
	  "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll"],
```
