#!/usr/bin/env node

let registered = false

const tryRegister = (pkg) => {
  if (!registered) {
    try {
      require(pkg);
      registered = true;
      console.log(`registered ${pkg}`);
    } catch (err) {
      // ignore
    }
  }
}

tryRegister('esbuild-register')
tryRegister('ts-node/register/transpile-only')
tryRegister('@swc-node/register')

if (!registered) {
  console.log('Warning: all of supported typescript transpiler registration failed')
}

require('../dist/cli').main(process.argv[2])
