# Questions to be answered in this chapter

- **How** can webassembly modules be tested?
- Which **frameworks** exist to test webassembly?
- Is there any **interoperability** with the testing frameworks already built for **Javascript**?

# Introduction

As the purpose of this chapter is to illustrate how to **test** webassembly code, the first part addresses which dependencies need to be added. These new dependencies won't be anything else than the chosen **javascript test framework**. In this chapter **jest** will be placed as the best candidate.

Once all the configuration is completed, it's the moment to start creating the **unit tests**. For the sake of simplicity and cohesion with the previous part, the testing will target the **square** function.

**NOTE:** This second part uses the code already introduced in the first chapter, as it will be necessary for the purposes of the explanation. 

# Changes added to package.json

The **type** must indicate that it's a **module**. Thus it can recognize **ES6** modules. If needed, additional information about using ES6 Javascript modules can be found at the end of the chapter. Once this specification is done, the desired module can be executed using **Node.js**.

**File:** package.json
```json
.. ..  
  "type": "module", ...
```

Now, the **unit tests** can be created and run using any common javascript testing framework, usually used for **Node.js** ordinary modules without any webassembly.
To do so, a javascript testing framework will be needed. For the sake of robustness and simplicity, **jest** (powered by Facebook) is the alternative chosen. But take into account that **any** other framework would be valid. In an industrial ecosystem this decision would be done according to the **characteristics** of the company.

# Installing jest as the javascript testing framework

The procedure looks as follows:

Install Jest using **yarn**:
```shell
yarn add --dev jest
```
Or **npm**:
```shell
npm install --save-dev jest
```
In both cases, the **flag** `dev-dependecy`. It's purpose is to act as a dev dependency rather than a production dependency.

Note: Jest documentation uses **yarn commands**, but npm will also work. You can compare yarn and npm commands in the [yarn docs, here](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

Then add jest to the **package.json**. More precisely to it's **test** variable. An example of the final form of the file would be:

**File:** package.json

```json
.. ..  
"scripts": {
    "test": "jest"
  }, ...
```

# Creating a simple webassembly unit test
All the tests created for this project will be under the **test** directory. In order to let jest address the **location** of the test created, they need to be **named** with the following **pattern**:
```
<undetermined_name>.test.js
```

In this case, a file named **math.test.js** is created to contain the unit tests.

In the creation of the unit case appears a lot of similarities with the code inhabiting **index.js**. The main differences are:

1. **Import statements**: Because jest struggles dealing with **ES6** modules, the **old** common import statements, from **ES5** and **below**, are going to be used.
```javascript
const fs = require('fs');
```

**NOTE**: There is a **beta** support for **ES6** modules going on inside jest. But here those considerations are omited.

2. **Load the desired webassembly module**: Before even attempting to test the targeted webassembly module, it needs to be loaded. To do this, the function **beforeAll** from jest will be used. It's going to be declared as an **async** function.
```javascript
beforeAll(async () => {
    const math_wasm = fs.readFileSync('./public/math.wasm');
    math = await WebAssembly.instantiate(new Uint8Array(math_wasm))
                    .then(result => result.instance.exports);
})
```

**NOTE**: The math variable is declared as **global**, so it can be accessed **anywhere** in the code and its **scope** is not limited to just being accessed inside **beforeAll**.

The final **assertion** using the jest syntax and calling mechanics:

_e.g:_ 

```javascript
test('Square operation with 2 as param', () => expect(math.square(2)).toBe(4) );
```

It's expected that given the **square** function and **2** as its **input** argument, the computed **output** would be **4.**

# Running the tests

To run the **entire** set of test for the given project:

```shel
npm run test
```

**example output:**

```shell
> wasm_playground_1@1.0.0 test
> jest

 PASS  test/math.test.js
  ✓ Square operation with 2 as param (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.148 s
Ran all test suites.
```




# References

1. [Chris Hay Youtube channel](https://www.youtube.com/channel/UCncVoOXAma1zJUNTJGL6Ncw)
1. [How to use an ES6 import in Node.js? (GeeksforGeeks)](https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/)
2. [Jest](https://jestjs.io)
3. [Naming conventions in the Javascript testing ecoystem](https://stackoverflow.com/questions/49632743/what-is-the-convention-for-javascript-test-files)