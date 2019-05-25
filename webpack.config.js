const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./client/"),
  output: {
      path: path.resolve(__dirname, "./static"),
      filename: "bundle.js"
    },
  devServer:{
    contentBase: './static',
    port: 3005
  },
	module: {
		rules: [{
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}