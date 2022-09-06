import fs from 'fs' // access the file system and load the wasm module.

//const wasm_buffer = fs.readFileSync('./public/fib.wasm'); // read the wasm module form the file system.
//var importObject = { imports: { imported_func: arg => console.log(arg) } };
// Instantiate the buffer.
//const fib = await WebAssembly.instantiate(new Uint8Array(wasm_buffer), importObject)
//                .then(result => result.instance.exports); // return a module named hello and its exports
// Interoperability between Javascript and WASM
// The following function acts as any other function in ES6
//console.log(fib.fib(5)); // calling the main function


async function demo() {
    let wasm = fs.readFileSync("./demolib.wasm");
    let lib = await WebAssembly.instantiate(wasm);

    let funs = lib.instance.exports
    console.log(funs.fib(12));
};

demo().then();
