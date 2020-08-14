import path from 'path';
import resolve from 'resolve';
import * as webpackSources from 'webpack-sources';

// FIXME: webpack 5 use a hack way to add serialization methods for `webpack-sources`
// but it's not friendly for third-part libraries because then should use
//   `webpack/node_modules/webpack-sources` instead
// https://github.com/webpack/webpack/blob/96142f829f7df4bfe6aa5095b1aed647de50edfe/lib/util/registerExternalSerializer.js
const webpackSourcesPath = resolve.sync('webpack-sources', {
  basedir: path.dirname(require.resolve('webpack/package.json')),
});

const {
  RawSource,
  ConcatSource,
  ReplaceSource,
  PrefixSource,
  // eslint-disable-next-line global-require, import/no-dynamic-require
} = require(webpackSourcesPath) as typeof webpackSources;

export { RawSource, ConcatSource, ReplaceSource, PrefixSource };
export type Source = webpackSources.Source;
