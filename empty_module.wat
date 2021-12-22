;; The most basic module possible to be created in webassembly textual format.
(module)
;; This code needs to be compile to bytecode. Not currently understandable by any runtime.
;; Text (.wat) -> Bytecode (.wasm). This is provided by wabt toolkit.
;; wabt includes compilers to convert between WebAssembly’s text representation and wasm (wat2wasm),
;; and vice versa, plus more besides.
;; Location (github): https://github.com/webassembly/wabt
;; Location (homebrew): https://formulae.brew.sh/formula/wabt#default