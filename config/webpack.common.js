const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    module: {
        rules: [{
            use: "babel-loader",
            test: /.(js|jsx)$/,
            exclude: /node_module/
        }, {
            type: "asset/resource",
            test: /\.(png|svg|jpg|jpeg|gif|webp)/i
        },{
            test: /\.(png|svg|jpg|jpeg|gif|webp)/i,
            use: {
                loader: 'url-loader',
            }
        }
    ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]


}