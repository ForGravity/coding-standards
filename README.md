# coding-standards

## Install this repo locally for PhpStorm

1. Clone the repo locally.
2. cd into the folder you just cloned, run `composer install`.
3. Set up the PHP CodeSniffer path to the folder you just installed the Composer packages, it'll look like this: https://cln.sh/Nse2kq
4. Go to PHP - Quality Tools - PHP_CodeSniffer, select the `CosmicGiant` coding standard from the dropdown, like this: https://share.cleanshot.com/ct0TS0tl. Note that we need to leave "Show warning as" unchecked to get only errors to show up in the IDE. If you check it, you'll get both warnings and errors, however, they'll all be marked as warnings and make it difficult to know what are must-fixes.
5. In Editor - Inspections, make sure that PHP - Quality Tools - PHP_CodeSniffer validation is enabled and the Severity is set to Error, like this: https://share.cleanshot.com/g38NddGd.
