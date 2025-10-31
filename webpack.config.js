const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
  {
    entry: ["./polyfills.ts", "./src/lib/index.rn.standalone.ts"],
    output: {
      filename: "lib.js",
      path: path.join(__dirname, "/dist_web"),
      library: {
        type: "umd",
      },
      clean: true,
    },

    mode: "production",

    // ✅ Only include sourcemaps in dev
    devtool: false,

    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      fallback: {
        crypto: false,
        stream: false,
        https: false,
        http: false,
        vm: false,
        buffer: require.resolve("buffer/"),
        process: require.resolve("process/browser"),
      },
    },

    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },

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
            format: {
              comments: false,
            },
          },
        }),
      ],
      splitChunks: false, // avoid multiple outputs since it's a library
    },

    performance: {
      hints: false,
      maxEntrypointSize: 600000,
      maxAssetSize: 600000,
    },
  },
];
