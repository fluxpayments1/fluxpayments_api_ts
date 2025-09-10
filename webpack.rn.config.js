const webpack = require('webpack');
const path = require("path");

// React Native compatible configuration
const rnResolve = {
  alias: {
    // React Native provides these natively
    'events': 'events',
    // Use crypto-browserify for crypto operations
    'crypto': 'crypto-browserify',
    // Enable HTTP/HTTPS for React Native
    'https': 'https-browserify',
    'http': 'stream-http',
    'stream': 'stream-browserify',
    'buffer': 'buffer',
    // Map Node.js modules to React Native equivalents
    'fs': false,
    'net': false,
    'tls': false,
    'vm': false,
    // No more fluxpayments aliases needed - everything is in one package now!
  },
  fallback: {
    'events': require.resolve('events/'),
    'vm': false,
    'crypto': require.resolve('crypto-browserify'),
    'stream': require.resolve('stream-browserify'),
    'buffer': require.resolve('buffer'),
    'process': require.resolve('process/browser'),
    'https': require.resolve('https-browserify'),
    'http': require.resolve('stream-http'),
    'fs': false,
    'net': false,
    'tls': false
  },
  extensions: ['.native.ts', '.native.js', '.ts', '.tsx', '.js'],
  // Prefer React Native specific files
  mainFields: ['react-native', 'browser', 'main'],
  // Specify where to look for node_modules
  modules: [
    path.resolve(__dirname, './node_modules'),
  ]
};

const rnModule = {
  rules: [
    {
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            // React Native specific TypeScript config
            target: 'es2015',
            module: 'commonjs',
            moduleResolution: 'node',
            allowSyntheticDefaultImports: true,
            esModuleInterop: true,
            skipLibCheck: true,
            jsx: 'react-native'
          }
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.json$/,
      type: 'json'
    }
  ]
};

const rnPlugins = [
  new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(process.env.NODE_ENV !== 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
    process: 'process/browser'
  })
];

module.exports = [
  {
    context: path.resolve(__dirname),
    entry: ['./polyfills.rn.ts', './src/lib/index.rn.standalone.ts'],
    output: {
      filename: 'lib.rn.js',
      path: path.join(__dirname, '/dist_rn'),
      library: {
        name: 'FluxWebsiteAPI',
        type: 'commonjs2'
      },
      environment: {
        // Hermes compatible
        arrowFunction: false,
        const: false,
        destructuring: false,
        forOf: false,
        dynamicImport: false,
        module: false
      }
    },
    target: ['web', 'es5'], // Better Hermes compatibility
    devtool: 'source-map', // Enable source maps for debugging
    resolve: rnResolve,
    plugins: rnPlugins,
    module: rnModule,
    externals: {
      // Don't bundle React Native itself
      'react-native': 'react-native',
      'react': 'react'
    },
    // Ensure node_modules are resolved from the correct location
    resolveLoader: {
      modules: [
        path.resolve(__dirname, './node_modules'),
      ]
    },
    optimization: {
      minimize: true,
      usedExports: false // Better for Hermes
    }
  }
];