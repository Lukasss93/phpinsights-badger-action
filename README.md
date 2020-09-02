# 🛡 PhpInsights Badger
[GitHub Action](https://github.com/features/actions) for generating [PhpInsights](https://github.com/nunomaduro/phpinsights) badges!

**⚠ The generated badges are self-hosted by using this [Lumen Service](https://github.com/Lukasss93/phpinsights-badger-server).**

## Demo badges
![Code](https://img.shields.io/badge/PHPInsights%20%7C%20Code%20-85.9%25-success.svg)
![Complexity](https://img.shields.io/badge/PHPInsights%20%7C%20Complexity%20-74.2%25-yellow.svg)
![Architecture](https://img.shields.io/badge/PHPInsights%20%7C%20Architecture%20-82.6%25-success.svg)
![Style](https://img.shields.io/badge/PHPInsights%20%7C%20Style%20-89.1%25-success.svg)
![SecurityIssues](https://img.shields.io/badge/PHPInsights%20%7C%20Security%20Issues%20-5-red.svg)

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
          url: 'https://yourservice.com' # Required: your lumen service url 
          password: ${{ secrets.password }} # Required: your lumen service password 
          path : './test.json' # Required: the test.json generated file path from phpinsights

```

## Inputs variables

- **url** *required* `string` - Your lumen service url 
- **password** *required* `string` - Your lumen service password 
- **path** *required* `string` - The test.json generated file path from phpinsights

## Getting generated badges
|url|badge|
|---|-----|
|https://yourservice.com/author/repo/code|![Code](https://img.shields.io/badge/PHPInsights%20%7C%20Code%20-85.9%25-success.svg)|
|https://yourservice.com/author/repo/complexity|![Complexity](https://img.shields.io/badge/PHPInsights%20%7C%20Complexity%20-74.2%25-yellow.svg)|
|https://yourservice.com/author/repo/architecture|![Architecture](https://img.shields.io/badge/PHPInsights%20%7C%20Architecture%20-82.6%25-success.svg)|
|https://yourservice.com/author/repo/style|![Style](https://img.shields.io/badge/PHPInsights%20%7C%20Style%20-89.1%25-success.svg)|
|https://yourservice.com/author/repo/security_issues|![SecurityIssues](https://img.shields.io/badge/PHPInsights%20%7C%20Security%20Issues%20-5-red.svg)|