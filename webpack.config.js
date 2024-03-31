const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

const PORT = 8080;

module.exports = {
  mode: "development",
  entry: join(__dirname, "src", "index.tsx"),
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: false,
      template: "./public/index.html",
    }),
  ],
};
