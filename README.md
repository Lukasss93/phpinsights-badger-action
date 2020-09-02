# 🛡 PhpInsights Badger
[GitHub Action](https://github.com/features/actions) for generating [PhpInsights](https://github.com/nunomaduro/phpinsights) badges!

⚠ The generated badges are self-hosted by using this [Lumen Service](https://github.com/Lukasss93/phpinsights-badger-server).

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
        uses: Lukasss93/phpinsights-badger@master
        with:
          url: 'https://myservice.com' # Required: your lumen service url 
          password: ${{ secrets.password }} # Required: your lumen service password 
          path : './test.json' # Required: the test.json generated file path from phpinsights

```

## Inputs variables

- **url** *required* `string` - Your lumen service url 
- **password** *required* `string` - Your lumen service password 
- **path** *required* `string` - The test.json generated file path from phpinsights