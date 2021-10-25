# PostAPL Remove Empty

[![NPM Version][npm-img]][npm-url]

[PostAPL Remove Empty] is a [PostAPL] plugin that looks for property values that are null, empty string, empty object, and empty array and removes them.

## Input

```json
{
  "type": "APL",
  "version": "1.7",
  "settings": {},
  "theme": "dark",
  "import": [],
  "resources": [],
  "styles": {},
  "onMount": [],
  "graphics": {},
  "commands": {},
  "layouts": {},
  "mainTemplate": {
    "parameters": [
      "payload"
    ],
    "items": [
      {
        "type": "Container",
        "width": "100vw",
        "height": "100vh",
        "data": [],
        "items": [
          {
            "type": "Frame",
            "backgroundColor": "white",
            "height": "100%",
            "width": "100%",
            "item": {}
          }
        ]
      }
    ]
  }
}
```

## Output

```json
{
  "type": "APL",
  "version": "1.7",
  "theme": "dark",
  "mainTemplate": {
    "parameters": [
      "payload"
    ],
    "items": [
      {
        "type": "Container",
        "width": "100vw",
        "height": "100vh",
        "items": [
          {
            "type": "Frame",
            "backgroundColor": "white",
            "height": "100%",
            "width": "100%"
          }
        ]
      }
    ]
  }
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postapl postapl-remove-empty
```

**Step 2:** Use:

```js
'use strict'

const { postapl } = require('postapl');
const removeEmpty = require('postapl-remove-empty');
const fs = require('fs');

fs.readFile('src/screen.json', (err, apl) => {
  postapl([removeEmpty])
    .process(apl, { from: 'src/screen.json', to: 'dest/screen.json' })
    .then(result => {
      fs.writeFile(result.opts.to, result.apl, () => true)
    })
});
```


## Options

None


[npm-img]: https://img.shields.io/npm/v/postapl-remove-empty.svg
[npm-url]: https://www.npmjs.com/package/postapl-remove-empty

[PostAPL]: https://github.com/postapl/postapl
[PostAPL Remove Empty]: https://github.com/postapl/postapl-remove-empty
