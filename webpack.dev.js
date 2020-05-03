const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"development"`,
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src')],
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        port: 9009,
        watchContentBase: true,
        allowedHosts: ['reactcrud.pm'],
    },
});
