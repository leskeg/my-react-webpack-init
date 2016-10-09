var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: __dirname + '/src/client.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: isProd
                ? 'app.html'
                : 'index.html'
        })]
};
