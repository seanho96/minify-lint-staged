# minify-lint-staged

> Imagemin CLI for minifying images designed to be used with lint-staged

## Installation

```sh
npm i --save-dev minify-lint-staged
```

## Usage

Use in conjuntion with [lint-staged][lint-staged]. In your `.lintstagedrc`

```json
{
  "*.{png,jpeg,jpg,gif}": ["minify-lint-staged"]
}
```

## Options

N/A

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
