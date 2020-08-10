const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".js"],
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "public/index.html"),
        //     template: path.resolve(__dirname, "src/index.html"),
        //     templateParameters: false,
        //     minify: {
        //         collapseWhitespace: true,
        //         removeComments: false,
        //         minifyJS: true,
        //     },
        // }),
    ],
};
