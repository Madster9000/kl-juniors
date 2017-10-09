const path = require('path');

module.exports = {
    entry: './frontend/change-request.module.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".html"]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'wwwroot')
    }
};