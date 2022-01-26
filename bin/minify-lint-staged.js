#!/usr/bin/env node

import minifyFile from "../lib/index.cjs";

Promise.all(process.argv.slice(2).map(minifyFile)).catch(function (e) {
  console.error(e);
  process.exit(1);
});
