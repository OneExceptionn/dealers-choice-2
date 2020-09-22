module.exports = {
    entry: ['./src/index.js'],
    mode: 'development',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    }
  };
  