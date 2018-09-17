module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
    module: {
      rules: [
      	{
      	  test: /\.js$/,
      	  loader: 'babel-loader',
      	  exclude: /node_modules/
      	}
      ]
    },
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    }
}