#!/usr/bin/env node

const minifyFile = require("../lib/index.js");

Promise.all(process.argv.slice(2).map(minifyFile)).catch(function (e) {
  console.error(e);
  process.exit(1);
});
