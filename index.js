import fs from 'fs' // access the file system and load the wasm module.

const math_wasm = fs.readFileSync('./math.wasm'); // read the wasm module form the file system.
// Instantiate the buffer.
const math = await WebAssembly.instantiate(new Uint8Array(math_wasm))
                .then(result => result.instance.exports); // return a module named math and its exports
// Interoperability between Javascript and WASM
// The following function acts as any other function in ES6
console.log(math.square(10)); // calling the square function inside math