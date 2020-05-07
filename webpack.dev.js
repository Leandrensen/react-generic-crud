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
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src')],
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        port: 9069,
        watchContentBase: true,
        allowedHosts: ['reactcrud.pm'],
    },
});
