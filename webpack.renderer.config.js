const path = require("path");

module.exports = {
  entry: "./src/renderer.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // All .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // Let you import without .js extension
  },
};
