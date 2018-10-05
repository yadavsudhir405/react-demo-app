const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: path.resolve(__dirname, "src/index.html")
        }),
        new CleanWebpackPlugin("dist")
    ],
    devServer: {
        contentBase: path.join(__dirname,"dist")
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js",".jsx",".ts",".tsx"]
    }
};