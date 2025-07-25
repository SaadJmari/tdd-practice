const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource"
            },
            {
                test: /\.jsx?$/,
                exclude: ['node_modules'],
                use: ['babel-loader'],
            },
        ]
    },
    resolve: {
        alias: {
            config$: './configs/app-config.js',
            react: './vendor/react-master',
        },
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            'bower_components',
            'shared',
            '/shared/vendor/modules',
        ],
    }
}