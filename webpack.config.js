const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: "./src/pages/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true
    },
    mode: "production",
    devServer: {
        port: 8000,
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: "/node_modules/"
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
              },
        ]
    },
    plugins:  [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin ()
    ]
}