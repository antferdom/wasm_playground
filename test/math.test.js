const fs = require('fs');

let math;

beforeAll(async () => {
    const math_wasm = fs.readFileSync('./public/math.wasm');
    math = await WebAssembly.instantiate(new Uint8Array(math_wasm))
                    .then(result => result.instance.exports);
})

test('Square operation with 2 as param', () => expect(math.square(2)).toBe(4) );