module.exports = [
  {
    entry: ['./polyfills.ts','./src/lib/index.ts'],
    output: {
      filename: 'lib.js',
      path: __dirname + '/src/dist_web',
      library: 'MyLibrary', // Exposed global variable when used in browsers
      libraryTarget: 'umd', // Universal module definition
    },
    devtool: 'source-map',
    resolve: {
      fallback: { 
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "process": require.resolve("process/browser"), // Add this line

      },
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,  // Match both .ts and .tsx files
                use: 'ts-loader',
                exclude: /node_modules/   
            }
        ]
    },
    
  },
  {
    entry: ['./polyfills.ts','./src/flux_types/index.ts'],
    output: {
      filename: 'flux_types.js',
      path: __dirname + '/src/dist_web',
      library: 'MyLibrary', // Exposed global variable when used in browsers
      libraryTarget: 'umd', // Universal module definition
    },
    devtool: 'source-map',
    resolve: {
      alias: {
        // Add this line inside your resolve object
        'events': require.resolve('events/')
      },
      fallback: { 
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "process": require.resolve("process/browser"), // Add this line


      },
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,  // Match both .ts and .tsx files
                use: 'ts-loader',
                exclude: /node_modules/   
            }
        ]
    },
  }
]
  