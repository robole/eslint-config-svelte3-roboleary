# eslint-config-svelte3-roboleary

My ESLint config for linting Svelte 3 apps.

It includes the following:
- My base config [eslint-config-roboleary-base](https://www.npmjs.com/package/eslint-config-roboleary-base) that is based on `eslint-airbnb-config-base`.
- The [eslint-plugin-svelte3](https://www.npmjs.com/package/eslint-plugin-svelte3) config to provide rules specific to Svelte.

## Rules

Most of the custom rules I added are to avoid conflict between `eslint-plugin-svelte3` and `eslint-plugin-import` (which is used in `eslint-airbnb-config-base`).

## Usage

1. Install this package and ESLint as *devDependencies* with the command `npm i --save-dev eslint eslint-config-svelte3-roboleary`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc_. Add the following:

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
			"lint": "eslint .",
			"lint:fix": "npm run lint -- --fix"
		},
	}
	```
