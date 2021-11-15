const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new MiniCssExtractPlugin({ filename: "main.css" });




module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/index.js') // основной файл приложения
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: "bundle.js",
        publicPath: '/FD3-Pauls/keep/public/'

    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: [/node_modules/, /public/], // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]

            }
        ]
    },
    plugins: [
        extractCSS,

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'), //your template file
            filename: 'index.html',
        })


    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    devServer: {
        /* static: {
             directory: path.resolve(__dirname, './public')
         },*/ // here's the change
        publicPath: '/site/',
        historyApiFallback: true,
        port: 8080,
        hot: true


    }
}