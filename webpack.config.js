const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        static: path.join(__dirname, "public/"),
        port: 3000,
        devMiddleware: {
            publicPath: "http://localhost:3000/dist/"
        },
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}