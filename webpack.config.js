const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"], // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/dist"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.(s[ac]ss|css)$/i, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = config;
