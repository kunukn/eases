import buble from 'rollup-plugin-buble';
import pkg from './package.json';

const entry = './src/index.js';

export default [
  // browser-friendly UMD build
  {
    entry: entry,
    dest: pkg.browser,
    format: 'umd',
    // sourceMap: 'inline',
    moduleName: 'eases',
    plugins: [
      buble({
        exclude: 'node_modules/**',
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    entry: entry,
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' },
    ],
  },
];