const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: path.join(__dirname, "src", "index.js"),
   output: {
      path: path.join(__dirname, "build"),
      filename: "bundle.js"
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,               loader: "babel-loader",
            options: {
               presets: ["@babel/preset-env", "@babel/preset-react"]
            }
         },
         {
            test: /\.css/,
            use: [
               { loader: 'style-loader' },
               { loader: 'css-loader' }
            ]
         }
      ]
   },
   plugins: [
     new HtmlWebpackPlugin({
       filename: "index.html",
       template: path.join(__dirname, "src", "index.html")
     })
   ]
}