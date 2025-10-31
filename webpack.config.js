const webpack = require('webpack');
const path = require("path");

const provideBufferPlugin = new webpack.ProvidePlugin({
  Buffer: ['buffer', 'Buffer']
});

const commonFallback = {
  crypto: require.resolve("crypto-browserify"),
  stream: require.resolve("stream-browserify"),
  https: require.resolve("https-browserify"),
  http: require.resolve("stream-http"),
  process: require.resolve("process/browser"),
  vm: require.resolve("vm-browserify"),
  buffer: require.resolve("buffer/")
};

const commonRules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
];

const commonExtensions = ['.js', '.ts', '.tsx'];

module.exports = [
  {
    entry: ['./polyfills.ts', './src/lib/index.rn.standalone.ts'],
    output: {
      filename: 'lib.js',
      path: path.join(__dirname, '/dist_web'),
      library: {
        type: 'umd'
      },
    },
    devtool: 'source-map',
    resolve: {
      fallback: commonFallback,
      extensions: commonExtensions
    },
    plugins: [provideBufferPlugin],
    module: { rules: commonRules }
  }
];
