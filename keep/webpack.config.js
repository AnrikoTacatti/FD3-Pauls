const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const extractCSS = new MiniCssExtractPlugin();




module.exports = {
    entry: "./src/index.js", // основной файл приложения
    output: {
        path: __dirname + "/public", // путь к каталогу выходных файлов
        filename: "bundle.js",  // название создаваемого файла 

    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]

            }
        ]
    },
    plugins: [
        extractCSS


    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}