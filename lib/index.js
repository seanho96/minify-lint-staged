import fs from "fs";

const plugins = [
  [
    "gifsicle",
    {
      interlaced: true,
    },
  ],
  ["mozjpeg"],
  [
    "pngquant",
    {
      quality: [0.6, 0.8],
    },
  ],
  [
    "svgo",
    {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    },
  ],
].map(async ([name, opts]) => (await import(`imagemin-${name}`)).default(opts));

export default async (filename) =>
  fs.promises.writeFile(
    filename,
    await plugins.reduce(
      async (acc, it) => (await it)(await acc),
      fs.promises.readFile(filename)
    )
  );
