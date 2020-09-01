# 🛡 PhpInsights Badger
This [GitHub Action](https://github.com/features/actions) generates [PhpInsights](https://github.com/nunomaduro/phpinsights) badges!

## Usage
Generate badges on push event:
```yaml
name: Generate badges
on:
  push:

jobs:
  badges:
    name: Generating badges
    runs-on: ubuntu-latest
    steps:
      - name: Generate PhpInsights badges
        uses: Lukasss93/phpinsights-badger@v1
        with:
          url: 'https://myservice.com'
          password: ${{ secrets.password }}
          path : './test.json'

```

## Inputs variables

- **url** *required* `string` - Append a message to default message
- **password** *required* `string` - Service Password
- **path** *required* `string` - PhpInsights json file path