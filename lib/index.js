const fs = require("fs/promises");

const readFile = fs.readFile;
const writeFile = fs.writeFile;

const plugins = [
  "imagemin-mozjpeg",
  "imagemin-pngquant",
  "imagemin-gifsicle",
].map(([name, opts]) => require(name)(opts));

const minifyFile = (filename) =>
  [...plugins, (it) => writeFile(filename, it)].reduce(
    (acc, it) => acc.then(it),
    readFile(filename)
  );

export default minifyFile;
