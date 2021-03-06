const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    node: {
        fs: 'empty',
      },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|less|scss|sass)$/,
                use: ['style-loader','css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 25000,
                  },
                },
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}