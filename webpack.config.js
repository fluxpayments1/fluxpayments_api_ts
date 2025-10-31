const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// ---- Plugins ----
const provideBufferPlugin = new webpack.ProvidePlugin({
  Buffer: ["buffer", "Buffer"],
});

// ---- Fallbacks (same as before, just safe ordering) ----
const commonFallback = {
  buffer: require.resolve("buffer/"),
  process: require.resolve("process/browser"),
  crypto: require.resolve("crypto-browserify"),
  stream: require.resolve("stream-browserify"),
  https: require.resolve("https-browserify"),
  http: require.resolve("stream-http"),
  vm: require.resolve("vm-browserify"),
};

// ---- Rules ----
const commonRules = [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
];

// ---- Extensions ----
const commonExtensions = [".js", ".ts", ".tsx"];

module.exports = [
  {
    entry: ["./polyfills.ts", "./src/lib/index.rn.standalone.ts"],

    output: {
      filename: "lib.js",
      path: path.join(__dirname, "/dist_web"),
      library: { type: "umd" },
      clean: true,
    },

    mode: "production",
    devtool: false, // disable source map for smaller size

    resolve: {
      fallback: commonFallback,
      extensions: commonExtensions,
    },

    plugins: [
      provideBufferPlugin,
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],

    module: { rules: commonRules },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: true,
              passes: 2,
            },
            mangle: true,
            format: {
              comments: false,
            },
          },
        }),
      ],
    },

    performance: {
      hints: false,
    },
  },
];
