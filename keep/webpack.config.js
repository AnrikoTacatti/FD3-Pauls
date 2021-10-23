const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new MiniCssExtractPlugin();




module.exports = {
    entry: "./src/index.js", // основной файл приложения
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
        // path: __dirname + "/public/build", // путь к каталогу выходных файлов
        //filename: "bundle.js",  // название создаваемого файла 

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
            template: __dirname + '/index.html', //your template file
            filename: 'index.html',

        })


    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}