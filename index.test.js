let { postapl } = require('postapl');

let plugin = require('./')

async function run(input, output, opts) {
  input = JSON.stringify(input, null, 2);
  output = JSON.stringify(output, null, 2);

  let result = await postapl([plugin(opts)]).process(input, { from: undefined })
  expect(result.apl).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('removes empty strings', async () => {
  const input = {
    "key1": "",
    "key2": "value2"
  }

  const output = {
    "key2": "value2"
  }

  await run(input, output);
})

it('removes null value', async () => {
  const input = {
    "key1": null,
    "key2": "value2"
  }

  const output = {
    "key2": "value2"
  }

  await run(input, output);
})

it('removes empty object', async () => {
  const input = {
    "key1": {},
    "key2": "value2"
  }

  const output = {
    "key2": "value2"
  }

  await run(input, output);
})

it('removes empty array', async () => {
  const input = {
    "key1": [],
    "key2": "value2"
  }

  const output = {
    "key2": "value2"
  }

  await run(input, output);
})
