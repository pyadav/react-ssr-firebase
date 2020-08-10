const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./index.js",
    externals: [nodeExternals()],
    output: {
        publicPath: "/",
        filename: "server.js",
        path: path.resolve(__dirname, "public"),
        libraryTarget: "commonjs2",
    },
    node: {
        __filename: true,
        __dirname: true,
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
};
