# coding-standards

## Set Up PHP CodeSniffer in PhpStorm

1. Clone the repo locally.
2. cd into the folder you just cloned, run `composer install`.
3. Set up the PHP CodeSniffer path to the folder you just installed the Composer packages, it'll look like this: https://cln.sh/Nse2kq
4. Go to PHP - Quality Tools - PHP_CodeSniffer, select the `CosmicGiant` coding standard from the dropdown, like this: https://share.cleanshot.com/ct0TS0tl. Note that we need to leave "Show warning as" unchecked to get only errors to show up in the IDE. If you check it, you'll get both warnings and errors, however, they'll all be marked as warnings and make it difficult to know what are must-fixes.
5. In Editor - Inspections, make sure that PHP - Quality Tools - PHP_CodeSniffer validation is enabled and the Severity is set to Error, like this: https://share.cleanshot.com/g38NddGd.

## Our mindset of ESLint implementation
- We adopt the WP ESLint plugin as our base rules.
- We do not use Prettier to handle code format and probably won't use it in the future (because its "opinionated" rules are too strict for us), so we use ESLint to handle both code quality and code formatting.
- We have our own preferred formatting so we set these rules as `warn` in our ESLint config (the major category is to use spaces for alignment). This is similar to what we've done to our PHPCS implementation.
- To prevent warnings to be fixed by ESLint, be sure when running `eslint --fix`, you must add the `--quiet` flag.

## Set Up ESLint in PHPStorm
1. Pull this branch and run `npm install`
2. Make sure the ESLint integration is enabled to auto detect mode: https://share.cleanshot.com/JpgzqLDn
3. Open `.eslintrc.js` and right click "Apply ESLint Code Style Rules".
4. However, PHPStorm Reformat cannot completely follows ESLint rules even after using the "Apply ESLint Code Style Rules", errors need to be fixed one by one this way: https://share.cleanshot.com/vYDzZDgD
5. DO NOT use "Fix ESLint Problems" from the right click menu in PHPStorm because it will fix "warnings" too, which we don't want it to.
6. Every time we update the ESLint rules, if you don't see them reflect in the editor, restart the editor will usually get the rules updated

## The Workflow of ESLint Integration
- Make sure you've done the first three steps above.
- Whenever you edit a js or jsx file, you should be able to see all the ESLint errors in the "Problems" tab in PHPStorm, pick those can only be fixed manually and work on them.
- For those errors that can be fixed automatically, now every time when you try to commit staged files, `eslint --quiet --fix` will be run and get them fixed. This is done by Husky and Lint-Staged which will be added to each repo.
- If there are remaining errors that cannot be fixed automatically, you won't be able to commit the files (because Husky is added to git pre-commit hook). Although you can force the files to be committed, we also add a new GH workflow job to run the JS standards check, so your PR will be failed at it.
