const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src/App.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}