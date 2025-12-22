# coding-standards

PHP_CodeSniffer rules for Laravel projects using PSR-12 as the base standard with CosmicGiant customizations.

## Set Up PHP CodeSniffer in PhpStorm

1. Clone the repo locally.
2. cd into the folder you just cloned, run `composer install`.
3. Set up the PHP CodeSniffer path to the folder you just installed the Composer packages, it'll look like this: https://cln.sh/Nse2kq
4. Go to PHP - Quality Tools - PHP_CodeSniffer, select the `CosmicGiant` coding standard from the dropdown, like this: https://share.cleanshot.com/ct0TS0tl. Note that we need to leave "Show warning as" unchecked to get only errors to show up in the IDE. If you check it, you'll get both warnings and errors, however, they'll all be marked as warnings and make it difficult to know what are must-fixes.
5. In Editor - Inspections, make sure that PHP - Quality Tools - PHP_CodeSniffer validation is enabled and the Severity is set to Error, like this: https://share.cleanshot.com/g38NddGd.

## Key Coding Standards

This ruleset is based on PSR-12 with the following customizations:

### Class Brace Spacing
- **No empty lines after class opening brace** - Class content should start immediately after the opening brace
- **No empty lines before class closing brace** - Class content should end immediately before the closing brace
- **No empty lines at start/end of functions** - Same rules apply to function bodies

### Style Preferences Retained from Previous Standards
- **Inline control structures allowed** - Simple one-line if/else statements are permitted
- **Short ternary operator allowed** - `$value = $a ?: $b;` is permitted
- **Short array syntax required** - Use `[]` instead of `array()`
- **Assignment in conditions allowed** - Common patterns like `while ($row = fetch())` are permitted
- **Multiple assignments allowed** (as warning) - `$a = $b = 1;` is permitted
- **One-liner functions** (as warning) - Content after function brace is permitted

### Additional Rules
- **Type hints enforced** - Return types, parameter types, and property types should be declared
- **Use statements sorted alphabetically**
- **Unused imports flagged**
- **Trailing commas required in multi-line arrays**
- **Null-safe operator suggested** where applicable (PHP 8.0+)
- **Variable analysis** - Undefined variables are flagged
- **Import detection** - Missing use statements are flagged

## Running PHPCS

```bash
# Check a file or directory
./vendor/bin/phpcs --standard=CosmicGiant path/to/code

# Fix auto-fixable issues
./vendor/bin/phpcbf --standard=CosmicGiant path/to/code
```

## Integration with Laravel Projects

Add to your Laravel project's `composer.json`:

```json
{
    "require-dev": {
        "forgravity/coding-standards": "^1.0"
    },
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/ForGravity/coding-standards"
        }
    ]
}
```

Then create a `phpcs.xml` in your project root:

```xml
<?xml version="1.0"?>
<ruleset>
    <file>app</file>
    <file>config</file>
    <file>database</file>
    <file>routes</file>
    <rule ref="CosmicGiant"/>
</ruleset>
```
